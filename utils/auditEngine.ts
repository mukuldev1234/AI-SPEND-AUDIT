export function runAudit(
  tools: any[]
) {
  return tools.map((tool) => {
    let recommendedSpend =
      tool.spend;

    let recommendation =
      "Your pricing looks good.";

    if (
      tool.plan === "Team" &&
      tool.seats <= 2
    ) {
      recommendedSpend =
        tool.spend * 0.5;

      recommendation =
        "Downgrade to Pro plan.";
    }

    if (
      tool.tool
        .toLowerCase()
        .includes("chatgpt")
    ) {
      recommendedSpend =
        tool.spend * 0.7;

      recommendation =
        "Consider ChatGPT Plus instead.";
    }

    const savings =
      tool.spend -
      recommendedSpend;

    return {
      ...tool,
      currentSpend:
        tool.spend,
      recommendedSpend,
      savings,
      recommendation,
    };
  });
}