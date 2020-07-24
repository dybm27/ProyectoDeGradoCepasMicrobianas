<template>
  <div>
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col col-sm-8">
          <div class="main-card mb-3 card">
            <div class="card-body">
              <h5 class="card-title">{{nombre}}</h5>
              <form @submit.prevent="evento" v-if="mostrarFormComputed">
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
                    class="form-control"
                    v-model="parametros.codigo"
                    required
                  />
                </div>
                <div class="position-relative form-group" v-if="mostrarGrupos">
                  <label for="grupo_microbiano" class>Grupo Microbiano</label>
                  <select
                    name="select"
                    id="grupo_microbiano"
                    class="form-control"
                    v-model="parametros.grupo_microbiano"
                    :disabled="disabled"
                    @change="cambiarGeneroEspecie"
                  >
                    <option
                      v-for="(gm,index) in getGrupos"
                      :key="index"
                      :value="gm.id"
                    >{{gm.nombre}}</option>
                  </select>
                </div>
                <label for="genero" class>Género</label>
                <div class="input-group mb-3">
                  <select
                    name="select"
                    id="genero"
                    class="form-control"
                    v-model="parametros.genero"
                    @change="cambiarEspecie"
                  >
                    <option
                      v-for="(g,index) in getGenerosId(parametros.grupo_microbiano)"
                      :key="index"
                      :value="g.id"
                    >{{g.nombre}}</option>
                  </select>
                  <div class="input-group-append">
                    <button
                      class="btn-icon btn-icon-only btn-pill btn btn-outline-success"
                      @click.prevent="showModal('genero')"
                    >
                      <i class="fas fa-plus"></i>
                    </button>
                  </div>
                </div>
                <label for="especie" class>Especie</label>
                <div class="input-group mb-3">
                  <select
                    name="select"
                    id="especie"
                    class="form-control"
                    v-model="parametros.especie"
                  >
                    <option
                      v-for="(e,index) in getEspeciesId(parametros.genero)"
                      :key="index"
                      :value="e.id"
                    >{{e.nombre}}</option>
                  </select>
                  <div class="input-group-append">
                    <button
                      class="btn-icon btn-icon-only btn-pill btn btn-outline-success"
                      @click.prevent="showModal('especie')"
                    >
                      <i class="fas fa-plus"></i>
                    </button>
                  </div>
                </div>
                <div v-if=" parametros.grupo_microbiano === 3 ">
                  <label for="division" class>Division</label>
                  <div class="input-group mb-3">
                    <select
                      name="select"
                      id="division"
                      class="form-control"
                      v-model="parametros.division"
                    >
                      <option
                        v-for="(d,index) in getDivisiones"
                        :key="index"
                        :value="d.id"
                      >{{d.nombre}}</option>
                    </select>
                    <div class="input-group-append">
                      <button
                        class="btn-icon btn-icon-only btn-pill btn btn-outline-success"
                        @click.prevent="showModal('division')"
                      >
                        <i class="fas fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div v-if=" parametros.grupo_microbiano === 4 ">
                  <label for="reino" class>Reino</label>
                  <div class="input-group mb-3">
                    <select
                      name="select"
                      id="reino"
                      class="form-control"
                      v-model="parametros.reino"
                    >
                      <option v-for="(r,index) in getReinos" :key="index" :value="r.id">{{r.nombre}}</option>
                    </select>
                    <div class="input-group-append">
                      <button
                        class="btn-icon btn-icon-only btn-pill btn btn-outline-success"
                        @click.prevent="showModal('reino')"
                      >
                        <i class="fas fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div v-if="parametros.grupo_microbiano === 2 || parametros.grupo_microbiano === 4">
                  <label for="phylum" class>Phylum</label>
                  <div class="input-group mb-3">
                    <select
                      name="select"
                      id="phylum"
                      class="form-control"
                      v-model="parametros.phylum"
                    >
                      <option
                        v-for="(p,index) in getPhylums"
                        :key="index"
                        :value="p.id"
                      >{{p.nombre}}</option>
                    </select>
                    <div class="input-group-append">
                      <button
                        class="btn-icon btn-icon-only btn-pill btn btn-outline-success"
                        @click.prevent="showModal('phylum')"
                      >
                        <i class="fas fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  v-if="parametros.grupo_microbiano === 2 || parametros.grupo_microbiano=== 3  || parametros.grupo_microbiano === 4"
                >
                  <label for="clase" class>Clase</label>
                  <div class="input-group mb-3">
                    <select
                      name="select"
                      id="clase"
                      class="form-control"
                      v-model="parametros.clase"
                    >
                      <option v-for="(c,index) in getClases" :key="index" :value="c.id">{{c.nombre}}</option>
                    </select>
                    <div class="input-group-append">
                      <button
                        class="btn-icon btn-icon-only btn-pill btn btn-outline-success"
                        @click.prevent="showModal('clase')"
                      >
                        <i class="fas fa-plus"></i>
                      </button>
                    </div>
                  </div>
                  <label for="orden" class>Orden</label>
                  <div class="input-group mb-3">
                    <select
                      name="select"
                      id="orden"
                      class="form-control"
                      v-model="parametros.orden"
                    >
                      <option v-for="(o,index) in getOrdens" :key="index" :value="o.id">{{o.nombre}}</option>
                    </select>
                    <div class="input-group-append">
                      <button
                        class="btn-icon btn-icon-only btn-pill btn btn-outline-success"
                        @click.prevent="showModal('orden')"
                      >
                        <i class="fas fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div v-if="parametros.grupo_microbiano === 2 || parametros.grupo_microbiano=== 3 ">
                  <label for="familia" class>Familia</label>
                  <div class="input-group mb-3">
                    <select
                      name="select"
                      id="familia"
                      class="form-control"
                      v-model="parametros.familia"
                    >
                      <option
                        v-for="(f,index) in getFamilias"
                        :key="index"
                        :value="f.id"
                      >{{f.nombre}}</option>
                    </select>
                    <div class="input-group-append">
                      <button
                        class="btn-icon btn-icon-only btn-pill btn btn-outline-success"
                        @click.prevent="showModal('familia')"
                      >
                        <i class="fas fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="position-relative form-group">
                  <label for="estado" class>Estado</label>
                  <input
                    name="estado"
                    id="estado"
                    placeholder="..."
                    type="text"
                    class="form-control"
                    v-model="parametros.estado"
                    required
                  />
                </div>
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
                <button class="mt-1 btn" :disabled="bloquearBtn" :class="classBtn">{{nombreBtn}}</button>
                <!-- float-right -->
              </form>
              <div v-else>Cargando...</div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
              :disabled="disabled"
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
              :class="['form-control', validarNombreUnico? 'is-invalid':'']"
              v-model="modal.input"
              required
            />
            <em
              v-if="validarNombreUnico"
              class="error invalid-feedback"
            >Ya Existe un registro con ese nombre</em>
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
            :disabled="bloquearBtnModal||validarNombreUnico"
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
export default {
  props: ["tipoG"],
  data() {
    return {
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
        errors: [],
      },
      errors: [],
      mostrarGrupos: true,
      disabled: false,
      nombre: "",
      nombreBtn: "",
      classBtn: "",
      mostrarForm: true,
      bloquearBtn: false,
      bloquearBtnModal: false,
    };
  },
  mixins: [Toastr],
  methods: {
    ...vuex.mapActions("info_cepas", ["accionAgregarTipoCepa"]),
    evento() {
      this.bloquearBtn = true;
      if (this.nombre === "Editar Cepa") {
        axios
          .put(`/cepas/editar/${this.$route.params.cepaId}`, this.parametros)
          .then((res) => {
            this.bloquearBtn = false;
            if (res.request.responseURL === process.env.MIX_LOGIN) {
              this.$ls.set(
                "mensajeLogin",
                "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"
              );
              window.location.href = "/";
            }
            this.errors = [];
            this.redirect();
            this.toastr("Editar Cepa", "Cepa editada con exito!!", "success");
          })
          .catch((error) => {
            this.bloquearBtn = false;
            if (error.response) {
              this.errors = [];
              this.errors = error.response.data.errors;
              this.toastr("Error!!", "", "error");
            }
          });
      } else {
        axios
          .post("/cepas/agregar", this.parametros)
          .then((res) => {
            this.bloquearBtn = false;
            if (res.request.responseURL === process.env.MIX_LOGIN) {
              this.$ls.set(
                "mensajeLogin",
                "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"
              );
              window.location.href = "/";
            }
            this.errors = [];
            this.redirect();
            this.toastr("Agregar Cepa", "Cepa agregada con exito!!", "success");
          })
          .catch((error) => {
            this.bloquearBtn = false;
            if (error.response) {
              this.errors = [];
              this.errors = error.response.data.errors;
              this.toastr("Error!!", "", "error");
            }
          });
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
    redirect() {
      switch (this.tipoG) {
        case 0:
          this.$router.push({ name: "cepas-tabla" });
          break;
        case 1:
          this.$router.push({ name: "bacterias-tabla" });
          break;
        case 2:
          this.$router.push({ name: "hongos-tabla" });
          break;
        case 3:
          this.$router.push({ name: "levaduras-tabla" });
          break;
        case 4:
          this.$router.push({ name: "actinomicetos-tabla" });
          break;
      }
    },
    verificarTipo() {
      if (!this.$route.params.cepaId) {
        this.nombre = "Agregar Nueva Cepa";
        this.classBtn = "btn-success";
        this.nombreBtn = "Guardar";
        this.mostrarForm = true;
      } else {
        this.mostrarForm = false;
        this.disabled = true;
        this.nombre = "Editar Cepa";
        this.classBtn = "btn-warning";
        this.nombreBtn = "Editar";
        this.bucarCepa();
      }
    },
    bucarCepa() {
      let id = this.$route.params.cepaId;
      axios.get(`/info-panel/cepa/${id}`).then((res) => {
        if (res.request.responseURL === process.env.MIX_LOGIN) {
          this.$ls.set(
            "mensajeLogin",
            "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"
          );
          window.location.href = "/";
        }
        this.llenarParametros(res.data);
        this.mostrarForm = true;
      });
    },
    llenarParametros(cepa) {
      this.parametros.codigo = cepa.cepa.codigo;
      this.parametros.grupo_microbiano = cepa.cepa.grupo_microbiano_id;
      this.modal.grupo_microbiano = cepa.cepa.grupo_microbiano_id;
      this.parametros.genero = cepa.cepa.genero_id;
      this.modal.genero = cepa.cepa.genero_id;
      this.parametros.especie = cepa.cepa.especie_id;
      this.parametros.estado = cepa.cepa.estado;
      this.parametros.origen = cepa.cepa.origen;
      this.parametros.otras_caracteristicas = cepa.cepa.otras_caract;
      switch (cepa.cepa.grupo_microbiano_id) {
        case 1:
          break;
        case 2:
          this.parametros.phylum = cepa.phylum_id;
          this.parametros.clase = cepa.clase_id;
          this.parametros.orden = cepa.orden_id;
          this.parametros.familia = cepa.familia_id;
          break;
        case 3:
          this.parametros.division = cepa.division_id;
          this.parametros.clase = cepa.clase_id;
          this.parametros.orden = cepa.orden_id;
          this.parametros.familia = cepa.familia_id;
          break;
        case 4:
          this.parametros.reino = cepa.reino_id;
          this.parametros.phylum = cepa.phylum_id;
          this.parametros.clase = cepa.clase_id;
          this.parametros.orden = cepa.orden_id;
          break;
      }
      if (cepa.cepa.publicar == 1) {
        this.parametros.publicar = true;
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
      this.modal.input = "";
      this.modal.errors = [];
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
        this.modal.errors = { nombre: { 0: "Favor llenar este campo" } };
      } else {
        this.bloquearBtnModal = true;
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
              this.$ls.set(
                "mensajeLogin",
                "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"
              );
              window.location.href = "/";
            }
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
          })
          .catch((error) => {
            this.bloquearBtnModal = false;
            this.modal.errors = error.response.data.errors;
            this.toastr("Error!!", "", "error");
          });
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
    mostrarFormComputed() {
      if (
        this.getGrupos &&
        this.getGeneros &&
        this.getEspecies &&
        this.mostrarForm
      ) {
        this.ocultarGrupoMicrobiano();
        return true;
      }
      return false;
    },
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
  },
  created() {
    this.verificarSelects();
    this.$emit("rutaHijo", window.location.pathname);
    this.verificarTipo();
  },
  watch: {
    getGrupos() {
      if (this.getGrupos.length > 0) {
        this.parametros.grupo_microbiano = this.getGrupos[0].id;
      } else {
        this.parametros.grupo_microbiano = null;
      }
    },
    getGeneros() {
      if (this.getGeneros.length > 0) {
        this.parametros.genero = this.getGeneros[0].id;
      } else {
        this.parametros.genero = null;
      }
    },
    getEspecies() {
      if (this.getEspecies.length > 0) {
        this.parametros.especie = this.getEspecies[0].id;
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
  },
};
</script>