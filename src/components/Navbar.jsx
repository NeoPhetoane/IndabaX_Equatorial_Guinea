import { useState } from "react";
import { Link } from "react-router-dom";
import GoogleTranslate from "./GoogleTranslate";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const linkClass = "text-gray-900 hover:text-gray-300 transition";

  return (
    <header className="sticky top-0 z-50 bg-gray-100 shadow-md">
      <nav className="max-w-7xl mx-auto px-2 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="IndabaX Logo" className="h-8 w-auto" />
            <span className="text-1xl font-bold text-gray-900">
              IndabaX - Equatorial Guinea
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="space-x-6 hidden md:flex">
          <Link to="/" className={linkClass}>
            Home
          </Link>
          <Link to="/about" className={linkClass}>
            About
          </Link>
          <Link to="/speakers" className={linkClass}>
            Speakers
          </Link>
          <Link to="/schedule" className={linkClass}>
            Schedule
          </Link>
          <Link to="/contact" className={linkClass}>
            Contact
          </Link>
          <GoogleTranslate />
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-gray-900 text-lg font-semibold focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col space-y-2 bg-gray-100">
          <Link to="/" className={linkClass} onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link
            to="/about"
            className={linkClass}
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/speakers"
            className={linkClass}
            onClick={() => setIsOpen(false)}
          >
            Speakers
          </Link>
          <Link
            to="/schedule"
            className={linkClass}
            onClick={() => setIsOpen(false)}
          >
            Schedule
          </Link>
          <Link
            to="/contact"
            className={linkClass}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <GoogleTranslate />
        </div>
      )}
    </header>
  );
};

export default Navbar;
