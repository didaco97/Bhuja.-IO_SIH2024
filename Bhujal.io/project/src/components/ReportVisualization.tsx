import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
import { Download } from 'lucide-react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface ReportVisualizationProps {
  reportData: {
    title: string;
    location: string;
    period: string;
    parameters: string[];
    content: string;
    charts: {
      [key: string]: {
        type: 'line' | 'bar';
        data: ChartData<'line' | 'bar'>;
      };
    };
  };
  onDownload: () => void;
}

export default function ReportVisualization({ reportData, onDownload }: ReportVisualizationProps) {
  return (
    <div className="space-y-6 bg-white p-6 rounded-lg shadow-lg">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{reportData.title}</h2>
          <p className="text-gray-600">Location: {reportData.location}</p>
          <p className="text-gray-600">Period: {reportData.period}</p>
          <p className="text-gray-600">Parameters: {reportData.parameters.join(', ')}</p>
        </div>
        <button
          onClick={onDownload}
          className="btn btn-primary flex items-center gap-2"
        >
          <Download className="h-5 w-5" />
          Download PDF
        </button>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(reportData.charts).map(([key, chart]) => (
          <div key={key} className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">{key}</h3>
            {chart.type === 'line' ? (
              <Line data={chart.data} options={{ responsive: true }} />
            ) : (
              <Bar data={chart.data} options={{ responsive: true }} />
            )}
          </div>
        ))}
      </div>

      {/* Report Content */}
      <div className="prose max-w-none">
        <div dangerouslySetInnerHTML={{ __html: reportData.content }} />
      </div>
    </div>
  );
}