<template>
  <div>
    <ul class="body-tabs body-tabs-layout tabs-animated body-tabs-animated nav"></ul>
    <div class="tabs-animation">
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col col-sm-8">
            <div class="main-card mb-3 card">
              <div class="card-body">
                <h5 class="card-title">{{nombre}}</h5>
                <form
                  @submit.prevent="evento"
                  v-if="getGrupos !=''&&getGeneros !=''&&getEspecies !=''"
                >
                  <div class="position-relative form-group">
                    <label for="codigo" class>Codigo</label>
                    <input
                      name="codigo"
                      id="codigo"
                      placeholder="Codigo ..."
                      type="text"
                      class="form-control"
                      v-model="parametros.codigo"
                      required
                    />
                    <span v-if="errors.codigo" class="text-danger">{{errors.codigo[0]}}</span>
                  </div>
                  <div class="position-relative form-group" v-if="mostrarGrupos">
                    <label for="grupo_microbiano" class>Grupo Microbiano</label>
                    <select
                      name="select"
                      id="grupo_microbiano"
                      class="form-control"
                      v-model="parametros.grupo_microbiano"
                      :disabled="disabled"
                    >
                      <option
                        v-for="(gm,index) in getGrupos"
                        :key="index"
                        :value="gm.id"
                      >{{gm.nombre}}</option>
                    </select>
                  </div>
                  <div class="position-relative form-group">
                    <label for="genero" class>Genero</label>
                    <select
                      name="select"
                      id="genero"
                      class="form-control"
                      v-model="parametros.genero"
                    >
                      <option
                        v-for="(g,index) in getGeneros"
                        :key="index"
                        :value="g.id"
                      >{{g.nombre}}</option>
                    </select>
                  </div>
                  <div class="position-relative form-group">
                    <label for="especie" class>Especie</label>
                    <select
                      name="select"
                      id="especie"
                      class="form-control"
                      v-model="parametros.especie"
                    >
                      <option
                        v-for="(e,index) in getEspecies"
                        :key="index"
                        :value="e.id"
                      >{{e.nombre}}</option>
                    </select>
                  </div>
                  <div
                    class="position-relative form-group"
                    v-if=" parametros.grupo_microbiano === 3 "
                  >
                    <label for="division" class>Division</label>
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
                  </div>
                  <div
                    class="position-relative form-group"
                    v-if=" parametros.grupo_microbiano === 4 "
                  >
                    <label for="reino" class>Reino</label>
                    <select
                      name="select"
                      id="reino"
                      class="form-control"
                      v-model="parametros.reino"
                    >
                      <option v-for="(r,index) in getReinos" :key="index" :value="r.id">{{r.nombre}}</option>
                    </select>
                  </div>
                  <div
                    v-if="parametros.grupo_microbiano === 2 || parametros.grupo_microbiano === 4"
                  >
                    <div class="position-relative form-group">
                      <label for="phylum" class>Phylum</label>
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
                    </div>
                  </div>
                  <div
                    v-if="parametros.grupo_microbiano === 2 || parametros.grupo_microbiano=== 3  || parametros.grupo_microbiano === 4"
                  >
                    <div class="position-relative form-group">
                      <label for="clase" class>Clase</label>
                      <select
                        name="select"
                        id="clase"
                        class="form-control"
                        v-model="parametros.clase"
                      >
                        <option
                          v-for="(c,index) in getClases"
                          :key="index"
                          :value="c.id"
                        >{{c.nombre}}</option>
                      </select>
                    </div>
                    <div class="position-relative form-group">
                      <label for="orden" class>Orden</label>
                      <select
                        name="select"
                        id="orden"
                        class="form-control"
                        v-model="parametros.orden"
                      >
                        <option
                          v-for="(o,index) in getOrdens"
                          :key="index"
                          :value="o.id"
                        >{{o.nombre}}</option>
                      </select>
                    </div>
                  </div>
                  <div
                    class="position-relative form-group"
                    v-if="parametros.grupo_microbiano === 2 || parametros.grupo_microbiano=== 3 "
                  >
                    <label for="familia" class>Familia</label>
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
                  </div>
                  <div class="position-relative form-group">
                    <label for="estado" class>Estado</label>
                    <input
                      name="estado"
                      id="estado"
                      placeholder="Estado ..."
                      type="text"
                      class="form-control"
                      v-model="parametros.estado"
                      required
                    />
                    <span v-if="errors.estado" class="text-danger">{{errors.estado[0]}}</span>
                  </div>
                  <div class="position-relative form-group">
                    <label for="origen" class>Origen</label>
                    <input
                      name="origen"
                      id="origen"
                      placeholder="Origen ..."
                      type="text"
                      class="form-control"
                      v-model="parametros.origen"
                      required
                    />
                    <span v-if="errors.origen" class="text-danger">{{errors.origen[0]}}</span>
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
                  <div class="custom-checkbox custom-control">
                    <input
                      type="checkbox"
                      id="publicar"
                      class="custom-control-input"
                      v-model="parametros.publicar"
                    />
                    <label class="custom-control-label" for="publicar">Desea publicar la cepa?</label>
                  </div>
                  <button class="mt-1 btn" :class="classBtn">{{nombreBtn}}</button>
                  <!-- float-right -->
                </form>
                <div v-else>Cargando...</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vuex from "vuex";

export default {
  props: ["tipoG"],
  data() {
    return {
      parametros: {
        codigo: "",
        grupo_microbiano: 1,
        genero: 1,
        especie: 1,
        phylum: 1,
        clase: 1,
        orden: 1,
        reino: 1,
        division: 1,
        familia: 1,
        estado: "",
        origen: "",
        publicar: false,
        otras_caracteristicas: ""
      },
      errors: [],
      mostrarGrupos: true,
      disabled: false,
      nombre: "",
      nombreBtn: "",
      classBtn: ""
    };
  },
  methods: {
    evento() {
      if (this.nombre === "Editar Cepa") {
        axios
          .put(`/cepas/editar/${this.$route.params.cepaId}`, this.parametros)
          .then(res => {
            this.errors = [];
            this.redirect();
            this.toastr(
              "Mensaje de ejecución",
              "Cepa editada con exito!!",
              "success"
            );
          })
          .catch(error => {
            if (error.response) {
              this.errors = [];
              this.errors = error.response.data.errors;
              this.toastr("Error!!", "", "error");
              // console.log(error.response.data);
            }
          });
      } else {
        axios
          .post("/cepas/agregar", this.parametros)
          .then(res => {
            this.errors = [];
            this.redirect();
            this.toastr(
              "Mensaje de ejecución",
              "Cepa agregada con exito!!",
              "success"
            );
          })
          .catch(error => {
            if (error.response) {
              this.errors = [];
              this.errors = error.response.data.errors;
              this.toastr("Error!!", "", "error");
              // console.log(error.response.data);
            }
          });
      }
    },
    ocultarGrupoMicrobiano() {
      if (this.tipoG === 0) {
        this.mostrarGrupos = true;
      } else {
        this.mostrarGrupos = false;
      }
    },
    redirect() {
      switch (this.tipoG) {
        case 0:
          this.$router.push("/cepas");
          break;
        case 1:
          this.$router.push("/cepas-bacterias");
          break;
        case 2:
          this.$router.push("/cepas-hongos");
          break;
        case 3:
          this.$router.push("/cepas-levaduras");
          break;
        case 4:
          this.$router.push("/cepas-actinomicetos");
          break;
      }
    },
    verificarTipo() {
      if (window.location.pathname === "/cepas/agregar") {
        this.nombre = "Agregar Nueva Cepa";
        this.classBtn = "btn-primary";
        this.nombreBtn = "Guardar";
      } else {
        this.disabled = true;
        this.nombre = "Editar Cepa";
        this.classBtn = "btn-warning";
        this.nombreBtn = "Editar";
        this.bucarCepa();
      }
    },
    bucarCepa() {
      let id = this.$route.params.cepaId;
      axios
        .get(`/api/cepa/${id}`)
        .then(res => {
          this.llenarParametros(res.data);
        })
        .catch(error => {
          if (error.response) {
            console.log(error.response.data);
          }
        });
    },
    llenarParametros(cepa) {
      this.parametros.codigo = cepa.cepa.codigo;
      this.parametros.grupo_microbiano = cepa.cepa.grupo_microbiano_id;
      this.parametros.genero = cepa.cepa.genero_id;
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
  computed: {
    ...vuex.mapGetters([
      "getGrupos",
      "getGeneros",
      "getEspecies",
      "getPhylums",
      "getOrdens",
      "getReinos",
      "getDivisiones",
      "getClases",
      "getFamilias"
    ])
  },
  mounted() {
    this.$emit("rutaHijo", window.location.pathname);
    this.ocultarGrupoMicrobiano();
  },
  created() {
    this.verificarTipo();
  }
};
</script>

<style scoped>
</style>