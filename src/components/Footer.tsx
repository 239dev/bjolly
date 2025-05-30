import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, Mail, Phone, MapPin, Clock, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-800 text-white pt-12 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Calculator className="text-emerald-600 h-8 w-8" />
              <span className="font-poppins font-bold text-xl">
                B Jolly <span className="text-emerald-600">Accounting</span>
              </span>
            </div>
           
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-white hover:text-emerald-400 transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Personal Tax Preparation
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Corporate Tax Services
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Small Business Accounting
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Year-Round Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-emerald-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  280A 2600 8th Street East, Saskatoon, SK
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-emerald-400 flex-shrink-0" />
                <a href="tel:3063746322" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  (306) 374-6322
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-emerald-400 flex-shrink-0" />
                <a href="mailto:bjollyaccounting@hotmail.com" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  bjollyaccounting@hotmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={20} className="text-emerald-400 flex-shrink-0 mt-1" />
                <div className="text-gray-300">
                  <p>Mon-Fri: 9am - 5pm</p>
                  <p>Sat: 10am - 2pm</p>
                  <p>Sun: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} B Jolly Accounting. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 text-sm hover:text-emerald-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 text-sm hover:text-emerald-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;