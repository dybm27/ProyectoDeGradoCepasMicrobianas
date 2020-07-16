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
            window.Echo.private("bloquearBtns" + tipoInfo).whisper(
                "bloquearBtns" + tipoInfo,
                {
                    id: data.id,
                    idUser: this.getUserAuth.id,
                    tipo: tipo
                }
            );
            this.$events.fire("pushMisBloqueos" + tipoInfo, {
                id: data.id,
                idUser: this.getUserAuth.id,
                tipo: tipo
            });
        },
        eliminar(data) {
            this.$modal.show("modal_eliminar_tipo_" + tipoModal, {
                id: data.id,
                tipo: tipo
            });
            window.Echo.private("bloquearBtns" + tipoInfo).whisper(
                "bloquearBtns" + tipoInfo,
                {
                    id: data.id,
                    idUser: this.getUserAuth.id,
                    tipo: tipo
                }
            );
            this.$events.fire("pushMisBloqueos" + tipoInfo, {
                id: data.id,
                idUser: this.getUserAuth.id,
                tipo: tipo
            });
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
export default websocketsAccionesOtraInfoMixin;
