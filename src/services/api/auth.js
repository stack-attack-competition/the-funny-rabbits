import axios from 'axios';

export default {
    register(userDetails) {
        return axios({
            method: 'post',
            url: '/auth/register',
            data: userDetails
          }).then(response => { return response} );
    },
    login(userDetails) {
        return axios({
            method: 'post',
            url: '/auth/login',
            data: userDetails
          }).then(response => { return response} );
    }
};