export interface ToolInput {
  tool: string;
  plan: string;
  spend: number;
  seats: number;
}

export interface AuditResult {
  tool: string;
  currentSpend: number;
  recommendedSpend: number;
  savings: number;
  recommendation: string;
}