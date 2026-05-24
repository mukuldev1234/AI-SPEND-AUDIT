"use client";

import { useState } from "react";

import { generateAudit } from "../lib/audit";

export default function AuditForm() {
  const [results, setResults] =
    useState<any>(null);

  const [form, setForm] =
    useState({
      tool: "ChatGPT Team",
      seats: 5,
    });

  const handleSubmit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    const audit =
      generateAudit([
        {
          name: form.tool,
          seats: Number(
            form.seats
          ),
        },
      ]);

    setResults(audit);
  };

  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="glass-card rounded-3xl p-8 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            Free AI Spend Audit
          </h2>

          <form
            onSubmit={
              handleSubmit
            }
            className="space-y-6"
          >
            <select
              className="w-full h-12 px-4 rounded-xl border bg-background"
              value={form.tool}
              onChange={(e) =>
                setForm({
                  ...form,
                  tool:
                    e.target
                      .value,
                })
              }
            >
              <option>
                ChatGPT Team
              </option>

              <option>
                Claude Team
              </option>

              <option>
                Cursor Business
              </option>

              <option>
                GitHub Copilot Business
              </option>
            </select>

            <input
              type="number"
              placeholder="Team Seats"
              className="w-full h-12 px-4 rounded-xl border bg-background"
              value={form.seats}
              onChange={(e) =>
                setForm({
                  ...form,
                  seats:
                    Number(
                      e.target
                        .value
                    ),
                })
              }
            />

            <button className="w-full h-12 rounded-xl bg-primary text-primary-foreground font-medium">
              Generate Audit
            </button>
          </form>

          {results && (
            <div className="mt-10 space-y-4">
              <div className="p-6 rounded-2xl bg-primary text-primary-foreground">
                <h3 className="text-2xl font-bold">
                  Potential Savings
                </h3>

                <p className="text-5xl font-bold mt-2">
                  $
                  {
                    results.totalMonthlySavings
                  }
                  /mo
                </p>

                <p className="mt-2">
                  $
                  {
                    results.totalAnnualSavings
                  }
                  /year
                </p>
              </div>

              {results.recommendations.map(
                (
                  item: any,
                  index: number
                ) => (
                  <div
                    key={index}
                    className="border rounded-2xl p-5"
                  >
                    <h4 className="font-semibold text-lg">
                      {
                        item.name
                      }
                    </h4>

                    <p className="mt-2">
                      {
                        item.recommendation
                      }
                    </p>

                    <p className="text-sm text-muted-foreground mt-2">
                      {
                        item.reason
                      }
                    </p>

                    <p className="mt-3 font-bold">
                      Save $
                      {
                        item.savings
                      }
                      /month
                    </p>
                  </div>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}