import React from 'react';

const Signup = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white text-black p-8 rounded shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="username" className="block mb-1 text-sm font-medium">Username</label>
                        <input type="text" id="username" name="username" required className="w-full px-3 py-2 border rounded focus:outline-none focus:ring" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-1 text-sm font-medium">Email</label>
                        <input type="email" id="email" name="email" required className="w-full px-3 py-2 border rounded focus:outline-none focus:ring" />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-1 text-sm font-medium">Password</label>
                        <input type="password" id="password" name="password" required className="w-full px-3 py-2 border rounded focus:outline-none focus:ring" />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default Signup;