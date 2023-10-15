"use client";

import Link from "next/link";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Signup = () => {
  const [error, setError] = useState("");
  const router = useRouter();

  const isValidEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    if (!isValidEmail(email)) {
      setError("Email is invalid");
      return;
    }

    if (!password || password.length < 8) {
      setError("Password is invalid");
      return;
    }

    try {
      let res = await axios.post("/api/register", {
        email,
        password,
      });

      if (res.status === 400) {
        setError("This email is already registered");
      }
      if (res.status === 200) {
        setError("");
        router.push("/login");
      }
    } catch (error) {
      setError("Error, try again");
      console.log(error);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-[#212121] p-8 rounded shadow-md w-96">
        <h1 className="text-4xl text-center font-semibold mb-8">Register</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="email"
            required
            className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline"
          />
          <input
            type="text"
            placeholder="password"
            required
            className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 rounded hover:bg-blue-300 py-2 "
          >
            submit
          </button>
          <p className="text-red-600 text-[16px] mb-4">{error && error}</p>
        </form>
        <div className="text-center text-gray-500 mt-4">-OR-</div>
        <Link
          className="text-blue-400 block text-center hover:underline mt-2"
          href="/login"
        >
          Login with existing account
        </Link>
      </div>
    </div>
  );
};

export default Signup;
