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
            if (this.auth.id != this.ordenEntrada[0].id) {
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
                if (this.auth.id === this.ordenEntrada[0].id) {
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
                this.ordenEntrada.push(this.auth);
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
                console.log("leaving");
                this.borrarUsuario(data.user);
            });
    },
    created() {
        this.$emit("rutaHijo", window.location.pathname);
        window.Echo.private("bloquear" + tipoM).listenForWhisper(
            "bloquear" + tipoM + "-" + this.auth.id,
            e => {
                this.bloquear(e.arrayUsers);
            }
        );
    },
    beforeDestroy() {
        window.Echo.leave(tipo);
        window.Echo.leave("bloquear" + tipoM);
    }
});
export default websocketsSinTablaMixin;
