import { UserRepository } from "@modules/users/repository/UserRepository.js";
import { CreateUserUsecase } from "./CreateUserUsecase.js";
import { CreateUserController } from "./CreateUserController.js";

const userRepository = UserRepository.getInstance();
const createUserUseCase = new CreateUserUsecase(userRepository);
export const createUserController = new CreateUserController(createUserUseCase);
