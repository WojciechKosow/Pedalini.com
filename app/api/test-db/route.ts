import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET() {
  try {
    const result = await pool.query("SELECT NOW()");

    return NextResponse.json({
      connected: true,
      time: result.rows[0].now,
    });
  } catch (error) {
    console.error("Database error:", error);

    return NextResponse.json(
      { connected: false, error: "Database connection failed" },
      { status: 500 },
    );
  }
}
