import { randomUUID } from "crypto";

import type { UserRepository } from "@/repositories/users/user.repository";

import { hashPassword, verifyPassword } from "./password";

import { createAccessToken } from "./jwt";

export class AuthService {
  constructor(private readonly users: UserRepository) {}

  async register(email: string, password: string) {
    const normalizedEmail = email.trim().toLowerCase();

    const existing = await this.users.findByEmail(normalizedEmail);

    if (existing) {
      throw new Error("USER_ALREADY_EXISTS");
    }

    const passwordHash = await hashPassword(password);

    const user = await this.users.create({
      id: randomUUID(),
      email: normalizedEmail,
      passwordHash,
      createdAt: new Date(),
    });

    const accessToken = await createAccessToken(user.id);

    return {
      user: {
        id: user.id,
        email: user.email,
      },
      accessToken,
    };
  }

  async login(email: string, password: string) {
    const normalizedEmail = email.trim().toLowerCase();

    const user = await this.users.findByEmail(normalizedEmail);

    if (!user) {
      throw new Error("INVALID_CREDENTIALS");
    }

    const valid = await verifyPassword(password, user.passwordHash);

    if (!valid) {
      throw new Error("INVALID_CREDENTIALS");
    }

    const accessToken = await createAccessToken(user.id);

    return {
      user: {
        id: user.id,
        email: user.email,
      },
      accessToken,
    };
  }

  async getUserById(id: string) {
    const user = await this.users.findById(id);

    if (!user) {
      return null;
    }

    return {
      id: user.id,
      email: user.email,
    };
  }
}
