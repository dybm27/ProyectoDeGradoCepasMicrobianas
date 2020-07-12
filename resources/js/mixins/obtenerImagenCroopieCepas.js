const obtenerImagenCroopieCepasMixin = {
    data() {
        return {
            imagenMiniatura: "",
            imagenError: ""
        };
    },
    methods: {
        cambiarValorImagen(valor) {
            if (valor) {
                this.parametros.imagen = valor;
            } else {
                if (!this.required) {
                    this.parametros.imagen = this.info.imagen;
                    this.imagenMiniatura = this.info.imagenPublica;
                    this.$refs.inputImagen.value = "";
                } else {
                    this.parametros.imagen = "";
                }
            }
        },
        obtenerImagen(e) {
            let file = e.target.files[0];
            let allowedExtensions = /(.jpg|.jpeg|.png)$/i;
            if (file) {
                if (!allowedExtensions.exec(file.name) || file.size > 2000000) {
                    this.imagenError =
                        "La imagen debe ser en formato .png .jpg y menor a 2Mb.";
                    this.$refs.inputImagen.value = "";
                    if (this.info) {
                        this.imagenMiniatura = this.info.imagenPublica;
                        this.parametros.imagen = this.info.imagen;
                    } else {
                        this.imagenMiniatura = "";
                        this.parametros.imagen = "";
                    }
                } else {
                    this.imagenError = "";
                    this.cargarImagen(file);
                }
            } else {
                if (this.info) {
                    this.imagenMiniatura = this.info.imagenPublica;
                    this.parametros.imagen = this.info.imagen;
                } else {
                    this.parametros.imagen = "";
                    this.imagenMiniatura = "";
                }
            }
        },
        cargarImagen(file) {
            let reader = new Image();
            reader.onload = e => {
                this.imagenMiniatura = reader.src;
            };
            reader.src = URL.createObjectURL(file);
        }
    },
    computed: {
        mostraImagen() {
            return this.imagenMiniatura;
        },
        mostrarBtnCroppie() {
            if (this.info) {
                if (this.imagenMiniatura != this.info.imagenPublica) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return true;
            }
        },
        validarCroppie() {
            if (this.info) {
                if (this.imagenMiniatura == this.info.imagenPublica) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        },
        validarBtn() {
            if (!this.parametros.imagen) {
                return true;
            }
            return false;
        }
    }
};
export default obtenerImagenCroopieCepasMixin;
