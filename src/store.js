export default {
    state: {
        isAuthenticated: false,
        currentUser: {}
    },

    authenticateUser(userData) {
        this.state.isAuthenticated = true;

        this.state.currentUser.id = userData.id;
        this.state.currentUser.email = userData.email;
        this.state.currentUser.firstName = userData.firstName;
        this.state.currentUser.lastName = userData.lastName;
        this.state.currentUser.pictureUrl = userData.pictureUrl;
    },

    logOffUser() {
        this.state.isAuthenticated = false;

        this.state.currentUser = {};
    },

};