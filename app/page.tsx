"use client";

import { useState } from "react";

import toast from "react-hot-toast";

import Hero from "./components/Hero";
import MultiToolForm from "./components/MultiToolForm";
import AuditChart from "./components/AuditChart";

import { runAudit } from "./lib/audit";


import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function Home() {
  const [tools, setTools] =
    useState([
      {
        tool: "ChatGPT",
        plan: "Team",
        spend: 120,
        seats: 2,
      },
    ]);

  const [results, setResults] =
    useState<any[]>([]);

  const [summary, setSummary] =
    useState("");

  const handleAudit = () => {
    const audit =
      runAudit(tools);

    setResults(audit);

    const totalSavings =
      audit.reduce(
        (acc, item) =>
          acc + item.savings,
        0
      );

    setSummary(
      `Your startup could save approximately $${totalSavings}/month by optimizing AI subscriptions and switching to better pricing plans.`
    );

    toast.success(
      "Audit completed successfully"
    );
  };

  const exportPDF =
    async () => {
      const input =
        document.getElementById(
          "report"
        );

      if (!input) return;

      const canvas =
        await html2canvas(input);

      const imgData =
        canvas.toDataURL(
          "image/png"
        );

      const pdf =
        new jsPDF();

      pdf.addImage(
        imgData,
        "PNG",
        0,
        0,
        210,
        120
      );

      pdf.save(
        "audit-report.pdf"
      );
    };

  const totalSavings =
    results.reduce(
      (acc, item) =>
        acc + item.savings,
      0
    );

  return (
    <main>
      <Hero />

      <section
        id="audit"
        className="max-w-6xl mx-auto px-6 py-16"
      >
        <div className="border rounded-3xl p-8 bg-white/5 backdrop-blur">
          <h2 className="text-3xl font-bold mb-8">
            AI Spend Audit
          </h2>

          <MultiToolForm
            tools={tools}
            setTools={setTools}
          />

          <button
            onClick={
              handleAudit
            }
            className="mt-8 px-8 py-4 rounded-xl bg-black text-white dark:bg-white dark:text-black"
          >
            Run Audit
          </button>
        </div>

        {results.length >
          0 && (
          <div
            id="report"
            className="mt-12 space-y-8"
          >
            <div className="border rounded-3xl p-8 bg-white/5">
              <h2 className="text-5xl font-bold">
                $
                {totalSavings}
                /mo Saved
              </h2>

              <p className="mt-2 text-muted-foreground">
                Annual Savings: $
                {totalSavings *
                  12}
              </p>
            </div>

            <div className="border rounded-3xl p-8 bg-white/5">
              <h3 className="text-2xl font-bold mb-6">
                Savings Chart
              </h3>

              <AuditChart
                data={results}
              />
            </div>

            <div className="border rounded-3xl p-8 bg-white/5">
              <h3 className="text-2xl font-bold mb-6">
                AI Summary
              </h3>

              <p className="text-lg leading-8">
                {summary}
              </p>
            </div>

            <div className="space-y-6">
              {results.map(
                (
                  item,
                  index
                ) => (
                  <div
                    key={index}
                    className="border rounded-2xl p-6 bg-white/5"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-2xl font-bold">
                          {
                            item.tool
                          }
                        </h3>

                        <p className="text-muted-foreground">
                          {
                            item.plan
                          }
                        </p>
                      </div>

                      <div className="text-right">
                        <p className="text-3xl font-bold">
                          $
                          {
                            item.savings
                          }
                        </p>

                        <p className="text-green-400">
                          Savings
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 grid md:grid-cols-3 gap-6">
                      <div>
                        <p className="text-muted-foreground">
                          Current
                        </p>

                        <h4 className="text-2xl font-bold">
                          $
                          {
                            item.currentSpend
                          }
                        </h4>
                      </div>

                      <div>
                        <p className="text-muted-foreground">
                          Recommended
                        </p>

                        <h4 className="text-2xl font-bold">
                          $
                          {
                            item.recommendedSpend
                          }
                        </h4>
                      </div>

                      <div>
                        <p className="text-muted-foreground">
                          Action
                        </p>

                        <h4 className="font-semibold">
                          {
                            item.recommendation
                          }
                        </h4>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>

            <button
              onClick={
                exportPDF
              }
              className="px-8 py-4 rounded-xl border"
            >
              Export PDF
            </button>
          </div>
        )}
      </section>
    </main>
  );
}