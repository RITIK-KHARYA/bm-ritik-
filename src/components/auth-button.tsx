"use client"

import { useRouter } from "next/navigation";

export const SignInButton = () => {
  const router = useRouter()
  return (
    <button className="flex items-center gap-2   bg-white p-3 text-sm font-medium text-black shadow-sm group" onClick={() => router.push("/auth")}>
      <span className="text-md font-bold font-mono ">Sign in</span>
    </button>
  );
};

export const SignUpButton = () => {
    const router = useRouter();
  return (
    <button
      className="flex items-center gap-2   bg-neutral-900/80 border border-neutral-800 p-3 text-sm font-medium text-white shadow-sm"
      onClick={() => router.push("/auth")}
    >
      <span className="text-md font-bold font-mono ">Get Started</span>
    </button>
  );
}