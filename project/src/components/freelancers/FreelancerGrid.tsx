import React from 'react';
import FreelancerCard from './FreelancerCard';
import { Freelancer } from '../../types';

interface FreelancerGridProps {
  freelancers: Freelancer[];
  emptyMessage?: string;
}

export default function FreelancerGrid({ 
  freelancers,
  emptyMessage = 'No freelancers found'
}: FreelancerGridProps) {
  if (freelancers.length === 0) {
    return (
      <div className="py-16 text-center">
        <p className="text-gray-500">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {freelancers.map((freelancer) => (
        <FreelancerCard key={freelancer.id} freelancer={freelancer} />
      ))}
    </div>
  );
}