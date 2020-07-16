const websocketsMixin = (tipoM, tipoP) => ({
    data() {
        return { bloqueos: [], misBloqueos: [] };
    },
    methods: {
        // Bloquear Btns
        bloquearBtnsTabla(e) {
            this.bloqueos.push({ idUser: e.idUser, id: e.id });
            this.$events.fire(e.id + "-bloquearBtns" + tipoM);
        },
        desbloquearBtnsTabla(e) {
            this.bloqueos.splice(
                this.bloqueos.findIndex(data => data.id === e.id),
                1
            );
            this.$events.fire(e.id + "-desbloquearBtns" + tipoM);
        },
        // Bloquear Check
        bloquearCheckTabla(e) {
            this.bloqueos.push({ idUser: e.idUser, id: e.id });
            this.$events.fire(e.id + "-bloquearCheck" + tipoM);
        },
        desbloquearCheckTabla(e) {
            this.bloqueos.splice(
                this.bloqueos.findIndex(data => data.id === e.id),
                1
            );
            this.$events.fire(e.id + "-desbloquearCheck" + tipoM);
        },
        // guardar mis bloqueos
        pushMisBloqueos(e) {
            this.misBloqueos.push({
                idUser: e.idUser,
                id: e.id
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
                this.desbloquearCheckTabla(data);
            }
        },
        // verificar bloqueos existentes
        verificarBloqueos() {
            for (let index = 0; index < this.bloqueos.length; index++) {
                this.$events.fire(
                    this.bloqueos[index].id + "-bloquearBtns" + tipoM
                );
                this.$events.fire(
                    this.bloqueos[index].id + "-bloquearCheck" + tipoM
                );
            }
        },
        enviarBloqueos() {
            window.Echo.private("recibirBtnsCheck" + tipoM).whisper(
                "recibirBtnsCheck" + tipoM,
                {
                    bloqueos: this.misBloqueos
                }
            );
        }
    },
    mounted() {
        window.Echo.join(tipoP)
            .joining(data => {
                if (this.misBloqueos.length > 0) {
                    this.enviarBloqueos();
                }
            })
            .leaving(data => {
                this.borrarBloqueos(data.user);
            });

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
                if (e.bloqueos.length > 0) {
                    this.bloquearBtnsTabla(e.bloqueos[0]);
                    this.bloquearCheckTabla(e.bloqueos[0]);
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
