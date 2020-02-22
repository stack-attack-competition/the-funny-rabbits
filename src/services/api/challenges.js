import axios from 'axios';

export default {
    async getChallenges(showDeleted) {
        showDeleted = showDeleted === undefined ? false : showDeleted;

        const response = await axios.get('/challenges', { showDeleted });
        return response.data;
    },
    async createChallange(challange) {
        const response = await axios({
            method: 'post',
            url: '/challenges',
            data: challange
        });
        return response.data;
    }
};