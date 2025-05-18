import { useParams } from "react-router-dom";

export const usePost = ()=>{
  const params = useParams();
  const postId = params.postId;
  return postId;
}