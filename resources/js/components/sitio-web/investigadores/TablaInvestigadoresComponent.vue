<template>
  <div>
    <template v-if="getInvestigadores!=''">
      <my-vuetable
        api-url="/info-panel/investigadores-tabla"
        :fields="fields"
        :sort-order="sortOrder"
        :nameGet="'investigadores'"
        @cambiarVariable="cambiarVariable"
        :refrescarTabla="refrescarTabla"
      ></my-vuetable>
    </template>
    <template v-else>
      <div class="text-center">
        <h5 class="mt-5 mb-5">
          <span class="pr-1">
            <b class="text-success">AÚN NO SE HAN AGREGADO INVESTIGADORES</b>
          </span>
        </h5>
      </div>
    </template>
    <modal
      name="modal_eliminar_investigador"
      classes="my_modal"
      :width="400"
      :height="300"
      @before-open="beforeOpenEliminar"
    >
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Eliminar Investigador</h5>
          <button type="button" class="close" @click="$modal.hide('modal_eliminar_investigador')">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>Esta segura/o de eliminar el Investigador?.</p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            @click="$modal.hide('modal_eliminar_investigador')"
          >Cancelar</button>
          <button type="button" class="btn btn-success" @click="eliminarInvestigador">Eliminar</button>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import FieldDefs from "./columnas";
import vuex from "vuex";
export default {
  data() {
    return {
      fields: FieldDefs,
      sortOrder: [
        {
          field: "nombres",
          direction: "asc"
        }
      ],
      refrescarTabla: false,
      texto: "",
      idInvestigador: "",
      nombreModal: "",
      nomBtn: "",
      error: ""
    };
  },
  computed: {
    ...vuex.mapGetters("investigadores", ["getInvestigadores"])
  },
  methods: {
    ...vuex.mapActions("investigadores", ["accionInvestigador"]),
    cambiarVariable() {
      this.refrescarTabla = false;
    },
    beforeOpenEliminar(data) {
      this.idInvestigador = data.params.id;
    },
    eliminarInvestigador() {
      axios
        .delete(`/investigadores/${this.idInvestigador}`)
        .then(res => {
          this.accionInvestigador({
            data: res.data,
            tipo: "eliminar"
          });
          this.$modal.hide("modal_eliminar_investigador");
          this.toastr(
            "Eliminar Investigador",
            "Investigador eliminado con exito!!",
            "success"
          );
          this.refrescarTabla = true;
        })
        .catch(error => {
          this.toastr("Error!!!!", "", "error");
        });
    },
    toastr(titulo, msg, tipo) {
      this.$toastr.Add({
        title: titulo,
        msg: msg,
        position: "toast-top-right",
        type: tipo,
        timeout: 5000,
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
    }
  },
  created() {
    this.$emit("cambiarTipo", "tabla");
  }
};
</script>