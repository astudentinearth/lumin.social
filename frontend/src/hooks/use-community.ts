import { useParams } from "react-router-dom"

export const useCommunity = ()=>{
  const params = useParams();
  const communityId = params.communityId;
  return communityId;
}