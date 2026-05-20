import { Request, Response, NextFunction } from "express";

import { verifyToken } from "../services/auth/jwt.service";

export const jwt = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers["authorization"]?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const verify = verifyToken(token);
  if (verify instanceof Error) {
    return res.status(401).json({ message: "Invalid Token" });
  }

  req.user = verify.id;
  next();
};
