import React from 'react';
import NewsSection from '../components/NewsSection';
import QuickLink from '../components/QuickLink';
import Carousel from '../components/Carousel';
import WelcomeSection from '../components/WelcomeSection';
import { FileText, BookOpen, GraduationCap, FileOutput } from 'lucide-react';

const quickLinks = [
  {
    href: '/terms',
    icon: BookOpen,
    title: 'Groundwater Terms',
    description: 'Learn about groundwater terminology'
  },
  {
    href: '/noc',
    icon: FileText,
    title: 'NOC Guidelines',
    description: 'Access NOC application process'
  },
  {
    href: '/training',
    icon: GraduationCap,
    title: 'Training',
    description: 'Explore learning opportunities'
  },
  {
    href: '/reports',
    icon: FileOutput,
    title: 'AI Reports',
    description: 'Generate detailed analysis'
  }
];

const carouselImages = [
  {
    url: 'https://jalshakti.gov.in//themes/jalshakti/images/Janjatiya-Gaurav-Diwas_jalshakti.jpg',
    alt: 'Groundwater Conservation',
    caption: 'Protecting our groundwater resources for future generations'
  },
  {
    url: 'https://jalshakti.gov.in//themes/jalshakti/images/jalshakti.jpg',
    alt: 'Water Quality Testing',
    caption: 'Advanced water quality monitoring systems'
  },
  {
    url: 'https://images.unsplash.com/photo-1617939533073-6c94c709370c',
    alt: 'Sustainable Agriculture',
    caption: 'Promoting sustainable groundwater usage in agriculture'
  }
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 pb-8">
      <WelcomeSection />
      
      <div className="space-y-8">
        {/* Carousel Section */}
        <div>
          <Carousel images={carouselImages} />
        </div>

        {/* Quick Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {quickLinks.map((link) => (
            <QuickLink key={link.href} {...link} />
          ))}
        </div>

        {/* News Section */}
        <NewsSection />
      </div>
    </div>
  );
}