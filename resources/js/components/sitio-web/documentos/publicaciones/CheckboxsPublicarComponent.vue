<template>
  <div>
    <div class="custom-checkbox custom-control" v-if="getPermisoByNombre('editar-publicacion')">
      <input
        type="checkbox"
        :id="rowData.id"
        v-model="checkPublicar"
        class="custom-control-input"
        @click="publicar(rowData)"
        :disabled="computedDisabled"
      />
      <label class="custom-control-label" :for="rowData.id"></label>
    </div>
    <div v-else>
      <IconoNoAccess />
    </div>
  </div>
</template>

<script>
import vuex from "vuex";
import Toastr from "../../../../mixins/toastr";
import websocketsCheckMixin from "../../../../mixins/websocketsCheck";
import IconoNoAccess from "../../../IconoNoAccess.vue";
export default {
  components: { IconoNoAccess },
  props: {
    rowData: {
      type: Object,
      required: true,
    },
    rowIndex: {
      type: Number,
    },
  },
  data() {
    return { checkPublicar: false, disabled: false };
  },
  mixins: [websocketsCheckMixin("Publicacion", "publicaciones"), Toastr],
  computed: {
    ...vuex.mapGetters(["getPermisoByNombre"]),
    computedDisabled() {
      return this.disabled;
    },
  },
  methods: {
    ...vuex.mapActions("documentos", ["accionPublicacion"]),
    publicar(data) {
      this.disabled = true;
      axios
        .put(`/documentos/publicar/${data.id}`, {
          publicar: !this.checkPublicar,
          tipo: "publicacion",
        })
        .then((res) => {
          this.accionPublicacion({ tipo: "editar", data: res.data });
          if (res.data.publicar) {
            this.toastr("Publicar", "Publicado con Exito!!");
          }
          this.disabled = false;
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
          }
        });
    },
    verificarPublicar(e) {
      if (e == 0) {
        this.checkPublicar = false;
      } else {
        this.checkPublicar = true;
      }
    },
  },
  created() {
    this.verificarPublicar(this.rowData.publicar);
  },
};
</script>