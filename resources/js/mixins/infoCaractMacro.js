const infoCaractMacroMixin = {
    data() {
        return {
            active1: "active",
            active2: "",
            active3: "",
            mostrar1: false,
            mostrar2: false,
            mostrar3: false,
            mostrarForm1: true,
            mostrarForm2: false,
            mostrarForm3: false,
            mostrarBtnAgregar: true,
            modificarForm: false,
            caract: null,
            num: 0
        };
    },
    methods: {
        agregarInfo(data) {
            this.accionAgregarCaract({ tipo: "macro", data: data });
            this.mostrarBtnAgregar = true;
            this.modificarForm = true;
        },
        editarInfo(data) {
            this.accionEditarCaract({ tipo: "macro", data: data });
            this.modificarForm = true;
        },
        eliminarInfo(data) {
            this.accionEliminarCaract({ tipo: "macro", data: data });
            this.mostrarBtnAgregar = true;
            this.modificarForm = true;
            this.formatear(this.num);
        },
        eliminarMedio() {
            if (this.mostrarForm1) {
                this.caract = this.getCaractMacro[0];
                this.num = 1;
            } else if (this.mostrarForm2) {
                this.caract = this.getCaractMacro[1];
                this.num = 2;
            } else {
                this.caract = this.getCaractMacro[2];
                this.num = 3;
            }
            this.$modal.show("modal_eliminar_caract");
        },
        cambiarVariable() {
            this.modificarForm = false;
        },
        cancelar() {
            if (this.mostrarForm1) {
                this.mostrarForm1 = false;
                this.mostrar1 = false;
                this.mostrarBtnAgregar = true;
            } else if (this.mostrarForm2) {
                this.mostrarForm2 = false;
                this.cambiarActive(1);
                this.mostrar2 = false;
                this.mostrarBtnAgregar = true;
            } else if (this.mostrarForm3) {
                this.mostrarForm3 = false;
                this.cambiarActive(2);
                this.mostrar3 = false;
                this.mostrarBtnAgregar = true;
            }
        },

        abrirForm() {
            if (!this.mostrar1) {
                this.cambiarActive(1);
                this.mostrar1 = true;
                this.mostrarBtnAgregar = false;
            } else if (this.getCaractMacro[0] && !this.mostrar2) {
                this.cambiarActive(2);
                this.mostrar2 = true;
                this.mostrarBtnAgregar = false;
            } else if (this.getCaractMacro[1] && !this.mostrar3) {
                this.cambiarActive(3);
                this.mostrar3 = true;
                this.mostrarBtnAgregar = false;
            }
        },

        llenarForms() {
            if (this.getCaractMacro[0]) {
                this.medio1 = this.getCaractMacro[0].medio;
                this.mostrar1 = true;
            }
            if (this.getCaractMacro[1]) {
                this.medio2 = this.getCaractMacro[1].medio;
                this.mostrar2 = true;
            }
            if (this.getCaractMacro[2]) {
                this.medio3 = this.getCaractMacro[2].medio;
                this.mostrar3 = true;
                this.mostrarBtnAgregar = false;
            }
        },

        cambiarActive(num) {
            switch (num) {
                case 1:
                    this.active1 = "active";
                    this.active2 = "";
                    this.active3 = "";
                    this.mostrarForm1 = true;
                    this.mostrarForm2 = false;
                    this.mostrarForm3 = false;
                    break;
                case 2:
                    this.active1 = "";
                    this.active2 = "active";
                    this.active3 = "";
                    this.mostrarForm1 = false;
                    this.mostrarForm2 = true;
                    this.mostrarForm3 = false;
                    break;
                case 3:
                    this.active1 = "";
                    this.active2 = "";
                    this.active3 = "active";
                    this.mostrarForm1 = false;
                    this.mostrarForm2 = false;
                    this.mostrarForm3 = true;
                    break;
            }
        },

        formatear(num) {
            switch (num) {
                case 1:
                    if (this.mostrar3) {
                        this.mostrar3 = false;
                        this.cambiarActive(2);
                    } else if (this.mostrar2) {
                        this.mostrar2 = false;
                        this.cambiarActive(1);
                    } else {
                        this.mostrar1 = false;
                        this.mostrarForm1 = false;
                    }
                    break;
                case 2:
                    if (this.mostrar3) {
                        this.mostrar3 = false;
                        this.cambiarActive(2);
                    } else {
                        this.mostrar2 = false;
                        this.cambiarActive(1);
                    }
                    break;
                case 3:
                    this.mostrar3 = false;
                    this.cambiarActive(2);
                    break;
            }
        }
    },
    computed: {
        computedActive1() {
            return this.active1;
        },
        computedActive2() {
            return this.active2;
        },
        computedActive3() {
            return this.active3;
        },
        computedMostrarForm1() {
            return this.mostrarForm1;
        },
        computedMostrarForm2() {
            return this.mostrarForm2;
        },
        computedMostrarForm3() {
            return this.mostrarForm3;
        },
        mostrarForms() {
            if (!this.getCaractMacro[0] && !this.mostrar1) {
                this.mostrarForm1 = false;
                return false;
            } else {
                this.llenarForms();
                return true;
            }
        },

        mostrarBtnEliminar() {
            if (this.getCaractMacro[0] && this.mostrarForm1) {
                return true;
            } else if (this.getCaractMacro[1] && this.mostrarForm2) {
                return true;
            } else if (this.getCaractMacro[2] && this.mostrarForm3) {
                return true;
            } else {
                return false;
            }
        },

        mostrarBtnCancelar() {
            if (!this.getCaractMacro[0] && this.mostrarForm1) {
                return true;
            } else if (!this.getCaractMacro[1] && this.mostrarForm2) {
                return true;
            } else if (!this.getCaractMacro[2] && this.mostrarForm3) {
                return true;
            } else {
                return false;
            }
        },

        mostrarBtnAgregarComputed() {
            return this.mostrarBtnAgregar;
        },

        medio1: {
            get() {
                if (this.getCaractMacro[0]) {
                    return this.getCaractMacro[0].medio;
                }
            },
            set() {}
        },
        medio2: {
            get() {
                if (this.getCaractMacro[1]) {
                    return this.getCaractMacro[1].medio;
                }
            },
            set() {}
        },
        medio3: {
            get() {
                if (this.getCaractMacro[2]) {
                    return this.getCaractMacro[2].medio;
                }
            },
            set() {}
        }
    }
};
export default infoCaractMacroMixin;
