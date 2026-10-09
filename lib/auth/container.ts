import { AuthService } from "./auth.service";
import { InMemoryUserRepository } from "@/repositories/users/in-memory-user.repository";

const userRepository = new InMemoryUserRepository();

export const authService = new AuthService(userRepository);
