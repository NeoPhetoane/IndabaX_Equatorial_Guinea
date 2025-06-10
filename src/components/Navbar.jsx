import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import GoogleTranslate from "./GoogleTranslate";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const linkClass = "text-gray-900 hover:text-true-blue transition";

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <div className="flex items-center space-x-2">
            <img src="/logo1.png" alt="IndabaX Logo" className="h-8 w-auto" />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="space-x-6 hidden md:flex">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${linkClass} ${
                isActive ? "text-true-blue border-b-2 border-blue pb-1" : ""
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${linkClass} ${
                isActive ? "text-true-blue border-b-2 border-blue pb-1" : ""
              }`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/speakers"
            className={({ isActive }) =>
              `${linkClass} ${
                isActive ? "text-true-blue border-b-2 border-blue pb-1" : ""
              }`
            }
          >
            Speakers
          </NavLink>

          <NavLink
            to="/schedule"
            className={({ isActive }) =>
              `${linkClass} ${
                isActive ? "text-true-blue border-b-2 border-blue pb-1" : ""
              }`
            }
          >
            Schedule
          </NavLink>
          <NavLink
            to="/events"
            className={({ isActive }) =>
              `${linkClass} ${
                isActive ? "text-true-blue border-b-2 border-blue pb-1" : ""
              }`
            }
          >
            Events
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${linkClass} ${
                isActive ? "text-true-blue border-b-2 border-blue pb-1" : ""
              }`
            }
          >
            Contact
          </NavLink>
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
        <div className="md:hidden px-4 pb-4 flex flex-col space-y-2 bg-yellow">
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
