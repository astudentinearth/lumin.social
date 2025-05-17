import { userRepository } from "@/data/user-repository";
import { hashPassword } from "@/utils";

export async function createUser(username: string, password: string) {
  return await userRepository.create(username, await hashPassword(password));
}

export const UserService = {
  createUser
}