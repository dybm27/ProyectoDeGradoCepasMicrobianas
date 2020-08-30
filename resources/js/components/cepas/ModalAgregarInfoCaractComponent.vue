<template>
  <div>
    <modal
      name="modal_agregar_info_caract"
      @closed="closed"
      classes="my_modal"
      :width="450"
      :height="450"
    >
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">{{titulo}}</h5>
          <button type="button" class="close" @click="$modal.hide('modal_agregar_info_caract')">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="position-relative form-group">
            <label for="nombre" class>Nombre</label>
            <input
              name="nombre"
              id="nombre"
              placeholder="..."
              type="text"
              :class="['form-control', errors.nombre? 'error-input-select':'']"
              v-model="nombre"
              required
            />
            <span v-if="errors.nombre" class="text-error-input">{{errors.nombre[0]}}</span>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            @click="$modal.hide('modal_agregar_info_caract')"
          >Cancelar</button>
          <button
            type="button"
            class="btn btn-success"
            :disabled="bloquearBtnModal"
            @click="agregarInfo"
          >Agregar</button>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import Toastr from "../../mixins/toastr";
import vuex from "vuex";
export default {
  props: ["titulo", "tipo", "url", "tipoForm"],
  data() {
    return {
      nombre: "",
      errors: [],
      bloquearBtnModal: false,
    };
  },
  mixins: [Toastr],
  methods: {
    ...vuex.mapActions("info_caract", [
      "accionAgregarTipoCaractLevadura",
      "accionAgregarTipoCaractActinomiceto",
      "accionAgregarTipoCaractHongo",
      "accionAgregarTipoCaractBacteria",
    ]),
    ...vuex.mapActions("info_caract", []),
    ...vuex.mapActions("info_caract", []),
    ...vuex.mapActions("info_caract", []),
    closed() {
      this.nombre = "";
      this.errors = [];
    },
    agregarInfo() {
      if (this.nombre === "") {
        this.errors = { nombre: { 0: "Favor llenar este campo" } };
      } else {
        this.bloquearBtnModal = true;
        let parametros = {
          tipo: this.tipo,
          nombre: this.nombre,
        };
        axios
          .post(`/${this.url}/agregar`, parametros)
          .then((res) => {
            if (res.request.responseURL === process.env.MIX_LOGIN) {
              localStorage.setItem(
                "mensajeLogin",
                "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"
              );
              window.location.href = "/";
            } else {
              this.bloquearBtnModal = false;
              this.guardarInfo(res.data);
              this.$modal.hide("modal_agregar_info_caract");
              this.toastr(
                "Agregar Info!!",
                `${this.tipo} agregado/a con exito`,
                "success"
              );
            }
          })
          .catch((error) => {
            if (error.response.status === 403) {
              this.$router.push("/sin-acceso");
            } else {
              this.bloquearBtnModal = false;
              if (error.response.status === 422) {
                this.errors = [];
                this.errors = error.response.data.errors;
              }
              this.toastr("Error!!", "", "error");
            }
          });
      }
    },
    guardarInfo(data) {
      switch (this.tipoForm) {
        case "bacteria":
          this.accionAgregarTipoCaractBacteria({
            info: data,
            tipo: this.tipo,
          });
          break;
        case "hongo":
          this.accionAgregarTipoCaractHongo({
            info: data,
            tipo: this.tipo,
          });
          break;
        case "levadura":
          this.accionAgregarTipoCaractLevadura({
            info: data,
            tipo: this.tipo,
          });
          break;
        case "actinomiceto":
          this.accionAgregarTipoCaractActinomiceto({
            info: data,
            tipo: this.tipo,
          });
          break;
        case "cepa":
          break;
      }
    },
  },
};
</script>