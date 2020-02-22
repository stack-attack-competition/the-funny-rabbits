import axios from 'axios';

export default {
    async register(userDetails) {
        const response = await axios({
            method: 'post',
            url: '/auth/register',
            data: userDetails
        });
        return response.data;
    }
};