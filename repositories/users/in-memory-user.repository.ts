import type { UserRepository } from "./user.repository";
import type { User } from "@/types/user";

export class InMemoryUserRepository implements UserRepository {
  private users = new Map<string, User>();

  async findByEmail(email: string): Promise<User | null> {
    return (
      [...this.users.values()].find((user) => user.email === email) ?? null
    );
  }

  async findById(id: string): Promise<User | null> {
    return this.users.get(id) ?? null;
  }

  async create(user: User): Promise<User> {
    this.users.set(user.id, user);
    return user;
  }
}
