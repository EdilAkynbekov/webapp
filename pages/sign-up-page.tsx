// pages/signin.js
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function SignUp() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white">
      <Head>
        <title>Responsive Sign Up Page</title>
      </Head>

      {/* Yellow Sidebar */}
      <div className="bg-yellow-400 lg:w-1/3 flex flex-col items-center justify-center p-8 text-white">
        {/* Logo and other elements can be added here */}
        <h2 className="text-2xl font-bold mb-2">
          Are you a Healthcare Professional?
        </h2>
        <button className="bg-white text-yellow-400 rounded-lg px-10 py-2 font-semibold mt-4">
          Sign Up here
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col p-8 justify-center items-center lg:items-start">
        {/* Language Selector and Logo at the top */}
        <div className="self-end flex justify-between items-center w-full mb-12">
          <Image src="/logo 1.svg" alt="Logo" width={100} height={50} />
          <select className="border border-gray-300 rounded-full py-1 px-4 bg-white text-sm">
            <option>English (US)</option>
            {/* Additional language options */}
          </select>
        </div>

        {/* Welcome Back Title */}
        <h1 className="text-4xl font-bold mb-8">Create Account</h1>

        {/* Social Sign In */}
        <div className="flex gap-4 mb-8">
          <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-6 py-2 font-semibold">
            Sign in with Google
          </button>
          <button className="bg-blue-700 hover:bg-blue-800 text-white rounded-lg px-6 py-2 font-semibold">
            Sign in with Facebook
          </button>
        </div>

        {/* Or Divider */}
        <div className="text-gray-500 mb-8">- OR -</div>

        {/* Sign In Form */}
        <div className="w-full max-w-md">
          <div className="mb-6">
            <label htmlFor="fname" className="sr-only">
              First Name
            </label>
            <input
              id="fname"
              type="text"
              className="form-input w-full rounded-lg border border-gray-300 py-3 px-4 mb-3"
              placeholder="First Name"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="lname" className="sr-only">
              Last Name
            </label>
            <input
              id="lname"
              type="text"
              className="form-input w-full rounded-lg border border-gray-300 py-3 px-4 mb-3"
              placeholder="Last Name"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="sr-only">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              className="form-input w-full rounded-lg border border-gray-300 py-3 px-4 mb-3"
              placeholder="Email Address"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="form-input w-full rounded-lg border border-gray-300 py-3 px-4"
              placeholder="Password"
            />
          </div>
          <button className="w-full bg-black hover:bg-gray-900 text-white rounded-lg py-3 px-4 font-semibold">
            Sign Up
          </button>
        </div>

        {/* Bottom Links */}
        <div className="flex flex-col lg:flex-row justify-between items-center w-full mt-8">
          <Link
            href="/signin2"
            className="text-blue-600 hover:text-blue-700 hover:underline text-sm"
          >
            Already have an account? Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
