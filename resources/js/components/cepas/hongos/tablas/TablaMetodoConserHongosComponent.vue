<template>
  <div>
    <template v-if="getMetodoConser!=''">
      <div class="card-body mt-3 ml-2 mr-2">
        <my-vuetable
          :api-url="url"
          :fields="fields"
          :sort-order="sortOrder"
          @cambiarVariable="cambiarVariable"
          :refrescarTabla="refrescarTabla"
          :nameGet="'metodos-hongos'"
        ></my-vuetable>
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
            <button type="button" class="btn btn-success" @click="eliminarMetodo">Eliminar</button>
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
import vuex from "vuex";
export default {
  data() {
    return {
      url: "/info-panel/cepa/hongo/metodos-conser/",
      refrescarTabla: false,
      idMetodoEliminar: "",
      fields: FieldDefs,
      sortOrder: [
        {
          field: "tipo_id",
          direction: "asc"
        }
      ]
    };
  },
  methods: {
    ...vuex.mapActions("cepa", ["accionEliminarCaract"]),

    toastr(titulo, msg, tipo, time) {
      this.$toastr.Add({
        title: titulo,
        msg: msg,
        position: "toast-top-right",
        type: tipo,
        timeout: time,
        progressbar: true,
        //progressBarValue:"", // if you want set progressbar value
        style: {},
        classNames: ["animated", "zoomInUp"],
        closeOnHover: true,
        clickClose: true,
        onCreated: () => {},
        onClicked: () => {},
        onClosed: () => {},
        onMouseOver: () => {},
        onMouseOut: () => {}
      });
    },

    cambiarVariable() {
      this.refrescarTabla = false;
    },

    eliminarMetodo() {
      axios
        .delete(`/cepas/hongo/metodo-conser/${this.idMetodoEliminar}`)
        .then(res => {
          this.refrescarTabla = true;
          this.accionEliminarCaract({ tipo: "metodo", data: res.data });
          this.toastr(
            "Eliminar Cepa",
            "Cepa eliminada con exito!!",
            "success",
            5000
          );
          this.$modal.hide("my_modal_eliminar_metodo");
        })
        .catch(error => {
          if (error.response) {
            //console.log(error.response.data);
          }
          this.toastr("Error!!!", "", "error", 4000);
        });
    },

    beforeOpen(data) {
      this.idMetodoEliminar = data.params.id;
    }
  },

  computed: {
    ...vuex.mapGetters("cepa", ["getMetodoConser"])
  },
  created() {
    if (this.$route.params.cepaHongoId) {
      this.url += this.$route.params.cepaHongoId;
    } else {
      this.url += this.$route.params.cepaId;
    }
  }
};
</script>