import { Fetch } from "@/lib/fetch";
import { BASEURL } from "./baseurl";
import { type UserDTO } from "@common/dto/user-dto";

async function getCurrentUser() {
  const req = await fetch(`${BASEURL}/auth/get-user`, {credentials: "include"});
  if (req.status === 401) return undefined;
  else return (await req.json()) as {user: UserDTO};
}

async function login(username: string, password: string) {
  const req = await fetch(`${BASEURL}/auth/login`, {
    method: "POST",
    body: JSON.stringify({ username, password }),
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include"
  });
  const body = await req.json();
  if (req.status === 401) return body;
  else return body as UserDTO;
}

async function getUserById(userId: string) {
  const req = await Fetch.GET(`/auth/get-user-by-id?user_id=${encodeURIComponent(userId)}`);
  if (req.status === 401) return undefined;
  else return (await req.json()) as {user: UserDTO};
}

export const AuthService = {
  getCurrentUser,
  login,
  getUserById
};
