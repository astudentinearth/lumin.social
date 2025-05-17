import { AuthService } from "@/service/auth.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useLoginMutation = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({
      username,
      password,
    }: {
      username: string;
      password: string;
    }) => AuthService.login(username, password),
    onSuccess(){
      qc.refetchQueries({queryKey: ["user"]})
    }
  });
};
