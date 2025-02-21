import React from 'react';
import { GraduationCap, Calendar, Clock, Users } from 'lucide-react';

const trainings = [
  {
    title: 'Groundwater Assessment Techniques',
    date: 'April 15-20, 2024',
    duration: '30 hours',
    capacity: '25 participants',
    description: 'Learn modern techniques for groundwater assessment and monitoring.',
  },
  {
    title: 'Water Quality Testing Workshop',
    date: 'May 5-10, 2024',
    duration: '24 hours',
    capacity: '20 participants',
    description: 'Hands-on training in water quality testing and analysis.',
  },
  {
    title: 'Sustainable Groundwater Management',
    date: 'June 1-5, 2024',
    duration: '20 hours',
    capacity: '30 participants',
    description: 'Best practices for sustainable groundwater resource management.',
  },
];

export default function Training() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="card">
        <div className="flex items-center space-x-3 mb-6">
          <div className="bg-primary/10 p-3 rounded-lg">
            <GraduationCap className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Training Opportunities</h1>
            <p className="text-gray-600">Enhance your knowledge in groundwater management</p>
          </div>
        </div>

        <div className="grid gap-6">
          {trainings.map((training, index) => (
            <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">{training.title}</h2>
              <p className="text-gray-600 mb-4">{training.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>{training.date}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>{training.duration}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Users className="h-5 w-5 text-primary" />
                  <span>{training.capacity}</span>
                </div>
              </div>

              <button className="mt-4 btn btn-primary">
                Register Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}