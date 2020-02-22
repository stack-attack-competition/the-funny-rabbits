export default {
    state: {
        isAuthenticated: false,
        currentUser: {}
    },

    authenticateUser(userData) {
        this.state.isAuthenticated = true;
        this.state.currentUser = userData;
    },

    logOffUser() {
        this.state.isAuthenticated = false;

        this.state.currentUser = {};
    },

};