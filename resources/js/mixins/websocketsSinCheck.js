const websocketsMixin = (tipoM, tipoP) => ({
    data() {
        return { bloqueos: [], miBloqueo: [] };
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
        agregarMiBloqueo(e) {
            this.miBloqueo = e;
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
                    miBloqueo: this.miBloqueo
                }
            );
        }
    },
    mounted() {
        window.Echo.join(tipoP)
            .joining(data => {
                if (this.miBloqueo) {
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
                if (this.bloqueos.length == 0) {
                    this.bloquearBtnsTabla(e.bloqueos[0]);
                }
            }
        );
        this.$events.$on("agregarMiBloqueo" + tipoM, e =>
            this.agregarMiBloqueo(e)
        );
        this.$events.$on("eliminarMiBloqueo" + tipoM, e =>
            this.eliminarMiBloqueo(e)
        );
        this.$events.$on("verificarBloqueos-" + tipoP, e =>
            this.verificarBloqueos()
        );
    },
    destroyed() {
        this.$events.$off("agregarMiBloqueo" + tipoM);
        this.$events.$off("eliminarMiBloqueo" + tipoM);
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
