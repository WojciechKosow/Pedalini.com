import { SignJWT, jwtVerify } from "jose";
const secret = process.env.JWT_SECRET;

if (!secret) {
  throw new Error("JWT_SECRTET is not configured.");
}

const secretKey = new TextEncoder().encode(secret);

export async function createAccessToken(userId: string) {
  return new SignJWT({
    sub: userId,
    type: "access",
  })
    .setProtectedHeader({
      alg: "HS256",
      typ: "JWT",
    })
    .setIssuedAt()
    .setExpirationTime("15m")
    .setIssuer("pedalini.com")
    .setAudience("pedalini.com")
    .sign(secretKey);
}

export async function verifyAccessToken(token: string) {
  const { payload } = await jwtVerify(token, secretKey, {
    issuer: "pedalini.com",
    audience: "pedalini.com",
    algorithms: ["HS256"],
  });

  if (payload.type !== "access" || typeof payload.sub !== "string") {
    throw new Error("INVALID_ACCESS_TOKEN");
  }

  return payload;
}
