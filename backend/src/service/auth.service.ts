import { userRepository } from "@/data/user-repository";
import { comparePassword } from "@/utils";
import { createUser } from "./user.service";


async function handleLogin(username: string, password: string) {
  const existing = await userRepository.findByUsername(username);
  if (!existing) return await createUser(username, password);
  const validPassword = await comparePassword(password, existing.password_hash);
  if (validPassword) return existing;
  else return undefined;
}

export const AuthService = {
  handleLogin
}