<template >
  <div>
    <modal
      name="modal_agregar_tipo_cepa"
      classes="my_modal"
      :width="450"
      :height="450"
      @before-open="beforeOpenAgregar"
    >
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Agregar {{primeraMayus(modal.tipo)}}</h5>
          <button type="button" class="close" @click="$modal.hide('modal_agregar_tipo_cepa')">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div
            class="position-relative form-group"
            v-if="modal.tipo==='genero'||modal.tipo==='especie'"
          >
            <label for="grupo_microbiano-modal" class>Grupo Microbiano</label>
            <select
              name="select"
              id="grupo_microbiano-modal"
              class="form-control"
              v-model="modal.grupo_microbiano"
              @change="cambiarGeneroEspecie"
            >
              <option v-for="(gm,index) in getGrupos" :key="index" :value="gm.id">{{gm.nombre}}</option>
            </select>
          </div>
          <div class="position-relative form-group" v-if="modal.tipo==='especie'">
            <label for="genero-modal" class>Genero</label>
            <select name="select" id="genero-modal" class="form-control" v-model="modal.genero">
              <option
                v-for="(g,index) in getGenerosId(modal.grupo_microbiano)"
                :key="index"
                :value="g.id"
              >{{g.nombre}}</option>
            </select>
          </div>
          <div class="position-relative form-group">
            <label for="nombre" class>Nombre</label>
            <input
              name="nombre"
              id="nombre"
              placeholder="..."
              type="text"
              class="form-control"
              :class="['form-control', validarNombre||errors? 'is-invalid':'']"
              v-model="modal.nombre"
            />
            <em
              v-if="validarNombre||errors"
              class="error invalid-feedback"
            >{{errors.nombre?errors.nombre[0]:errors}}</em>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            @click="$modal.hide('modal_agregar_tipo_cepa')"
          >Cancelar</button>
          <button
            type="button"
            class="btn btn-success"
            @click="agregarTipo"
            :disabled="validarNombre"
          >Agregar</button>
        </div>
      </div>
    </modal>
    <modal
      name="modal_editar_tipo_cepa"
      classes="my_modal"
      :width="400"
      :height="450"
      @before-open="beforeOpenEditar"
    >
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Editar {{primeraMayus(modal.tipo)}}</h5>
          <button type="button" class="close" @click="$modal.hide('modal_editar_tipo_cepa')">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="position-relative form-group" v-if="modal.tipo==='genero'">
            <label for="grupo_microbiano-modal" class>Grupo Microbiano</label>
            <select
              name="select"
              id="grupo_microbiano-modal"
              class="form-control"
              v-model="modal.grupo_microbiano"
            >
              <option v-for="(gm,index) in getGrupos" :key="index" :value="gm.id">{{gm.nombre}}</option>
            </select>
          </div>
          <div class="position-relative form-group" v-if="modal.tipo==='especie'">
            <label for="genero-modal" class>Genero</label>
            <select name="select" id="genero-modal" class="form-control" v-model="modal.genero">
              <option
                v-for="(g,index) in getGenerosId(modal.grupo_microbiano)"
                :key="index"
                :value="g.id"
              >{{g.nombre}}</option>
            </select>
          </div>
          <div class="position-relative form-group">
            <label for="nombre">Nombre</label>
            <input
              name="nombre"
              id="nombre"
              placeholder="..."
              type="text"
              :class="['form-control', validarNombre||errors? 'is-invalid':'']"
              v-model="modal.nombre"
            />
            <em
              v-if="validarNombre||errors"
              class="error invalid-feedback"
            >{{errors.nombre?errors.nombre[0]:errors}}</em>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            @click="$modal.hide('modal_editar_tipo_cepa')"
          >Cancelar</button>
          <button
            type="button"
            class="btn btn-success"
            @click="editarTipo"
            :disabled="validarNombre"
          >Editar</button>
        </div>
      </div>
    </modal>
    <modal
      name="modal_eliminar_tipo_cepa"
      classes="my_modal"
      :width="400"
      :height="300"
      @before-open="beforeOpenEliminar"
    >
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Eliminar {{primeraMayus(modal.tipo)}}</h5>
          <button type="button" class="close" @click="$modal.hide('modal_eliminar_tipo_cepa')">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>Esta segura/o de eliminar el/la {{primeraMayus(modal.tipo)}}?.</p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            @click="$modal.hide('modal_eliminar_tipo_cepa')"
          >Cancelar</button>
          <button type="button" class="btn btn-success" @click="eliminarTipo">Eliminar</button>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import vuex from "vuex";
export default {
  data() {
    return {
      idTipoEditar: "",
      idTipoEliminar: "",
      modal: { grupo_microbiano: 1, nombre: "", tipo: "", genero: 1 },
      errors: ""
    };
  },
  methods: {
    ...vuex.mapActions("info_cepas", [
      "accionAgregarTipoCepa",
      "accionEditarTipoCepa",
      "accionEliminarTipoCepa"
    ]),
    beforeOpenAgregar(data) {
      this.modal.nombre = "";
      this.modal.tipo = data.params.tipo;
      this.modal.grupo_microbiano = 1;
      this.modal.genero = 1;
    },
    agregarTipo() {
      axios
        .post("/info-cepas/agregar", this.modal)
        .then(res => {
          this.accionAgregarTipoCepa({
            info: res.data,
            tipo: this.modal.tipo
          });
          this.$emit("accionModal", {
            accion: "agregar",
            tipo: this.modal.tipo
          });
          this.$modal.hide("modal_agregar_tipo_cepa");
          this.toastr(
            `Agregar ${this.primeraMayus(this.modal.tipo)}`,
            `${this.primeraMayus(this.modal.tipo)} agregado/a con exito`,
            "success"
          );
        })
        .catch(error => {
          if (error.response) {
            this.errors = error.response.data.errors;
          }
          this.toastr("Error!!!!", "", "error");
        });
    },
    beforeOpenEditar(data) {
      this.idTipoEditar = data.params.id;
      this.modal.nombre = data.params.nombre;
      this.modal.tipo = data.params.tipo;
      if (data.params.tipo === "genero") {
        this.modal.grupo_microbiano = data.params.grupo;
      } else if (data.params.tipo === "especie") {
        this.modal.genero = data.params.genero;
        this.modal.grupo_microbiano = this.getGenerosById(
          data.params.genero
        ).grupo_microbiano_id;
      }
    },
    editarTipo() {
      axios
        .put(`/info-cepas/editar/${this.idTipoEditar}`, this.modal)
        .then(res => {
          this.accionEditarTipoCepa({
            info: res.data,
            tipo: this.modal.tipo
          });
          this.$emit("accionModal", {
            accion: "editar",
            tipo: this.modal.tipo
          });
          this.toastr(
            `Editar ${this.primeraMayus(this.modal.tipo)}`,
            `${this.primeraMayus(this.modal.tipo)} editado/a con exito!!`,
            "success",
            5000
          );
          this.$modal.hide("modal_editar_tipo_cepa");
        })
        .catch(error => {
          if (error.response) {
            this.errors = error.response.data;
          }
          this.toastr("Error!!!", "", "error", 4000);
        });
    },
    beforeOpenEliminar(data) {
      this.idTipoEliminar = data.params.id;
      this.modal.tipo = data.params.tipo;
    },
    eliminarTipo() {
      axios
        .delete(`/info-cepas/eliminar/${this.idTipoEliminar}`, {
          data: this.modal
        })
        .then(res => {
          if (res.data === "negativo") {
            this.toastr(
              "Precaución!!",
              "El Genero cuenta con especies registradas, favor eliminarlas",
              "warning",
              8000
            );
          } else {
            this.accionEliminarTipoCepa({
              info: res.data,
              tipo: this.modal.tipo
            });
            this.$emit("accionModal", {
              accion: "eliminar",
              tipo: this.modal.tipo
            });
            this.toastr(
              `Eliminar ${this.primeraMayus(this.modal.tipo)}`,
              `${this.primeraMayus(this.modal.tipo)} eliminado/a con exito!!`,
              "success",
              5000
            );
          }
          this.$modal.hide("modal_eliminar_tipo_cepa");
        })
        .catch(error => {
          if (error.response) {
            //console.log(error.response.data);
          }
          this.toastr("Error!!!", "", "error", 4000);
        });
    },
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
    primeraMayus(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    cambiarGeneroEspecie() {
      this.modal.genero = this.getGenerosId(this.modal.grupo_microbiano)[0].id;
    }
  },
  computed: {
    ...vuex.mapGetters("info_cepas", [
      "getGenerosId",
      "getGrupos",
      "getGenerosById"
    ]),
    validarNombre() {
      // solo numero /^([0-9])*$/ /^[A-Za-z\s]+$/
      let letters = /^[A-Za-z\sÁÉÍÓÚáéíóúñÑüÜ]+$/;
      if (this.modal.nombre) {
        if (!letters.test(this.modal.nombre)) {
          this.errors = "Solo se admiten letras.";
          return true;
        } else {
          this.errors = "";
          return false;
        }
      } else {
        this.errors = "Este campo es obligatorio";
        return true;
      }
    }
  }
};
</script>