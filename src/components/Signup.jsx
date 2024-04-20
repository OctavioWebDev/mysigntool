// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

// function Signup() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   // Add more fields as necessary
//   const navigate = useNavigate(); // Initialize useNavigate for later redirection

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/users/register`, { // Adjust the endpoint as necessary
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         // Optionally store the token if the backend automatically logs the user in after signup
//         // localStorage.setItem('token', data.token); // Uncomment if you want to auto-login
//         alert('Signup successful. Please log in.'); // Notify user or automatically redirect to login
//         navigate('/login'); // Redirect to login page
//       } else {
//         // Handle errors, such as showing an error message
//         alert(data.message || 'An error occurred during signup. Please try again.');
//       }
//     } catch (error) {
//       console.error('Signup error:', error);
//       alert('An error occurred. Please try again later.');
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Email"
//           required
//         />
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Password"
//           required
//         />
//         {/* Add more fields as necessary */}
//         <button type="submit">Sign Up</button>
//       </form>
//     </div>
//   );
// }

// export default Signup;

