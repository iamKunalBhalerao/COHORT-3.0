import z from "zod";

export const signUpZodSchema = z.object({
  fullName: z.string().min(3).max(250),
  email: z.email().min(3).max(250),
  password: z.string().min(6).max(250),
});

export const signInZodSchema = z.object({
  email: z.email().min(3).max(250),
  password: z.string().min(6).max(250),
});

export const createRoomZodSchema = z.object({
  roomName: z.string().min(3, "Room Name should contain minimum 3 letters.").max(150, "Room Name should contain maximum 150 letters.")
})