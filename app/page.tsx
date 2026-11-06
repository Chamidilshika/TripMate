import Hero from "@/src/components/home/Hero";
import Footer from "@/src/components/layout/Footer";
import Navbar from "@/src/components/layout/Navbar";
import Link from "next/link";
import DestinationCard from "@/src/components/destination/DestinationCard";
import { destinations } from "@/src/data/destinations";
import { ArrowRight, CalendarDays, Wallet, Map } from "lucide-react";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />

      {/* Popular Destinations */}
      <section id="destinations" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Explore the world
              </p>

              <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
                Popular Destinations
              </h2>

              <p className="mt-3 text-gray-500">
                Discover amazing places for your next adventure.
              </p>
            </div>

            <Link
              href="/destinations"
              className="flex items-center gap-2 font-semibold text-blue-600"
            >
              View all destinations
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {destinations.map((destination) => (
              <DestinationCard
                key={destination.id}
                destination={destination}
              />
            ))}
          </div>

        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-blue-50 py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="font-semibold uppercase tracking-wider text-blue-600">
              Why TripMate?
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900">
              Everything you need for your journey
            </h2>

            <p className="mt-4 text-gray-500">
              Organize every part of your travel experience in one place.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-3">

            <FeatureCard
              icon={<Map size={27} />}
              title="Explore Destinations"
              description="Find beautiful destinations and discover exciting places to visit."
            />

            <FeatureCard
              icon={<CalendarDays size={27} />}
              title="Plan Your Itinerary"
              description="Organize your activities and create a personalized daily travel schedule."
            />

            <FeatureCard
              icon={<Wallet size={27} />}
              title="Manage Your Budget"
              description="Track your expenses and manage your travel budget with ease."
            />

          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-5 text-center">

          <h2 className="text-3xl font-bold text-gray-900">
            Your journey starts here.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-500">
            TripMate brings your travel plans together.
            Discover destinations, organize your itinerary,
            manage your budget and share experiences with friends.
          </p>

          <Link
            href="/#destinations"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 font-semibold text-white transition hover:bg-blue-700"
          >
            Start Exploring
            <ArrowRight size={18} />
          </Link>

        </div>
      </section>

      <Footer />
    </main>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

      <div className="inline-flex rounded-xl bg-blue-100 p-4 text-blue-600">
        {icon}
      </div>

      <h3 className="mt-6 text-xl font-bold text-gray-900">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-gray-500">
        {description}
      </p>

    </div>
  );
}