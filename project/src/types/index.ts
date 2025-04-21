export interface Freelancer {
  id: string;
  name: string;
  title: string;
  avatar: string;
  category: Category;
  skills: string[];
  rating: number;
  hourlyRate: number;
  description: string;
  location: string;
  experience: number;
  portfolio: PortfolioItem[];
}

export type Category = 'design' | 'development' | 'writing' | 'marketing';

export interface PortfolioItem {
  id: string;
  title: string;
  image: string;
  description: string;
}

export interface SortOption {
  label: string;
  value: 'rating' | 'hourlyRate';
  direction: 'asc' | 'desc';
}

export interface FilterState {
  category: Category | 'all';
  searchTerm: string;
}