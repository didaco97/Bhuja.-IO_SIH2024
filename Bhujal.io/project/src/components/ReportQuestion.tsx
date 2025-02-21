import React from 'react';

interface QuestionProps {
  text: string;
  options: string[];
  selectedValue: string;
  onSelect: (value: string) => void;
}

export default function ReportQuestion({ text, options, selectedValue, onSelect }: QuestionProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-800">{text}</h3>
      <div className="grid gap-3">
        {options.map((option) => (
          <label
            key={option}
            className={`border rounded-lg p-4 cursor-pointer hover:border-primary transition-colors ${
              selectedValue === option ? 'border-primary bg-primary/5' : ''
            }`}
          >
            <input
              type="radio"
              value={option}
              checked={selectedValue === option}
              onChange={() => onSelect(option)}
              className="hidden"
            />
            <div className="flex items-center space-x-3">
              <div className={`w-4 h-4 rounded-full border-2 ${
                selectedValue === option ? 'border-primary bg-primary' : 'border-gray-400'
              }`} />
              <span>{option}</span>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}