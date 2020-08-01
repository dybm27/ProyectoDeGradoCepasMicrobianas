const websocketsOtraInfoMixin = tipoInfo => ({
    data() {
        return { bloqueos: [], miBloqueo: null };
    },
    methods: {
        // Bloquear Btns
        bloquearBtnsTabla(e) {
            this.bloqueos.push({ idUser: e.idUser, id: e.id, tipo: e.tipo });
            this.$events.fire(e.id + "-bloquearBtns-" + e.tipo);
        },
        desbloquearBtnsTabla(e) {
            this.bloqueos.splice(
                this.bloqueos.findIndex(
                    data => data.id === e.id && data.tipo === e.tipo
                ),
                1
            );
            this.$events.fire(e.id + "-desbloquearBtns-" + e.tipo);
        },
        // guardar mis bloqueos
        agregarMiBloqueo(e) {
            this.miBloqueo = {
                idUser: e.idUser,
                id: e.id,
                tipo: e.tipo
            };
        },
        eliminarMiBloqueo(e) {
            if (e.id != 0) {
                this.miBloqueo = null;
            }
        },
        //borrar bloqueos
        borrarBloqueos(e) {
            let data = this.bloqueos.find(data => data.idUser === e.id);
            if (data) {
                this.desbloquearBtnsTabla(data);
            }
        },
        // verificar bloqueos existentes
        verificarBloqueos(tipo) {
            for (let index = 0; index < this.bloqueos.length; index++) {
                if (this.bloqueos[index].tipo == tipo) {
                    this.$events.fire(
                        this.bloqueos[index].id + "-bloquearBtns-" + tipo
                    );
                }
            }
        },
        enviarBloqueos() {
            window.Echo.private("recibirBtns" + tipoInfo).whisper(
                "recibirBtns" + tipoInfo,
                {
                    miBloqueo: this.miBloqueo
                }
            );
        }
    },
    mounted() {
        window.Echo.join(tipoInfo)
            .joining(data => {
                if (this.miBloqueo) {
                    this.enviarBloqueos();
                }
            })
            .leaving(data => {
                this.borrarBloqueos(data.user);
            });

        window.Echo.private("bloquearBtns" + tipoInfo).listenForWhisper(
            "bloquearBtns" + tipoInfo,
            e => {
                this.bloquearBtnsTabla(e);
            }
        );
        window.Echo.private("desbloquearBtns" + tipoInfo).listenForWhisper(
            "desbloquearBtns" + tipoInfo,
            e => {
                if (e.id != 0) {
                    this.desbloquearBtnsTabla(e);
                }
            }
        );
    },
    created() {
        this.$emit("rutaHijo", window.location.pathname);
        window.Echo.private("recibirBtns" + tipoInfo).listenForWhisper(
            "recibirBtns" + tipoInfo,
            e => {
                if (e.miBloqueo) {
                    this.bloquearBtnsTabla(e.miBloqueo);
                }
            }
        );
        this.$events.$on("agregarMiBloqueo" + tipoInfo, e => {
            this.agregarMiBloqueo(e);
        });
        this.$events.$on("eliminarMiBloqueo" + tipoInfo, e => {
            this.eliminarMiBloqueo(e);
        });
    },
    destroyed() {
        this.$events.$off("agregarMiBloqueo" + tipoInfo);
        this.$events.$off("eliminarMiBloqueo" + tipoInfo);
    },
    beforeDestroy() {
        window.Echo.leave(tipoInfo);
        window.Echo.leave("recibirBtns" + tipoInfo);
        window.Echo.leave("desbloquearBtns" + tipoInfo);
        window.Echo.leave("bloquearBtns" + tipoInfo);
    }
});
export default websocketsOtraInfoMixin;
