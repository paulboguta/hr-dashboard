declare global {
  namespace NodeJS {
    interface ProcessEnv {
      VITE_APP_API: string;
    }
  }
}

export {};
