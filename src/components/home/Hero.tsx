import Link from "next/link";
import { ArrowRight, MapPin, Search } from "lucide-react";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-blue-50">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">

        {/* Left content */}
        <div className="z-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
                <MapPin size={16} />
                Explore the world with TripMate
            </div>

            <h1 className="max-w-xl text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">Discover your next<span className="text-blue-600"> adventure.</span></h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-gray-600">
                Plan your perfect journey, discover amazing destinations, organize your itinerary and create unforgettable memories with TripMate.
            </p>

            {/* Search panel */}
            <div className="mt-9 flex flex-col gap-3 rounded-2xl bg-white p-3 shadow-lg sm:flex-row sm:items-center">
                <div className="flex flex-1 items-center gap-3 px-3">
                    <Search className="text-blue-600" size={22} />

                    <div>
                        <p className="text-xs font-semibold text-gray-500">WHERE TO?</p>
                        <p className="text-sm text-gray-400">Search your destination</p>
                    </div>
                </div>

                <Link href="/#destinations" className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700">
                    Explore Now
                    <ArrowRight size={18} />
                </Link>
            </div>

            <div className="mt-8 flex items-center gap-6 text-sm text-gray-600">
                <span>✓ Easy trip planning</span>
                <span>✓ Smart budgeting</span>
            </div>
        </div>

        {/* Right image */}
        <div className="relative">
          <div
            role="img"
            aria-label="Beautiful tropical destination with turquoise ocean"
            className="h-[350px] rounded-3xl bg-cover bg-center shadow-2xl sm:h-[450px]"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=1200')",
            }}
          />

            <div className="absolute -bottom-5 -left-3 rounded-2xl bg-white p-5 shadow-xl sm:-left-8">
                <p className="text-sm font-semibold text-gray-900">Your next journey</p>
                <p className="mt-1 text-xs text-gray-500">Starts with a plan.</p>
            </div>
        </div>

      </div>
    </section>
  )
}

export default Hero