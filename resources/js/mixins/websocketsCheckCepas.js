import vuex from "vuex";
const websocketsCheckCepas = {
    data() {
        return { checkPublicar: false, disabled: false };
    },
    computed: {
        computedDisabled() {
            return this.disabled;
        }
    },
    methods: {
        ...vuex.mapActions("cepas", ["accionCepas"]),
        publicar(data) {
            this.disabled = true;
            axios
                .put(`/cepas/publicar/${data.id}`, {
                    publicar: !this.checkPublicar
                })
                .then(res => {
                    if (res.request.responseURL === process.env.MIX_LOGIN) {
                        localStorage.setItem(
                            "mensajeLogin",
                            "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"
                        );
                        window.location.href = "/";
                    } else {
                        if (res.data.publicar) {
                            this.toastr("Publicar", "Publicado con Exito!!");
                        }
                        this.accionCepas({ tipo: "editar", data: res.data });
                        this.checkPublicar = res.data.publicar;
                        this.disabled = false;
                    }
                });
        },
        verificarPublicar(e) {
            if (e == 0) {
                this.checkPublicar = false;
            } else {
                this.checkPublicar = true;
            }
        },
        bloquearCheck() {
            this.disabled = true;
        },
        desbloquearCheck() {
            this.disabled = false;
        },
        crearEventosCheck() {
            this.verificarPublicar(this.rowData.publicar);
            this.$events.$on(this.rowData.id + "-bloquearCheckCepa", e =>
                this.bloquearCheck()
            );
            this.$events.$on(this.rowData.id + "-desbloquearCheckCepa", e =>
                this.desbloquearCheck()
            );
            this.$events.$on(this.rowData.id + "-actualizarPublicarCepa", e =>
                this.verificarPublicar(e)
            );
        },
        eliminarEventosCheck(id) {
            this.disabled = false;
            this.$events.$off(id + "-bloquearCheckCepa");
            this.$events.$off(id + "-desbloquearCheckCepa");
            this.$events.$off(id + "-actualizarPublicarCepa");
        }
    },
    created() {
        this.verificarPublicar(this.rowData.publicar);
    },
    destroyed() {
        this.$events.$off(this.rowData.id + "-bloquearCheckCepa");
        this.$events.$off(this.rowData.id + "-desbloquearCheckCepa");
        this.$events.$off(this.rowData.id + "-actualizarPublicarCepa");
    }
};
export default websocketsCheckCepas;
