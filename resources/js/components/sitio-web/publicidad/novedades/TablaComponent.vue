<template>
  <div>
    <template v-if="mostrarTabla">
      <my-vuetable
        ref="tabla"
        api-url="/info-panel/novedades-tabla"
        :fields="fields"
        :sort-order="sortOrder"
        :nameGet="'novedades'"
      ></my-vuetable>
    </template>
    <template v-else>
      <div class="text-center">
        <h5 class="mt-5 mb-5">
          <span class="pr-1">
            <b class="text-success">AÚN NO SE HAN AGREGADO NOVEDADES</b>
          </span>
        </h5>
      </div>
    </template>
    <modal
      name="modal_eliminar_novedad"
      classes="my_modal"
      :width="400"
      :height="300"
      @before-open="beforeOpenEliminar"
    >
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Eliminar Novedad</h5>
          <button type="button" class="close" @click="$modal.hide('modal_eliminar_novedad')">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>Esta segura/o de eliminar la Novedad?.</p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            @click="$modal.hide('modal_eliminar_novedad')"
          >Cancelar</button>
          <button type="button" class="btn btn-success" @click="eliminarNovedad">Eliminar</button>
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
          field: "titulo",
          direction: "asc"
        }
      ],
      idNovedad: ""
    };
  },
  computed: {
    ...vuex.mapGetters("publicidad", ["getNovedades"]),
    mostrarTabla() {
      if (this.getNovedades != null && this.getNovedades != "") {
        return true;
      }
      return false;
    }
  },
  methods: {
    ...vuex.mapActions("publicidad", ["accionNovedad"]),
    beforeOpenEliminar(data) {
      this.idNovedad = data.params.id;
    },
    eliminarNovedad() {
      axios
        .delete(`/publicidad/${this.idNovedad}`, {
          data: { tipo: "novedad" }
        })
        .then(res => {
          this.toastr(
            "Eliminar Novedad",
            "Novedad eliminada con exito!!",
            "success"
          );
          this.accionNovedad({ tipo: "eliminar", data: res.data });
          this.actualizarTabla();
          this.$modal.hide("modal_eliminar_novedad");
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
    abrirFormularioNovedad(id) {
      this.$emit("abrirFormularioNovedad", id);
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
    this.$events.on("actualizartablaNovedad", e => this.actualizarTabla());
  },
  destroyed() {
    this.$events.off("actualizartablaNovedad");
  }
};
</script>