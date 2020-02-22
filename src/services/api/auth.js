import axios from 'axios';

export default {
    register(userDetails) {
        return axios({
            method: 'post',
            url: '/auth/register',
            data: userDetails
          }).then(response => console.log(response));
    }
};