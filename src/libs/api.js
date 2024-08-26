import axios from 'axios';

export const fetchNinjaAPI = async ({ endpoint }) => {
    const response = await axios.get(`https://api.api-ninjas.com/v1/${endpoint}`, {
        headers: {
            'X-Api-Key': process.env.NEXT_PUBLIC_NINJA_API_KEY,
        },
    });
    return response.data;
};
