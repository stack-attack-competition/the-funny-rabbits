import axios from 'axios';

export default {
    async getUserById(userId) {
        const response = await axios({
            method: 'get',
            url: '/users/' + userId
        });
        return response.data;
    }
};