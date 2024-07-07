import { NextFunction, Request, Response } from "express";
import jwt, { Secret } from "jsonwebtoken";

import AppError from "@shared/errors/AppError.js";

type JwtPayloadProps = {
  userId: string;
  role: string;
};

export const isAuthenticated = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { access_token: token } = request.cookies;

  if (!token) {
    throw new AppError("Failed to verify access token", 401);
  }

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET as Secret);

    const { userId, role } = decodedToken as JwtPayloadProps;

    request.user = {
      userId,
      role,
    };

    return next();
  } catch (err) {
    if (err.name == "TokenExpiredError") {
      throw new AppError("Access token expired", 401);
    }
    if (err.name == "JsonWebTokenError") {
      throw new AppError("Invalid access token", 401);
    }
    console.log(err);

    throw new AppError("Failed to verify access token", 401);
  }
};
