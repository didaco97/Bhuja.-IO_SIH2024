import React from 'react';

interface ParameterSelectionProps {
  parameters: string[];
  selectedParameters: string[];
  onToggle: (parameter: string) => void;
}

export default function ParameterSelection({ parameters, selectedParameters, onToggle }: ParameterSelectionProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-800">Select Parameters to Analyze</h3>
      <div className="grid grid-cols-2 gap-3">
        {parameters.map((parameter) => (
          <label
            key={parameter}
            className={`border rounded-lg p-4 cursor-pointer hover:border-primary transition-colors ${
              selectedParameters.includes(parameter) ? 'border-primary bg-primary/5' : ''
            }`}
          >
            <input
              type="checkbox"
              checked={selectedParameters.includes(parameter)}
              onChange={() => onToggle(parameter)}
              className="hidden"
            />
            <div className="flex items-center space-x-3">
              <div className={`w-4 h-4 rounded border-2 ${
                selectedParameters.includes(parameter) ? 'border-primary bg-primary' : 'border-gray-400'
              }`} />
              <span>{parameter}</span>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}