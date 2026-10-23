import { NextResponse } from "next/server";
import { z } from "zod";

import { authService } from "@/lib/auth/container";

export const runtime = "nodejs";

const loginSchema = z.object({
  email: z.string().trim().email().max(254),
  password: z.string().min(1).max(128),
});

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "INVALID_INPUT" }, { status: 400 });
  }

  const parsed = loginSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "INVALID_INPUT" }, { status: 400 });
  }

  try {
    const result = await authService.login(
      parsed.data.email,
      parsed.data.password,
    );

    const response = NextResponse.json({
      user: result.user,
    });

    response.cookies.set("access_token", result.accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 15 * 60,
    });

    return response;
  } catch (error) {
    if (error instanceof Error && error.message === "INVALID_CREDENTIALS") {
      return NextResponse.json(
        { error: "INVALID_CREDENTIALS" },
        { status: 401 },
      );
    }

    console.error("[AUTH LOGIN]", error);

    return NextResponse.json(
      { error: "INTERNAL_SERVER_ERROR" },
      { status: 500 },
    );
  }
}
