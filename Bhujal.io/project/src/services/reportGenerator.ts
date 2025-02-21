import { generateResponse } from './perplexityApi';
import html2pdf from 'html2pdf.js';
import { ChartData } from 'chart.js';

interface ReportData {
  reportType: string;
  location: string;
  period: string;
  parameters: string[];
}

interface ProcessedReport {
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

const generateChartData = (parameter: string): ChartData<'line' | 'bar'> => {
  // Generate sample data based on parameter type
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

const processReportContent = (content: string): string => {
  return content
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/\n/g, '<br>');
};

export const generateReport = async (data: ReportData, apiKey: string): Promise<ProcessedReport> => {
  if (!apiKey) {
    throw new Error('API key is required');
  }

  const prompt = `Generate a detailed technical report for ${data.reportType} in ${data.location} for ${data.period}. 
    Focus on the following parameters: ${data.parameters.join(', ')}. 
    Include sections for: Executive Summary, Methodology, Data Analysis, Findings, and Recommendations.
    Format the response with proper headings and sections using markdown-style formatting (e.g., **bold** for headings).`;

  try {
    const response = await generateResponse([
      { role: 'user', content: prompt }
    ], apiKey);

    // Process the response and create visualization data
    const charts: ProcessedReport['charts'] = {};
    data.parameters.forEach(param => {
      charts[param] = {
        type: 'line',
        data: generateChartData(param)
      };
    });

    return {
      title: data.reportType,
      location: data.location,
      period: data.period,
      parameters: data.parameters,
      content: processReportContent(response),
      charts
    };
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : 'Failed to generate report');
  }
};

export const downloadReportAsPDF = async (reportData: ProcessedReport) => {
  const element = document.createElement('div');
  element.innerHTML = `
    <div style="padding: 20px; font-family: Arial, sans-serif;">
      <h1 style="color: #00548F; margin-bottom: 20px; font-size: 24px;">${reportData.title}</h1>
      <div style="color: #333; line-height: 1.6;">
        <p><strong>Location:</strong> ${reportData.location}</p>
        <p><strong>Period:</strong> ${reportData.period}</p>
        <p><strong>Parameters:</strong> ${reportData.parameters.join(', ')}</p>
        <hr style="margin: 20px 0; border: none; border-top: 1px solid #ccc;">
        ${reportData.content}
      </div>
    </div>
  `;
  
  const opt = {
    margin: 1,
    filename: `groundwater-report-${Date.now()}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
  };

  await html2pdf().set(opt).from(element).save();
};