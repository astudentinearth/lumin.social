import type { CommunityDTO } from "@common/dto/community-dto";
import { BASEURL } from "./baseurl";
import { Fetch } from "@/lib/fetch";

async function getCommunities(){
  return await (await fetch(`${BASEURL}/community/get-communities`)).json() as CommunityDTO[];
}

interface CreateCommunityParams {
  name: string;
  description: string;
}

async function createCommunity(params: CreateCommunityParams){
  const response = await Fetch.POST(`/community/create-community`, params);
  if (!response.ok) {
    throw new Error("Failed to create community");
  }
  return await response.json();
}

export const CommunitiesService = {
  getCommunities,
  createCommunity
}