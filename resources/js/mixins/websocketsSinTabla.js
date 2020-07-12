const websocketsSinTablaMixin = (tipo, tipoM) => ({
    data() {
        return {
            ocupado: false,
            user: "",
            ordenEntrada: []
        };
    },
    methods: {
        bloquear(arrayUsers) {
            if (this.ordenEntrada.length === 0) {
                this.ordenEntrada = arrayUsers;
            }
            if (this.getUserAuth.id != this.ordenEntrada[0].id) {
                this.ocupado = true;
                this.user = this.ordenEntrada[0];
            } else {
                this.ocupado = false;
                this.user = "";
            }
        },
        borrarUsuario(user) {
            if (this.ordenEntrada.length > 1) {
                let index = this.ordenEntrada.findIndex(
                    userArray => userArray.id === user.id
                );
                this.ordenEntrada.splice(index, 1);
                if (this.getUserAuth.id === this.ordenEntrada[0].id) {
                    this.ocupado = false;
                    this.user = "";
                } else {
                    this.ocupado = true;
                    this.user = this.ordenEntrada[0];
                }
            }
        },
        verificarPush(user) {
            if (this.ordenEntrada.length === 0) {
                this.ordenEntrada.push(this.getUserAuth);
                this.ordenEntrada.push(user);
            } else {
                this.ordenEntrada.push(user);
            }
        }
    },

    mounted() {
        window.Echo.join(tipo)
            .joining(data => {
                this.verificarPush(data.user);
                window.Echo.private("bloquear" + tipoM).whisper(
                    "bloquear" + tipoM + "-" + data.user.id,
                    {
                        arrayUsers: this.ordenEntrada
                    }
                );
            })
            .leaving(data => {
                this.borrarUsuario(data.user);
            });
    },
    created() {
        this.$emit("rutaHijo", window.location.pathname);
        window.Echo.private("bloquear" + tipoM).listenForWhisper(
            "bloquear" + tipoM + "-" + this.getUserAuth.id,
            e => {
                this.bloquear(e.arrayUsers);
            }
        );
        window.Echo.private("borrarBloqueo" + tipoM).listenForWhisper(
            "borrarBloqueo" + tipoM,
            e => {
                this.borrarUsuario(e.user);
            }
        );
    },
    beforeDestroy() {
        window.Echo.leave(tipo);
        window.Echo.leave("bloquear" + tipoM);
    },
    destroyed() {
        window.Echo.leave("borrarBloqueo" + tipoM);
    }
});
export default websocketsSinTablaMixin;
