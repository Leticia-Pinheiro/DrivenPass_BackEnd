declare global {
    namespace NodeJS {
      interface ProcessEnv {
        SECRET_KEY_TOKEN: string;
        MODE: 'DEV' | 'PROD';
        PORT?: number;
        DATABASE_URL: string;
      }
    }
  }

export {}