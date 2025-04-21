import { useState, useMemo } from 'react';
import { Freelancer, FilterState, SortOption } from '../types';

export function useFilteredFreelancers(freelancers: Freelancer[]) {
  const [filters, setFilters] = useState<FilterState>({
    category: 'all',
    searchTerm: '',
  });

  const [sortOption, setSortOption] = useState<SortOption>({
    label: 'Highest Rated',
    value: 'rating',
    direction: 'desc',
  });

  const filteredFreelancers = useMemo(() => {
    return freelancers
      .filter((freelancer) => {
        // Filter by category
        if (filters.category !== 'all' && freelancer.category !== filters.category) {
          return false;
        }
        
        // Filter by search term
        if (filters.searchTerm) {
          const searchLower = filters.searchTerm.toLowerCase();
          return (
            freelancer.name.toLowerCase().includes(searchLower) ||
            freelancer.title.toLowerCase().includes(searchLower) ||
            freelancer.skills.some(skill => skill.toLowerCase().includes(searchLower))
          );
        }
        
        return true;
      })
      .sort((a, b) => {
        const fieldA = a[sortOption.value];
        const fieldB = b[sortOption.value];
        
        if (sortOption.direction === 'asc') {
          return fieldA - fieldB;
        } else {
          return fieldB - fieldA;
        }
      });
  }, [freelancers, filters, sortOption]);

  const updateCategory = (category: FilterState['category']) => {
    setFilters((prev) => ({ ...prev, category }));
  };

  const updateSearchTerm = (searchTerm: string) => {
    setFilters((prev) => ({ ...prev, searchTerm }));
  };

  const updateSortOption = (option: SortOption) => {
    setSortOption(option);
  };

  return {
    filteredFreelancers,
    filters,
    sortOption,
    updateCategory,
    updateSearchTerm,
    updateSortOption,
  };
}