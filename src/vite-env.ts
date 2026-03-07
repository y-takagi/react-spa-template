const API_BASE_URL = import.meta.env.PROD ? import.meta.env.VITE_API_BASE_URL : '/api'; // Used for vite server proxy
const MODE = import.meta.env.MODE as 'production' | 'staging' | 'development';
const RELEASE_BUILD = import.meta.env.PROD;

export const APP_ENV = { API_BASE_URL, MODE, RELEASE_BUILD } as const;
