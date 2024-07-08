import { UserRepository } from "@modules/users/repository/UserRepository.js";
import { GetCurrentUserUsecase } from "./GetCurrentUserUsecase.js";
import { GetCurrentUserController } from "./GetCurrentUserController.js";

const userRepository = UserRepository.getInstance();
const getCurrentUserUsecase = new GetCurrentUserUsecase(userRepository);
export const getCurrentUserController = new GetCurrentUserController(
  getCurrentUserUsecase
);
