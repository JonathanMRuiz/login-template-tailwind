import React from 'react'
import { FaFacebookF, FaGoogle, FaLinkedinIn,FaLock, FaRegEnvelope } from "react-icons/fa";

const login = () => {
    return (
        <div className="w-3/5 p-5">
            <div className="text-left font-bold">
                <span className="text-blue-500">Brand</span>Name
            </div>
            <div className="py-10">
                <h2 className="text-3xl font-bold text-blue-500 mb-2">Sign in to Account</h2>
                <div className="border-2 w-10 border-blue-500 inline-block mb-2"></div>
                <div className="flex justify-center my-2">
                    <a href="#" className="border-gray-200 border-2 rounded-full p-3 mx-1 hover:bg-blue-500 hover:text-white">
                        <FaFacebookF className="text-sm " />
                    </a>
                    <a href="#" className="border-gray-200 border-2 rounded-full p-3 mx-1 hover:bg-blue-500 hover:text-white">
                        <FaGoogle className="text-sm"/>
                    </a>
                    <a href="#" className="border-gray-200 border-2 rounded-full p-3 mx-1 hover:bg-blue-500 hover:text-white">
                        <FaLinkedinIn className="text-sm"/>
                    </a>
                </div>
                <p className="text-gray-400 my-3">Or use your email account</p>
                <div className="flex flex-col items-center">
                    <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                        <FaRegEnvelope className="text-gray-400 mr-2"/>
                        <input type="email" name="email" placeholder="Email" className="bg-gray-100 outline-none text-sm flex-1" />
                    </div>
                    <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                        <FaLock className="text-gray-400 mr-2"/>
                        <input type="password" name="password" placeholder="Password" className="bg-gray-100 outline-none text-sm flex-1" />
                    </div>
                    <div className="flex w-64 mb-5 flex justify-between">
                        <label className="flex items-center text-xs"><input type="checkbox" name="remember" className="mr-1"/>Remember me?</label>
                        <a className="text-xs">Forgot Password?</a>
                        
                    </div>
                    <a href="#" className="border-2 border-blue-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-500 hover:text-white"> Sign in</a>
                </div>
            </div>
        </div>
    )
}

export default login