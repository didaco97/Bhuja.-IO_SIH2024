import { PerplexityClient } from '../api/perplexity';
import { ReportData, ProcessedReport } from './types';
import { generateChartData, processReportContent } from './utils';
import { buildReportPrompt } from './prompts';
import { downloadPDF } from './pdf';

export class ReportGenerator {
  private static instance: ReportGenerator;
  private perplexityClient: PerplexityClient;

  private constructor() {
    this.perplexityClient = PerplexityClient.getInstance();
  }

  public static getInstance(): ReportGenerator {
    if (!this.instance) {
      this.instance = new ReportGenerator();
    }
    return this.instance;
  }

  public async generateReport(data: ReportData, apiKey: string): Promise<ProcessedReport> {
    const prompt = buildReportPrompt(
      data.reportType,
      data.location,
      data.period,
      data.parameters
    );

    try {
      const response = await this.perplexityClient.generateResponse([
        { role: 'user', content: prompt }
      ], apiKey);

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
  }

  public async downloadReportAsPDF(report: ProcessedReport): Promise<void> {
    await downloadPDF(report);
  }
}