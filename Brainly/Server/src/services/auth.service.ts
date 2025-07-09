import z from "zod";
import bcrypt from "bcrypt";
import ApiError from "../ApiHandlers/ApiError";
import {
  createUserInDB,
  findUserById,
  findUserByUsernameAndEmail,
} from "../dao/auth.dao";
import { generateAccessAndRefreshToken } from "../utils/generateTokens";

const signupSchema = z.object({
  username: z
    .string()
    .min(2, "Username must be greater than 2 characters.")
    .max(100, "Username must be less than 100 characters."),
  email: z.string().email("Invalid Email"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters.")
    .max(100),
});
type signupInput = z.infer<typeof signupSchema>;

export const signupService = async (data: any) => {
  try {
    if (!data.username || !data.email || !data.password) {
      throw new ApiError(400, "All fields are required");
    }

    const result = signupSchema.safeParse(data);
    if (!result.success) {
      throw result.error;
    }

    const user: signupInput = result.data;

    const findUser = await findUserByUsernameAndEmail(
      user.username,
      user.email
    );

    if (findUser) {
      throw new ApiError(401, "Username or Email is Alredy Exists!");
    }

    const hashedPassword = await bcrypt.hash(user.password, 10);

    const createdUser = await createUserInDB(
      user.username,
      user.email,
      hashedPassword
    );

    if (!createdUser) {
      throw new ApiError(400, "Error While Creating User!");
    }

    const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
      createdUser._id
    );

    if (!accessToken || !refreshToken) {
      throw new ApiError(502, "AccessToken and RefreshToken is not Found");
    }

    const finalUser = await findUserById(createdUser._id);
    if(!finalUser) {
        throw new ApiError(501, "Something went wrong !!!")
    }

    finalUser.refreshToken = refreshToken;
    await finalUser.save({ validateBeforeSave: false });


    return { user: finalUser, accessToken, refreshToken };
  } catch (err) {
    throw err;
  }
};
