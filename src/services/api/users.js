import axios from 'axios';

export default {
    async getUserById(userId) {
        const response = await axios({
            method: 'get',
            url: '/users/' + userId
        });
        return response.data;
    },
    async updateUserProfile(userDetails) {
        const response = await axios({
            method: 'patch',
            url: '/users/' + userDetails.id,
            data: userDetails
        });
        return response.data;
    }
};