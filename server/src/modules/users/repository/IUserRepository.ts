import { User } from "@prisma/client";

export type CreateUserDTO = {
  name: string;
  lastName: string;
  email: string;
  password: string;
  location?: string;
};

export type IUserRepository = {
  getUserById(id: string): Promise<User | null>;
  findUserByEmail(email: string): Promise<User | null>;
  createUser(data: CreateUserDTO): Promise<User>;
  updateUser(userId: string, data: CreateUserDTO): Promise<User>;
  countUsers(): Promise<number>;
};
