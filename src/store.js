export default {
    state: {
        isAuthenticated: false,
        currentUser: {}
    },

    authenticateUser(userData) {
        this.state.isAuthenticated = true;
        this.state.currentUser = userData;

        console.log(JSON.stringify(userData));
        localStorage.setItem('currentUser', JSON.stringify(userData));
    },

    logOffUser() {
        this.state.isAuthenticated = false;

        this.state.currentUser = {};

        localStorage.removeItem('currentUser');
    },

};