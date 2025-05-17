import { useLoginMutation } from "@/query/login-mutation";
import { useState } from "react";

export function LoginForm(){
  const loginMutation = useLoginMutation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return <div className="flex flex-col gap-2">
    
  </div>

}