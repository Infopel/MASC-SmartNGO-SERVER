import { NextFunction, Request, Response } from "express";
import { encodeWithJWT } from "./auth";
import { db } from "./seed";

export const login = async (req: Request, res: Response, next: NextFunction) => {

  const { email, password } = await req.body;
  const allUsers = db.user.getAll();
  const foundUser = allUsers.find((user) => (user.login as string).trim().toUpperCase() === (email as string).trim().toUpperCase());
  if (
    password === "smartngo@2022" &&
    foundUser
  ) {
    res.status(200).json({
      token: encodeWithJWT(email),
      date: new Date().toISOString(),
    });
  } else {
    res.status(404).json("User not found or password doesn't match");
  }
  next()
};

export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {

  //@ts-ignore
  const user = db.user.getAll().find((u) => u.login === req.user);
  if (user) {
    res.status(200).json({
      name: user.firstname + " " + user.lastname,
      username: user.login,
    });
    next()
  } else {
    res.status(404);
    next()
  }
};
