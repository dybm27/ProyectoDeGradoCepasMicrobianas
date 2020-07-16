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
            let data = this.bloqueos.find(data => data.id === e.id);
            this.bloqueos.splice(
                this.bloqueos.findIndex(data => data.id === e.id),
                1
            );
            this.$events.fire(data.id + "-desbloquearBtns" + tipoM);
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
            }
        },
        // verificar bloqueos existentes
        verificarBloqueos() {
            for (let index = 0; index < this.bloqueos.length; index++) {
                this.$events.fire(
                    this.bloqueos[index].id + "-bloquearBtns" + tipoM
                );
            }
        },
        enviarBloqueos() {
            window.Echo.private("recibirBtns" + tipoM).whisper(
                "recibirBtns" + tipoM,
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
    },
    created() {
        window.Echo.private("recibirBtns" + tipoM).listenForWhisper(
            "recibirBtns" + tipoM,
            e => {
                if (e.bloqueos.length > 0) {
                    this.bloquearBtnsTabla(e.bloqueos[0]);
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
        window.Echo.leave("recibirBtns" + tipoM);
        window.Echo.leave("desbloquearBtns" + tipoM);
        window.Echo.leave("bloquearBtns" + tipoM);
    }
});
export default websocketsMixin;
