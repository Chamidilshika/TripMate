import Link from "next/link";
import { Plane, Menu } from "lucide-react";

function Navbar() {
  return (

    <header className="stricky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
                <div className="rounded-xl bg-blue-600 p-2">
                    <Plane className="h-5 w-5 text-white" />  
                </div>      

                <span className="text-2xl font-bold tracking-tight text-gray-900">
                    Trip<span className="text-blue-600">Mate</span>
                </span>
            </Link>

            {/* Desktop navigation */}
            <div className="hidden item-center gap-8 md:flex">
                <Link href="/" className="text-sm font-medium text-blue-600">
                    Home
                </Link>

                <Link href="/#destination" className="text-sm text-gray-600 hover:text-blue-600">
                    Destinations
                </Link>

                <Link href="/#features" className="text-sm text-gray-600 hover:text-blue-600">
                    Features
                </Link>

                <Link href="/#about" className="text-sm text-gray-600 hover:text-blue-600">
                    About
                </Link>
            </div>

            {/* Authentication */}
            <div className="hidden items-center gap-4 md:flex">
                <Link href="/login" className="text-sm font-semibold text-gray-700 hover:text-blue-600">
                    Log in
                </Link>

                <Link href="/register" className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700">
                    Get Started
                </Link>
            </div>

            {/* Mobile menu icon */}
            <button type="button" aria-label="Mobile navigation menu" className="rounded-lg p-2 text-gray-700 md:hidden">
                <Menu size={24} />
            </button>
        </nav>
    </header>
  )
}

export default Navbar