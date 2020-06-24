<template>
  <div>
    <template v-if="mostrarTabla">
      <my-vuetable
        ref="tabla"
        api-url="/info-panel/actividades-tabla"
        :fields="fields"
        :sort-order="sortOrder"
        :nameGet="'actividades'"
      ></my-vuetable>
    </template>
    <template v-else>
      <div class="text-center">
        <h5 class="mt-5 mb-5">
          <span class="pr-1">
            <b class="text-success">AÚN NO SE HAN AGREGADO ACTIVIDADES</b>
          </span>
        </h5>
      </div>
    </template>
    <modal
      name="modal_eliminar_actividad"
      classes="my_modal"
      :width="400"
      :height="300"
      @before-open="beforeOpenEliminar"
      @closed="closeEliminar"
    >
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Eliminar Actividad</h5>
          <button type="button" class="close" @click="$modal.hide('modal_eliminar_actividad')">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>Esta segura/o de eliminar la Actividad?.</p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            @click="$modal.hide('modal_eliminar_actividad')"
          >Cancelar</button>
          <button type="button" class="btn btn-success" @click="eliminarActividad">Eliminar</button>
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
      idActividad: ""
    };
  },
  computed: {
    ...vuex.mapGetters("publicidad", ["getActividades"]),
    mostrarTabla() {
      if (this.getActividades != null && this.getActividades != "") {
        return true;
      }
      return false;
    }
  },
  methods: {
    ...vuex.mapActions("publicidad", ["accionActividad"]),
    beforeOpenEliminar(data) {
      this.idActividad = data.params.id;
    },
    closeEliminar() {
      window.Echo.private("desbloquearBtnsActividad").whisper(
        "desbloquearBtnsActividad",
        {
          idBtn: this.idActividad
        }
      );
      window.Echo.private("desbloquearCheckActividad").whisper(
        "desbloquearCheckActividad",
        {
          idCheck: this.idActividad
        }
      );
      this.$events.fire("spliceMisBloqueos", {
        id: this.idActividad
      });
    },
    eliminarActividad() {
      axios
        .delete(`/publicidad/${this.idActividad}`, {
          data: { tipo: "actividad" }
        })
        .then(res => {
          this.toastr(
            "Eliminar Actividad",
            "Actividad eliminada con exito!!",
            "success"
          );
          this.accionActividad({ tipo: "eliminar", data: res.data });
          this.actualizarTabla();
          this.$modal.hide("modal_eliminar_actividad");
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
    this.$events.on("actualizartablaActividad", e => this.actualizarTabla());
  },
  destroyed() {
    this.$events.off("actualizartablaActividad");
  }
};
</script>