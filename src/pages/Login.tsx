import React, { useState } from 'react';
import { Eye, EyeOff, User, Lock } from 'lucide-react';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempted:', formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-4xl flex overflow-hidden rounded-lg shadow-lg bg-white">
        {/* Left Side - Login Form */}
        <div className="w-1/2 p-8">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="rounded-full border-2 border-green-500 p-2">
                <div className="w-14 h-14 flex items-center justify-center">
                  <div className="text-green-500">
                    <svg viewBox="0 0 24 24" width="30" height="30" stroke="currentColor" fill="none">
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 w-full flex justify-center">
                <div className="bg-green-500 h-1 w-12"></div>
              </div>
            </div>
          </div>
          
          <div className="text-center mb-2">
            <h2 className="text-xl font-bold">জাতীয় গ্রন্থকোষ</h2>
            <p className="text-sm text-gray-600">সাংস্কৃতিক বিষয়ক মন্ত্রনালয়</p>
          </div>
          
          <h1 className="text-2xl font-bold text-center mb-8">Login</h1>
          
          <form onSubmit={handleSubmit}>
            <div className="space-y-5">
              <div className="relative">
                <div className="absolute left-3 top-3 text-gray-400">
                  <User size={20} />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full p-3 pl-10 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="relative">
                <div className="absolute left-3 top-3 text-gray-400">
                  <Lock size={20} />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className="w-full p-3 pl-10 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
                <button 
                  type="button"
                  className="absolute right-3 top-3 text-gray-400"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              
              <div className="flex justify-between items-center text-sm">
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="remember" 
                    className="h-4 w-4 text-green-500 focus:ring-green-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember" className="ml-2 text-gray-600">Remember me</label>
                </div>
                <a href="#" className="text-green-600 hover:underline">Forgot password?</a>
              </div>
              
              <button
                type="submit"
                className="w-full p-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
              >
                Login
              </button>
            </div>
          </form>
          
          <div className="mt-6 text-center text-sm">
            <p>
              Don't have an account?{" "}
              <a href="/signup" className="text-green-600 hover:underline">Sign up</a>
            </p>
            <p className="mt-2">
              Login as Publisher?{" "}
              <a href="/company" className="text-green-600 hover:underline">Publisher Login</a>
            </p>
          </div>
        </div>
        
        {/* Right Side - Welcome Section */}
        <div className="w-1/2 bg-green-500 p-8 text-white flex flex-col">
          <div className="flex-grow flex flex-col items-center justify-center text-center">
            <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
            <p className="text-lg mb-8">
              Access your personalized book collections, reviews, and recommendations
            </p>
            
            <div className="bg-white/10 p-6 rounded-lg w-full max-w-sm">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span>Access your saved book lists</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span>Continue your reading journey</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span>Share your reviews with community</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-auto flex justify-center">
            <div className="w-12 h-1 bg-white rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}