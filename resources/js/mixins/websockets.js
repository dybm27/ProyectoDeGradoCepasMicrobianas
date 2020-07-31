const websocketsMixin = (tipoM, tipoP) => ({
    data() {
        return {
            bloqueos: [],
            miBloqueo: null
        };
    },
    methods: {
        // Bloquear Btns
        bloquearBtns(e) {
            let data = this.bloqueos.find(data => data.id === e.id);
            if (!data) {
                this.bloqueos.push({ idUser: e.idUser, id: e.id });
                this.$events.fire(e.id + "-bloquearBtns" + tipoM);
                this.$events.fire(e.id + "-bloquearCheck" + tipoM);
            }
        },
        desbloquearBtns(e) {
            this.bloqueos.splice(
                this.bloqueos.findIndex(data => data.id === e.id),
                1
            );
            this.$events.fire(e.id + "-desbloquearBtns" + tipoM);
            this.$events.fire(e.id + "-desbloquearCheck" + tipoM);
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
                this.desbloquearBtns(data);
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
                this.enviarBloqueos();
            })
            .leaving(data => {
                this.borrarBloqueos(data.user);
            });

        window.Echo.private("bloquearBtns" + tipoM).listenForWhisper(
            "bloquearBtns" + tipoM,
            e => {
                this.bloquearBtns(e);
            }
        );
        window.Echo.private("desbloquearBtns" + tipoM).listenForWhisper(
            "desbloquearBtns" + tipoM,
            e => {
                if (e.id != 0) {
                    this.desbloquearBtns(e);
                }
            }
        );
    },
    created() {
        window.Echo.private("recibirBtns" + tipoM).listenForWhisper(
            "recibirBtns" + tipoM,
            e => {
                if (e.miBloqueo) {
                    this.bloquearBtns(e.miBloqueo);
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
