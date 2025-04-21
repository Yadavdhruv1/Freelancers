import React from 'react';
import { MapPin, Mail, Clock, Award, Briefcase } from 'lucide-react';
import Badge from '../common/Badge';
import Rating from '../common/Rating';
import Card, { CardContent } from '../common/Card';
import { Freelancer } from '../../types';

interface FreelancerDetailsProps {
  freelancer: Freelancer;
}

export default function FreelancerDetails({ freelancer }: FreelancerDetailsProps) {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center gap-6">
        <img 
          src={freelancer.avatar} 
          alt={freelancer.name} 
          className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
        />
        <div className="flex-1">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{freelancer.name}</h1>
          <p className="text-lg text-gray-600 mt-1">{freelancer.title}</p>
          <div className="flex items-center mt-2">
            <MapPin className="h-4 w-4 text-gray-500 mr-1" />
            <span className="text-gray-500 text-sm">{freelancer.location}</span>
          </div>
        </div>
        <div className="flex flex-col items-start md:items-end">
          <div className="text-gray-900 font-bold">
            <span className="text-2xl">${freelancer.hourlyRate}</span>
            <span className="text-lg text-gray-600">/hr</span>
          </div>
          <Rating value={freelancer.rating} className="mt-1" />
        </div>
      </div>
      
      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="text-center py-6">
            <Briefcase className="w-7 h-7 text-blue-500 mx-auto mb-2" />
            <h3 className="font-semibold text-gray-900">Experience</h3>
            <p className="text-gray-600 mt-1">{freelancer.experience} years</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="text-center py-6">
            <Award className="w-7 h-7 text-teal-500 mx-auto mb-2" />
            <h3 className="font-semibold text-gray-900">Top Skills</h3>
            <p className="text-gray-600 mt-1">{freelancer.skills.slice(0, 2).join(', ')}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="text-center py-6">
            <Clock className="w-7 h-7 text-indigo-500 mx-auto mb-2" />
            <h3 className="font-semibold text-gray-900">Availability</h3>
            <p className="text-gray-600 mt-1">Full-time</p>
          </CardContent>
        </Card>
      </div>
      
      {/* About */}
      <Card>
        <CardContent>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">About {freelancer.name}</h2>
          <p className="text-gray-700 leading-relaxed">{freelancer.description}</p>
          
          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {freelancer.skills.map((skill, index) => (
              <Badge key={index} variant="default">
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
      
      {/* Portfolio */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {freelancer.portfolio.map((item) => (
            <Card key={item.id} hover>
              <div className="aspect-video overflow-hidden bg-gray-100">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent>
                <h3 className="font-semibold text-gray-900">{item.title}</h3>
                <p className="text-gray-600 mt-2 text-sm">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}