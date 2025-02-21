import { ChartData } from 'chart.js';

export interface ReportData {
  reportType: string;
  location: string;
  period: string;
  parameters: string[];
}

export interface ProcessedReport {
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
}