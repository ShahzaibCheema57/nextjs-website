export default function WorkPage() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-14 text-gray-900 tracking-tight">
          Our Work
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div
              key={n}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={`https://picsum.photos/400/300?random=${n}`}
                alt={`Project ${n}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-indigo-700 mb-1">
                  Project Title {n}
                </h3>
                <p className="text-zinc-600 text-sm">
                  Quick description of the project to showcase what was done.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
