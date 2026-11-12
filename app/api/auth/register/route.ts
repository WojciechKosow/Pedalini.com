import { NextResponse } from "next/server";
import { z } from "zod";

import { authService } from "@/lib/auth/container";

export const runtime = "nodejs";

const registerSchema = z.object({
  email: z.string().trim().email().max(254),
  password: z.string().min(8).max(128),
});

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "INVALID_INPUT" }, { status: 400 });
  }

  const parsed = registerSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "INVALID_INPUT" }, { status: 400 });
  }

  try {
    const user = await authService.register(
      parsed.data.email,
      parsed.data.password,
    );

    return NextResponse.json({ user }, { status: 201 });
  } catch (error) {
    if (error instanceof Error && error.message === "USER_ALREADY_EXISTS") {
      return NextResponse.json(
        { error: "USER_ALREADY_EXISTS" },
        { status: 409 },
      );
    }

    console.error("[AUTH REGISTER]", error);

    return NextResponse.json(
      { error: "INTERNAL_SERVER_ERROR" },
      { status: 500 },
    );
  }
}
