import { NextResponse } from "next/server";
import { getServerSession } from "@/lib/auth";
import { getPool } from "@/lib/db";
import { getPhoneStatus } from "@/lib/phone-verification";

export const runtime = "nodejs";

export async function GET() {
  try {
    const session = await getServerSession();
    if (!session) {
      return NextResponse.json({ loggedIn: false, phone: null, phoneVerified: false });
    }

    const status = await getPhoneStatus(getPool(), session.userId);
    return NextResponse.json({ loggedIn: true, ...status });
  } catch (error) {
    console.error("[phone/status]", error);
    return NextResponse.json({ loggedIn: false, phone: null, phoneVerified: false }, { status: 500 });
  }
}
