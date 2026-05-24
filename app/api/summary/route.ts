import { NextResponse } from "next/server";

export async function POST(
  req: Request
) {
  const body =
    await req.json();

  const {
    tool,
    savings,
  } = body;

  return NextResponse.json({
    summary: `Your ${tool} setup appears to be overspending by approximately $${savings} monthly. Optimizing your AI stack and using discounted infrastructure credits can significantly reduce annual costs while maintaining the same productivity.`,
  });
}