import { JwtPayload } from "jsonewebtoken";

// Define strictly what your token payload looks like
export interface UserPayload extends JwtPayload {
  id: string;
  email: string;
}

declare global {
  namespace Express {
    interface Request {
      // Makt it Optional because not every request have a user
      user?: UserPayload;
    }
  }
}
