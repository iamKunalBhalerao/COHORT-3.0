import { z } from "zod";

export const signUpUserSchema = z.object({
  username: z
    .string()
    .min(3, "Username should be contain minimum 3 letters!")
    .max(200, "Username should be contain maximum 250 letters!"),
  email: z.email().min(4, "Email should be contain minimum 4 letters!").trim(),
  password: z
    .string()
    .min(6, "Password should be contain minimum 6 letters!")
    .max(250, "Password should be contain maximum 250 letters!"),
});

export const signInUserSchema = z.object({
  email: z.email().min(4, "Email should be contain minimum 4 letters!").trim(),
  password: z
    .string()
    .min(6, "Password should be contain minimum 6 letters!")
    .max(250, "Password should be contain maximum 250 letters!"),
});

export const createRoomSchema = z.object({
  roomName: z
    .string()
    .min(3, "Room Name should be contain minimum 3 Letters!")
    .max(50, "Room Name should be contain maximum 50 Letters!"),
});
