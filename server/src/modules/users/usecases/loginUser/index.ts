import { UserRepository } from "@modules/users/repository/UserRepository.js";
import { LoginUserUsecase } from "./LoginUserUsecase.js";
import { LoginUserController } from "./LoginUserController.js";

const userRepository = UserRepository.getInstance();
const loginUserUseCase = new LoginUserUsecase(userRepository);
export const loginUserController = new LoginUserController(loginUserUseCase);
