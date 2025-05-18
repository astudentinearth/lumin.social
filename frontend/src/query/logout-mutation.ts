import { AuthService } from "@/service/auth.service";
import { useMutation } from "@tanstack/react-query";

export const useLogoutMutation = () => {
  return useMutation({
    mutationFn: () => {
      return AuthService.logout();
    },
    onSuccess: () => {
      location.reload();
    },
  });
};
