import { userRepository } from "@/data/user-repository";
import { loginDTO } from "@/dto/login-dto";
import { Responses } from "@/responses";
import { AuthService } from "@/service/auth.service";
import { AuthRequest, Validated } from "@/types";
import { UserDTO } from "@common/dto/user-dto";
import { RequestHandler } from "express";

const login: RequestHandler = async (
  req: Validated<typeof loginDTO, AuthRequest>,
  res,
  next,
) => {
  const result = await AuthService.handleLogin(
    req.body.username,
    req.body.password,
  );
  console.log(result);
  if (!result)
    return Responses.Unauthorized(res, {
      message: "Incorrect username or password",
    });
  req.session.regenerate((err) => {
    if (err) next(err);
    req.session.userId = result.id;
    req.session.save(err => {
      if(err) return next(err);
      return Responses.Ok(res, { user: result });
    });
      
  });
};

const getCurrentUser: RequestHandler = async (req: AuthRequest, res) => {
  if(req.session.userId != null){
    const id = req.session.userId;
    const user = await userRepository.findById(id);
    if(!user) return Responses.NotFound(res);
    const dto = {
      id: user.id,
      join_date: user.join_date.toISOString(),
      username: user.username
    } satisfies UserDTO;
     return Responses.Ok(res, {user: dto});
  }
  else return Responses.Unauthorized(res);
}

const getUserById: RequestHandler = async (req: AuthRequest, res) => {
  const userId = req.query["user_id"];
  if (!userId || typeof userId !== "string") {
    return Responses.BadRequest(res);
  }
  const user = await userRepository.findById(userId);
  if (!user) return Responses.NotFound(res);
  const dto = {
    id: user.id,
    join_date: user.join_date.toISOString(),
    username: user.username
  } satisfies UserDTO;
  return Responses.Ok(res, { user: dto });
};

const logout: RequestHandler = async (req: AuthRequest, res) => {
  req.session.userId = undefined;
  req.session.save(err => {
    if(err) return res.sendStatus(500);
    return Responses.Ok(res, {message: "Logged out"});
  })
}

export const AuthController = {
  login,
  getCurrentUser,
  getUserById,
  logout
};
