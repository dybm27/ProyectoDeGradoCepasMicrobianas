const websocketsMixin = (tipoM, tipoP) => ({
    data() {
        return { bloqueos: [], misBloqueos: [] };
    },
    methods: {
        // Bloquear Btns
        bloquearBtnsTabla(e) {
            this.bloqueos.push({ idUser: e.idUser, id: e.id });
            this.crearEventoBtns(e.id);
            this.$events.fire(e.id + "-bloquearBtns" + tipoM);
        },
        desbloquearBtnsTabla(e) {
            let data = this.bloqueos.find(data => data.id === e.id);
            this.eliminarEventoBtns(data.id);
            this.bloqueos.splice(
                this.bloqueos.findIndex(data => data.id === e.id),
                1
            );
            this.$events.fire(data.id + "-desbloquearBtns" + tipoM);
        },
        bloquearBtns(id) {
            this.$events.fire(id + "-bloquearBtns" + tipoM);
        },
        crearEventoBtns(id) {
            this.$events.$on(id + "-verificarBloqueoBtns" + tipoM, e =>
                this.bloquearBtns(e.id)
            );
        },
        eliminarEventoBtns(id) {
            this.$events.off(id + "-verificarBloqueoBtns" + tipoM);
        },
        // Bloquear Check
        bloquearCheckTabla(e) {
            this.bloqueos.push({ idUser: e.idUser, id: e.id });
            this.crearEventoCheck(e.id);
            this.$events.fire(e.id + "-bloquearCheck" + tipoM);
        },
        desbloquearCheckTabla(e) {
            let data = this.bloqueos.find(data => data.id === e.id);
            this.eliminarEventoCheck(data.id);
            this.bloqueos.splice(
                this.bloqueos.findIndex(data => data.id === e.id),
                1
            );
            this.$events.fire(data.id + "-desbloquearCheck" + tipoM);
        },
        bloquearCheck(id) {
            this.$events.fire(id + "-bloquearCheck" + tipoM);
        },
        crearEventoCheck(id) {
            this.$events.$on(id + "-verificarBloqueoCheck" + tipoM, e =>
                this.bloquearCheck(e.id)
            );
        },
        eliminarEventoCheck(id) {
            this.$events.off(id + "-verificarBloqueoCheck" + tipoM);
        },
        // eliminar bloqueos
        borrarBtnsCheck(id) {
            let data = this.bloqueos.find(data => data.idUser === id);
            if (data) {
                this.desbloquearBtnsTabla(data);
                this.desbloquearCheckTabla(data);
            }
        },
        // guardar mis bloqueos
        pushMisBloqueos(e) {
            this.misBloqueos.push({
                idUser: e.idUser,
                id: e.id
            });
        },
        spliceMisBloqueos(e) {
            this.misBloqueos.splice(
                this.misBloqueos.findIndex(data => data.id === e.id),
                1
            );
        },
        // verificar bloqueos existentes
        verificarBloqueos() {
            for (let index = 0; index < this.bloqueos.length; index++) {
                this.bloquearBtns(this.bloqueos[index].id);
                this.bloquearCheck(this.bloqueos[index].id);
            }
        }
    },
    mounted() {
        window.Echo.join(tipoP)
            .here(data => {})
            .joining(data => {
                window.Echo.private("recibirBtnsCheck" + tipoM).whisper(
                    "recibirBtnsCheck" + tipoM,
                    {
                        bloqueos: this.misBloqueos
                    }
                );
            })
            .leaving(data => {
                this.borrarBtnsCheck(data.id);
            });
        //  .listen("Prueba", e => {});

        window.Echo.private("bloquearBtns" + tipoM).listenForWhisper(
            "bloquearBtns" + tipoM,
            e => {
                this.bloquearBtnsTabla(e);
            }
        );
        window.Echo.private("desbloquearBtns" + tipoM).listenForWhisper(
            "desbloquearBtns" + tipoM,
            e => {
                if (e.id != 0) {
                    this.desbloquearBtnsTabla(e);
                }
            }
        );
        window.Echo.private("bloquearCheck" + tipoM).listenForWhisper(
            "bloquearCheck" + tipoM,
            e => {
                this.bloquearCheckTabla(e);
            }
        );
        window.Echo.private("desbloquearCheck" + tipoM).listenForWhisper(
            "desbloquearCheck" + tipoM,
            e => {
                if (e.id != 0) {
                    this.desbloquearCheckTabla(e);
                }
            }
        );
    },
    created() {
        window.Echo.private("recibirBtnsCheck" + tipoM).listenForWhisper(
            "recibirBtnsCheck" + tipoM,
            e => {
                for (let index = 0; index < e.bloqueos.length; index++) {
                    this.bloquearBtnsTabla(e.bloqueos[index]);
                    this.bloquearCheckTabla(e.bloqueos[index]);
                }
            }
        );
        this.$events.$on("pushMisBloqueos" + tipoM, e =>
            this.pushMisBloqueos(e)
        );
        this.$events.$on("spliceMisBloqueos" + tipoM, e =>
            this.spliceMisBloqueos(e)
        );
        this.$events.$on("verificarBloqueos-" + tipoP, e =>
            this.verificarBloqueos()
        );
    },
    destroyed() {
        this.$events.$off("pushMisBloqueos" + tipoM);
        this.$events.$off("spliceMisBloqueos" + tipoM);
        this.$events.$off("verificarBloqueos-" + tipoP);
    },
    beforeDestroy() {
        window.Echo.leave(tipoP);
        window.Echo.leave("recibirBtnsCheck" + tipoM);
        window.Echo.leave("bloquearCheck" + tipoM);
        window.Echo.leave("desbloquearCheck" + tipoM);
        window.Echo.leave("desbloquearBtns" + tipoM);
        window.Echo.leave("bloquearBtns" + tipoM);
    }
});
export default websocketsMixin;
