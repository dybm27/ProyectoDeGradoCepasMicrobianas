let userLogueado = document.head.querySelector('meta[name="user-logueado"]');

module.exports = {
    computed: {
        userAuth() {
            return JSON.parse(userLogueado.content);
        },
        isAutenticated() {
            return !!this.userAuth.content;
        },
        guest() {
            return !this.isAutenticated;
        }
    }
};
