import { ChartData } from 'chart.js';

export const generateChartData = (parameter: string): ChartData<'line' | 'bar'> => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  const randomData = () => Array.from({ length: 6 }, () => Math.random() * 100);

  return {
    labels: months,
    datasets: [{
      label: parameter,
      data: randomData(),
      borderColor: 'rgb(0, 84, 143)',
      backgroundColor: 'rgba(0, 84, 143, 0.1)',
    }]
  };
};

export const processReportContent = (content: string): string => {
  return content
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/\n/g, '<br>');
};