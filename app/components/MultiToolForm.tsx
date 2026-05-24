"use client";

export default function MultiToolForm({
  tools,
  setTools,
}: any) {
  const addTool = () => {
    setTools([
      ...tools,
      {
        tool: "",
        plan: "",
        spend: 0,
        seats: 1,
      },
    ]);
  };

  const updateTool = (
    index: number,
    field: string,
    value: any
  ) => {
    const updated = [...tools];

    updated[index][field] =
      value;

    setTools(updated);
  };

  return (
    <div className="space-y-6">
      {tools.map(
        (
          tool: any,
          index: number
        ) => (
          <div
            key={index}
            className="grid md:grid-cols-4 gap-4"
          >
            <input
              className="p-3 rounded-lg bg-white/5 border"
              placeholder="Tool"
              value={tool.tool}
              onChange={(e) =>
                updateTool(
                  index,
                  "tool",
                  e.target.value
                )
              }
            />

            <input
              className="p-3 rounded-lg bg-white/5 border"
              placeholder="Plan"
              value={tool.plan}
              onChange={(e) =>
                updateTool(
                  index,
                  "plan",
                  e.target.value
                )
              }
            />

            <input
              type="number"
              className="p-3 rounded-lg bg-white/5 border"
              placeholder="Spend"
              value={tool.spend}
              onChange={(e) =>
                updateTool(
                  index,
                  "spend",
                  Number(
                    e.target.value
                  )
                )
              }
            />

            <input
              type="number"
              className="p-3 rounded-lg bg-white/5 border"
              placeholder="Seats"
              value={tool.seats}
              onChange={(e) =>
                updateTool(
                  index,
                  "seats",
                  Number(
                    e.target.value
                  )
                )
              }
            />
          </div>
        )
      )}

      <button
        onClick={addTool}
        className="px-6 py-3 border rounded-lg"
      >
        + Add Tool
      </button>
    </div>
  );
}