import { userRepository } from "@/data/user-repository";
import { hashPassword } from "@/utils";
import { UserDTO } from "../../../common/dto/user-dto";

export async function createUser(username: string, password: string) {
  const user = await userRepository.create(username, await hashPassword(password));
  return {
    id: user.id,
    join_date: user.join_date.toISOString(),
    username: user.username
  } satisfies UserDTO;
}

export const UserService = {
  createUser
}