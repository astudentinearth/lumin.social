import { communityRepository } from "@/data/community-repository";
import { NewCommunityDTO } from "@/dto/new-community-dto";
import { randomUUID } from "crypto";

async function getCommunities() {
  return await communityRepository.findAll();
}

async function createCommunity(community: NewCommunityDTO, user_id: string) {
  const id = randomUUID();
  const value = {
    ...community,
    creator_id: user_id,
    id,
    created_at: new Date(),
  };
  await communityRepository.create(value);
  return value;
}

export const CommunityService = {
  getCommunities,
  createCommunity
};
