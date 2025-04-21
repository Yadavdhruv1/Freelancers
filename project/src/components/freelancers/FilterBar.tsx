import React from 'react';
import { Search, Filter } from 'lucide-react';
import Input from '../common/Input';
import Select from '../common/Select';
import { FilterState, SortOption } from '../../types';

interface FilterBarProps {
  filters: FilterState;
  sortOption: SortOption;
  updateCategory: (category: FilterState['category']) => void;
  updateSearchTerm: (searchTerm: string) => void;
  updateSortOption: (option: SortOption) => void;
}

export default function FilterBar({
  filters,
  sortOption,
  updateCategory,
  updateSearchTerm,
  updateSortOption,
}: FilterBarProps) {
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateSearchTerm(event.target.value);
  };

  const handleCategoryChange = (value: string) => {
    updateCategory(value as FilterState['category']);
  };

  const handleSortChange = (value: string) => {
    const sortOptions = getSortOptions();
    const selectedOption = sortOptions.find(option => {
      const optionValue = `${option.value}-${option.direction}`;
      return optionValue === value;
    });
    
    if (selectedOption) {
      updateSortOption(selectedOption);
    }
  };

  const getSortOptions = () => {
    return [
      { label: 'Highest Rated', value: 'rating', direction: 'desc' },
      { label: 'Lowest Rated', value: 'rating', direction: 'asc' },
      { label: 'Highest Hourly Rate', value: 'hourlyRate', direction: 'desc' },
      { label: 'Lowest Hourly Rate', value: 'hourlyRate', direction: 'asc' },
    ];
  };

  const categoryOptions = [
    { label: 'All Categories', value: 'all' },
    { label: 'Design', value: 'design' },
    { label: 'Development', value: 'development' },
    { label: 'Writing', value: 'writing' },
    { label: 'Marketing', value: 'marketing' },
  ];

  const sortOptions = getSortOptions().map(option => ({
    label: option.label,
    value: `${option.value}-${option.direction}`,
  }));

  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Input
          placeholder="Search by name, title, or skill..."
          value={filters.searchTerm}
          onChange={handleSearchChange}
          icon={<Search className="h-4 w-4" />}
          className="mb-0"
        />
        
        <Select
          options={categoryOptions}
          value={filters.category}
          onChange={handleCategoryChange}
          aria-label="Filter by category"
          className="mb-0"
        />
        
        <Select
          options={sortOptions}
          value={`${sortOption.value}-${sortOption.direction}`}
          onChange={handleSortChange}
          aria-label="Sort freelancers"
          className="mb-0"
        />
      </div>
    </div>
  );
}