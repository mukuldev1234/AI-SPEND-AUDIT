import { pricingData } from "../data/pricing";

export const generateAudit =
  (tools: any[]) => {
    let totalMonthlySavings = 0;

    const recommendations =
      tools.map((tool) => {
        const match =
          pricingData.find(
            (p) =>
              p.tool === tool.name
          );

        if (!match) {
          return {
            ...tool,
            savings: 0,
            recommendation:
              "Current plan looks optimized.",
          };
        }

        const savings =
          (match.monthly -
            match.altPrice) *
          tool.seats;

        totalMonthlySavings +=
          savings;

        return {
          ...tool,

          savings,

          recommendation: `Switch to ${match.cheaperAlternative}`,

          reason: match.reason,
        };
      });

    return {
      recommendations,

      totalMonthlySavings,

      totalAnnualSavings:
        totalMonthlySavings *
        12,
    };
  };