declare namespace Express {
  interface Request {
    currentUser?: ICurrentUserData;
  }
}
interface ICurrentUserData {
  email: string;
  sub: number;
  role: string;
  iat: number;
  exp: number;
}
