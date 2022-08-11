import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import Data from "lib/data";
import { StoredUserType } from "types/user";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const accessTocken = req.headers.cookie;
      if (!accessTocken) {
        res.statusCode = 400;
        return res.send("acess_token이 없습니다.");
      }
      const userId = jwt.verify(accessTocken, process.env.JWT_SECRET!);

      const user = Data.user.find({ id: Number(userId) });
      if (!user) {
        res.statusCode = 404;
        return res.send("해당 유저가 없습니다.");
      }

      const userWithoutPassword: Partial<Pick<StoredUserType, "password">> =
        user;
      delete userWithoutPassword.password;
      res.statusCode = 200;
      return res.send(userWithoutPassword);
    } catch (e) {
      console.log(e);
      res.statusCode = 500;
      return res.send(e);
    }
  }
  res.statusCode = 405;

  return res.end();
};
