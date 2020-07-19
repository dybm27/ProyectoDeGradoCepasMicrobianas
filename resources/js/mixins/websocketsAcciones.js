const websocketsAccionesMixin = (tipo, tipoM, tipoP) => ({
    data() {
        return { disabledBtns: false };
    },
    methods: {
        editar(data) {
            this.$events.fire("abrirFormulario" + tipoM, data.id);
            window.Echo.private("bloquearBtns" + tipoM).whisper(
                "bloquearBtns" + tipoM,
                {
                    id: data.id,
                    idUser: this.getUserAuth.id
                }
            );
            window.Echo.private("bloquearCheck" + tipoM).whisper(
                "bloquearCheck" + tipoM,
                {
                    id: data.id,
                    idUser: this.getUserAuth.id
                }
            );
            this.$events.fire("pushMisBloqueos" + tipoM, {
                id: data.id,
                idUser: this.getUserAuth.id
            });
        },
        showModal(data) {
            this.$modal.show("modal_eliminar_" + tipo, {
                id: data.id
            });
            window.Echo.private("bloquearBtns" + tipoM).whisper(
                "bloquearBtns" + tipoM,
                {
                    id: data.id,
                    idUser: this.getUserAuth.id
                }
            );
            window.Echo.private("bloquearCheck" + tipoM).whisper(
                "bloquearCheck" + tipoM,
                {
                    id: data.id,
                    idUser: this.getUserAuth.id
                }
            );
            this.$events.fire("pushMisBloqueos" + tipoM, {
                id: data.id,
                idUser: this.getUserAuth.id
            });
        },
        bloquearBtns() {
            this.disabledBtns = true;
        },
        desbloquearBtns() {
            this.disabledBtns = false;
        },
        crearEventosBtns() {
            this.$events.$on(this.rowData.id + "-bloquearBtns" + tipoM, e =>
                this.bloquearBtns()
            );
            this.$events.$on(this.rowData.id + "-desbloquearBtns" + tipoM, e =>
                this.desbloquearBtns()
            );
        },
        eliminarEventosBtns(id) {
            this.disabledBtns = false;
            this.$events.$off(id + "-bloquearBtns" + tipoM);
            this.$events.$off(id + "-desbloquearBtns" + tipoM);
        }
    },
    created() {
        this.$events.$on(this.rowIndex + "-crearEventosBtns-" + tipoP, e =>
            this.crearEventosBtns()
        );
        this.$events.$on(this.rowIndex + "-eliminarEventosBtns-" + tipoP, e =>
            this.eliminarEventosBtns(e)
        );
    },
    destroyed() {
        this.$events.$off(this.rowIndex + "-crearEventosBtns-" + tipoP);
        this.$events.$off(this.rowIndex + "-eliminarEventosBtns-" + tipoP);
    }
});
export default websocketsAccionesMixin;