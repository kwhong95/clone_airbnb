import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Data from "lib/data";
import { StoredUserType } from "types/user";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  //* 1. api method가 POST인지 확인
  if (req.method === "POST") {
    //* 2. req.body에 필요한 값이 전부 들어 있는지 확인
    const { email, firstname, lastname, password, birthday } = req.body;
    if (!email || !firstname || !lastname || !password || !birthday) {
      res.statusCode = 400;
      return res.send("필수 데이터가 없습니다.");
    }

    //* 3. email이 중복인지 확인
    const userExist = Data.user.exist({ email });
    if (userExist) {
      res.statusCode = 409;
      res.send("이미 가입된 이메일입니다.");
    }

    //* 4. 패스워드 암호화
    const hasedPassword = bcrypt.hashSync(password, 8);

    //* 5. 유저 정보 추가
    const users = Data.user.getList();
    let userId;
    if (users.length === 0) {
      userId = 1;
    } else {
      userId = users[users.length - 1].id + 1;
    }
    const newUser: StoredUserType = {
      id: userId,
      email,
      firstname,
      lastname,
      password: hasedPassword,
      birthday,
      profileImage: "/static/image/user/default_user_profile_image.jpg",
    };

    Data.user.write([...users, newUser]);

    //* 6. 추가된 유저의 정보와 token 전달
    await new Promise((resolve) => {
      const token = jwt.sign(String(newUser.id), process.env.JWT_SECRET!);
      res.setHeader(
        "Set-Cookie",
        `access_token=${token}; path=/; expires=${new Date(
          Date.now() + 60 * 60 * 24 * 1000 * 3 // 3day
        )}; httponly`
      );
      resolve(token);
    });

    return res.end();
  }
  res.statusCode = 405;

  return res.end();
};
