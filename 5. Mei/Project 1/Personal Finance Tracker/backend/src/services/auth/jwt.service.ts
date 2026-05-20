import jwt from "jsonwebtoken";

export const verifyToken = (token: string): Promise<string | jwt.JwtPayload> => {
  return new Promise((resolve, reject) => {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    if (decoded instanceof Error) {
      return reject(decoded);
    }
    resolve(decoded);
  });
};
