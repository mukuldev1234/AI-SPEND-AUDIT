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
    const toolPlans =
      pricingData[
        tool.name as keyof typeof pricingData
      ];

    if (!toolPlans) {
      return {
        ...tool,
        savings: 0,
        recommendation:
          "No recommendation available",
      };
    }

    const currentPrice =
      toolPlans[
        tool.plan as keyof typeof toolPlans
      ] || 0;

    let recommendedPrice =
      currentPrice;

    let recommendation =
      "Current plan is optimal";

    // BASIC AUDIT LOGIC

    if (
      tool.seats <= 2 &&
      tool.plan === "Team"
    ) {
      recommendedPrice =
        Math.max(
          currentPrice - 10,
          0
        );

      recommendation =
        "Downgrade to lower tier";
    }

    if (
      tool.spend >
      currentPrice *
        tool.seats
    ) {
      recommendedPrice =
        currentPrice;

      recommendation =
        "You may be overspending compared to official pricing";
    }

    const estimatedSpend =
      currentPrice *
      tool.seats;

    const savings = Math.max(
      tool.spend -
        estimatedSpend,
      0
    );

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
