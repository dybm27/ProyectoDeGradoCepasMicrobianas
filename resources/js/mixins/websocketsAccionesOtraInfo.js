const websocketsAccionesOtraInfoMixin = (tipo, tipoP, tipoModal, tipoInfo) => ({
    data() {
        return { disabledBtns: false };
    },
    methods: {
        editar(data) {
            this.$modal.show("modal_editar_tipo_" + tipoModal, {
                id: data.id,
                nombre: data.nombre,
                grupo: data.grupo_microbiano_id,
                tipo: tipo
            });
            this.enviarBloqueo(data);
        },
        eliminar(data) {
            this.$modal.show("modal_eliminar_tipo_" + tipoModal, {
                id: data.id,
                tipo: tipo
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
            this.$events.$on(this.rowData.id + "-bloquearBtns-" + tipo, e =>
                this.bloquearBtns()
            );
            this.$events.$on(this.rowData.id + "-desbloquearBtns-" + tipo, e =>
                this.desbloquearBtns()
            );
        },
        eliminarEventosBtns(id) {
            this.disabledBtns = false;
            this.$events.$off(id + "-bloquearBtns-" + tipo);
            this.$events.$off(id + "-desbloquearBtns-" + tipo);
        },
        enviarBloqueo(data) {
            window.Echo.private("bloquearBtns" + tipoInfo).whisper(
                "bloquearBtns" + tipoInfo,
                {
                    id: data.id,
                    idUser: this.auth.id,
                    tipo: tipo
                }
            );
            this.$events.fire("agregarMiBloqueo" + tipoInfo, {
                id: data.id,
                idUser: this.auth.id,
                tipo: tipo
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
        this.$events.$off(this.rowData.id + "-desbloquearBtns-" + tipo);
        this.$events.$off(this.rowData.id + "-bloquearBtns-" + tipo);
    }
});
export default websocketsAccionesOtraInfoMixin;
