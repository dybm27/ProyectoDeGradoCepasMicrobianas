const websocketsModalOtraInfo = tipoInfo => ({
    methods: {
        closeEditar() {
            window.Echo.private("desbloquearBtns" + tipoInfo).whisper(
                "desbloquearBtns" + tipoInfo,
                {
                    id: this.id,
                    tipo: this.modal.tipo
                }
            );
            this.$events.fire("eliminarMiBloqueo" + tipoInfo, {
                id: this.id,
                tipo: this.modal.tipo
            });
        },
        closeEliminar() {
            window.Echo.private("desbloquearBtns" + tipoInfo).whisper(
                "desbloquearBtns" + tipoInfo,
                {
                    id: this.id,
                    tipo: this.modal.tipo
                }
            );
            this.$events.fire("eliminarMiBloqueo" + tipoInfo, {
                id: this.id,
                tipo: this.modal.tipo
            });
        }
    }
});
export default websocketsModalOtraInfo;
