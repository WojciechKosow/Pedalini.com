import { NextResponse } from "next/server";
import { z } from "zod";

import { authService } from "@/lib/auth/container";

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(128),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const data = registerSchema.parse(body);

    const result = await authService.register(data.email, data.password);

    const response = NextResponse.json(
      {
        user: result.user,
      },
      { status: 201 },
    );

    response.cookies.set("access_token", result.accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 15,
    });

    return response;
  } catch (error) {
    console.error("REGISTER ERROR:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "INVALID_INPUT" }, { status: 400 });
    }

    if (error instanceof Error && error.message === "USER_ALREADY_EXISTS") {
      return NextResponse.json(
        { error: "USER_ALREADY_EXISTS" },
        { status: 409 },
      );
    }

    return NextResponse.json(
      { error: "INTERNAL_SERVER_ERROR" },
      { status: 500 },
    );
  }
}
