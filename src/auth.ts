import { NextFunction, Request, Response } from "express";
import { sign, SignOptions, verify } from "jsonwebtoken";
const SECRET_KEY = "secretkey";
const JWT_OPTIONS: SignOptions = {
  algorithm: "HS256",
  // expiresIn: 3600000,
};
export function encodeWithJWT(username: string) {
  return sign(username, SECRET_KEY, JWT_OPTIONS);
}

export function verifyJwtMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401);

  verify(token, SECRET_KEY, JWT_OPTIONS, (err: any, user: any) => {
    console.log("JWT",{err,user});

    if (err) return res.sendStatus(403);
    //@ts-ignore
    req.user = user;

    next();
  });
}
