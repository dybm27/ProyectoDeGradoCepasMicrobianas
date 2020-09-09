const websocketsAccionesCepas = {
    data() {
        return { disabledBtns: false };
    },
    methods: {
        editar(data) {
            this.$events.fire("abrirFormularioCepa", data.id);
            this.enviarBloqueo(data);
        },
        eliminar(data) {
            this.$modal.show("modal_eliminar_cepa", {
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
            this.$events.$on(this.rowData.id + "-bloquearBtnsCepa", e =>
                this.bloquearBtns()
            );
            this.$events.$on(this.rowData.id + "-desbloquearBtnsCepa", e =>
                this.desbloquearBtns()
            );
        },
        eliminarEventosBtns(id) {
            this.disabledBtns = false;
            this.$events.$off(id + "-bloquearBtnsCepa");
            this.$events.$off(id + "-desbloquearBtnsCepa");
        },
        enviarBloqueo(data) {
            window.Echo.private("bloquearBtnsCepa").whisper(
                "bloquearBtnsCepa",
                {
                    id: data.id,
                    idUser: this.auth.id
                }
            );
            this.$events.fire("agregarMiBloqueoCepa", {
                id: data.id,
                idUser: this.auth.id
            });
        }
    },
    destroyed() {
        this.$events.$off(this.rowData.id + "-bloquearBtnsCepa");
        this.$events.$off(this.rowData.id + "-desbloquearBtnsCepa");
    }
};
export default websocketsAccionesCepas;
