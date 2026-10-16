"use client";

import { useActionState, useState } from "react";
import Link from "next/link";
import { registerAction, type AuthState } from "../../../actions/auth";


export default function RegisterPage() {

    const [role, setRole] = useState<"job-seeker" | "employer">("job-seeker");
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    console.log("Selected role:", role);

    const register = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", fullName);
        formData.append("email", email);
        formData.append("password", password);
        formData.append("role", role);

        console.log("Form Data:", {
            name: fullName,
            email: email,
            password: password,
            role: role,
        });

    }

    const [state, formAction, isPending] = useActionState<AuthState, FormData>(
    registerAction,
    {}
  );

  return (
    // <div className="auth-container">
    //   <div className="auth-card">
    //     <h2>Create an Account</h2>
    //     <p>Sign up to start applying for open positions.</p>

    //     {state?.error && (
    //       <div className="error-banner" role="alert">
    //         {state.error}
    //       </div>
    //     )}

    //     <form action={formAction} className="auth-form">
    //       <div className="form-group">
    //         <label htmlFor="name">Full Name</label>
    //         <input
    //           id="name"
    //           name="name"
    //           type="text"
    //           required
    //           placeholder="e.g. Alex Smith"
    //           disabled={isPending}
    //         />
    //         {state?.fieldErrors?.name && (
    //           <span className="field-error">{state.fieldErrors.name}</span>
    //         )}
    //       </div>

    //       <div className="form-group">
    //         <label htmlFor="email">Email Address</label>
    //         <input
    //           id="email"
    //           name="email"
    //           type="email"
    //           required
    //           placeholder="alex@example.com"
    //           disabled={isPending}
    //         />
    //         {state?.fieldErrors?.email && (
    //           <span className="field-error">{state.fieldErrors.email}</span>
    //         )}
    //       </div>

    //       <div className="form-group">
    //         <label htmlFor="password">Password</label>
    //         <input
    //           id="password"
    //           name="password"
    //           type="password"
    //           required
    //           placeholder="At least 6 characters"
    //           disabled={isPending}
    //         />
    //         {state?.fieldErrors?.password && (
    //           <span className="field-error">{state.fieldErrors.password}</span>
    //         )}
    //       </div>

    //       <button type="submit" disabled={isPending} className="submit-btn">
    //         {isPending ? "Creating account..." : "Sign Up"}
    //       </button>
    //     </form>

    //     <p className="auth-footer">
    //       Already have an account? <Link href="/login">Log in</Link>
    //     </p>
    //   </div>
    // </div>
    <div className="flex min-h-screen items-center justify-center gap-10 ">
        <div className = "flex  flex-col  md:flex-row gap-10 border-2 border-gray-300 rounded-lg p-10 shadow-gray-500">
        <div className="flex flex-col gap-10">
            <div>
                <p className="text-xl font-semibold text-gray-800">TalentFlow</p>
            </div>
            <div>
                <h3 className="text-2xl font-bold text-black">Create an Account</h3>
                <p>Join as a job seeker or employer</p>
            </div> 
            <div className="flex flex-col gap-5">
                <p className="font-semibold">Select your role</p>
                <div className="flex gap-5">
                    <div onClick={() => setRole("job-seeker")} className={` hover:bg-blue-300 flex flex-col gap-2 items-center justify-center border border-gray-300 rounded-lg p-5 cursor-pointer ${role === "job-seeker" ? "bg-blue-300" : ""}`}>
                        <p>Job Seeker</p>
                        <p>Find jobs, apply to positions</p>
                    </div>
                    <div onClick={() => setRole("employer")} className={` hover:bg-blue-300 flex flex-col gap-2 items-center justify-center border border-gray-300 rounded-lg p-5 cursor-pointer ${role === "employer" ? "bg-blue-300" : ""}`}>
                        <p>Employer</p>
                        <p>Post jobs, review applications</p>
                    </div>
                </div>
                
            </div>
        </div>
        <div >
            <form action="/register" method="post" onSubmit={register} className="flex flex-col gap-5">
                <div className="form-group">
                    <label htmlFor="name" className="text-lg font-semibold">Full Name</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Alex Johnson"
                        disabled={isPending}
                        className="border border-gray-500 rounded-lg p-2 w-full"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />
                    {state?.fieldErrors?.name && (
                        <span className="field-error">{state.fieldErrors.name}</span>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="email" className="text-lg font-semibold">Email Address</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="alex@example.com"
                        disabled={isPending}
                        className="border border-gray-500 rounded-lg p-2 w-full"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {state?.fieldErrors?.email && (
                        <span className="field-error">{state.fieldErrors.email}</span>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="password" className="text-lg font-semibold">Password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        placeholder="At least 6 characters"
                        disabled={isPending}
                        className="border border-gray-500 rounded-lg p-2 w-full"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {state?.fieldErrors?.password && (
                        <span className="field-error">{state.fieldErrors.password}</span>
                    )}
                </div>

                <button type="submit" disabled={isPending} className="hover:cursor-pointer  hover:bg-blue-600 w-full text-center bg-blue-500 p-2 mt-2 rounded-xl text-white font-semiblod">
                    {isPending ? "Creating account..." : "Sign Up"}
                </button>
            </form>

            <p className="text-sm text-gray-600 mt-4">
                Already have an account? <Link href="/login" className="text-blue-500  hover:underline">
                    Log in
                </Link>
            </p>
        </div>
        </div>
    </div>
  );
}