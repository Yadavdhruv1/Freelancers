import React from 'react';
import { Star } from 'lucide-react';

interface RatingProps {
  value: number;
  max?: number;
  size?: 'sm' | 'md';
  showValue?: boolean;
  className?: string;
}

export default function Rating({ 
  value, 
  max = 5, 
  size = 'md',
  showValue = true,
  className = ''
}: RatingProps) {
  const roundedValue = Math.round(value * 10) / 10;
  const fullStars = Math.floor(roundedValue);
  const hasHalfStar = roundedValue - fullStars >= 0.5;
  
  const starSizes = {
    sm: 'w-3.5 h-3.5',
    md: 'w-5 h-5'
  };
  
  const textSizes = {
    sm: 'text-xs',
    md: 'text-sm'
  };

  return (
    <div className={`flex items-center ${className}`}>
      <div className="flex">
        {[...Array(max)].map((_, i) => (
          <Star
            key={i}
            className={`
              ${starSizes[size]}
              ${i < fullStars ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
              ${hasHalfStar && i === fullStars ? 'text-yellow-400' : ''}
            `}
          />
        ))}
      </div>
      {showValue && (
        <span className={`ml-1.5 font-medium text-gray-700 ${textSizes[size]}`}>
          {roundedValue.toFixed(1)}
        </span>
      )}
    </div>
  );
}