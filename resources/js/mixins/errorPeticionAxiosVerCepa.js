const errorPeticionAxiosVerCepaMixin = {
    methods: {
        verificarErrorVerCepa(codigo) {
            if (codigo === 403) {
                this.$router.push("/sin-acceso");
            } else if (codigo === 405 || codigo === 401) {
                localStorage.setItem(
                    "mensajeLogin",
                    "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"
                );
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
