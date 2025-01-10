"use client";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { HiOutlineHome } from "react-icons/hi";
import { RiAdminFill } from "react-icons/ri";
import { IoBookOutline } from "react-icons/io5";
import { FcAbout } from "react-icons/fc";
import { useUser } from "@/store/userContext";
import { ModeToggle } from "@/components/mode-toogle";
export default function Navbar() {
  const { username, isLoggedIn, role, clearUserData } = useUser();
  const router = useRouter();

  const handleLogout = () => {
    clearUserData();
    toast.success("You have been logged out successfully!");
  };

  const handleSignIn = () => {
    router.push("/user/login");
  };

  const handleSignUp = () => {
    router.push("/user/signup");
  };

  return (
    <>
      <Head>
        <title>CMS</title>
        <meta name="description" content="Content management system" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="p-4 mb-6 flex items-center justify-between">
        <ul className="flex gap-4">
          <li>
            <Link href="/" className="underline">
              <span className="inline-block ml-3 text-3xl font-bold text-blue-500">
                coursera
              </span>
            </Link>
          </li>
        </ul>

        <div className="text-right text-sm flex items-center gap-4">
        <ModeToggle />
          {isLoggedIn ? (
            <div className="text-slate-200 flex items-center gap-4">
              {role === "ADMIN" && (
                <Link
                  href="/admin/dashboard"
                  className="flex items-center gap-1 text-md text-orange-300 font-normal border border-orange-300/30 rounded-md px-2 py-1"
                >
                  Admin
                  <RiAdminFill className="text-orange-300 text-md" />
                </Link>
              )}
              <Link
                href="/"
                className="flex items-center gap-1 text-md text-blue-300 font-normal px-2 py-1 justify-center rounded-md text-white/90 border border-blue-900"
              >
                Home
                <HiOutlineHome className="text-blue-200 text-md" />
              </Link>
              <Link
                href="/about-us"
                className="flex items-center gap-1 text-md text-violet-100 font-normal px-2 py-1 justify-center rounded-md text-white/90 border border-violet-900"
              >
                About us
                <FcAbout className="text-blue-200 text-md" />
              </Link>
              <Link
                href="#"
                className="flex items-center gap-1 text-md text-green-100 font-normal px-2 py-1 justify-center rounded-md text-white/90 border border-green-900"
              >
                View Courses
                <IoBookOutline className="text-green-200 text-md" />
              </Link>
              <span className="border border-white/20 rounded-lg font-light px-2 py-1 text-sm">
                Hello, {username}
              </span>
              <button
                className="bg-red-950 border border-red-800 hover:bg-red-800/30 text-red-500 text-md font-sans py-1 px-3 rounded-lg"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex gap-4">
              <button
                className="dark:bg-yellow-950 hover:bg-yellow-800/30 dark:text-yellow-100 text-yellow-800 border border-yellow-800 font-medium font-sans py-2 px-4 rounded-lg shadow-md"
// Suggested code may be subject to a license. Learn more: ~LicenseLog:911935202.
                onClick={() => router.push("/about-us")}
              >
                About
              </button>
              <button
                className="dark:bg-blue-950 hover:bg-blue-800/30 dark:text-blue-100 text-blue-800 border border-blue-800 font-medium font-sans py-2 px-4 rounded-lg shadow-md"
                onClick={handleSignIn}
              >
                Login
              </button>
              <button
                className="dark:bg-green-950 hover:bg-green-800/30 dark:text-green-100 text-green-700 border dark:border-green-800 border-green-700 border-black font-medium font-sans py-2 px-4 rounded-lg shadow-md"
                onClick={handleSignUp}
              >
                Sign up for free
              </button>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}