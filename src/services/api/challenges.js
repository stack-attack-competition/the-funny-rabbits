import axios from 'axios';

export default {
    getChallenges(showDeleted) {
        showDeleted = showDeleted === undefined ? false : showDeleted;

        return axios.get('/challenges', { showDeleted })
            .then(response => {
                return response.data;
            });
    }
};