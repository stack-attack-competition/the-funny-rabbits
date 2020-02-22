export default {
    state: {
        isAuthenticated: false,
        currentUser: {}
    },

    authenticateUser(userData) {
        this.state.isAuthenticated = true;

        this.currentUser.id = userData.id;
        this.currentUser.email = userData.email;
        this.currentUser.firstName = userData.firstName;
        this.currentUser.lastName = userData.lastName;
        this.currentUser.pictureUrl = userData.pictureUrl;
    },

    logOffUser() {
        this.state.isAuthenticated = false;

        this.currentUser = {};
    },

};