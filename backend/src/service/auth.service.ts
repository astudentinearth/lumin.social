import { userRepository } from "@/data/user-repository";
import { comparePassword } from "@/utils";
import { createUser } from "./user.service";
import { UserDTO } from "@common/dto/user-dto";


async function handleLogin(username: string, password: string) {
  const existing = await userRepository.findByUsername(username);
  if (!existing) return await createUser(username, password);
  const validPassword = await comparePassword(password, existing.password_hash);
  const dto: UserDTO = {
    id: existing.id,
    join_date: existing.join_date.toISOString(),
    username: existing.username
  }
  if (validPassword) return dto;
  else return undefined;
}

export const AuthService = {
  handleLogin
}