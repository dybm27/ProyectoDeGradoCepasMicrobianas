<template>
  <div>
    <transition name="fade">
      <modal
        name="modal_eliminar_caract"
        classes="my_modal"
        :maxWidth="400"
        :adaptive="true"
        height="auto"
        :scrollable="true"
      >
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">
              Eliminar {{ tipoCaract }}
            </h5>
            <button
              type="button"
              class="close"
              @click="$modal.hide('modal_eliminar_caract')"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>Esta segura/o de eliminar la {{ tipo }}?.</p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              @click="$modal.hide('modal_eliminar_caract')"
            >
              Cancelar
            </button>
            <button
              dusk="btn-eliminar-modal"
              type="button"
              class="btn btn-success"
              :disabled="bloquearBtnModal"
              @click="eliminar"
            >
              Eliminar
            </button>
          </div>
        </div>
      </modal>
    </transition>
  </div>
</template>

<script>
import Toastr from "../../mixins/toastr";
export default {
  props: ["tipo", "tipoCaract", "caract", "url"],
  data() {
    return {
      bloquearBtnModal: false,
    };
  },
  mixins: [Toastr],
  methods: {
    eliminar() {
      this.bloquearBtnModal = true;
      axios
        .delete(`/cepas/${this.url + "/" + this.caract.id}`)
        .then((res) => {
          this.bloquearBtnModal = false;
          this.$modal.hide("modal_eliminar_caract");
          this.$emit("eliminar", res.data);
          this.toastr(
            "Eliminar " + this.tipo,
            this.tipoCaract + " eliminadas con exito!!",
            "success"
          );
        })
        .catch((error) => {
          if (error.response.status === 403) {
            this.$router.push("/sin-acceso");
          } else if (
            error.response.status === 405 ||
            error.response.status === 401
          ) {
            localStorage.setItem(
              "mensajeLogin",
              "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"
            );
            window.location.href = "/";
          } else {
            this.bloquearBtnModal = false;
            this.toastr("Error!!", "", "error");
          }
        });
    },
  },
};
</script>