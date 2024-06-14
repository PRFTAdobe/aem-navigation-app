import axios from 'axios';

export async function getTheData(endpoint, customHeaders = {}, credentials) {
    try {
            const response = await axios.get(endpoint, {
                headers: {
                    ...customHeaders,
                },
                withCredentials: credentials,
            });
            return response.data;
        } catch (error) {
             throw new Error(`Client could not retrieve data: ${error.message}`);
    }
}
