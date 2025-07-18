import { nanoid } from "nanoid";

export const cookieOptions = {
  httpOnly: true,
  secure: true,
  sameSite: "none",
};

export const generateNanoId = async (length: number) => {
  return nanoid(length);
};
