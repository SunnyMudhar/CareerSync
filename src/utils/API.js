import { ID } from 'appwrite';
import { databases, DATABASE_ID, COLLECTION_ID_JOBS, COLLECTION_ID_PROFILES } from './appwriteConfig';

export default {
    getJobPost: async () => {
        return await databases.listDocuments(
            DATABASE_ID,
            COLLECTION_ID_JOBS
            );
    },
    getProfilePost: async () => {
        return await databases.listDocuments(DATABASE_ID, COLLECTION_ID_PROFILES);
    },
    postJob: async (data) => {

        const payload = {
            title: data.title,
            company: data.company,
            location: data.location,
            salary: data.salary,
            startDate: data.startDate,
            description: data.description
        };

        let response = await databases.createDocument(
            DATABASE_ID,
            COLLECTION_ID_JOBS,
            ID.unique(),
            payload
        )
    },
    postProfile: async (data) => {
        const payload = {
            name: data.name,
            desiredIndustry: data.industry,
            location: data.location,
            preferredSalary: data.salary,
            startDate: data.startDate,
            description: data.description
        };

        let response = await databases.createDocument(
            DATABASE_ID,
            COLLECTION_ID_PROFILES,
            ID.unique(),
            payload
        )
    }
}