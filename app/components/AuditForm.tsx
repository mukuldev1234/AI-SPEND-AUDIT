"use client";

import { useState } from "react";

import { runAudit } from "../lib/audit";

export default function AuditForm() {
  const [tools, setTools] =
    useState([
      {
        name: "ChatGPT",
        plan: "Team",
        spend: 100,
        seats: 2,
      },
    ]);

  const [results, setResults] =
    useState<any[]>([]);

  const handleAudit = () => {
    const audit =
      runAudit(tools);

    setResults(audit);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
        <input
          type="text"
          placeholder="Tool Name"
          value={tools[0].name}
          onChange={(e) =>
            setTools([
              {
                ...tools[0],
                name:
                  e.target.value,
              },
            ])
          }
          className="w-full p-3 rounded-xl bg-black/20 border border-white/10"
        />

        <input
          type="text"
          placeholder="Plan"
          value={tools[0].plan}
          onChange={(e) =>
            setTools([
              {
                ...tools[0],
                plan:
                  e.target.value,
              },
            ])
          }
          className="w-full p-3 rounded-xl bg-black/20 border border-white/10"
        />

        <input
          type="number"
          placeholder="Monthly Spend"
          value={tools[0].spend}
          onChange={(e) =>
            setTools([
              {
                ...tools[0],
                spend: Number(
                  e.target.value
                ),
              },
            ])
          }
          className="w-full p-3 rounded-xl bg-black/20 border border-white/10"
        />

        <input
          type="number"
          placeholder="Seats"
          value={tools[0].seats}
          onChange={(e) =>
            setTools([
              {
                ...tools[0],
                seats: Number(
                  e.target.value
                ),
              },
            ])
          }
          className="w-full p-3 rounded-xl bg-black/20 border border-white/10"
        />

        <button
          onClick={
            handleAudit
          }
          className="w-full bg-white text-black py-3 rounded-xl font-semibold"
        >
          Run Audit
        </button>
      </div>

      {results.length > 0 && (
        <div className="space-y-4">
          {results.map(
            (
              item,
              index
            ) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-2xl p-6"
              >
                <h2 className="text-2xl font-bold mb-3">
                  {item.name}
                </h2>

                <p>
                  Current Spend:
                  $
                  {
                    item.currentSpend
                  }
                </p>

                <p>
                  Recommended Spend:
                  $
                  {
                    item.recommendedSpend
                  }
                </p>

                <p>
                  Savings: $
                  {item.savings}
                </p>

                <p className="text-green-400 mt-2">
                  {
                    item.recommendation
                  }
                </p>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}
