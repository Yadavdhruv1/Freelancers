import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, BookmarkPlus, BookmarkCheck } from 'lucide-react';
import Card from '../common/Card';
import Badge from '../common/Badge';
import Rating from '../common/Rating';
import { Freelancer } from '../../types';
import { useFreelancers } from '../../context/FreelancerContext';

interface FreelancerCardProps {
  freelancer: Freelancer;
}

export default function FreelancerCard({ freelancer }: FreelancerCardProps) {
  const { isSaved, addToSaved, removeFromSaved } = useFreelancers();
  const saved = isSaved(freelancer.id);
  
  const handleSaveToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (saved) {
      removeFromSaved(freelancer.id);
    } else {
      addToSaved(freelancer);
    }
  };
  
  const categoryColors = {
    design: 'secondary',
    development: 'primary',
    writing: 'success',
    marketing: 'warning'
  };

  const skills = freelancer.skills || [];

  return (
    <Card hover className="h-full">
      <Link to={`/freelancer/${freelancer.id}`} className="block h-full">
        <div className="flex flex-col h-full">
          <div className="p-6 flex items-start">
            <img 
              src={freelancer.avatar} 
              alt={freelancer.name} 
              className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-gray-100"
            />
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                    {freelancer.name}
                  </h3>
                  <p className="text-sm text-gray-600">{freelancer.title}</p>
                </div>
                <button 
                  onClick={handleSaveToggle}
                  className="text-gray-400 hover:text-blue-600 transition-colors"
                  aria-label={saved ? "Remove from saved" : "Add to saved"}
                >
                  {saved ? (
                    <BookmarkCheck className="h-5 w-5 text-blue-600 fill-blue-600" />
                  ) : (
                    <BookmarkPlus className="h-5 w-5" />
                  )}
                </button>
              </div>
              
              <div className="mt-2 flex items-center text-xs text-gray-500">
                <MapPin className="h-3.5 w-3.5 mr-1" />
                <span>{freelancer.location}</span>
              </div>
              
              <div className="mt-3 flex items-center justify-between">
                <Rating value={freelancer.rating} size="sm" />
                <Badge 
                  variant={categoryColors[freelancer.category] as any}
                  className="capitalize"
                >
                  {freelancer.category}
                </Badge>
              </div>
            </div>
          </div>
          
          <div className="p-6 pt-0">
            <div className="flex flex-wrap gap-1.5 mt-4">
              {skills.slice(0, 3).map((skill, index) => (
                <Badge key={index} variant="default">
                  {skill}
                </Badge>
              ))}
              {skills.length > 3 && (
                <Badge variant="default">+{skills.length - 3}</Badge>
              )}
            </div>
          </div>
          
          <div className="mt-auto p-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
            <div>
              <span className="text-xl font-semibold text-gray-900">${freelancer.hourlyRate}</span>
              <span className="text-sm text-gray-600">/hr</span>
            </div>
            <div className="text-sm text-gray-600">
              {freelancer.experience} years exp
            </div>
          </div>
        </div>
      </Link>
    </Card>
  );
}