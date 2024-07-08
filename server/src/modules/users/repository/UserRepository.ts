import { User } from "@prisma/client";
import { CreateUserDTO, IUserRepository } from "./IUserRepository.js";
import { prisma } from "@config/prisma.js";

export class UserRepository implements IUserRepository {
  private static instance: UserRepository;

  private constructor() {}

  public static getInstance(): UserRepository {
    if (!UserRepository.instance) {
      UserRepository.instance = new UserRepository();
    }
    return UserRepository.instance;
  }

  async createUser({
    name,
    email,
    password,
    lastName,
    location,
  }: CreateUserDTO): Promise<User> {
    return await prisma.user.create({
      data: { name, email, password, lastName, location },
    });
  }

  async findUserByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    return user;
  }

  async getUserById(userId: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    return user;
  }

  async updateUser(
    userId: string,
    { name, lastName, email, password, location }: CreateUserDTO
  ): Promise<User> {
    return await prisma.user.update({
      where: { id: userId },
      data: { name, email, password, lastName, location },
    });
  }

  async countUsers(): Promise<number> {
    return await prisma.user.count();
  }
}
