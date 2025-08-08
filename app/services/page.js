export default function ServicesPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900 tracking-tight">
        Our Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {[
          'Web Development',
          'UI/UX Design',
          'SEO Optimization',
          'Digital Marketing',
          'Cinematography',
          'Social Media Strategy',
        ].map((service, i) => (
          <div
            key={i}
            className="group bg-gradient-to-br from-white to-gray-50 border border-zinc-200 p-6 rounded-2xl shadow hover:shadow-xl transition-all duration-300 ease-in-out"
          >
            <h3 className="text-2xl font-semibold text-indigo-700 group-hover:text-indigo-800 transition">
              {service}
            </h3>
            <p className="text-zinc-600 mt-3 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, modi.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
