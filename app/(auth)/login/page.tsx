"use client";

import { useActionState, useState } from "react";
import Link from "next/link";
import { loginAction, AuthState } from "@/actions/auth";
import { redirect } from "next/navigation";

export default function LoginPage() {
  const [checked, setChecked] = useState(false);
  console.log("Checked state:", checked);
  const [state, formAction, isPending] = useActionState<AuthState, FormData>(
    loginAction,
    {}
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col min-h-screen justify-center items-center md:flex-row gap-5 ">
      <div className="flex flex-col gap-10 border-2 border-gray-300 rounded-lg p-10 shadow-gray-500">
        <div>
          <p className="text-xl font-semibold text-gray-800">TalentFlow</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-black">Welcome back!</h3>
          <p className="text-sm">Sign in to continue</p>
        </div>
        <div>
          <form>
            <div>
              <label htmlFor="email" className="text-lg font-semibold">Email Address</label>
                <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="rcr@domain.com"
                        disabled={isPending}
                        className="border border-gray-500 rounded-lg p-2 w-full"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
            </div>
            <div>
              <label htmlFor="password" className="text-lg font-semibold">Password</label>
              <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        placeholder="••••••••"
                        disabled={isPending}
                        className="border border-gray-500 rounded-lg p-2 w-full"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
            </div>
            <div className="flex justify-between items-center mt-2 font-sewmibold text-xs">
              <p className="flex items-center justify-center"><span className="text-sm"><input checked={checked} onChange={(e) => setChecked(e.target.checked)} type="checkbox" className="mr-2"/></span><span>Remember me</span></p>
              <p className="text-blue-500 hover:cursor-pointer hover:text-blue-600 hover:underline">Forgot Password?</p>
            </div>
            <div>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg mt-5 w-full" type="submit">
                Sign in
              </button>
            </div>
            <div className="flex justify-center items-center mt-5">
              <p>Don't have an account? <span className="text-blue-500 hover:cursor-pointer hover:text-blue-600 hover:underline" onClick={() => redirect("/register")}>Sign up</span></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}