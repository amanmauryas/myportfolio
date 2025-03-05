import React from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface NavbarProps {
  mobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ mobileMenuOpen, toggleMobileMenu }) => {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50 transition-colors duration-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-4 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <div className="flex items-center">
            <a href="#" className="text-indigo-600 dark:text-indigo-400 font-bold text-xl">
              Aman kumar maurya
            </a>
            <div className="hidden ml-10 space-x-8 lg:block">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="ml-10 space-x-4 flex items-center">
            <ThemeToggle />
            <a
              href="#contact"
              className="hidden lg:inline-block bg-indigo-600 dark:bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors"
            >
              Get in Touch
            </a>
            <button
              type="button"
              className="lg:hidden rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden ${
            mobileMenuOpen ? 'block' : 'hidden'
          }`}
        >
          <div className="pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-2 px-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                onClick={toggleMobileMenu}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="block py-2 px-3 text-base font-medium text-indigo-600 dark:text-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
              onClick={toggleMobileMenu}
            >
              Get in Touch
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;