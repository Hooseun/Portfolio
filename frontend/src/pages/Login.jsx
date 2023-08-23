import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import API_LINK from '../api';
import Background2 from '../assets/bg2.jpg';
import Background1 from '../assets/bg1.jpg';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

function Login() {
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const [admin, setAdmin] = useState({ username: '', password: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState(false);

  const handleLogin = async () => {
    try {
      const res = await fetch(`${API_LINK}/api/admin`);
      const json = await res.json();

      if (res.ok) {
        if (admin.username === json.username && admin.password === json.password) {
          setIsLoggedIn(true);
          setLoginError(false);
          // Redirect to the admin page using useNavigate
          navigate('/admin'); // Change the URL as needed
        } else {
          setLoginError(true);
        }
      }
    } catch (error) {
      console.error('Error fetching admin account:', error);
    }
  };

  return (
    <div className="h-screen flex">
      <Navbar />
      <div className="flex-1 flex flex-col justify-center items-center relative">
        <div className="absolute inset-0" style={{ backgroundImage: `url(${Background2})` }}></div>
        <div className="absolute inset-0 backdrop-blur-md"></div>
        <div className="bg-white p-8 rounded-3xl shadow-md h-[25rem] w-[30rem] relative">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-bold mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full px-4 py-2 border border-gray-400 rounded"
              required
              onChange={(e) => setAdmin({ ...admin, username: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 border border-gray-400 rounded"
              required
              onChange={(e) => setAdmin({ ...admin, password: e.target.value })}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
            onClick={handleLogin}
          >
            Login
          </button>
          {loginError && <p className="mt-2 text-red-600">Incorrect username or password.</p>}
          {isLoggedIn && <p className="mt-2 text-green-600">Logged in successfully!</p>}
        </div>
      </div>
      <div className="flex-1 bg-cover bg-center" style={{ backgroundImage: `url(${Background1})` }}></div>
    </div>
  );
}

export default Login;
