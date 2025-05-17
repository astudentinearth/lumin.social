
import { BASEURL } from "@/service/baseurl";

async function GET(route: string) {
  const req = await fetch(`${BASEURL}${route}`, {
    credentials: "include"
  });
  return req;
}

async function POST(route: string, body: unknown){
  const req = await fetch(`${BASEURL}${route}`, {
    credentials: "include",
    method: "POST",
    body: JSON.stringify(body)
  });
  return req;
}

export const Fetch = {
  GET, POST
}