export const pricingData = {
  ChatGPT: {
    Plus: 20,
    Team: 30,
    Enterprise: 60,
  },

  Claude: {
    Pro: 20,
    Team: 30,
    Enterprise: 60,
  },

  Cursor: {
    Pro: 20,
    Business: 40,
  },

  Copilot: {
    Individual: 10,
    Business: 19,
  },

  Gemini: {
    Pro: 20,
    Ultra: 50,
  },

  Windsurf: {
    Pro: 15,
  },
};

export function runAudit(
  tools: any[]
) {
  return tools.map((tool) => {
    const toolData =
      pricingData[
        tool.name as keyof typeof pricingData
      ];

    if (!toolData) {
      return {
        ...tool,
        currentSpend:
          tool.spend,
        recommendedSpend:
          tool.spend,
        savings: 0,
        recommendation:
          "No recommendation found",
      };
    }

    const planPrice =
      toolData[
        tool.plan as keyof typeof toolData
      ] || 0;

    const estimatedSpend =
      planPrice *
      tool.seats;

    const savings = Math.max(
      tool.spend -
        estimatedSpend,
      0
    );

    let recommendation =
      "Current setup looks good";

    if (
      tool.plan === "Team" &&
      tool.seats <= 2
    ) {
      recommendation =
        "Downgrade from Team plan to save money";
    }

    if (savings > 100) {
      recommendation =
        "You are overspending significantly. Consider switching plans or using AI credits.";
    }

    return {
      ...tool,

      currentSpend:
        tool.spend,

      recommendedSpend:
        estimatedSpend,

      savings,

      recommendation,
    };
  });
}