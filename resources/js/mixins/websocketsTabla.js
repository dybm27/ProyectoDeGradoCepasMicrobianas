const websocketsTabla = tipoM => ({
    methods: {
        closeEliminar() {
            window.Echo.private("desbloquearBtns" + tipoM).whisper(
                "desbloquearBtns" + tipoM,
                {
                    id: this.id
                }
            );
            this.$events.fire("eliminarMiBloqueo" + tipoM, {
                id: this.id
            });
        },
        actualizarTabla() {
            if (this.mostrarTabla) {
                if (this.$refs.tabla) {
                    this.$refs.tabla.refreshDatos();
                }
            }
        }
    },
    created() {
        this.$events.on("actualizartabla" + tipoM, e => this.actualizarTabla());
    },
    destroyed() {
        this.$events.off("actualizartabla" + tipoM);
    }
});
export default websocketsTabla;
