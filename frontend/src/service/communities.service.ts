import type { CommunityDTO } from "@common/dto/community-dto";
import { BASEURL } from "./baseurl";

async function getCommunities(){
  return await (await fetch(`${BASEURL}/community/get-communities`)).json() as CommunityDTO[];
}

export const CommunitiesService = {
  getCommunities
}