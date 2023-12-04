"use client";

import { useState } from "react";
import Link from "next/link";
import {
  signInWithEmailPassword,
  signUpWithGoogle,
} from "@/helpers/userFunctions";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const router = useRouter();

  const handleGoogleSignUp = async () => {
    try {
      await signUpWithGoogle();

      router.push("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignIn = async () => {
    try {
      await signInWithEmailPassword(email, password);
      router.push("/dashboard");
    } catch (error: any) {
      if (error.message === "auth/invalid-credential") {
        setError("Incorrect login credentials");
      } else {
        setError("Troubles logging in, please try again");
      }
    }
  };

  return (
    <main className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-3xl">
        <div className="rounded bg-white shadow-md flex flex-row">
          <Image
            src="/img.png"
            width={500}
            height={400}
            alt="img"
            className="rounded"
          />
          <form
            className=" px-8 pt-6 pb-8 mb-4"
            onSubmit={(e) => e.preventDefault()}
          >
            {error && <div className="mb-4 text-red-500">{error}</div>}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between mb-4">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleSignIn}
              >
                Sign In
              </button>

              <Link
                href="/register"
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              >
                Register
              </Link>
            </div>
            <div className="flex flex-col space-y-4">
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleGoogleSignUp}
              >
                Sign in with Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
