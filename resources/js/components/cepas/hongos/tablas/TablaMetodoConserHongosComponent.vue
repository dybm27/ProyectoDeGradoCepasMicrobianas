<template>
  <div>
    <template v-if="getMetodoConser!=''">
      <div class="card-body mt-3 ml-2 mr-2">
        <MyVuetable
          :api-url="url"
          :fields="fields"
          :sort-order="sortOrder"
          @cambiarVariable="cambiarVariable"
          :refrescarTabla="refrescarTabla"
          :nameGet="'metodos-hongos'"
        ></MyVuetable>
      </div>
      <modal
        name="my_modal_eliminar_metodo"
        classes="my_modal"
        :width="400"
        :height="300"
        @before-open="beforeOpen"
      >
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Eliminar Método de Conservación</h5>
            <button type="button" class="close" @click="$modal.hide('my_modal_eliminar_metodo')">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>Esta segura/o de eliminar el Método?.</p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              @click="$modal.hide('my_modal_eliminar_metodo')"
            >Cancelar</button>
            <button
              type="button"
              class="btn btn-success"
              :disabled="bloquearBtnModal"
              @click="eliminarMetodo"
            >Eliminar</button>
          </div>
        </div>
      </modal>
    </template>
    <template v-else>
      <div class="text-center">
        <h5 class="mt-5 mb-5">
          <span class="pr-1">
            <b class="text-success">NO SE HA AGREGADO NINGÚN MÉTODO</b>
          </span>
        </h5>
      </div>
    </template>
  </div>
</template>
<script>
import FieldDefs from "./metodo-conser";
import Toastr from "../../../../mixins/toastr";
import vuex from "vuex";
import MyVuetable from "../../../vuetable/MyVuetableComponent.vue";
export default {
  components: { MyVuetable },
  data() {
    return {
      url: "/info-panel/cepa/hongo/metodos-conser/",
      refrescarTabla: false,
      idMetodoEliminar: "",
      fields: FieldDefs,
      sortOrder: [
        {
          field: "tipo_id",
          direction: "asc",
        },
      ],
      bloquearBtnModal: false,
    };
  },
  mixins: [Toastr],
  methods: {
    ...vuex.mapActions("cepa", ["accionEliminarCaract"]),
    cambiarVariable() {
      this.refrescarTabla = false;
    },
    eliminarMetodo() {
      this.bloquearBtnModal = true;
      axios
        .delete(`/cepas/hongo/metodo-conser/${this.idMetodoEliminar}`)
        .then((res) => {
          this.bloquearBtnModal = false;
          if (res.request.responseURL === process.env.MIX_LOGIN) {
            localStorage.setItem(
              "mensajeLogin",
              "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"
            );
            window.location.href = "/";
          } else {
            this.refrescarTabla = true;
            this.accionEliminarCaract({ tipo: "metodo", data: res.data });
            this.toastr(
              "Eliminar Cepa",
              "Cepa eliminada con exito!!",
              "success",
              5000
            );
            this.$modal.hide("my_modal_eliminar_metodo");
          }
        })
        .catch((error) => {
          this.bloquearBtnModal = false;
          this.toastr("Error!!", "", "error");
        });
    },

    beforeOpen(data) {
      this.idMetodoEliminar = data.params.id;
    },
  },

  computed: {
    ...vuex.mapGetters("cepa", ["getMetodoConser"]),
  },
  created() {
    if (this.$route.params.cepaHongoId) {
      this.url += this.$route.params.cepaHongoId;
    } else {
      this.url += this.$route.params.cepaId;
    }
  },
};
</script>