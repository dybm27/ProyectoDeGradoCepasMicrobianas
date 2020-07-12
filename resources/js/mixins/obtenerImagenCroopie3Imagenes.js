const obtenerImagenCroopie3ImagenesMixin = {
    data() {
        return {
            erroresImagenes: "",
            imagenesCroppie: [],
            imagenes: [],
            cantImagenes: ""
        };
    },
    methods: {
        cambiarValorImagen(datos) {
            switch (datos.num) {
                case 1:
                    this.imagenes[0].source = datos.data;
                    this.parametros.imagen1 = datos.data;
                    break;
                case 2:
                    this.imagenes[1].source = datos.data;
                    this.parametros.imagen2 = datos.data;
                    break;
                case 3:
                    this.imagenes[2].source = datos.data;
                    this.parametros.imagen3 = datos.data;
                    break;
            }
        },
        obtenerImagenes(e) {
            this.cantImagenes = 0;
            this.limpiar(0);
            let file = e.target.files[3];
            if (file) {
                this.erroresImagenes = "Solo puede subir max 3 imágenes.";
                this.limpiar(1);
            } else {
                let allowedExtensions = /(.jpg|.jpeg|.png)$/i;
                let imagenes = [];
                for (let index = 0; index < 3; index++) {
                    let imagen = e.target.files[index];
                    if (imagen) {
                        if (
                            !allowedExtensions.exec(imagen.name) ||
                            imagen.size > 2000000
                        ) {
                            this.limpiar(1);
                            this.erroresImagenes =
                                "Las imagenes deben ser en formato .png .jpg y menor a 2Mb.";
                            imagenes = "";
                            break;
                        } else {
                            this.erroresImagenes = "";
                            imagenes.push(imagen);
                        }
                    } else {
                        break;
                    }
                }
                this.cantImagenes = imagenes.length;
                this.cargarImagenes(imagenes);
            }
        },
        cargarImagenes(imagenes) {
            this.imagenesCroppie = [];
            if (imagenes) {
                for (let index = 0; index < imagenes.length; index++) {
                    let reader = new FileReader();
                    reader.onload = e => {
                        switch (index) {
                            case 0:
                                this.pushImagen(1, e.target.result, true);
                                this.imagenesCroppie.push(e.target.result);
                                break;
                            case 1:
                                this.pushImagen(2, e.target.result, false);
                                this.imagenesCroppie.push(e.target.result);
                                break;
                            case 2:
                                this.pushImagen(3, e.target.result, false);
                                this.imagenesCroppie.push(e.target.result);
                                break;
                        }
                    };
                    reader.readAsDataURL(imagenes[index]);
                }
            }
        },
        pushImagen(num, imagen, active) {
            this.imagenes.push({
                num: num,
                source: imagen,
                isActive: active
            });
        },
        llenarArregloImagenes() {
            if (this.parametros.imagen1) {
                this.pushImagen(1, this.info.imagenPublica1, true);
                if (this.parametros.imagen2) {
                    this.pushImagen(2, this.info.imagenPublica2, false);
                }
                if (this.parametros.imagen3) {
                    this.pushImagen(3, this.info.imagenPublica3, false);
                }
            } else if (this.parametros.imagen2) {
                this.pushImagen(2, this.info.imagenPublica2, true);
                if (this.parametros.imagen3) {
                    this.pushImagen(3, this.info.imagenPublica3, false);
                }
            } else if (this.parametros.imagen3) {
                this.pushImagen(3, this.info.imagenPublica3, true);
            }
        },
        limpiar(num) {
            switch (num) {
                case 0:
                    this.parametros.imagen1 = "";
                    this.parametros.imagen2 = "";
                    this.parametros.imagen3 = "";
                    this.imagenes = [];
                    break;
                case 1:
                    this.$refs.inputImagen.value = "";
                    break;
            }
        }
    },
    computed: {
        btnDisable() {
            if (this.imagenes != "") {
                if (this.info) {
                    if (this.info.imagen1) {
                        if (this.imagenes[0] && !this.parametros.imagen1) {
                            return true;
                        }
                        if (this.info.imagen2) {
                            if (this.imagenes[1] && !this.parametros.imagen2) {
                                return true;
                            }
                            if (this.info.imagen3) {
                                if (
                                    this.imagenes[2] &&
                                    !this.parametros.imagen3
                                ) {
                                    return true;
                                }
                            }
                        } else if (this.info.imagen3) {
                            if (this.imagenes[1] && !this.parametros.imagen3) {
                                return true;
                            }
                        }
                    } else if (this.info.imagen2) {
                        if (this.imagenes[0] && !this.parametros.imagen2) {
                            return true;
                        }
                        if (this.info.imagen3) {
                            if (this.imagenes[1] && !this.parametros.imagen3) {
                                return true;
                            }
                        }
                    } else if (this.info.imagen3) {
                        if (this.imagenes[0] && !this.parametros.imagen3) {
                            return true;
                        }
                    }
                    return false;
                } else {
                    if (this.imagenes[0] && !this.parametros.imagen1) {
                        return true;
                    }
                    if (this.imagenes[1] && !this.parametros.imagen2) {
                        return true;
                    }
                    if (this.imagenes[2] && !this.parametros.imagen3) {
                        return true;
                    }
                    return false;
                }
            } else {
                return false;
            }
        }
    }
};
export default obtenerImagenCroopie3ImagenesMixin;
