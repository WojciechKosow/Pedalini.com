import type { UserRepository } from "./user.repository";
import type { User } from "@/types/user";

export class InMemoryUserRepository implements UserRepository {
  private users = new Map<string, User>();

  constructor() {
    this.users.set("1", {
      id: "1",
      name: "Don Pedalini",
      email: "demo@pedalini.com",
      passwordHash:
        "$argon2id$v=19$m=65536,p=4,t=3$hM9PgR/cvGsMTpnbdhZUFA$J6Z0ai+P/eNydeujKTFbhM5mEeWiURq7tYbwSWZfw1c",
      createdAt: new Date(),
    });
  }

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
