"use client";

import { useState } from "react";

export default function AkunPage() {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 w-96">
                <div className="flex justify-center mb-6">
                    <button
                        onClick={() => setIsLogin(true)}
                        className={`px-4 py-2 text-sm font-semibold ${isLogin ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"
                            }`}
                    >
                        Login
                    </button>
                    <button
                        onClick={() => setIsLogin(false)}
                        className={`px-4 py-2 text-sm font-semibold ${!isLogin ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"
                            }`}
                    >
                        Register
                    </button>
                </div>

                {isLogin ? <LoginForm /> : <RegisterForm />}
            </div>
        </div>
    );
}

function LoginForm() {
    return (
        <form className="flex flex-col gap-4">
            <input type="email" placeholder="Email" className="border p-2 rounded" />
            <input type="password" placeholder="Password" className="border p-2 rounded" />
            <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                Login
            </button>
        </form>
    );
}

function RegisterForm() {
    return (
        <form className="flex flex-col gap-4">
            <input type="text" placeholder="Nama Lengkap" className="border p-2 rounded" />
            <input type="email" placeholder="Email" className="border p-2 rounded" />
            <input type="password" placeholder="Password" className="border p-2 rounded" />
            <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                Register
            </button>
        </form>
    );
}
