import { useState, useEffect } from 'react';
import { Freelancer } from '../types';

export function useFreelancersApi() {
  const [freelancers, setFreelancers] = useState<Freelancer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://6805d108ca467c15be6a04f7.mockapi.io/freelancers")
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch freelancers');
        }
        return res.json();
      })
      .then((data) => {
        setFreelancers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("API Error:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { freelancers, loading, error };
}