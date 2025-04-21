import React from 'react';
import { Bookmark } from 'lucide-react';
import Layout from '../components/layout/Layout';
import FreelancerGrid from '../components/freelancers/FreelancerGrid';
import { useFreelancers } from '../context/FreelancerContext';
import Button from '../components/common/Button';
import { Link } from 'react-router-dom';

export default function SavedFreelancersPage() {
  const { savedFreelancers } = useFreelancers();

  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-gray-900 flex items-center">
            <Bookmark className="mr-2 h-6 w-6 text-blue-600" />
            Saved Freelancers
          </h1>
          <p className="text-gray-500">
            {savedFreelancers.length} {savedFreelancers.length === 1 ? 'freelancer' : 'freelancers'} saved
          </p>
        </div>
        
        {savedFreelancers.length > 0 ? (
          <FreelancerGrid freelancers={savedFreelancers} />
        ) : (
          <div className="py-16 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Bookmark className="h-8 w-8 text-gray-400" />
            </div>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">No saved freelancers yet</h2>
            <p className="text-gray-500 mb-8">You haven't saved any freelancers to your list.</p>
            <Link to="/">
              <Button>Browse Freelancers</Button>
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
}