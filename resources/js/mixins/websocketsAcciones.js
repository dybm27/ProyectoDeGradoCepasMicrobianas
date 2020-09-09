const websocketsAccionesMixin = (tipo, tipoM, tipoP) => ({
    data() {
        return { disabledBtns: false };
    },
    methods: {
        editar(data) {
            this.$events.fire("abrirFormulario" + tipoM, data.id);
            this.enviarBloqueo(data);
        },
        eliminar(data) {
            this.$modal.show("modal_eliminar_" + tipo, {
                id: data.id
            });
            this.enviarBloqueo(data);
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
        },
        enviarBloqueo(data) {
            window.Echo.private("bloquearBtns" + tipoM).whisper(
                "bloquearBtns" + tipoM,
                {
                    id: data.id,
                    idUser: this.auth.id
                }
            );
            this.$events.fire("agregarMiBloqueo" + tipoM, {
                id: data.id,
                idUser: this.auth.id
            });
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
        this.$events.$off(this.rowData.id + "-bloquearBtns" + tipoM);
        this.$events.$off(this.rowData.id + "-desbloquearBtns" + tipoM);
    }
});
export default websocketsAccionesMixin;
