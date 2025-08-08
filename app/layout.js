import './globals.css'

export const metadata = {
  title: 'My Static Website',
  description: 'Learning Next.js App Router',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        {/* Header */}
        <header className="bg-white border-b border-zinc-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-extrabold text-zinc-800">MySite</h1>
            <nav>
              <ul className="flex gap-10">
                <li>
                  <a href="/" className="text-indigo-600 hover:text-indigo-500 font-medium">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/services" className="text-indigo-600 hover:text-indigo-500 font-medium">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/work" className="text-indigo-600 hover:text-indigo-500 font-medium">
                    Work
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-indigo-600 hover:text-indigo-500 font-medium">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>


        {/* Main content */}
        <main className="flex-grow max-w-6xl mx-auto px-6 py-10 bg-zinc-50 text-zinc-800 rounded-xl shadow-sm">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-white text-zinc-700 border-t border-zinc-200 py-6 text-center text-sm shadow-sm">
          <p>&copy; 2025 <span className="font-semibold text-zinc-900">MySite</span>. All rights reserved.</p>
        </footer>

      </body>
    </html>
  )
}
