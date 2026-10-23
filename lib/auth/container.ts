import { AuthService } from "./auth.service";
import { InMemoryUserRepository } from "@/repositories/users/in-memory-user.repository";

const globalForAuth = globalThis as typeof globalThis & {
  userRepository?: InMemoryUserRepository;
};

export const userRepository = (globalForAuth.userRepository ??=
  new InMemoryUserRepository());

export const authService = new AuthService(userRepository);
