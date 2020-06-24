<template>
  <div>
    <template v-if="mostrarTabla">
      <my-vuetable
        ref="tabla"
        api-url="/info-panel/noticias-tabla"
        :fields="fields"
        :sort-order="sortOrder"
        :nameGet="'noticias'"
      ></my-vuetable>
    </template>
    <template v-else>
      <div class="text-center">
        <h5 class="mt-5 mb-5">
          <span class="pr-1">
            <b class="text-success">AÚN NO SE HAN AGREGADO NOTICIAS</b>
          </span>
        </h5>
      </div>
    </template>
    <modal
      name="modal_eliminar_noticia"
      classes="my_modal"
      :width="400"
      :height="300"
      @before-open="beforeOpenEliminar"
      @closed="closeEliminar"
    >
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Eliminar Noticia</h5>
          <button type="button" class="close" @click="$modal.hide('modal_eliminar_noticia')">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>Esta segura/o de eliminar la Noticia?.</p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            @click="$modal.hide('modal_eliminar_noticia')"
          >Cancelar</button>
          <button type="button" class="btn btn-success" @click="eliminarNoticia">Eliminar</button>
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
      idNoticia: ""
    };
  },
  computed: {
    ...vuex.mapGetters("publicidad", ["getNoticias"]),
    ...vuex.mapGetters(["getUserAuth"]),
    mostrarTabla() {
      if (this.getNoticias != "" && this.getNoticias != null) {
        return true;
      }
      return false;
    }
  },
  methods: {
    ...vuex.mapActions("publicidad", ["accionNoticia"]),
    beforeOpenEliminar(data) {
      this.idNoticia = data.params.id;
    },
    closeEliminar() {
      window.Echo.private("desbloquearBtnsNoticia").whisper(
        "desbloquearBtnsNoticia",
        {
          idBtn: this.idNoticia
        }
      );
      window.Echo.private("desbloquearCheckNoticia").whisper(
        "desbloquearCheckNoticia",
        {
          idCheck: this.idNoticia
        }
      );
      this.$events.fire("spliceMisBloqueosNoticia", {
        id: this.idNoticia
      });
    },
    eliminarNoticia() {
      axios
        .delete(`/publicidad/${this.idNoticia}`, {
          data: { tipo: "noticia" }
        })
        .then(res => {
          this.toastr(
            "Eliminar Noticia",
            "Noticia eliminada con exito!!",
            "success"
          );
          this.accionNoticia({ tipo: "eliminar", data: res.data });
          this.actualizarTabla();
          this.$modal.hide("modal_eliminar_noticia");
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
    this.$events.on("actualizartablaNoticia", e => this.actualizarTabla());
  },
  destroyed() {
    this.$events.off("actualizartablaNoticia");
  }
};
</script>