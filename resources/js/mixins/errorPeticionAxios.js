const errorPeticionAxiosMixin = {
    methods: {
        verificarError(codigo, errors) {
            if (codigo === 403) {
                this.$router.push("/sin-acceso");
            } else if (codigo === 405 || codigo === 401) {
                localStorage.setItem(
                    "mensajeLogin",
                    "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"
                );
                window.location.href = "/";
            } else {
                this.bloquearBtn = false;
                if (codigo === 422) {
                    this.errors = [];
                    this.errors = errors;
                }
                this.toastr("Error!!", "", "error");
            }
        }
    }
};

export default errorPeticionAxiosMixin;
