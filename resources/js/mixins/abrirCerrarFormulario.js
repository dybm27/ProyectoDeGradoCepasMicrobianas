const abrirCerrarFormualrio = tipoM => ({
    data() {
        return { formulario: false, id: 0 };
    },
    methods: {
        abrirFormulario(id) {
            if (id != 0) {
                this.id = id;
            } else {
                this.id = 0;
            }
            this.formulario = !this.formulario;
        },
        cerrarFormulario() {
            window.Echo.private(
                "desbloquearBtns" + tipoM
            ).whisper("desbloquearBtns" + tipoM, { id: this.id });
            window.Echo.private(
                "desbloquearCheck" + tipoM
            ).whisper("desbloquearCheck" + tipoM, { id: this.id });
            this.$events.fire("spliceMisBloqueos" + tipoM, {
                id: this.id
            });
            this.id = 0;

            this.formulario = !this.formulario;
        },
        cambiarVariableFormulario() {
            this.formulario = !this.formulario;
        }
    },
    created() {
        this.$events.$on("abrirFormulario" + tipoM, e =>
            this.abrirFormulario(e)
        );
    },
    beforeDestroy() {
        this.$events.$off("abrirFormulario" + tipoM);
    }
});

export default abrirCerrarFormualrio;
