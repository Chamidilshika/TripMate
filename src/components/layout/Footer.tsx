import Link from "next/link";
import { Plane } from "lucide-react";

function Footer() {

  const currentYear = 2026;

  return (
    
    <footer className="border-t border-gray-100 bg-gray-50">
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row">

          <div>
            <Link href="/" className="flex items-center gap-2">
              <Plane className="text-blue-600" size={25} />
              <span className="text-xl font-bold text-gray-900">
                Trip<span className="text-blue-600">Mate</span>
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-gray-500">
              Discover new destinations, plan amazing trips and
              make every journey memorable.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900">Quick Links</h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-gray-500">
              <Link href="/">Home</Link>
              <Link href="/#destinations">Destinations</Link>
              <Link href="/#features">Features</Link>
              <Link href="/#about">About Us</Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900">Get Started</h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-gray-500">
              <Link href="/login">Login</Link>
              <Link href="/register">Create Account</Link>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
          © {currentYear} TripMate. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer