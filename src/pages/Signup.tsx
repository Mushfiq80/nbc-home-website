import React, { useState } from 'react';
import { Eye, EyeOff, User, Search, MessageCircle } from 'lucide-react';

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
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
    console.log('Form submitted:', formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-4xl flex overflow-hidden rounded-lg shadow-lg bg-white">
        {/* Left Side - Signup Form */}
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
          
          <h1 className="text-2xl font-bold text-center mb-6">Sign up</h1>
          
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
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
              
              <div className="text-sm text-gray-600">
                You are agreeing to the{" "}
                <a href="#" className="text-green-600 hover:underline">Terms of Services</a>{" "}
                and{" "}
                <a href="#" className="text-green-600 hover:underline">Privacy Policy</a>
              </div>
              
              <button
                type="submit"
                className="w-full p-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
              >
                Get started
              </button>
            </div>
          </form>
          
          <div className="mt-4 text-center text-sm">
            <p>
              Already a member?{" "}
              <a href="/signup" className="text-green-600 hover:underline">Login</a>
            </p>
            <p className="mt-2">
              Sign up as Publisher?{" "}
              <a href="/company" className="text-green-600 hover:underline">Publisher Registration</a>
            </p>
          </div>
        </div>
        
        {/* Right Side - How it works */}
        <div className="w-1/2 bg-green-500 p-8 text-white flex flex-col">
          <h2 className="text-2xl font-bold mb-12 text-center">How it works?</h2>
          
          <div className="flex-grow flex flex-col justify-center space-y-8">
            <div className="flex items-center space-x-4">
              <div className="bg-green-400 p-2 rounded-full">
                <User size={24} color="white" />
              </div>
              <span className="text-lg">Add to my list</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="bg-green-400 p-2 rounded-full">
                <Search size={24} color="white" />
              </div>
              <span className="text-lg">Search Books</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="bg-green-400 p-2 rounded-full">
                <MessageCircle size={24} color="white" />
              </div>
              <span className="text-lg">Add Reviews</span>
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