import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Layout from '../components/layout/Layout';
import FreelancerDetails from '../components/freelancers/FreelancerDetails';
import ContactForm from '../components/freelancers/ContactForm';
import Button from '../components/common/Button';
import { freelancers } from '../data/freelancers';
import { Freelancer } from '../types';
import { useFreelancers } from '../context/FreelancerContext';

export default function FreelancerPage() {
  const { id } = useParams<{ id: string }>();
  const [freelancer, setFreelancer] = useState<Freelancer | null>(null);
  const [loading, setLoading] = useState(true);
  const { isSaved, addToSaved, removeFromSaved } = useFreelancers();
  
  useEffect(() => {
    // Simulate API fetch
    setLoading(true);
    setTimeout(() => {
      const found = freelancers.find(f => f.id === id);
      setFreelancer(found || null);
      setLoading(false);
    }, 300);
  }, [id]);
  
  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="animate-pulse">
            <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
              <div className="w-24 h-24 bg-gray-200 rounded-full"></div>
              <div className="flex-1">
                <div className="h-8 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-6 bg-gray-200 rounded w-1/2 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {[1, 2, 3].map(i => (
                <div key={i} className="bg-white p-6 rounded-lg border border-gray-200">
                  <div className="h-6 bg-gray-200 rounded mb-2 w-1/3 mx-auto"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
                </div>
              ))}
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 mb-8">
              <div className="h-6 bg-gray-200 rounded w-1/4 mb-4"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
  
  if (!freelancer) {
    return (
      <Layout>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Freelancer Not Found</h1>
          <p className="text-gray-600 mb-6">The freelancer you're looking for doesn't exist or has been removed.</p>
          <Link to="/">
            <Button>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Browse
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }
  
  const saved = isSaved(freelancer.id);
  
  const handleSaveToggle = () => {
    if (saved) {
      removeFromSaved(freelancer.id);
    } else {
      addToSaved(freelancer);
    }
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Browse
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <FreelancerDetails freelancer={freelancer} />
          </div>
          
          <div className="lg:col-span-1 space-y-6">
            <Button
              variant={saved ? 'outline' : 'primary'}
              fullWidth
              onClick={handleSaveToggle}
              className="mb-6"
            >
              {saved ? 'Remove from Saved' : 'Save Freelancer'}
            </Button>
            
            <ContactForm freelancerName={freelancer.name} />
          </div>
        </div>
      </div>
    </Layout>
  );
}