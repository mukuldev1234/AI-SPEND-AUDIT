export interface ToolInput {
  tool: string;
  plan: string;
  spend: number;
  seats: number;
}

export interface AuditResult {
  tool: string;
  plan: string;
  currentSpend: number;
  recommendedSpend: number;
  savings: number;
  recommendation: string;
}

export function runAudit(
  tools: ToolInput[]
): AuditResult[] {
  return tools.map((tool) => {
    let recommendedSpend =
      tool.spend;

    let recommendation =
      "Your pricing looks optimized.";

    if (
      tool.tool
        .toLowerCase()
        .includes("chatgpt")
    ) {
      if (
        tool.plan === "Team" &&
        tool.seats <= 2
      ) {
        recommendedSpend =
          tool.spend * 0.5;

        recommendation =
          "Downgrade from Team to Plus plan.";
      }
    }

    if (
      tool.tool
        .toLowerCase()
        .includes("claude")
    ) {
      recommendedSpend =
        tool.spend * 0.7;

      recommendation =
        "Claude Pro may be enough.";
    }

    if (
      tool.tool
        .toLowerCase()
        .includes("cursor")
    ) {
      recommendedSpend =
        tool.spend * 0.8;

      recommendation =
        "Reduce unused Cursor seats.";
    }

    if (
      tool.tool
        .toLowerCase()
        .includes("copilot")
    ) {
      recommendedSpend =
        tool.spend * 0.75;

      recommendation =
        "Switch to Copilot Individual.";
    }

    const savings =
      tool.spend -
      recommendedSpend;

    return {
      tool: tool.tool,
      plan: tool.plan,
      currentSpend:
        tool.spend,
      recommendedSpend:
        Math.round(
          recommendedSpend
        ),
      savings:
        Math.round(savings),
      recommendation,
    };
  });
}