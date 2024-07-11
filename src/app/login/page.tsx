import React from "react";

const LoginPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div>
        <div className="flex rounded-lg shadow-lg overflow-hidden">
          <div className="bg-white px-10 py-12">
            <h1 className="text-2xl font-bold mb-6">Login Here</h1>
            <div className="mb-4">
              <input className="w-full px-3 py-2 border border-gray-300 rounded" type="email" placeholder="Email" />
            </div>
            <div className="mb-6">
              <input className="w-full px-3 py-2 border border-gray-300 rounded" type="password" placeholder="Password" />
            </div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <input id="remember" type="checkbox" className="form-checkbox" />
                <label htmlFor="remember" className="ml-2 text-gray-700 mr-3">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
                Forgot your password?
              </a>
            </div>
            <button className="w-full py-2 bg-green-600 text-white font-semibold rounded hover:bg-green-700">Login</button>
          </div>
          <div className="bg-green-600 text-white px-10 py-12 rounded-r-lg relative">
            {/* <img
              src="/image/bg1.jpeg"
              alt="background"
              className="absolute inset-0 w-full h-full object-cover"
            /> */}
            <div className="relative z-10 flex flex-col items-center justify-center">
              {/* <img
                src="/image/logo.png"
                alt="Logo ITRUS"
                className="max-w-full h-auto mb-6"
              /> */}

              <h2 className="text-base font-bold mb-6">
                If you dont have an account yet, join us and <br />
                <span className="block text-center">start your journey.</span>
              </h2>
              <button className="w-full py-2 bg-white text-green-600 font-semibold rounded hover:bg-gray-200">Register Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
