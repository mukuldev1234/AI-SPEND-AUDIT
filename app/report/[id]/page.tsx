import { supabase } from "@/lib/supabase";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ReportPage({
  params,
}: Props) {
  const { id } = await params;

  const { data } =
    await supabase
      .from("audits")
      .select("*")
      .eq("id", id)
      .single();

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Report not found
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8">
          Audit Report
        </h1>

        <div className="bg-white/10 rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-4">
            {data.tool}
          </h2>

          <p>
            Plan: {data.plan}
          </p>

          <p>
            Spend: ${data.spend}
          </p>

          <p>
            Seats: {data.seats}
          </p>

          <p className="text-green-400">
            Savings:
            ${data.savings}/mo
          </p>

          <p className="mt-4">
            {
              data.recommendation
            }
          </p>
        </div>
      </div>
    </main>
  );
}