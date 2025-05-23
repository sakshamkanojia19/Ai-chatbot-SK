import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="mr-4 flex items-center md:hidden">
          <input type="checkbox" id="menu-toggle" className="hidden" />
          <label htmlFor="menu-toggle" className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-10 w-10 px-0 cursor-pointer">
            <Menu className="h-6 w-6" />
          </label>
        </div>
        
        <div className="hidden md:flex md:items-center">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <span className="font-bold sm:inline-block">Botic-AI</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="#features">Features</Link>
            <Link href="#pricing">Pricing</Link>
            <Link href="#faq">FAQ</Link>
          </nav>
        </div>
        
        <div className="flex items-center space-x-2">
          <nav className="flex items-center">
            <Button variant="ghost" asChild>
              <Link href="/login">Log in</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Sign up</Link>
            </Button>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="absolute left-0 top-14 w-full bg-background shadow-md md:hidden hidden" id="mobile-menu">
        <nav className="flex flex-col items-center space-y-4 p-4 text-sm font-medium">
          <Link href="/" className="font-bold">Botic-AI</Link>
          <Link href="#features">Features</Link>
          <Link href="#pricing">Pricing</Link>
          <Link href="#faq">FAQ</Link>
        </nav>
      </div>

      <script>
        {`document.getElementById('menu-toggle').addEventListener('change', function() {
          document.getElementById('mobile-menu').classList.toggle('hidden');
        });`}
      </script>
    </header>
  );
};

export default Header;
