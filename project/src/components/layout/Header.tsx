import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Bookmark, Search } from 'lucide-react';
import { useFreelancers } from '../../context/FreelancerContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { savedFreelancers } = useFreelancers();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-blue-600">Freelance<span className="text-teal-500">Finder</span></span>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `text-sm font-medium transition-colors hover:text-blue-600 ${isActive ? 'text-blue-600' : 'text-gray-700'}`
              }
              end
            >
              Browse
            </NavLink>
            <NavLink 
              to="/saved" 
              className={({ isActive }) => 
                `text-sm font-medium transition-colors hover:text-blue-600 flex items-center ${isActive ? 'text-blue-600' : 'text-gray-700'}`
              }
            >
              Saved
              {savedFreelancers.length > 0 && (
                <span className="ml-1.5 flex items-center justify-center w-5 h-5 text-xs font-medium bg-blue-100 text-blue-700 rounded-full">
                  {savedFreelancers.length}
                </span>
              )}
            </NavLink>
          </nav>
          
          {/* Mobile navigation button */}
          <div className="md:hidden">
            <button 
              type="button"
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile navigation menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 py-3 space-y-1">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-50'}`
              }
              onClick={closeMenu}
              end
            >
              <div className="flex items-center">
                <Search className="h-5 w-5 mr-3" />
                Browse Freelancers
              </div>
            </NavLink>
            <NavLink 
              to="/saved" 
              className={({ isActive }) => 
                `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-50'}`
              }
              onClick={closeMenu}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Bookmark className="h-5 w-5 mr-3" />
                  Saved Freelancers
                </div>
                {savedFreelancers.length > 0 && (
                  <span className="flex items-center justify-center w-5 h-5 text-xs font-medium bg-blue-100 text-blue-700 rounded-full">
                    {savedFreelancers.length}
                  </span>
                )}
              </div>
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}