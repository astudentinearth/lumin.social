import { AuthService } from "@/service/auth.service"
import { useQuery } from "@tanstack/react-query"

export const useCurrentUserQuery = ()=>{
  return useQuery({
    queryKey: ["user"],
    queryFn: AuthService.getCurrentUser
  })
}