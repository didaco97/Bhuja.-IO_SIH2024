export const buildReportPrompt = (
  reportType: string,
  location: string,
  period: string,
  parameters: string[]
): string => {
  return `Generate a detailed technical report for ${reportType} in ${location} for ${period}. 
    Focus on the following parameters: ${parameters.join(', ')}. 
    
    Please structure the report with the following sections:
    1. Executive Summary
    2. Methodology
    3. Data Analysis
    4. Key Findings
    5. Recommendations
    
    Format guidelines:
    - Use **bold** for section headings
    - Include specific data points and trends
    - Provide actionable insights
    - Consider local geological conditions
    - Reference relevant standards and guidelines`;
};