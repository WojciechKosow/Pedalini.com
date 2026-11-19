import { SignJWT, jwtVerify } from "jose";

const secret = process.env.JWT_SECRET;

if (!secret || new TextEncoder().encode(secret).length < 32) {
  throw new Error("JWT_SECRET must be set to at least 32 bytes.");
}

const secretKey = new TextEncoder().encode(secret);

export async function createAccessToken(userId: string) {
  return new SignJWT({
    type: "access",
  })
    .setProtectedHeader({
      alg: "HS256",
    })
    .setSubject(userId)
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
