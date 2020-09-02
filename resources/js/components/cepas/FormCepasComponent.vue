<template>
  <div>
    <form @submit.prevent="evento">
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col-md-8">
            <div class="main-card mb-3 card">
              <div class="card-body">
                <h5 class="card-title">{{nombre}}</h5>
                <template v-if="errors!=''">
                  <div class="alert alert-danger">
                    <p v-for="(item, index) in errors" :key="index">{{item[0]}}</p>
                  </div>
                </template>
                <div class="position-relative form-group">
                  <label for="codigo" class>Código</label>
                  <input
                    name="codigo"
                    id="codigo"
                    placeholder="..."
                    type="text"
                    :class="['form-control', $v.parametros.codigo.$error? 'error-input-select':'']"
                    v-model.trim="$v.parametros.codigo.$model"
                  />
                  <em
                    v-if="$v.parametros.codigo.$error&&!$v.parametros.codigo.required"
                    class="text-error-input"
                  >{{mensajes.required}}</em>
                  <em
                    v-if="$v.parametros.codigo.$error&&!$v.parametros.codigo.minLength"
                    class="text-error-input"
                  >{{mensajes.minLength + $v.parametros.codigo.$params.minLength.min+' letras.'}}</em>
                  <em
                    v-if="$v.parametros.codigo.$error&&!$v.parametros.codigo.unique"
                    class="text-error-input"
                  >{{mensajes.unique}}</em>
                </div>
                <div class="position-relative form-group" v-if="mostrarGrupos&&!disabled">
                  <label for="grupo_microbiano" class>Grupo Microbiano</label>
                  <select
                    name="select"
                    id="grupo_microbiano"
                    class="form-control"
                    v-model="parametros.grupo_microbiano"
                    @change="cambiarGeneroEspecie"
                  >
                    <option
                      v-for="(gm,index) in getGrupos"
                      :key="index"
                      :value="gm.id"
                    >{{gm.nombre}}</option>
                  </select>
                </div>
                <div class="form-row">
                  <div class="col-md-6">
                    <label for="genero" class>Género</label>
                    <div class="input-group mb-3">
                      <select
                        name="select"
                        id="genero"
                        :class="['form-control', $v.parametros.genero.$error? 'error-input-select':'']"
                        v-model.trim="$v.parametros.genero.$model"
                        @change="cambiarEspecie"
                      >
                        <option
                          v-for="(g,index) in getGenerosId(parametros.grupo_microbiano)"
                          :key="index"
                          :value="g.id"
                        >{{g.nombre}}</option>
                      </select>
                      <div class="input-group-append" v-if="getPermisoByNombre('agregar-otra')">
                        <button
                          class="btn-icon btn-icon-only btn-pill btn btn-outline-success"
                          @click.prevent="showModal('genero')"
                        >
                          <i class="fas fa-plus"></i>
                        </button>
                      </div>
                    </div>
                    <em
                      v-if="$v.parametros.genero.$error&&!$v.parametros.genero.required"
                      class="text-error-select"
                    >{{mensajes.required}}</em>
                  </div>
                  <div class="col-md-6">
                    <label for="especie" class>Especie</label>
                    <div class="input-group mb-3">
                      <select
                        name="select"
                        id="especie"
                        :class="['form-control', $v.parametros.especie.$error? 'error-input-select':'']"
                        v-model.trim="$v.parametros.especie.$model"
                      >
                        <option
                          v-for="(e,index) in getEspeciesId(parametros.genero)"
                          :key="index"
                          :value="e.id"
                        >{{e.nombre}}</option>
                      </select>
                      <div class="input-group-append" v-if="getPermisoByNombre('agregar-otra')">
                        <button
                          class="btn-icon btn-icon-only btn-pill btn btn-outline-success"
                          @click.prevent="showModal('especie')"
                        >
                          <i class="fas fa-plus"></i>
                        </button>
                      </div>
                    </div>
                    <em
                      v-if="$v.parametros.especie.$error&&!$v.parametros.especie.required"
                      class="text-error-select"
                    >{{mensajes.required}}</em>
                  </div>
                </div>
                <div class="form-row">
                  <div class="col-md-6">
                    <div
                      v-if="parametros.grupo_microbiano === 2 || parametros.grupo_microbiano=== 3 "
                    >
                      <label for="familia" class>Familia</label>
                      <div class="input-group mb-3">
                        <select
                          name="select"
                          id="familia"
                          :class="['form-control', $v.parametros.familia.$error? 'error-input-select':'']"
                          v-model.trim="$v.parametros.familia.$model"
                        >
                          <option
                            v-for="(f,index) in getFamilias"
                            :key="index"
                            :value="f.id"
                          >{{f.nombre}}</option>
                        </select>
                        <div class="input-group-append" v-if="getPermisoByNombre('agregar-otra')">
                          <button
                            class="btn-icon btn-icon-only btn-pill btn btn-outline-success"
                            @click.prevent="showModal('familia')"
                          >
                            <i class="fas fa-plus"></i>
                          </button>
                        </div>
                      </div>
                      <em
                        v-if="$v.parametros.familia.$error&&!$v.parametros.familia.required"
                        class="text-error-select"
                      >{{mensajes.required}}</em>
                    </div>
                    <div v-if=" parametros.grupo_microbiano === 4 ">
                      <label for="reino" class>Reino</label>
                      <div class="input-group mb-3">
                        <select
                          name="select"
                          id="reino"
                          :class="['form-control', $v.parametros.reino.$error? 'error-input-select':'']"
                          v-model.trim="$v.parametros.reino.$model"
                        >
                          <option
                            v-for="(r,index) in getReinos"
                            :key="index"
                            :value="r.id"
                          >{{r.nombre}}</option>
                        </select>
                        <div class="input-group-append" v-if="getPermisoByNombre('agregar-otra')">
                          <button
                            class="btn-icon btn-icon-only btn-pill btn btn-outline-success"
                            @click.prevent="showModal('reino')"
                          >
                            <i class="fas fa-plus"></i>
                          </button>
                        </div>
                      </div>
                      <em
                        v-if="$v.parametros.reino.$error&&!$v.parametros.reino.required"
                        class="text-error-select"
                      >{{mensajes.required}}</em>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div
                      v-if="parametros.grupo_microbiano === 2 || parametros.grupo_microbiano === 4"
                    >
                      <label for="phylum" class>Phylum</label>
                      <div class="input-group mb-3">
                        <select
                          name="select"
                          id="phylum"
                          :class="['form-control', $v.parametros.phylum.$error? 'error-input-select':'']"
                          v-model.trim="$v.parametros.phylum.$model"
                        >
                          <option
                            v-for="(p,index) in getPhylums"
                            :key="index"
                            :value="p.id"
                          >{{p.nombre}}</option>
                        </select>
                        <div class="input-group-append" v-if="getPermisoByNombre('agregar-otra')">
                          <button
                            class="btn-icon btn-icon-only btn-pill btn btn-outline-success"
                            @click.prevent="showModal('phylum')"
                          >
                            <i class="fas fa-plus"></i>
                          </button>
                        </div>
                      </div>
                      <em
                        v-if="$v.parametros.phylum.$error&&!$v.parametros.phylum.required"
                        class="text-error-select"
                      >{{mensajes.required}}</em>
                    </div>
                    <div v-if=" parametros.grupo_microbiano === 3 ">
                      <label for="division" class>Division</label>
                      <div class="input-group mb-3">
                        <select
                          name="select"
                          id="division"
                          :class="['form-control', $v.parametros.division.$error? 'error-input-select':'']"
                          v-model.trim="$v.parametros.division.$model"
                        >
                          <option
                            v-for="(d,index) in getDivisiones"
                            :key="index"
                            :value="d.id"
                          >{{d.nombre}}</option>
                        </select>
                        <div class="input-group-append" v-if="getPermisoByNombre('agregar-otra')">
                          <button
                            class="btn-icon btn-icon-only btn-pill btn btn-outline-success"
                            @click.prevent="showModal('division')"
                          >
                            <i class="fas fa-plus"></i>
                          </button>
                        </div>
                      </div>
                      <em
                        v-if="$v.parametros.division.$error&&!$v.parametros.division.required"
                        class="text-error-select"
                      >{{mensajes.required}}</em>
                    </div>
                  </div>
                </div>
                <div
                  v-if="parametros.grupo_microbiano === 2 || parametros.grupo_microbiano=== 3  || parametros.grupo_microbiano === 4"
                >
                  <div class="form-row">
                    <div class="col-md-6">
                      <label for="clase" class>Clase</label>
                      <div class="input-group mb-3">
                        <select
                          name="select"
                          id="clase"
                          :class="['form-control', $v.parametros.clase.$error? 'error-input-select':'']"
                          v-model.trim="$v.parametros.clase.$model"
                        >
                          <option
                            v-for="(c,index) in getClases"
                            :key="index"
                            :value="c.id"
                          >{{c.nombre}}</option>
                        </select>
                        <div class="input-group-append" v-if="getPermisoByNombre('agregar-otra')">
                          <button
                            class="btn-icon btn-icon-only btn-pill btn btn-outline-success"
                            @click.prevent="showModal('clase')"
                          >
                            <i class="fas fa-plus"></i>
                          </button>
                        </div>
                      </div>
                      <em
                        v-if="$v.parametros.clase.$error&&!$v.parametros.clase.required"
                        class="text-error-select"
                      >{{mensajes.required}}</em>
                    </div>
                    <div class="col-md-6">
                      <label for="orden" class>Orden</label>
                      <div class="input-group mb-3">
                        <select
                          name="select"
                          id="orden"
                          :class="['form-control', $v.parametros.orden.$error? 'error-input-select':'']"
                          v-model.trim="$v.parametros.orden.$model"
                        >
                          <option
                            v-for="(o,index) in getOrdens"
                            :key="index"
                            :value="o.id"
                          >{{o.nombre}}</option>
                        </select>
                        <div class="input-group-append" v-if="getPermisoByNombre('agregar-otra')">
                          <button
                            class="btn-icon btn-icon-only btn-pill btn btn-outline-success"
                            @click.prevent="showModal('orden')"
                          >
                            <i class="fas fa-plus"></i>
                          </button>
                        </div>
                      </div>
                      <em
                        v-if="$v.parametros.orden.$error&&!$v.parametros.orden.required"
                        class="text-error-select"
                      >{{mensajes.required}}</em>
                    </div>
                  </div>
                </div>
                <div class="form-row">
                  <div class="col-md-6">
                    <div class="position-relative form-group">
                      <label for="estado" class>Estado</label>
                      <input
                        name="estado"
                        id="estado"
                        placeholder="..."
                        type="text"
                        :class="['form-control', $v.parametros.estado.$error? 'error-input-select':'']"
                        v-model.trim="$v.parametros.estado.$model"
                      />
                      <em
                        v-if="$v.parametros.estado.$error&&!$v.parametros.estado.required"
                        class="text-error-input"
                      >{{mensajes.required}}</em>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="position-relative form-group">
                      <label for="origen" class>Origen</label>
                      <select
                        name="select"
                        id="origen"
                        class="form-control"
                        v-model="parametros.origen"
                      >
                        <option value="Donación">Donación</option>
                        <option value="Compra">Compra</option>
                        <option value="Proyecto">Proyecto</option>
                        <option value="Aislamiento del Laboratorio">Aislamiento del Laboratorio</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="position-relative form-group">
                  <label for="otras_caracteristicas">Otras Caracteristicas</label>
                  <textarea
                    name="text"
                    id="otras_caracteristicas"
                    class="form-control"
                    v-model="parametros.otras_caracteristicas"
                  ></textarea>
                </div>
                <div class="custom-checkbox custom-control mb-2">
                  <input
                    type="checkbox"
                    id="publicar"
                    class="custom-control-input"
                    v-model="parametros.publicar"
                  />
                  <label class="custom-control-label" for="publicar">Desea publicar la cepa?</label>
                </div>
                <button
                  class="mt-2 btn btn-block"
                  :disabled="bloquearBtn"
                  :class="classBtn"
                >{{nombreBtn}}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
    <modal name="agregar-otra-info" classes="my_modal" :width="450" :height="450">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">{{modal.titulo}}</h5>
          <button type="button" class="close" @click="$modal.hide('agregar-otra-info')">
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
                v-for="(g,index) in getGenerosId(parametros.grupo_microbiano)"
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
              :class="['form-control', validarNombreUnico||modal.errors? 'error-input-select':'']"
              v-model="modal.input"
            />
            <em
              v-if="validarNombreUnico"
              class="text-error-input"
            >Ya existe un registro con ese nombre</em>
            <em v-if="modal.errors" class="text-error-input">{{mensajes.required}}</em>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            @click="$modal.hide('agregar-otra-info')"
          >Cancelar</button>
          <button
            type="button"
            class="btn btn-success"
            :disabled="bloquearBtnModal"
            @click="agregarInfo"
          >Agregar</button>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import vuex from "vuex";
import Toastr from "../../mixins/toastr";
import { required, minLength } from "vuelidate/lib/validators";
import toastr from "../../mixins/toastr";
export default {
  props: ["tipoG", "idCepa"],
  data() {
    return {
      info: "",
      parametros: {
        codigo: "",
        grupo_microbiano: null,
        genero: null,
        especie: null,
        phylum: null,
        clase: null,
        orden: null,
        reino: null,
        division: null,
        familia: null,
        estado: "",
        origen: "Donación",
        publicar: false,
        otras_caracteristicas: "",
      },
      modal: {
        titulo: "",
        input: "",
        tipo: "",
        grupo_microbiano: 1,
        genero: 1,
        errors: false,
      },
      errors: [],
      mostrarGrupos: true,
      disabled: false,
      nombre: "",
      nombreBtn: "",
      classBtn: "",
      bloquearBtn: false,
      bloquearBtnModal: false,
      mensajeCodigo: "",
      mensajes: {
        required: "El campo es requerido",
        minLength: "El campo debe tener como minimo ",
        unique: "",
      },
    };
  },
  validations() {
    if (this.parametros.grupo_microbiano == 1) {
      return {
        parametros: {
          codigo: {
            required,
            minLength: minLength(4),
            unique(value) {
              if (value == "") return true;

              if (this.validarCodigo) {
                return false;
              }
              return true;
            },
          },
          genero: { required },
          especie: { required },
          estado: { required },
        },
      };
    } else if (this.parametros.grupo_microbiano == 2) {
      return {
        parametros: {
          codigo: {
            required,
            minLength: minLength(4),
            unique(value) {
              if (value == "") return true;

              if (this.validarCodigo) {
                return false;
              }
              return true;
            },
          },
          genero: { required },
          especie: { required },
          phylum: { required },
          clase: { required },
          orden: { required },
          familia: { required },
          estado: { required },
        },
      };
    } else if (this.parametros.grupo_microbiano == 3) {
      return {
        parametros: {
          codigo: {
            required,
            minLength: minLength(4),
            unique(value) {
              if (value == "") return true;

              if (this.validarCodigo) {
                return false;
              }
              return true;
            },
          },
          genero: { required },
          especie: { required },
          clase: { required },
          orden: { required },
          division: { required },
          familia: { required },
          estado: { required },
        },
      };
    } else {
      return {
        parametros: {
          codigo: {
            required,
            minLength: minLength(4),
            unique(value) {
              if (value == "") return true;

              if (this.validarCodigo) {
                return false;
              }
              return true;
            },
          },
          genero: { required },
          especie: { required },
          phylum: { required },
          clase: { required },
          orden: { required },
          reino: { required },
          estado: { required },
        },
      };
    }
  },
  mixins: [Toastr],
  methods: {
    ...vuex.mapActions("cepas", ["accionCepas"]),
    ...vuex.mapActions("info_cepas", ["accionAgregarTipoCepa"]),
    evento() {
      this.bloquearBtn = true;
      this.$v.parametros.$touch();
      if (!this.$v.$invalid) {
        if (this.nombre === "Editar Cepa") {
          axios
            .put(`/cepas/editar/${this.idCepa}`, this.parametros)
            .then((res) => {
              this.bloquearBtn = false;

              this.accionCepas({ tipo: "editar", data: res.data });
              window.Echo.private("desbloquearBtnsCepa").whisper(
                "desbloquearBtnsCepa",
                {
                  id: res.data.id,
                }
              );
              this.$events.fire("eliminarMiBloqueoCepa", {
                id: res.data.id,
              });
              this.$emit("cambiarVariableFormulario");
              this.toastr("Editar Cepa", "Cepa editada con exito!!", "success");
            })
            .catch((error) => {
              this.verificarError(
                error.response.status,
                error.response.data.errors
              );
            });
        } else {
          axios
            .post("/cepas/agregar", this.parametros)
            .then((res) => {
              this.bloquearBtn = false;
              if (res.request.responseURL === process.env.MIX_LOGIN) {
                localStorage.setItem(
                  "mensajeLogin",
                  "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"
                );
                window.location.href = "/";
              } else {
                this.accionCepas({ tipo: "agregar", data: res.data });
                this.$emit("cambiarVariableFormulario");
                this.toastr(
                  "Agregar Cepa",
                  "Cepa agregada con exito!!",
                  "success"
                );
              }
            })
            .catch((error) => {
              this.verificarError(
                error.response.status,
                error.response.data.errors
              );
            });
        }
      } else {
        this.bloquearBtn = false;
        this.toastr(
          "Error!!",
          "Favor llenar correctamente los campos",
          "error"
        );
      }
    },
    llenarParametros(cepa) {
      this.parametros.codigo = this.info.codigo;
      this.parametros.grupo_microbiano = this.info.grupo_microbiano_id;
      this.modal.grupo_microbiano = this.info.grupo_microbiano_id;
      this.parametros.genero = this.info.genero_id;
      this.modal.genero = this.info.genero_id;
      this.parametros.especie = this.info.especie_id;
      this.parametros.estado = this.info.estado;
      this.parametros.origen = this.info.origen;
      this.parametros.otras_caracteristicas = this.info.otras_caract;
      switch (this.info.grupo_microbiano_id) {
        case 1:
          break;
        case 2:
          this.parametros.phylum = this.info.hongo.phylum_id;
          this.parametros.clase = this.info.hongo.clase_id;
          this.parametros.orden = this.info.hongo.orden_id;
          this.parametros.familia = this.info.hongo.familia_id;
          break;
        case 3:
          this.parametros.division = this.info.levadura.division_id;
          this.parametros.clase = this.info.levadura.clase_id;
          this.parametros.orden = this.info.levadura.orden_id;
          this.parametros.familia = this.info.levadura.familia_id;
          break;
        case 4:
          this.parametros.reino = this.info.actinomiceto.reino_id;
          this.parametros.phylum = this.info.actinomiceto.phylum_id;
          this.parametros.clase = this.info.actinomiceto.clase_id;
          this.parametros.orden = this.info.actinomiceto.orden_id;
          break;
      }
      if (this.info.publicar == 1) {
        this.parametros.publicar = true;
      }
    },
    ocultarGrupoMicrobiano() {
      if (this.tipoG === 0) {
        this.mostrarGrupos = true;
      } else {
        this.parametros.grupo_microbiano = this.tipoG;
        this.mostrarGrupos = false;
        this.cambiarGeneroEspecie();
      }
    },
    cambiarGeneroEspecie() {
      this.parametros.genero = this.getGenerosId(
        this.parametros.grupo_microbiano
      )[0].id;
      this.parametros.especie = this.getEspeciesId(
        this.parametros.genero
      )[0].id;
      this.modal.genero = this.getGenerosId(
        this.parametros.grupo_microbiano
      )[0].id;
    },
    cambiarEspecie() {
      this.parametros.especie = this.getEspeciesId(
        this.parametros.genero
      )[0].id;
    },
    showModal(tipo) {
      this.modal.errors = false;
      this.modal.input = "";
      this.modal.tipo = tipo;
      if (tipo === "genero") {
        this.modal.titulo = "Agregar Nuevo Género";
      } else if (tipo === "especie") {
        this.modal.titulo = "Agregar Nueva Especie";
      } else if (tipo === "familia") {
        this.modal.titulo = "Agregar Nueva Familia";
      } else if (tipo === "orden") {
        this.modal.titulo = "Agregar Nuevo Orden";
      } else if (tipo === "clase") {
        this.modal.titulo = "Agregar Nueva Clase";
      } else if (tipo === "phylum") {
        this.modal.titulo = "Agregar Nuevo Phylum";
      } else if (tipo === "reino") {
        this.modal.titulo = "Agregar Nuevo Reino";
      } else {
        this.modal.titulo = "Agregar Nueva Division";
      }
      this.$modal.show("agregar-otra-info");
    },
    agregarInfo() {
      if (this.modal.input === "") {
        this.modal.errors = true;
      } else {
        this.bloquearBtnModal = true;
        if (!this.validarNombreUnico) {
          let parametros = {
            tipo: this.modal.tipo,
            nombre: this.modal.input,
            genero: this.modal.genero,
            grupo_microbiano: this.modal.grupo_microbiano,
          };
          axios
            .post("/info-cepas/agregar", parametros)
            .then((res) => {
              this.bloquearBtnModal = false;
              if (res.request.responseURL === process.env.MIX_LOGIN) {
                localStorage.setItem(
                  "mensajeLogin",
                  "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"
                );
                window.location.href = "/";
              } else {
                this.accionAgregarTipoCepa({
                  info: res.data,
                  tipo: this.modal.tipo,
                });
                this.$modal.hide("agregar-otra-info");
                this.toastr(
                  "Agregar Info",
                  `${this.modal.tipo} agregado/a con exito`,
                  "success"
                );
              }
            })
            .catch((error) => {
              if (error.response.status === 403) {
                this.$router.push("/sin-acceso");
              } else if (
                error.response.status === 405 ||
                error.response.status === 401
              ) {
                window.location.href = "/";
              } else {
                this.bloquearBtnModal = false;
                this.toastr("Error!!", "", "error");
              }
            });
        } else {
          this.bloquearBtnModal = false;
          this.toastr("Error!!", "favor arregla el error", "error");
        }
      }
    },
    verificarSelects() {
      if (this.getGrupos.length > 0) {
        this.parametros.grupo_microbiano = this.getGrupos[0].id;
      } else {
        this.parametros.grupo_microbiano = null;
      }
      if (this.getGeneros.length > 0) {
        this.parametros.genero = this.getGeneros[0].id;
      } else {
        this.parametros.genero = null;
      }
      if (this.getEspecies.length > 0) {
        this.parametros.especie = this.getEspecies[0].id;
      } else {
        this.parametros.especie = null;
      }
      if (this.getPhylums.length > 0) {
        this.parametros.phylum = this.getPhylums[0].id;
      } else {
        this.parametros.phylum = null;
      }
      if (this.getOrdens.length > 0) {
        this.parametros.orden = this.getOrdens[0].id;
      } else {
        this.parametros.orden = null;
      }
      if (this.getReinos.length > 0) {
        this.parametros.reino = this.getReinos[0].id;
      } else {
        this.parametros.reino = null;
      }
      if (this.getDivisiones.length > 0) {
        this.parametros.division = this.getDivisiones[0].id;
      } else {
        this.parametros.division = null;
      }
      if (this.getClases.length > 0) {
        this.parametros.clase = this.getClases[0].id;
      } else {
        this.parametros.clase = null;
      }
      if (this.getFamilias.length > 0) {
        this.parametros.familia = this.getFamilias[0].id;
      } else {
        this.parametros.familia = null;
      }
    },
  },
  computed: {
    ...vuex.mapGetters(["getPermisoByNombre"]),
    ...vuex.mapGetters("cepas", ["getCepaById", "getCepaByCodigo"]),
    ...vuex.mapGetters("info_cepas", [
      "getGrupos",
      "getGeneros",
      "getEspecies",
      "getPhylums",
      "getOrdens",
      "getReinos",
      "getDivisiones",
      "getClases",
      "getFamilias",
      "getGenerosId",
      "getEspeciesId",
      "getGeneroByNombre",
      "getEspecieByNombre",
      "getPhylumByNombre",
      "getOrdenByNombre",
      "getReinoByNombre",
      "getDivisionByNombre",
      "getClaseByNombre",
      "getFamiliaByNombre",
    ]),
    validarNombreUnico() {
      if (this.modal.input) {
        switch (this.modal.tipo) {
          case "genero":
            if (this.getGeneroByNombre(this.modal.input)) {
              return true;
            }
            break;
          case "especie":
            if (this.getEspecieByNombre(this.modal.input)) {
              return true;
            }
            break;
          case "familia":
            if (this.getFamiliaByNombre(this.modal.input)) {
              return true;
            }
            break;
          case "orden":
            if (this.getOrdenByNombre(this.modal.input)) {
              return true;
            }
            break;
          case "clase":
            if (this.getClaseByNombre(this.modal.input)) {
              return true;
            }
            break;
          case "phylum":
            if (this.getPhylumByNombre(this.modal.input)) {
              return true;
            }
            break;
          case "reino":
            if (this.getReinoByNombre(this.modal.input)) {
              return true;
            }
            break;
          case "division":
            if (this.getDivisionByNombre(this.modal.input)) {
              return true;
            }
            break;
        }
      }
      return false;
    },
    validarCodigo() {
      if (this.parametros.codigo) {
        if (this.getCepaByCodigo(this.parametros.codigo)) {
          if (this.getCepaByCodigo(this.parametros.codigo).id != this.info.id) {
            this.mensajes.unique = "Ya existe una cepa con ese codigo";
            return true;
          }
        }
      }
      return false;
    },
    inputModal() {
      return this.modal.input;
    },
  },
  created() {
    this.verificarSelects();
    this.ocultarGrupoMicrobiano();
    if (this.idCepa === 0) {
      this.nombre = "Agregar Nueva Cepa";
      this.classBtn = "btn-success";
      this.nombreBtn = "Guardar";
      this.$emit("cambiarTipo", "agregar");
    } else {
      this.info = this.getCepaById(this.idCepa);
      this.disabled = true;
      this.nombre = "Editar Cepa";
      this.classBtn = "btn-warning";
      this.nombreBtn = "Editar";
      this.$emit("cambiarTipo", "editar");
      this.llenarParametros();
    }
  },
  watch: {
    getGrupos() {
      if (this.getGrupos.length > 0) {
        if (this.tipoG === 0) {
          this.parametros.grupo_microbiano = this.getGrupos[0].id;
        } else {
          this.parametros.grupo_microbiano = this.tipoG;
        }
      } else {
        this.parametros.grupo_microbiano = null;
      }
    },
    getGeneros() {
      if (this.getGeneros.length > 0) {
        this.parametros.genero = this.getGenerosId(
          this.parametros.grupo_microbiano
        )[0].id;
      } else {
        this.parametros.genero = null;
      }
    },
    getEspecies() {
      if (this.getEspecies.length > 0) {
        this.parametros.especie = this.getEspeciesId(
          this.parametros.genero
        )[0].id;
      } else {
        this.parametros.especie = null;
      }
    },
    getPhylums() {
      if (this.getPhylums.length > 0) {
        this.parametros.phylum = this.getPhylums[0].id;
      } else {
        this.parametros.phylum = null;
      }
    },
    getOrdens() {
      if (this.getOrdens.length > 0) {
        this.parametros.orden = this.getOrdens[0].id;
      } else {
        this.parametros.orden = null;
      }
    },
    getReinos() {
      if (this.getReinos.length > 0) {
        this.parametros.reino = this.getReinos[0].id;
      } else {
        this.parametros.reino = null;
      }
    },
    getDivisiones() {
      if (this.getDivisiones.length > 0) {
        this.parametros.division = this.getDivisiones[0].id;
      } else {
        this.parametros.division = null;
      }
    },
    getClases() {
      if (this.getClases.length > 0) {
        this.parametros.clase = this.getClases[0].id;
      } else {
        this.parametros.clase = null;
      }
    },
    getFamilias() {
      if (this.getFamilias.length > 0) {
        this.parametros.familia = this.getFamilias[0].id;
      } else {
        this.parametros.familia = null;
      }
    },
    inputModal() {
      if (!this.inputModal) {
        this.modal.errors = true;
      } else {
        this.modal.errors = false;
      }
    },
  },
};
</script>