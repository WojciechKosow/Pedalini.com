import { cookies } from "next/headers";
import { authService } from "./container";
import { verifyAccessToken } from "./jwt";

export async function getCurrentUser() {
  const cookieStore = await cookies();
  const token = cookieStore.get("access_token")?.value;

  if (!token) {
    return null;
  }

  try {
    const payload = await verifyAccessToken(token);

    if (typeof payload.sub !== "string") {
      return null;
    }

    return await authService.getUserById(payload.sub);
  } catch (error) {
    console.error("[AUTH CURRENT USER]", error);
    return null;
  }
}
