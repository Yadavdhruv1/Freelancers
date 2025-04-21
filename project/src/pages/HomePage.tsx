import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Users } from 'lucide-react';
import Layout from '../components/layout/Layout';
import FilterBar from '../components/freelancers/FilterBar';
import FreelancerGrid from '../components/freelancers/FreelancerGrid';
import { useFilteredFreelancers } from '../hooks/useFilteredFreelancers';
import { useFreelancersApi } from '../hooks/useFreelancers';
import { FilterState } from '../types';

export default function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') as FilterState['category'] || 'all';
  const { freelancers, loading, error } = useFreelancersApi();
  
  const {
    filteredFreelancers,
    filters,
    sortOption,
    updateCategory,
    updateSearchTerm,
    updateSortOption,
  } = useFilteredFreelancers(freelancers);
  
  useEffect(() => {
    if (initialCategory !== 'all') {
      updateCategory(initialCategory);
    }
  }, [initialCategory]);
  
  useEffect(() => {
    if (filters.category !== 'all') {
      setSearchParams({ category: filters.category });
    } else {
      setSearchParams({});
    }
  }, [filters.category, setSearchParams]);

  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-gray-200 rounded w-1/4"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow">
                  <div className="w-16 h-16 bg-gray-200 rounded-full mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Error Loading Freelancers</h2>
          <p className="text-gray-600 mb-8">{error}</p>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Find the Perfect Freelancer for Your Project
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Connect with skilled professionals who can bring your ideas to life.
            </p>
            <div className="bg-white rounded-lg p-1 flex items-center shadow-lg max-w-xl">
              <div className="pl-4 text-gray-400">
                <Search className="h-5 w-5" />
              </div>
              <input
                type="text"
                className="w-full p-3 text-gray-700 focus:outline-none"
                placeholder="Search for skills or roles..."
                value={filters.searchTerm}
                onChange={(e) => updateSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Categories Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex overflow-x-auto space-x-2 pb-2">
            <button
              className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors ${
                filters.category === 'all'
                  ? 'bg-blue-100 text-blue-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => updateCategory('all')}
            >
              All Categories
            </button>
            <button
              className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors ${
                filters.category === 'design'
                  ? 'bg-teal-100 text-teal-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => updateCategory('design')}
            >
              Design
            </button>
            <button
              className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors ${
                filters.category === 'development'
                  ? 'bg-blue-100 text-blue-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => updateCategory('development')}
            >
              Development
            </button>
            <button
              className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors ${
                filters.category === 'writing'
                  ? 'bg-green-100 text-green-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => updateCategory('writing')}
            >
              Writing
            </button>
            <button
              className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors ${
                filters.category === 'marketing'
                  ? 'bg-yellow-100 text-yellow-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => updateCategory('marketing')}
            >
              Marketing
            </button>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center">
            <Users className="mr-2 h-6 w-6 text-blue-600" />
            {filters.category === 'all' 
              ? 'All Freelancers' 
              : `${filters.category.charAt(0).toUpperCase() + filters.category.slice(1)} Specialists`
            }
          </h2>
          <p className="text-gray-500">
            {filteredFreelancers.length} {filteredFreelancers.length === 1 ? 'freelancer' : 'freelancers'} found
          </p>
        </div>
        
        <FilterBar
          filters={filters}
          sortOption={sortOption}
          updateCategory={updateCategory}
          updateSearchTerm={updateSearchTerm}
          updateSortOption={updateSortOption}
        />
        
        <FreelancerGrid 
          freelancers={filteredFreelancers} 
          emptyMessage="No freelancers match your search criteria. Try adjusting your filters."
        />
      </div>
    </Layout>
  );
}