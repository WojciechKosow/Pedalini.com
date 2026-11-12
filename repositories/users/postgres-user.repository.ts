import pool from "@/lib/db";
import type { UserRepository } from "./user.repository";
import type { User } from "@/types/user";

type UserRow = {
  id: string;
  name: string;
  email: string;
  password_hash: string;
  created_at: Date;
};

function toUser(row: UserRow): User {
  return {
    id: row.id,
    name: row.name,
    email: row.email,
    passwordHash: row.password_hash,
    createdAt: row.created_at,
  };
}

export class PostgresUserRepository implements UserRepository {
  async findByEmail(email: string): Promise<User | null> {
    const result = await pool.query<UserRow>(
      "SELECT * FROM users WHERE email = $1",
      [email],
    );

    if (result.rows.length === 0) {
      return null;
    }

    return toUser(result.rows[0]);
  }

  async findById(id: string): Promise<User | null> {
    const result = await pool.query<UserRow>(
      "SELECT * FROM users WHERE id = $1",
      [id],
    );

    if (result.rows.length === 0) {
      return null;
    }

    return toUser(result.rows[0]);
  }

  async create(user: User): Promise<User> {
    const result = await pool.query<UserRow>(
      "INSERT INTO users (id, name, email, password_hash, created_at) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [user.id, user.name, user.email, user.passwordHash, user.createdAt],
    );

    return toUser(result.rows[0]);
  }
}
