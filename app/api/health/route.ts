import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  throw Error("jsdfldsjhlkfsjdlkfsjl");
  return NextResponse.json({ health: "ok" });
}
