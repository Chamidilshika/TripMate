import { Destination } from "@/src/data/destinations";
import { MapPin, ArrowUpRight } from "lucide-react";

interface Props {
  destination: Destination
}

function DestinationCard({ destination }: Props) {
  return (
    
    <article className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      <div className="relative h-56 overflow-hidden">
        <div
          role="img"
          aria-label={`${destination.name}, ${destination.country}`}
          className="h-full w-full bg-cover bg-center transition duration-500 group-hover:scale-110"
          style={{
            backgroundImage: `url('${destination.image}')`,
          }}
        />

        <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-blue-600 shadow">
          {destination.category}
        </span>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-bold text-gray-900">
              {destination.name}
            </h3>

            <p className="mt-2 flex items-center gap-1 text-sm text-gray-500">
              <MapPin size={15} />
              {destination.country}
            </p>
          </div>

          <ArrowUpRight
            className="text-gray-400 transition group-hover:text-blue-600"
            size={22}
          />
        </div>

        <p className="mt-4 text-sm leading-6 text-gray-600">
          {destination.description}
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
          <div>
            <p className="text-xs text-gray-500">Estimated budget</p>
            <p className="text-lg font-bold text-gray-900">
              ${destination.price.toLocaleString()}
            </p>
          </div>

          <span className="text-sm font-semibold text-blue-600">
            Explore →
          </span>
        </div>
      </div>
    </article>
  )
}

export default DestinationCard