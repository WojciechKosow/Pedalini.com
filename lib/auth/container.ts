import { AuthService } from "./auth.service";
import { InMemoryUserRepository } from "@/repositories/users/in-memory-user.repository";
import { PostgresUserRepository } from "@/repositories/users/postgres-user.repository";
import type { UserRepository } from "@/repositories/users/user.repository";

const globalForAuth = globalThis as typeof globalThis & {
  userRepository?: UserRepository;
};

function createUserRepository(): UserRepository {
  if (process.env.USER_STORAGE === "postgres") {
    return new PostgresUserRepository();
  }

  return new InMemoryUserRepository();
}

export const userRepository = (globalForAuth.userRepository ??=
  createUserRepository());

export const authService = new AuthService(userRepository);
