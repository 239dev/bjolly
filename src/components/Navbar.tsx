import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Calculator, Menu, X, Phone } from 'lucide-react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-navy-800/90 backdrop-blur-sm py-5'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Calculator className={`h-8 w-8 ${isScrolled ? 'text-emerald-600' : 'text-emerald-400'}`} />
          <span className={`font-poppins font-bold text-2xl ${isScrolled ? 'text-navy-800' : 'text-white'}`}>
            B Jolly <span className={isScrolled ? 'text-emerald-600' : 'text-emerald-400'}>Accounting</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-medium transition-colors ${
                isScrolled
                  ? `text-navy-800 hover:text-emerald-600 ${isActive ? 'text-emerald-600' : ''}`
                  : `text-white hover:text-emerald-400 ${isActive ? 'text-emerald-400' : ''}`
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `font-medium transition-colors ${
                isScrolled
                  ? `text-navy-800 hover:text-emerald-600 ${isActive ? 'text-emerald-600' : ''}`
                  : `text-white hover:text-emerald-400 ${isActive ? 'text-emerald-400' : ''}`
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `font-medium transition-colors ${
                isScrolled
                  ? `text-navy-800 hover:text-emerald-600 ${isActive ? 'text-emerald-600' : ''}`
                  : `text-white hover:text-emerald-400 ${isActive ? 'text-emerald-400' : ''}`
              }`
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `font-medium transition-colors ${
                isScrolled
                  ? `text-navy-800 hover:text-emerald-600 ${isActive ? 'text-emerald-600' : ''}`
                  : `text-white hover:text-emerald-400 ${isActive ? 'text-emerald-400' : ''}`
              }`
            }
          >
            Contact
          </NavLink>
          
          <a 
            href="tel:3063746322" 
            className={`flex items-center gap-2 px-4 py-2 rounded-md ml-4 transition-colors ${
              isScrolled
                ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                : 'bg-emerald-400 text-navy-800 hover:bg-emerald-500'
            }`}
          >
            <Phone size={18} />
            <span>(306) 374-6322</span>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden ${isScrolled ? 'text-navy-800' : 'text-white'}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white w-full py-4 shadow-md">
          <div className="container-custom flex flex-col space-y-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `py-2 px-4 rounded ${
                  isActive
                    ? 'bg-emerald-50 text-emerald-600'
                    : 'text-navy-800 hover:bg-gray-100'
                }`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `py-2 px-4 rounded ${
                  isActive
                    ? 'bg-emerald-50 text-emerald-600'
                    : 'text-navy-800 hover:bg-gray-100'
                }`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `py-2 px-4 rounded ${
                  isActive
                    ? 'bg-emerald-50 text-emerald-600'
                    : 'text-navy-800 hover:bg-gray-100'
                }`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `py-2 px-4 rounded ${
                  isActive
                    ? 'bg-emerald-50 text-emerald-600'
                    : 'text-navy-800 hover:bg-gray-100'
                }`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </NavLink>
            <a 
              href="tel:3063746322" 
              className="flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition-colors"
            >
              <Phone size={18} />
              <span>(306) 374-6322</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;