import { Freelancer } from '../types';

export const freelancers: Freelancer[] = [
  {
    id: '1',
    name: 'Alex Morgan',
    title: 'UI/UX Designer',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'design',
    skills: ['UI Design', 'UX Research', 'Figma', 'Adobe XD', 'Prototyping'],
    rating: 4.9,
    hourlyRate: 85,
    description: 'Experienced UI/UX designer with a passion for creating beautiful, functional interfaces. I specialize in user-centered design and have worked with clients ranging from startups to Fortune 500 companies.',
    location: 'San Francisco, CA',
    experience: 7,
    portfolio: [
      {
        id: 'p1',
        title: 'E-commerce Redesign',
        image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Complete redesign of an e-commerce platform, resulting in a 35% increase in conversion rate.'
      },
      {
        id: 'p2',
        title: 'Mobile Banking App',
        image: 'https://images.pexels.com/photos/5926389/pexels-photo-5926389.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Designed a user-friendly mobile banking application focused on simplicity and security.'
      }
    ]
  },
  {
    id: '2',
    name: 'Sarah Chen',
    title: 'Full Stack Developer',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'development',
    skills: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'AWS'],
    rating: 4.8,
    hourlyRate: 95,
    description: 'Full stack developer with expertise in modern JavaScript frameworks and cloud services. I build scalable, efficient web applications with a focus on performance and user experience.',
    location: 'Seattle, WA',
    experience: 5,
    portfolio: [
      {
        id: 'p1',
        title: 'Social Media Dashboard',
        image: 'https://images.pexels.com/photos/7245322/pexels-photo-7245322.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Built a real-time dashboard for social media analytics using React, Node.js, and WebSockets.'
      },
      {
        id: 'p2',
        title: 'E-learning Platform',
        image: 'https://images.pexels.com/photos/5905700/pexels-photo-5905700.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Developed a comprehensive e-learning platform with video streaming and interactive quizzes.'
      }
    ]
  },
  {
    id: '3',
    name: 'Marcus Johnson',
    title: 'Content Writer',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'writing',
    skills: ['Blog Writing', 'SEO', 'Copywriting', 'Technical Writing', 'Editing'],
    rating: 4.7,
    hourlyRate: 65,
    description: 'Versatile content writer with a background in digital marketing. I create engaging, SEO-optimized content that helps businesses connect with their audience and achieve their goals.',
    location: 'Chicago, IL',
    experience: 4,
    portfolio: [
      {
        id: 'p1',
        title: 'Tech Blog Series',
        image: 'https://images.pexels.com/photos/6962024/pexels-photo-6962024.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Created a series of technical blog posts explaining complex concepts in accessible language.'
      },
      {
        id: 'p2',
        title: 'Email Marketing Campaign',
        image: 'https://images.pexels.com/photos/4553618/pexels-photo-4553618.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Wrote a successful email campaign that generated a 25% increase in click-through rates.'
      }
    ]
  },
  {
    id: '4',
    name: 'Elena Rodriguez',
    title: 'Graphic Designer',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'design',
    skills: ['Logo Design', 'Brand Identity', 'Illustration', 'Typography', 'Adobe Creative Suite'],
    rating: 4.9,
    hourlyRate: 75,
    description: 'Creative graphic designer with an eye for detail and a passion for brand storytelling. I create visual identities that resonate with audiences and stand the test of time.',
    location: 'Miami, FL',
    experience: 6,
    portfolio: [
      {
        id: 'p1',
        title: 'Restaurant Branding',
        image: 'https://images.pexels.com/photos/4551832/pexels-photo-4551832.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Developed complete brand identity for an upscale restaurant, including logo, menus, and signage.'
      },
      {
        id: 'p2',
        title: 'Event Poster Series',
        image: 'https://images.pexels.com/photos/5816282/pexels-photo-5816282.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Created a series of eye-catching posters for a music festival that captured the event\'s energy.'
      }
    ]
  },
  {
    id: '5',
    name: 'David Kim',
    title: 'Mobile Developer',
    avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'development',
    skills: ['React Native', 'Swift', 'Kotlin', 'Firebase', 'App Store Optimization'],
    rating: 4.8,
    hourlyRate: 90,
    description: 'Specialized mobile developer with expertise in cross-platform and native app development. I build beautiful, performant mobile experiences that users love and businesses rely on.',
    location: 'Austin, TX',
    experience: 5,
    portfolio: [
      {
        id: 'p1',
        title: 'Fitness Tracking App',
        image: 'https://images.pexels.com/photos/5256142/pexels-photo-5256142.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Developed a comprehensive fitness app with workout tracking, nutrition planning, and social features.'
      },
      {
        id: 'p2',
        title: 'Delivery Service App',
        image: 'https://images.pexels.com/photos/6169662/pexels-photo-6169662.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Built a food delivery application with real-time order tracking and payment processing.'
      }
    ]
  },
  {
    id: '6',
    name: 'Olivia Taylor',
    title: 'SEO Specialist',
    avatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'marketing',
    skills: ['Keyword Research', 'On-page SEO', 'Link Building', 'Analytics', 'Content Strategy'],
    rating: 4.7,
    hourlyRate: 70,
    description: 'Results-driven SEO specialist with a data-focused approach. I help businesses improve their online visibility and drive organic traffic through strategic optimization techniques.',
    location: 'Denver, CO',
    experience: 4,
    portfolio: [
      {
        id: 'p1',
        title: 'E-commerce SEO Campaign',
        image: 'https://images.pexels.com/photos/5076531/pexels-photo-5076531.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Increased organic traffic by 150% and doubled conversions for an online retailer through comprehensive SEO strategy.'
      },
      {
        id: 'p2',
        title: 'Local Business SEO',
        image: 'https://images.pexels.com/photos/7563687/pexels-photo-7563687.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Helped a local service business achieve first-page rankings for all target keywords in their market.'
      }
    ]
  },
  {
    id: '7',
    name: 'James Wilson',
    title: 'WordPress Developer',
    avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'development',
    skills: ['WordPress', 'PHP', 'Custom Themes', 'WooCommerce', 'Plugin Development'],
    rating: 4.6,
    hourlyRate: 65,
    description: 'Experienced WordPress developer specialized in creating custom themes and plugins. I build websites that are not only beautiful but also fast, secure, and easy to manage.',
    location: 'Portland, OR',
    experience: 6,
    portfolio: [
      {
        id: 'p1',
        title: 'Business Directory',
        image: 'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Built a custom WordPress directory with advanced search and monetization features.'
      },
      {
        id: 'p2',
        title: 'Online Magazine',
        image: 'https://images.pexels.com/photos/6335/man-coffee-cup-pen.jpg?auto=compress&cs=tinysrgb&w=600',
        description: 'Developed a digital publication platform with subscription management and content restrictions.'
      }
    ]
  },
  {
    id: '8',
    name: 'Sophia Martinez',
    title: 'Technical Writer',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'writing',
    skills: ['API Documentation', 'User Guides', 'Knowledge Base', 'Technical Editing', 'Information Architecture'],
    rating: 4.8,
    hourlyRate: 75,
    description: 'Technical writer with a background in software development. I translate complex technical concepts into clear, accurate documentation that helps users and developers succeed.',
    location: 'Boston, MA',
    experience: 5,
    portfolio: [
      {
        id: 'p1',
        title: 'Developer Documentation',
        image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Created comprehensive API documentation with interactive examples for a cloud services platform.'
      },
      {
        id: 'p2',
        title: 'Product User Guide',
        image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Developed a user-friendly guide for a complex software product, reducing support tickets by 30%.'
      }
    ]
  }
];