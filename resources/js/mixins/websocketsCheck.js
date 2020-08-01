const websocketsCheck = (tipoM, tipoP) => ({
    methods: {
        bloquearCheck(data) {
            this.disabled = true;
        },
        desbloquearCheck(data) {
            this.disabled = false;
        },
        crearEventosCheck() {
            this.verificarPublicar(this.rowData.publicar);
            this.$events.$on(this.rowData.id + "-bloquearCheck" + tipoM, e =>
                this.bloquearCheck()
            );
            this.$events.$on(this.rowData.id + "-desbloquearCheck" + tipoM, e =>
                this.desbloquearCheck()
            );
            this.$events.$on(
                this.rowData.id + "-actualizarPublicar" + tipoM,
                e => this.verificarPublicar(e)
            );
        },
        eliminarEventosCheck(id) {
            this.disabled = false;
            this.$events.$off(id + "-bloquearCheck" + tipoM);
            this.$events.$off(id + "-desbloquearCheck" + tipoM);
            this.$events.$off(id + "-actualizarPublicar" + tipoM);
        }
    },
    created() {
        this.$events.$on(this.rowIndex + "-crearEventosCheck-" + tipoP, e =>
            this.crearEventosCheck()
        );
        this.$events.$on(this.rowIndex + "-eliminarEventosCheck-" + tipoP, e =>
            this.eliminarEventosCheck(e)
        );
    },
    destroyed() {
        this.$events.$off(this.rowIndex + "-crearEventosCheck-" + tipoP);
        this.$events.$off(this.rowIndex + "-eliminarEventosCheck-" + tipoP);
        this.$events.$off(this.rowData.id + "-bloquearCheck" + tipoM);
        this.$events.$off(this.rowData.id + "-desbloquearCheck" + tipoM);
        this.$events.$off(this.rowData.id + "-actualizarPublicar" + tipoM);
    }
});
export default websocketsCheck;
