const websocketsTablaOtraInfo = tipo => ({
    data() {
        return { tabla: false };
    },
    methods: {
        mostrarTabla() {
            this.tabla = !this.tabla;
        },
        actualizarTabla() {
            if (this.siHayDatos) {
                if (this.$refs.tabla) {
                    this.$refs.tabla.refreshDatos();
                }
            }
        }
    },
    created() {
        this.$events.on("actualizartabla" + tipo, e => this.actualizarTabla());
    },
    destroyed() {
        this.$events.off("actualizartabla" + tipo);
    }
});
export default websocketsTablaOtraInfo;
