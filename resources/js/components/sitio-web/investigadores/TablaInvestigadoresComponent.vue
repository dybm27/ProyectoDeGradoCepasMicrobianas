<template>
  <div>
    <template v-if="mostrarTabla">
      <my-vuetable
        ref="tabla"
        api-url="/info-panel/investigadores-tabla"
        :fields="fields"
        :sort-order="sortOrder"
        :nameGet="'investigadores'"
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
      texto: "",
      idInvestigador: "",
      nombreModal: "",
      nomBtn: "",
      error: ""
    };
  },
  computed: {
    ...vuex.mapGetters("investigadores", ["getInvestigadores"]),
    mostrarTabla() {
      if (this.getInvestigadores != "") {
        return true;
      }
      return false;
    }
  },
  methods: {
    ...vuex.mapActions("investigadores", ["accionInvestigador"]),
    beforeOpenEliminar(data) {
      this.idInvestigador = data.params.id;
    },
    eliminarInvestigador() {
      axios
        .delete(`/investigadores/${this.idInvestigador}`)
        .then(res => {
          this.accionInvestigador({ tipo: "eliminar", data: res.data });
          this.$modal.hide("modal_eliminar_investigador");
          this.toastr(
            "Eliminar Investigador",
            "Investigador eliminado con exito!!",
            "success"
          );
          this.actualizarTabla();
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
    },
    actualizarTabla() {
      if (this.mostrarTabla) {
        if (this.$refs.tabla) {
          this.$refs.tabla.refreshDatos();
        }
      }
    }
  },
  created() {
    this.$emit("cambiarTipo", "tabla");
    this.$events.on("actualizartablaInvestigador", e => this.actualizarTabla());
  },
  destroyed() {
    this.$events.off("actualizartablaInvestigador");
  }
};
</script>