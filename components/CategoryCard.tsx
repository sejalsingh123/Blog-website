import Image from "next/image";

type CategoryCardProps = {
  title: string;
  image: string;
};

export default function CategoryCard({ title, image }: CategoryCardProps) {
  return (
    <div className="group cursor-pointer">
      {/* Card */}
      <div className="relative rounded-2xl overflow-hidden shadow-md group-hover:shadow-xl transition duration-300">

        {/* Browser Bar */}
        <div className="flex items-center gap-2 px-4 py-2 bg-[#3f4a3f] relative z-10">
          <span className="w-3 h-3 bg-red-400 rounded-full" />
          <span className="w-3 h-3 bg-yellow-400 rounded-full" />
          <span className="w-3 h-3 bg-green-400 rounded-full" />
        </div>

        {/* Image */}
        <div className="relative h-56">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 
                        group-hover:opacity-100 transition duration-300
                        flex items-center justify-center">

          <button className="bg-indigo-600 text-white px-8 py-3 rounded-xl text-lg font-medium hover:bg-indigo-700 transition">
            View
          </button>
        </div>
      </div>

      {/* Title */}
      <h3 className="mt-4 text-xl font-medium text-gray-900">
        {title}
      </h3>
    </div>
  );
}
