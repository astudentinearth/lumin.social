import { loginDTO } from "@/dto/login-dto";
import { Responses } from "@/responses";
import { AuthService } from "@/service/auth.service";
import { AuthRequest, Validated } from "@/types";
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
    req.session.save();
  });
  return Responses.Ok(res, { user: result });
};

const getCurrentUser: RequestHandler = (req: AuthRequest, res) => {
  if(req.session.userId) return Responses.Ok(res, {userId: req.session.userId});
  else return Responses.Unauthorized(res);
}

export const AuthController = {
  login,
  getCurrentUser
};
