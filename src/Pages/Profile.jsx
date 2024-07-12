import React, { useContext, useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import Avatar from "../components/ui/Avatar";
import AvatarFallback from "../components/ui/AvatarFallback";
import AvatarImage from "../components/ui/AvatarImage";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import CardContent from "../components/ui/CardContent";
import CardHeader from "../components/ui/CardHeader";
import Label from "../components/ui/Label";
import Input from "../components/ui/Input";
import Textarea from "../components/ui/Textarea";
import Header from "../components/Header";
import MainFooter from "../components/MainFooter";

function Profile() {
  const { isLoggedIn, logout, setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const fetchUserData = useCallback(async () => {
    try {
      const token = localStorage.getItem('token');
      const refreshedToken = await refreshToken(token); // Implement refreshToken function

      const backendUrl = process.env.REACT_APP_API_URL;
      const response = await fetch(`${backendUrl}/api/profiles`, {
        headers: {
          'Authorization': `Bearer ${refreshedToken}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error: ${response.status} ${errorText}`);
      }

      const data = await response.json();
      setUserData(data);
      setIsLoggedIn(true);
    } catch (error) {
      console.error('Error fetching user data:', error);
      setError(error.message);
      setIsLoggedIn(false);
    }
  }, [setIsLoggedIn]);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          setIsLoggedIn(false);
          navigate('/login');
        } else {
          // Check if the token is still valid
          const isTokenValid = await checkTokenValidity(token);
          if (isTokenValid) {
            fetchUserData();
          } else {
            setIsLoggedIn(false);
            navigate('/login');
          }
        }
      } catch (error) {
        console.error('Error checking login status:', error);
        setError(error.message);
      }
    };

    checkLoginStatus();
  }, [navigate, fetchUserData, setIsLoggedIn]);

  const handleLogout = () => {
    logout();
    setIsLoggedIn(false);
    navigate('/login');
  };

  if (!isLoggedIn) {
    return null;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mx-auto px-4 md:px-6 py-8">
      <Header />
      <div className="grid md:grid-cols-[280px_1fr] gap-8 mt-10 mb-10">
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 flex flex-col items-center">
          <Avatar className="w-24 h-24 mb-4">
            <AvatarImage src={userData.profilePicture || "/placeholder-user.jpg"} alt={userData.username} />
            <AvatarFallback>{userData.username[0].toUpperCase()}</AvatarFallback>
          </Avatar>
          <h2 className="text-xl font-semibold mb-2">{userData.username}</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-4">{userData.email}</p>
          <Button variant="outline" size="sm">
            Edit Profile
          </Button>
          <Button variant="outline" size="sm" onClick={handleLogout} className="mt-4">
            Logout
          </Button>
        </div>
        <div className="grid gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Recent Orders</h3>
            <div className="grid gap-4">
              {userData.currentOrders.map(order => (
                <Card key={order.orderId}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="font-medium">{order.orderId}</div>
                      <div className="text-gray-500 dark:text-gray-400">{order.status}</div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-[80px_1fr_80px] items-center gap-4">
                      <img src="/placeholder.svg" width={80} height={80} alt="Product" className="rounded-md" />
                      <div>
                        <h4 className="font-medium">Product Name</h4>
                        <p className="text-gray-500 dark:text-gray-400">Product Details</p>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">$Price</div>
                        <div className="text-gray-500 dark:text-gray-400">{order.status}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
            <Card>
              <CardContent>
                <form className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" defaultValue={userData.username} />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue={userData.email} />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="address">Address</Label>
                    <Textarea id="address" rows={3} defaultValue="123 Main St, Anytown USA" />
                  </div>
                  <Button type="submit" className="justify-self-end">
                    Save Changes
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <MainFooter />
    </div>
  );
}

export default Profile;