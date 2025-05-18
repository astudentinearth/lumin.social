import { AuthService } from "@/service/auth.service"
import { useQuery } from "@tanstack/react-query"

export const useCurrentUserQuery = ()=>{
  return useQuery({
    queryKey: ["user"],
    queryFn: AuthService.getCurrentUser
  })
}

export const useUserByIdQuery = (userId: string) => {
  return useQuery({
    queryKey: ["user", userId],
    queryFn: () => AuthService.getUserById(userId),
    enabled: !!userId,
  })
}