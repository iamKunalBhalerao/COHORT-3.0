import { Request } from "express";

interface SignUp {
  fullName: string;
  email: string;
  password: string;
}
interface SignIn {
  email: string;
  password: string;
}

interface CreateRoom {
    roomName: string;
}

export type SignUpRequest = Request<{}, {}, SignUp>;
export type SignInRequest = Request<{}, {}, SignIn>;
export type CreateRoomRequest = Request<{}, {}, CreateRoom>;
