import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and tagline */}
          <div>
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-blue-600">Freelance<span className="text-teal-500">Finder</span></span>
            </Link>
            <p className="mt-2 text-sm text-gray-600">
              Discover and connect with the perfect freelancers for your projects.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-600 hover:text-blue-600">
                  Browse Freelancers
                </Link>
              </li>
              <li>
                <Link to="/saved" className="text-sm text-gray-600 hover:text-blue-600">
                  Saved Freelancers
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Categories
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/?category=design" className="text-sm text-gray-600 hover:text-blue-600">
                  Design
                </Link>
              </li>
              <li>
                <Link to="/?category=development" className="text-sm text-gray-600 hover:text-blue-600">
                  Development
                </Link>
              </li>
              <li>
                <Link to="/?category=writing" className="text-sm text-gray-600 hover:text-blue-600">
                  Writing
                </Link>
              </li>
              <li>
                <Link to="/?category=marketing" className="text-sm text-gray-600 hover:text-blue-600">
                  Marketing
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-xs text-gray-500 text-center">
            &copy; {new Date().getFullYear()} FreelanceFinder. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}