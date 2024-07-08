import { UserRepository } from "@modules/users/repository/UserRepository.js";
import { UpdateUserUsecase } from "./UpdateUserUsecase.js";
import { UpdateUserController } from "./UpdateUserController.js";

const userRepository = UserRepository.getInstance();
const updateUserUseCase = new UpdateUserUsecase(userRepository);
export const updateUserController = new UpdateUserController(updateUserUseCase);
