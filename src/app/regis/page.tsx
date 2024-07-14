import React from "react";

const RegisterPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div>
        <div className="flex rounded-lg shadow-lg overflow-hidden">
          <div className="bg-white px-10 py-12">
            <h1 className="text-2xl text-black text-center font-bold mb-10 px-4">Register Here</h1>
            <div className="mb-4">
              <input className="w-full px-3 py-2 mb-2 text-black border border-gray-300 rounded-2xl" type="text" placeholder="Username" />
            </div>
            <div className="mb-4">
              <input className="w-full px-3 py-2 border text-black border-gray-300 rounded-2xl" type="password" placeholder="Password" />
            </div>
            <div className="mb-6">
              <input className="w-full px-3 py-2 border text-black border-gray-300 rounded-2xl" type="password" placeholder="Confirm Password" />
            </div>
            <button className="w-full py-2 mb-4 mt-32 bg-green-800 text-white font-semibold rounded hover:bg-green-900">Register Now</button>
          </div>
          <div className="bg-green-600 text-white px-10 py-12 rounded-r-lg relative">
            <img
              src="/bglogin.png"
              alt="background"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative z-10 flex flex-col items-center justify-center">
              <img
                src="/logo.png"
                alt="Logo ITRUS"
                className="max-w-full h-72 mt-5"
              />
              <h2 className="text-base font-bold mb-6">
                If you already have an account, <br />
                <span className="block text-center">log in and continue your journey.</span>
              </h2>
              <button className="w-full py-2 mt-2 bg-white text-green-600 font-semibold rounded hover:bg-gray-200">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
