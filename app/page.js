'use client';

export default function HomePage() {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white min-h-screen flex flex-col items-center justify-center overflow-hidden">
        
        {/* Animated Heading */}
        <div className="text-center z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 animate-fadeIn">
            A Digital Product Studio
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300 animate-fadeIn delay-200">
            We design, build, and grow digital experiences that people love to use.
          </p>
        </div>

        {/* Moving Brand Marquee */}
        <div className="absolute bottom-12 w-full overflow-hidden">
          <div className="animate-marquee text-white text-lg font-medium">
            <span className="mx-8">Apple</span>
            <span className="mx-8">Google</span>
            <span className="mx-8">Amazon</span>
            <span className="mx-8">Microsoft</span>
            <span className="mx-8">Spotify</span>
            <span className="mx-8">Netflix</span>
            <span className="mx-8">Adobe</span>

            {/* Second copy (duplicate for seamless loop) */}
            
            <span className="mx-8">Apple</span>
            <span className="mx-8">Google</span>
            <span className="mx-8">Amazon</span>
            <span className="mx-8">Microsoft</span>
            <span className="mx-8">Spotify</span>
            <span className="mx-8">Netflix</span>
            <span className="mx-8">Adobe</span>
          </div>
        </div>

        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
      </section>

      <style jsx>{`
        /* Fade-in animations */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease forwards;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }

        /* Marquee animation */
        @keyframes marquee {
          0%   { transform: translateX(0%); }
          100% { transform: translateX(-50%); } /* Only move half, because we have 2 copies */
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 12s linear infinite;
        }
      `}</style>
    </div>
  );
}
