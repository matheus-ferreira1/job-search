import { User } from "@prisma/client";

export type CreateUserDTO = {
  name: string;
  lastName: string;
  email: string;
  password: string;
};

export type IUserRepository = {
  findUserByEmail(email: string): Promise<User | null>;
  createUser(data: CreateUserDTO): Promise<User>;
};
