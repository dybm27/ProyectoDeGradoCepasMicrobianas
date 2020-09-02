const errorPeticionAxiosMixin = {
    methods: {
        verificarError(codigo, errors) {
            if (codigo === 403) {
                this.$router.push("/sin-acceso");
            } else if (codigo === 405 || codigo === 401) {
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
