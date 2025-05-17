import { CommunityDTO } from "@common/dto/community-dto";
import { RequestHandler } from "express";

const getCommunities:RequestHandler = (_req, res) => {
  res.status(200).send([
    {
      id: "a",
      created_at: new Date(),
      creator_id: "a",
      description: "Test",
      name: "Test community"
    }
  ] satisfies CommunityDTO[])
}

export const CommunityController = {
  getCommunities
}