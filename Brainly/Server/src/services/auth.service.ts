import z from "zod";
import ApiError from "../ApiHandlers/ApiError";
import {
  createUserInDB,
  findUserByEmail,
  findUserByEmailAndComparePassword,
  findUserById,
  findUserByUsernameAndEmail,
} from "../dao/auth.dao";
import { generateAccessAndRefreshToken } from "../utils/generateTokens";

// Signup Endpoint starts Here
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

// Signup Service
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

    const createdUser = await createUserInDB(
      user.username,
      user.email,
      user.password
    );

    const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
      createdUser._id
    );

    const finalUser = await findUserById(createdUser._id);
    if (!finalUser) {
      throw new ApiError(501, "Something went wrong !!!");
    }

    return { user: finalUser, accessToken, refreshToken };
  } catch (err) {
    throw err;
  }
};

// Signin Endpoint starts Here
const signinSchema = z.object({
  email: z.string().email("Invalid Email"),
  password: z
    .string()
    .max(100),
});
type signinInput = z.infer<typeof signinSchema>;

// Signin Service
export const signinService = async (data: any) => {
  try {
    if (!data.email || !data.password) {
      throw new ApiError(400, "All Fields Are Required!");
    }

    const result = signinSchema.safeParse(data);
    if (!result.success) {
      throw result.error;
    }

    const user: signinInput = result.data;

    const findUser = await findUserByEmailAndComparePassword(
      user.email,
      user.password
    );

    const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
      findUser._id
    );

    return { user: findUser, accessToken, refreshToken };
  } catch (err) {
    throw err;
  }
};
