const errorPeticionAxiosVerCepaMixin = {
    methods: {
        verificarErrorVerCepa(codigo) {
            if (codigo === 403) {
                this.$router.push("/sin-acceso");
            } else if (codigo === 405 || codigo === 401) {
                window.location.href = "/";
            } else {
                this.$events.fire("bloquearBtnVolver");
                this.btnTodo = false;
                this.btnSeleccionado = false;
                this.toastr("Error!!", "", "error");
            }
        }
    }
};

export default errorPeticionAxiosVerCepaMixin;
