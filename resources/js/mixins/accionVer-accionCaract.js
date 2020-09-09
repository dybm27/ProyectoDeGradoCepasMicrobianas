const accionVerYCaractmixin = {
    props: [
        "tipoG",
        "bloqueos",
        "miBloqueo",
        "cantUser",
        "cantRecibirBtns",
        "tipo"
    ],
    data() {
        return {
            numGrupo: "",
            idCepa: 0,
            slugCepa: ""
        };
    },
    created() {
        this.buscarSlugCepa();
        this.obtenerCepa();
    },
    watch: {
        cepa() {
            if (this.cepa) {
                if (this.cepa === "No Existe") {
                    this.numGrupo = 5;
                } else {
                    this.numGrupo = this.verificarUrl(
                        this.cepa.cepa.grupo_microbiano_id
                    );
                }
            }
        },
        cantRecibirBtns() {
            if (this.cantRecibirBtns === this.cantUser - 1) {
                if (!this.miBloqueo) {
                    this.verificarBloqueo(this.idCepa);
                }
            }
        }
    },
    methods: {
        buscarSlugCepa() {
            switch (this.tipoG) {
                case 1:
                    this.splitSlug(this.$route.params.cepaBacteriaSlug);
                    break;
                case 2:
                    this.splitSlug(this.$route.params.cepaHongoSlug);
                    break;
                case 3:
                    this.splitSlug(this.$route.params.cepaLevaduraSlug);
                    break;
                case 4:
                    this.splitSlug(this.$route.params.cepaActinomicetoSlug);
                    break;
                case 0:
                    this.splitSlug(this.$route.params.cepaSlug);
                    break;
            }
        },
        verificarUrl(tipo) {
            let ruta = window.location.pathname;
            switch (tipo) {
                case 1:
                    if (ruta.includes("bacteria")) {
                        this.enviarBloqueo();
                        return 1;
                    }
                    break;
                case 2:
                    if (ruta.includes("hongo")) {
                        this.enviarBloqueo();
                        return 2;
                    }
                    break;
                case 3:
                    if (ruta.includes("levadura")) {
                        this.enviarBloqueo();
                        return 3;
                    }
                    break;
                case 4:
                    if (ruta.includes("actinomiceto")) {
                        this.enviarBloqueo();
                        return 4;
                    }
                    break;
            }
            return 5;
        },
        verificarBloqueo(id) {
            let data = this.bloqueos.find(btn => btn.id === id);
            if (data) {
                this.$router.push({ name: this.tipo + "s" });
                this.toastr(
                    "Acción no disponible!!!",
                    this.getUsuarioById(data.idUser).name +
                        " se encuentra modificando esa Cepa!!!",
                    "warning"
                );
            } else {
                this.obtenerCepa();
            }
        },
        obtenerCepa() {
            axios
                .get(`/info-panel/cepa/agregar-editar-caract`, {
                    params: {
                        id: this.idCepa,
                        slug: this.slugCepa
                    }
                })
                .then(res => {
                    if (res.request.responseURL === process.env.MIX_LOGIN) {
                        localStorage.setItem(
                            "mensajeLogin",
                            "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"
                        );
                        window.location.href = "/";
                    } else {
                        this.llenarCepa(res.data);
                    }
                })
                .catch(error => {
                    if (error.response.status === 403) {
                        this.$router.push("/sin-acceso");
                    }
                });
        },
        enviarBloqueo() {
            if (!this.miBloqueo) {
                window.Echo.private("bloquearBtnsCepa").whisper(
                    "bloquearBtnsCepa",
                    {
                        id: this.idCepa,
                        idUser: this.auth.id
                    }
                );
                this.$events.fire("agregarMiBloqueoCepa", {
                    id: this.idCepa,
                    idUser: this.auth.id
                });
            }
        },
        splitSlug(slug) {
            let array = slug.split("-");
            this.idCepa = parseInt(array[array.length - 1]);
            array.pop();
            this.slugCepa = array.join("-");
        }
    },
    destroyed() {
        this.limpiarCepa();
    }
};
export default accionVerYCaractmixin;
