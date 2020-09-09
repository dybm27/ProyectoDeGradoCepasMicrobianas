const bloquearPestañasMixin = tipo => ({
    data() {
        return {
            numPestañas: 0,
            numPestaña: 0
        };
    },
    methods: {
        obtenerValorPestañas() {
            let value = this.$ls.get(tipo);
            if (value) {
                this.numPestañas = value.numPestañas + 1;
                this.numPestaña = this.numPestañas;
                this.$ls.set(tipo, {
                    numPestañas: this.numPestañas,
                    numPestañaSaliente: 0
                });
            } else {
                this.numPestañas = 1;
                this.numPestaña = 1;
                this.$ls.set(tipo, {
                    numPestañas: 1,
                    numPestañaSaliente: 0
                });
            }
        },
        modificarValorPestañas(val, oldVal) {
            if (val&&oldVal) {
                this.numPestañas = val.numPestañas;
                if (val.numPestañas < oldVal.numPestañas) {
                    if (val.numPestañaSaliente < this.numPestaña) {
                        this.numPestaña = this.numPestaña - 1;
                    }
                }
            } else {
                if (this.numPestaña == 1) {
                    this.$ls.set(tipo, {
                        numPestañas: this.numPestañas,
                        numPestañaSaliente: 0
                    });
                }
            }
        },
        verificar() {
            if (this.numPestañas === 1) {
                this.$ls.remove(tipo);
            } else {
                this.$ls.set(tipo, {
                    numPestañas: --this.numPestañas,
                    numPestañaSaliente: this.numPestaña
                });
            }
        },
        beforeunload() {
            this.verificar();
        }
    },
    mounted() {
        this.obtenerValorPestañas();
        window.addEventListener("beforeunload", this.beforeunload);
    },
    created() {
        this.$ls.on(tipo, this.modificarValorPestañas);
    },
    beforeDestroy() {
        this.verificar();
        this.$ls.off(tipo, this.modificarValorPestañas);
        window.removeEventListener("beforeunload", this.beforeunload);
    }
});
export default bloquearPestañasMixin;
