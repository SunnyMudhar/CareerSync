import { ID, Query } from 'appwrite';
import { databases, DATABASE_ID, COLLECTION_ID_JOBS, COLLECTION_ID_PROFILES } from './appwriteConfig';

export default {
    getJobPost: async (title = '', location = '') => {
        const queries = [];
        if (title !== '') {
            queries.push(Query.search('title', title));
        }
        if (location !== '') {
            queries.push(Query.search('location', location));
        }
        console.log(queries);
        return await databases.listDocuments(
            DATABASE_ID,
            COLLECTION_ID_JOBS,
            queries
            );
    },
    getProfilePost: async (industry = '', location = '') => {
        const queries = [];
        console.log(industry);
        if (industry !== '') {
            queries.push(Query.search('desiredIndustry', industry));
        }
        if (location !== '') {
            queries.push(Query.search('location', location));
        }
        return await databases.listDocuments(
            DATABASE_ID,
            COLLECTION_ID_PROFILES,
            queries
            );
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