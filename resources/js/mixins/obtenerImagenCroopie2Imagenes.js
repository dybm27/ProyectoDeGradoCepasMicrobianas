const obtenerImagenCroopie3ImagenesMixin = {
    data() {
        return {
            imagenMiniatura1: "",
            imagenMiniatura2: "",
            imagenError: {
                imagen1: "",
                imagen2: ""
            },
            imagenInfo1: "",
            imagenInfo2: "",
            imagenInfoPublica1: "",
            imagenInfoPublica2: ""
        };
    },
    methods: {
        cambiarValorImagen1(valor) {
            if (valor) {
                this.parametros.imagen1 = valor;
            } else {
                if (!this.validarTipoForm) {
                    this.parametros.imagen1 = this.imagenInfo1;
                    this.imagenMiniatura1 = this.imagenInfoPublica1;
                    this.$refs.inputImagen1.value = "";
                } else {
                    this.parametros.imagen1 = "";
                }
            }
        },
        cambiarValorImagen2(valor) {
            if (valor) {
                this.parametros.imagen2 = valor;
            } else {
                if (!this.validarTipoForm) {
                    this.parametros.imagen2 = this.imagenInfo2;
                    this.imagenMiniatura2 = this.imagenInfoPublica2;
                    this.$refs.inputImagen2.value = "";
                } else {
                    this.parametros.imagen2 = "";
                }
            }
        },
        obtenerImagen1(e) {
            let file = e.target.files[0];
            let allowedExtensions = /(.jpg|.jpeg|.png)$/i;
            if (file) {
                if (!allowedExtensions.exec(file.name) || file.size > 2000000) {
                    this.imagenError.imagen1 =
                        "La imagen debe ser en formato .png .jpg y menor a 2Mb.";
                    if (this.validarTipoForm) {
                        this.imagenMiniatura1 = "";
                        this.parametros.imagen1 = "";
                    } else {
                        this.imagenMiniatura1 = this.imagenInfoPublica1;
                        this.parametros.imagen1 = this.imagenInfo1;
                    }
                    this.$refs.inputImagen1.value = "";
                } else {
                    this.imagenError.imagen1 = "";
                    this.cargarImagen(file, "imagen1");
                }
            } else {
                if (this.validarTipoForm) {
                    this.imagenMiniatura1 = "";
                    this.parametros.imagen1 = "";
                } else {
                    this.imagenMiniatura1 = this.imagenInfoPublica1;
                    this.parametros.imagen1 = this.imagenInfo1;
                }
            }
        },
        obtenerImagen2(e) {
            let file = e.target.files[0];
            let allowedExtensions = /(.jpg|.jpeg|.png)$/i;
            if (file) {
                if (!allowedExtensions.exec(file.name) || file.size > 2000000) {
                    this.imagenError.imagen2 =
                        "La imagen debe ser en formato .png .jpg y menor a 2Mb.";
                    if (this.validarTipoForm) {
                        this.imagenMiniatura2 = "";
                        this.parametros.imagen2 = "";
                    } else {
                        this.imagenMiniatura2 = this.imagenInfoPublica2;
                        this.parametros.imagen2 = this.imagenInfo2;
                    }
                    this.$refs.inputImagen2.value = "";
                } else {
                    this.imagenError.imagen2 = "";
                    this.cargarImagen(file, "imagen2");
                }
            } else {
                if (this.validarTipoForm) {
                    this.imagenMiniatura2 = "";
                    this.parametros.imagen2 = "";
                } else {
                    this.imagenMiniatura2 = this.imagenInfoPublica2;
                    this.parametros.imagen2 = this.imagenInfo2;
                }
            }
        },
        cargarImagen(file, tipo) {
            let reader = new FileReader();
            reader.onload = e => {
                switch (tipo) {
                    case "imagen1":
                        this.imagenMiniatura1 = e.target.result;
                        break;
                    case "imagen2":
                        this.imagenMiniatura2 = e.target.result;
                        break;
                }
            };
            reader.readAsDataURL(file);
        }
    },
    computed: {
        mostraImagen1() {
            return this.imagenMiniatura1;
        },
        mostraImagen2() {
            return this.imagenMiniatura2;
        },
        mostrarBtnCroppie1() {
            if (this.info) {
                if (this.imagenMiniatura1 != this.imagenInfoPublica1) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return true;
            }
        },
        mostrarBtnCroppie2() {
            if (this.info) {
                if (this.imagenMiniatura2 != this.imagenInfoPublica2) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return true;
            }
        },
        validarCroppie1() {
            if (this.info) {
                if (this.imagenMiniatura1 == this.imagenInfoPublica1) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        },
        validarCroppie2() {
            if (this.info) {
                if (this.imagenMiniatura2 == this.imagenInfoPublica2) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        }
    }
};
export default obtenerImagenCroopie3ImagenesMixin;
