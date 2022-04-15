interface IEnv {
  PORT: number;
  JWT_TOKEN_SECRET: string;
  JWT_REFRESH_SECRET: string;
  JWT_TOKEN_EXPIRES_MINUTES: number;
  JWT_REFRESH_TOKEN_EXPIRES_MINUTES: number;
}

export default function env(): IEnv {
  return {
    PORT: Number(process.env.PORT) || 3025,
    JWT_TOKEN_SECRET: process.env.JWT_TOKEN_SECRET || '',
    JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET || '',
    JWT_TOKEN_EXPIRES_MINUTES:
      Number(process.env.JWT_TOKEN_EXPIRES_MINUTES) || 5,
    JWT_REFRESH_TOKEN_EXPIRES_MINUTES:
      Number(process.env.JWT_REFRESH_TOKEN_EXPIRES_MINUTES) || 480,
  };
}
