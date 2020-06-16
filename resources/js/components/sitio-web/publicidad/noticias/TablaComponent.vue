<template>
  <div>
    <template v-if="getNoticias!=''">
      <my-vuetable
        api-url="/info-panel/noticias-tabla"
        :fields="fields"
        :sort-order="sortOrder"
        :nameGet="'noticias'"
        @cambiarVariable="cambiarVariable"
        :refrescarTabla="refrescarTabla"
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
      refrescarTabla: false,
      idNoticia: ""
    };
  },
  computed: {
    ...vuex.mapGetters("publicidad", ["getNoticias"])
  },
  methods: {
    ...vuex.mapActions("publicidad", ["accionNoticia"]),
    cambiarVariable() {
      this.refrescarTabla = false;
    },
    beforeOpenEliminar(data) {
      this.idNoticia = data.params.id;
    },
    eliminarNoticia() {
      axios
        .delete(`/publicidad/${this.idNoticia}`, {
          data: { tipo: "noticia" }
        })
        .then(res => {
          this.accionNoticia({
            data: res.data,
            tipo: "eliminar"
          });
          this.$modal.hide("modal_eliminar_noticia");
          this.toastr(
            "Eliminar Noticia",
            "Noticia eliminado con exito!!",
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
    },
    abrirFormularioNoticia(id) {
      this.$emit("abrirFormularioNoticia", id);
    }
  },
  created() {
    this.$emit("cambiarTipo", "tabla");
  }
};
</script>