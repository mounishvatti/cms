"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <p>Welcome to CMS</p>
      </main>
      <footer className="position-fixed bottom-0 w-full">
        <Footer />
      </footer>
    </div>
  );
}
