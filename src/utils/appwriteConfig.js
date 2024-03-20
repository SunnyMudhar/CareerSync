import { Client, Databases } from 'appwrite';

export const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
export const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
export const COLLECTION_ID_JOBS = import.meta.env.VITE_APPWRITE_COLLECTION_ID_JOBS;
export const COLLECTION_ID_PROFILES = import.meta.env.VITE_APPWRITE_COLLECTION_ID_PROFILES;


const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65fa3ea568d3b51b4f18');

export const databases = new Databases(client);

export default client;