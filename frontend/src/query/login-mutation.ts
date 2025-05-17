import { AuthService } from "@/service/auth.service";
import { useMutation } from "@tanstack/react-query";

export const useLoginMutation = () => {
  return useMutation(
    {mutationFn: ({username, password}: {username: string, password: string})=>AuthService.login(username, password)}
  );
};
