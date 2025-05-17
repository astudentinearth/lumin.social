import { useLoginMutation } from "@/query/login-mutation";
import { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export function LoginForm(){
  const loginMutation = useLoginMutation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submit = ()=>{
    loginMutation.mutate({username, password});
  }

  return <div className="flex flex-col gap-2">
    <Label>{"Kullanıcı adı"}</Label>
    <Input value={username} onChange={(e)=>setUsername(e.target.value)}/>
    <Label>{"Şifre"}</Label>
    <Input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
    <Button disabled={loginMutation.isPending} onClick={submit}>Giriş yap</Button>
  </div>

}