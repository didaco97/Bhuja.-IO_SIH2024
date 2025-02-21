import React from 'react';
import { Newspaper } from 'lucide-react';

interface NewsItem {
  id: string;
  date: string;
  title: string;
  description: string;
}

export default function NewsSection() {
  const news: NewsItem[] = [
    {
      id: '1',
      date: '2024-03-15',
      title: 'New Guidelines for Groundwater Extraction Released',
      description: 'Ministry announces updated regulations for commercial groundwater usage.'
    },
    {
      id: '2',
      date: '2024-03-10',
      title: 'Groundwater Conservation Initiative Launched',
      description: 'Government launches new program to promote sustainable groundwater management.'
    },
    {
      id: '3',
      date: '2024-03-05',
      title: 'Artificial Recharge Projects Approved',
      description: 'Five new artificial recharge projects approved in water-stressed regions.'
    }
  ];

  return (
    <section className="card">
      <div className="flex items-center space-x-2 mb-6">
        <div className="bg-primary/10 p-2 rounded-lg">
          <Newspaper className="h-6 w-6 text-primary" />
        </div>
        <h2 className="text-xl font-bold text-gray-800">Latest Updates</h2>
      </div>
      <div className="space-y-4">
        {news.map((item) => (
          <div 
            key={item.id} 
            className="border-l-4 border-primary pl-4 py-2 hover:bg-primary/5 transition-colors"
          >
            <time className="text-sm text-gray-600">{item.date}</time>
            <h3 className="font-semibold text-gray-800">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}