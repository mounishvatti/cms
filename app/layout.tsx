import type { Metadata } from "next";
import Loading from "./loading";
import { ToastContainer } from "react-toastify";
import { Geist, Geist_Mono } from "next/font/google";
import { UserProvider } from "@/store/userContext";
import "./globals.css";
import { set } from "zod";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "coursera",
  description: "cms",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
      >
        <UserProvider>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          limit={5}
        />
        {children}
        </UserProvider>
      </body>
    </html>
  );
}
