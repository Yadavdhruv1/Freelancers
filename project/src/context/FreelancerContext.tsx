import { createContext, useContext, useState, ReactNode } from 'react';
import { Freelancer } from '../types';

interface FreelancerContextType {
  savedFreelancers: Freelancer[];
  addToSaved: (freelancer: Freelancer) => void;
  removeFromSaved: (id: string) => void;
  isSaved: (id: string) => boolean;
}

const FreelancerContext = createContext<FreelancerContextType | undefined>(undefined);

export function FreelancerProvider({ children }: { children: ReactNode }) {
  const [savedFreelancers, setSavedFreelancers] = useState<Freelancer[]>([]);

  const addToSaved = (freelancer: Freelancer) => {
    if (!isSaved(freelancer.id)) {
      setSavedFreelancers([...savedFreelancers, freelancer]);
    }
  };

  const removeFromSaved = (id: string) => {
    setSavedFreelancers(savedFreelancers.filter(freelancer => freelancer.id !== id));
  };

  const isSaved = (id: string) => {
    return savedFreelancers.some(freelancer => freelancer.id === id);
  };

  return (
    <FreelancerContext.Provider value={{ savedFreelancers, addToSaved, removeFromSaved, isSaved }}>
      {children}
    </FreelancerContext.Provider>
  );
}

export function useFreelancers() {
  const context = useContext(FreelancerContext);
  if (context === undefined) {
    throw new Error('useFreelancers must be used within a FreelancerProvider');
  }
  return context;
}