import { Link } from "react-router-dom";

export default function Footer() {
  const linkClass = "text-green-600 hover:underline";
  return (
    <footer className="bg-green-100 text-gray-900 py-6 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
          <p>
            Website:{" "}
            <a href="https://indabaXequatorialguinea.org" className={linkClass}>
              IndabaXEquatorialGuinea.com
            </a>
          </p>
          <p>
            Email:{" "}
            <a
              href="mailto:indabaXequatorialguinea@gmail.com"
              className={linkClass}
            >
              indabaXequatorialguinea@gmail.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:0123456789" className={linkClass}>
              0123 456 789
            </a>
          </p>
        </div>

        {/* Location */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Location</h3>
          <p>Universidad Nacional de Guinea Ecuatorial</p>
          <p>Malabo, Equatorial Guinea</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className={linkClass}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={linkClass}>
                About
              </Link>
            </li>
            <li>
              <Link to="/speakers" className={linkClass}>
                Speakers
              </Link>
            </li>
            <li>
              <Link to="/schedule" className={linkClass}>
                Schedule
              </Link>
            </li>
            <li>
              <Link to="/contact" className={linkClass}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4 mt-2">
            <a
              href="https://x.com/deeplearningindabaequatorialguinea"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="text-green-700 hover:text-green-600 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-7 h-7"
              >
                <path d="M19.778 4.222a9.99 9.99 0 0 0-14.142 0 9.99 9.99 0 0 0 0 14.142 9.99 9.99 0 0 0 14.142 0 9.99 9.99 0 0 0 0-14.142Zm-1.394 12.748h-2.023l-3.13-4.27-2.37 2.916v1.354H8.318v-1.84l2.7-3.262-2.7-3.678V6.964h2.023l2.818 3.846 2.116-2.672h1.948l-2.81 3.533 2.961 4.2Z" />
              </svg>
            </a>

            <a
              href="https://facebook.com/deeplearningindabaequatorialguinea"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-green-700 hover:text-green-600 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24H12.82v-9.294H9.692V11.08h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.626h-3.12V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0Z" />
              </svg>
            </a>

            <a
              href="https://linkedin.com/deeplearningindabaequatorialguinea"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-green-700 hover:text-green-600 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M20.447 20.452h-3.554v-5.568c0-1.328-.026-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.666h-3.554V9h3.414v1.561h.05c.475-.9 1.637-1.848 3.369-1.848 3.6 0 4.266 2.37 4.266 5.455v6.284ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124Zm1.777 13.019H3.56V9h3.554v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.225 0Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} IndabaX Equatorial Guinea. All
          rights reserved.
        </p>
        <p className="mt-2">
          <Link to="/privacy-policy" className={linkClass}>
            Privacy Policy
          </Link>
        </p>
      </div>
    </footer>
  );
}
