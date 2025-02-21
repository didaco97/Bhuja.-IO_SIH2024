import React from 'react';
import { Book } from 'lucide-react';

const terms = [
  {
    term: 'Aquifer',
    definition: 'An underground layer of water-bearing permeable rock or unconsolidated materials.',
  },
  {
    term: 'Groundwater Table',
    definition: 'The upper surface of the zone of saturation where the water pressure equals atmospheric pressure.',
  },
  {
    term: 'Recharge',
    definition: 'The process by which water is added to the zone of saturation of an aquifer.',
  },
  {
    term: 'Permeability',
    definition: 'The ability of a material to allow water to pass through it.',
  },
  {
    term: 'Drawdown',
    definition: 'The lowering of the water table due to pumping.',
  },
];

export default function Terms() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="card">
        <div className="flex items-center space-x-3 mb-6">
          <div className="bg-primary/10 p-3 rounded-lg">
            <Book className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Groundwater Terms</h1>
            <p className="text-gray-600">Essential terminology for understanding groundwater concepts</p>
          </div>
        </div>

        <div className="space-y-6">
          {terms.map((item, index) => (
            <div key={index} className="border-l-4 border-primary pl-4 py-3">
              <h3 className="text-lg font-semibold text-gray-800">{item.term}</h3>
              <p className="text-gray-600 mt-1">{item.definition}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}