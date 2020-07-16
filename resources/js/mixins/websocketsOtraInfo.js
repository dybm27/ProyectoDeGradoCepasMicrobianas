const websocketsOtraInfoMixin = tipoInfo => ({
    data() {
        return { bloqueos: [], misBloqueos: [] };
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
        pushMisBloqueos(e) {
            this.misBloqueos.push({
                idUser: e.idUser,
                id: e.id,
                tipo: e.tipo
            });
        },
        spliceMisBloqueos(e) {
            if (e.id != 0) {
                this.misBloqueos.splice(
                    this.misBloqueos.findIndex(data => data.id === e.id),
                    1
                );
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
                    bloqueos: this.misBloqueos
                }
            );
        }
    },
    mounted() {
        window.Echo.join(tipoInfo)
            .joining(data => {
                if (this.misBloqueos.length > 0) {
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
                if (e.bloqueos.length > 0) {
                    this.bloquearBtnsTabla(e.bloqueos[0]);
                }
            }
        );
        this.$events.$on("pushMisBloqueos" + tipoInfo, e =>
            this.pushMisBloqueos(e)
        );
        this.$events.$on("spliceMisBloqueos" + tipoInfo, e =>
            this.spliceMisBloqueos(e)
        );
    },
    destroyed() {
        this.$events.$off("pushMisBloqueos" + tipoInfo);
        this.$events.$off("spliceMisBloqueos" + tipoInfo);
    },
    beforeDestroy() {
        window.Echo.leave(tipoInfo);
        window.Echo.leave("recibirBtns" + tipoInfo);
        window.Echo.leave("desbloquearBtns" + tipoInfo);
        window.Echo.leave("bloquearBtns" + tipoInfo);
    }
});
export default websocketsOtraInfoMixin;
