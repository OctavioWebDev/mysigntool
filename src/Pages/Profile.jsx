import  Avatar from "../components/ui/Avatar"
import AvatarFallback from "../components/ui/AvatarFallback"
import AvatarImage from "../components/ui/AvatarImage"
import  Button  from "../components/ui/Button"
import  Card  from "../components/ui/Card"
import CardContent from "../components/ui/CardContent"
import CardHeader from "../components/ui/CardHeader"
import  Label  from "../components/ui/Label"
import  Input  from "../components/ui/Input"
import  Textarea  from "../components/ui/Textarea"
import Header from "../components/Header"
import MainFooter from "../components/MainFooter"

 function Profile() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <Header/>
      <div className="grid md:grid-cols-[280px_1fr] gap-8">
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 flex flex-col items-center">
          <Avatar className="w-24 h-24 mb-4">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <h2 className="text-xl font-semibold mb-2">John Doe</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-4">john@example.com</p>
          <Button variant="outline" size="sm">
            Edit Profile
          </Button>
        </div>
        <div className="grid gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Recent Orders</h3>
            <div className="grid gap-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="font-medium">#12345</div>
                    <div className="text-gray-500 dark:text-gray-400">June 15, 2023</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-[80px_1fr_80px] items-center gap-4">
                    <img src="/placeholder.svg" width={80} height={80} alt="Product" className="rounded-md" />
                    <div>
                      <h4 className="font-medium">Acme Wireless Headphones</h4>
                      <p className="text-gray-500 dark:text-gray-400">Black, Large</p>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">$99.99</div>
                      <div className="text-gray-500 dark:text-gray-400">Delivered</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="font-medium">#12344</div>
                    <div className="text-gray-500 dark:text-gray-400">May 20, 2023</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-[80px_1fr_80px] items-center gap-4">
                    <img src="/placeholder.svg" width={80} height={80} alt="Product" className="rounded-md" />
                    <div>
                      <h4 className="font-medium">Acme Fitness Tracker</h4>
                      <p className="text-gray-500 dark:text-gray-400">Black, Small</p>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">$49.99</div>
                      <div className="text-gray-500 dark:text-gray-400">Delivered</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
            <Card>
              <CardContent>
                <form className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" defaultValue="John Doe" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="john@example.com" />
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
            <MainFooter/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile

