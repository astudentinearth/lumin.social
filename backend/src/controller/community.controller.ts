import { newCommunitySchema } from "@/dto/new-community-dto";
import { Responses } from "@/responses";
import { CommunityService } from "@/service/community.service";
import { AuthRequest, Validated } from "@/types";
import { RequestHandler } from "express";

const getCommunities: RequestHandler = async (_req, res) => {
  return Responses.Ok(res, await CommunityService.getCommunities())
}

const createCommunity: RequestHandler = async (req: Validated<typeof newCommunitySchema, AuthRequest>, res) => {
  if (req.session.userId == null) {
    return Responses.Unauthorized(res);
  }
  const community = await CommunityService.createCommunity(req.body, req.session.userId);
  return Responses.Ok(res, community);
}



export const CommunityController = {
  getCommunities,
  createCommunity
}