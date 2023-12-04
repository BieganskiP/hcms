"use client";

import {
  signUpWithGoogle,
  signUpWithEmailPassword,
} from "@/helpers/userFunctions";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Register() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const router = useRouter();

  const handleGoogleSignUp = async () => {
    try {
      await signUpWithGoogle();

      router.push("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  const handleEmailSignUp = async (event: any) => {
    event.preventDefault();
    try {
      await signUpWithEmailPassword(email, password);

      router.push("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col space-y-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleEmailSignUp}
            >
              Register
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleGoogleSignUp}
            >
              Sign Up with Google
            </button>
          </div>
          <div className="flex flex-col space-y-4">
            <Link
              href="/"
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            >
              Sign in
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}
