const obtenerImagenCroopieMixin = {
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
                        "La imagen debe ser en formato .jpg .png y menor a 2Mb.";
                    this.imagenMiniatura = this.info.imagenPublica;
                    this.$refs.inputImagen.value = "";
                    this.parametros.imagen = this.info.imagen;
                } else {
                    this.imagenError = "";
                    this.cargarImagen(file);
                }
            } else {
                this.imagenMiniatura = this.info.imagenPublica;
                this.$refs.inputImagen.value = "";
                this.parametros.imagen = this.info.imagen;
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
            if (this.imagenMiniatura != this.info.imagenPublica) {
                return true;
            } else {
                return false;
            }
        }
    }
};
export default obtenerImagenCroopieMixin;
