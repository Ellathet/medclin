import jwt from 'jsonwebtoken';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      JWT_TOKEN_SECRET: string;
      JWT_REFRESH_SECRET: string;
      JWT_TOKEN_EXPIRES_MINUTES?: number;
      JWT_REFRESH_TOKEN_EXPIRES_MINUTES?: number;
      DATABASE_URL: string;
      PORT?: number;
    }
  }
}

export {};
