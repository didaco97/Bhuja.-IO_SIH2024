import html2pdf from 'html2pdf.js';
import { ProcessedReport } from './types';
import { REPORT_CONFIG } from '../../config/constants';

export const generatePDFContent = (report: ProcessedReport): string => {
  return `
    <div style="padding: 20px; font-family: Arial, sans-serif;">
      <h1 style="color: #00548F; margin-bottom: 20px; font-size: 24px;">${report.title}</h1>
      <div style="color: #333; line-height: 1.6;">
        <p><strong>Location:</strong> ${report.location}</p>
        <p><strong>Period:</strong> ${report.period}</p>
        <p><strong>Parameters:</strong> ${report.parameters.join(', ')}</p>
        <hr style="margin: 20px 0; border: none; border-top: 1px solid #ccc;">
        ${report.content}
      </div>
    </div>
  `;
};

export const downloadPDF = async (report: ProcessedReport): Promise<void> => {
  const element = document.createElement('div');
  element.innerHTML = generatePDFContent(report);
  
  const opt = {
    margin: REPORT_CONFIG.pdfOptions.margin,
    filename: `groundwater-report-${Date.now()}.pdf`,
    image: { 
      type: REPORT_CONFIG.pdfOptions.imageType, 
      quality: REPORT_CONFIG.pdfOptions.imageQuality 
    },
    html2canvas: { scale: REPORT_CONFIG.pdfOptions.scale },
    jsPDF: { unit: 'in', format: REPORT_CONFIG.pdfOptions.format, orientation: 'portrait' }
  };

  await html2pdf().set(opt).from(element).save();
};