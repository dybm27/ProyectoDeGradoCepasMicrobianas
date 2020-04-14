<template>
  <div>
    <div class="main-card mb-3 card mt-4 mr-4 ml-4">
      <div class="card-body">
        <h5 class="card-title">{{tituloForm}}</h5>
        <form @submit.prevent="evento">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <div class="form-row">
                  <div class="col-md-6">
                    <div class="position-relative form-group">
                      <label for="oxidasa" class>Oxidasa</label>
                      <input
                        name="oxidasa"
                        id="oxidasa"
                        placeholder="..."
                        type="text"
                        class="form-control"
                        v-model="parametros.oxidasa"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="position-relative form-group">
                      <label for="catalasa" class>Catalasa</label>
                      <input
                        name="catalasa"
                        id="catalasa"
                        placeholder="..."
                        type="text"
                        class="form-control"
                        v-model="parametros.catalasa"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div class="form-row">
                  <div class="col-md-6">
                    <div class="position-relative form-group">
                      <label for="atrato" class>Atrato</label>
                      <input
                        name="atrato"
                        id="atrato"
                        placeholder="..."
                        type="text"
                        class="form-control"
                        v-model="parametros.atrato"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="position-relative form-group">
                      <label for="tsi" class>TSI</label>
                      <input
                        name="tsi"
                        id="tsi"
                        placeholder="..."
                        type="text"
                        class="form-control"
                        v-model="parametros.tsi"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div class="form-row">
                  <div class="col-md-6">
                    <div class="position-relative form-group">
                      <label for="glucosa" class>Glucosa</label>
                      <input
                        name="glucosa"
                        id="glucosa"
                        placeholder="..."
                        type="text"
                        class="form-control"
                        v-model="parametros.glucosa"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="position-relative form-group">
                      <label for="lactosa" class>Lactosa</label>
                      <input
                        name="lactosa"
                        id="lactosa"
                        placeholder="..."
                        type="text"
                        class="form-control"
                        v-model="parametros.lactosa"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div class="form-row">
                  <div class="col-md-6">
                    <div class="position-relative form-group">
                      <label for="manitol" class>Manitol</label>
                      <input
                        name="manitol"
                        id="manitol"
                        placeholder="..."
                        type="text"
                        class="form-control"
                        v-model="parametros.manitol"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="position-relative form-group">
                      <label for="xilosa" class>Xilosa</label>
                      <input
                        name="xilosa"
                        id="xilosa"
                        placeholder="..."
                        type="text"
                        class="form-control"
                        v-model="parametros.xilosa"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div class="form-row">
                  <div class="col-md-6">
                    <div class="position-relative form-group">
                      <label for="arabinosa" class>Arabinosa</label>
                      <input
                        name="arabinosa"
                        id="arabinosa"
                        placeholder="..."
                        type="text"
                        class="form-control"
                        v-model="parametros.arabinosa"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="position-relative form-group">
                      <label for="sacarosa" class>Sacarosa</label>
                      <input
                        name="sacarosa"
                        id="sacarosa"
                        placeholder="..."
                        type="text"
                        class="form-control"
                        v-model="parametros.sacarosa"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div class="position-relative form-group">
                  <label for="otros_azucares" class>Otros Azúcares</label>
                  <textarea
                    name="otros_azucares"
                    id="otros_azucares"
                    class="form-control"
                    v-model="parametros.otros_azucares"
                  ></textarea>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-row">
                  <div class="col-md-6">
                    <div class="position-relative form-group">
                      <label for="lia" class>LIA</label>
                      <input
                        name="lia"
                        id="lia"
                        placeholder="..."
                        type="text"
                        class="form-control"
                        v-model="parametros.lia"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="position-relative form-group">
                      <label for="sim" class>SIM</label>
                      <input
                        name="sim"
                        id="sim"
                        placeholder=".."
                        type="text"
                        class="form-control"
                        v-model="parametros.sim"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div class="form-row">
                  <div class="col-md-6">
                    <div class="position-relative form-group">
                      <label for="rm" class>RM</label>
                      <input
                        name="rm"
                        id="rm"
                        placeholder="..."
                        type="text"
                        class="form-control"
                        v-model="parametros.rm"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="position-relative form-group">
                      <label for="vp" class>VP</label>
                      <input
                        name="vp"
                        id="vp"
                        placeholder="..."
                        type="text"
                        class="form-control"
                        v-model="parametros.vp"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div class="form-row">
                  <div class="col-md-6">
                    <div class="position-relative form-group">
                      <label for="nitrato" class>Nitrato</label>
                      <input
                        name="nitrato"
                        id="nitrato"
                        placeholder="..."
                        type="text"
                        class="form-control"
                        v-model="parametros.nitrato"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="position-relative form-group">
                      <label for="caldo_urea" class>Caldo Úrea</label>
                      <input
                        name="caldo_urea"
                        id="caldo_urea"
                        placeholder="..."
                        type="text"
                        class="form-control"
                        v-model="parametros.caldo_urea"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div class="form-row">
                  <div class="col-md-6">
                    <div class="position-relative form-group">
                      <label for="of" class>OF</label>
                      <input
                        name="of"
                        id="of"
                        placeholder="..."
                        type="text"
                        class="form-control"
                        v-model="parametros.of"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="position-relative form-group">
                      <label for="almidon" class>Almidón</label>
                      <input
                        name="almidon"
                        id="almidon"
                        placeholder="..."
                        type="text"
                        class="form-control"
                        v-model="parametros.almidon"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div class="form-row">
                  <div class="col-md-6">
                    <div class="position-relative form-group">
                      <label for="lecitinasa" class>Lecitinasa</label>
                      <input
                        name="lecitinasa"
                        id="lecitinasa"
                        placeholder="..."
                        type="text"
                        class="form-control"
                        v-model="parametros.lecitinasa"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="position-relative form-group">
                      <label for="lipasa" class>Lipasa</label>
                      <input
                        name="lipasa"
                        id="lipasa"
                        placeholder="..."
                        type="text"
                        class="form-control"
                        v-model="parametros.lipasa"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div class="position-relative form-group">
                  <label for="otras_enzimas" class>Otras Enzimas</label>
                  <textarea
                    name="otras_enzimas"
                    id="otras_enzimas"
                    class="form-control"
                    v-model="parametros.otras_enzimas"
                  ></textarea>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="form-row">
                  <div class="col-md-4">
                    <div class="position-relative form-group">
                      <label for="hidro_caseina" class>Hidrolisís de la Caseína</label>
                      <input
                        name="hidro_caseina"
                        id="hidro_caseina"
                        placeholder="..."
                        type="text"
                        class="form-control"
                        v-model="parametros.hidro_caseina"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="position-relative form-group">
                      <label for="hidro_gelatina" class>Hidrolisís de la Gelatina</label>
                      <input
                        name="hidro_gelatina"
                        id="hidro_gelatina"
                        placeholder="..."
                        type="text"
                        class="form-control"
                        v-model="parametros.hidro_gelatina"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="position-relative form-group">
                      <label for="hidro_urea" class>Hidrolisís de la Úrea</label>
                      <input
                        name="hidro_urea"
                        id="hidro_urea"
                        placeholder="..."
                        type="text"
                        class="form-control"
                        v-model="parametros.hidro_urea"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div class="form-row">
                  <div class="col-md-6">
                    <div class="position-relative form-group">
                      <label for="creci_nacl" class>Crecimiento en Nacl</label>
                      <input
                        name="creci_nacl"
                        id="creci_nacl"
                        placeholder="..."
                        type="text"
                        class="form-control"
                        v-model="parametros.creci_nacl"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="position-relative form-group">
                      <label for="creci_dif_temp" class>Crecimiento en Diferentes Temperaturas</label>
                      <input
                        name="creci_dif_temp"
                        id="creci_dif_temp"
                        placeholder="..."
                        type="text"
                        class="form-control"
                        v-model="parametros.creci_dif_temp"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div class="form-row">
                  <div :class="classRow">
                    <div class="position-relative form-group">
                      <label for="otras_caracteristicas">Otras Caracteristicas</label>
                      <textarea
                        name="otras_caracteristicas"
                        id="otras_caracteristicas"
                        class="form-control"
                        v-model="parametros.otras_caracteristicas"
                      ></textarea>
                    </div>
                  </div>
                  <template v-if="required">
                    <div class="col-md-4">
                      <div class="position-relative form-group">
                        <label for="imagen" class>Imágenes</label>
                        <input
                          name="imagen"
                          @change="obtenerImagenes"
                          id="imagen"
                          type="file"
                          class="form-control-file"
                          ref="inputImagen"
                          multiple
                          :required="required"
                        />
                        <span v-if="erroresImagenes" class="text-danger">{{erroresImagenes}}</span>
                        <!--  <small
                    class="form-text text-muted"
                        >Debe tener un tamaño ''px ''px y un peso de ''kbs.</small>-->
                      </div>
                    </div>
                  </template>
                  <div :class="classRow">
                    <div class="position-relative form-group">
                      <label for="descripcion_imagenes">Descripcion Imágenes</label>
                      <textarea
                        name="text"
                        id="descripcion_imagenes"
                        class="form-control"
                        v-model="parametros.descripcion_imagenes"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <button class="mb-2 mr-2 btn btn-block" :class="btnClase">{{nomBtn}}</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="main-card mb-3 card mt-4 mr-4 ml-4">
      <div class="card-body">
        <h5 class="card-title">Imagenes</h5>
        <template v-if="mostraImagenes">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <carousel :imagenes="imagenes"></carousel>
              </div>
            </div>
          </div>
        </template>
        <template v-else>
          <div class="text-center">
            <h5 class="mt-5 mb-5">
              <span class="pr-1">
                <b class="text-warning">SIN IMÁGENES</b>
              </span>
            </h5>
          </div>
        </template>
        <template v-if="!required">
          <div class="container mt-3 mb-3">
            <div class="row">
              <div class="col-md-4">
                <button
                  v-show="btnAgregar"
                  type="button"
                  class="mr-3 btn btn-info btn-block"
                  @click="showModalImagen('agregar')"
                >Agregar</button>
              </div>
              <div class="col-md-4">
                <button
                  v-show="btnCambiar"
                  type="button"
                  class="mr-3 btn btn-warning btn-block"
                  @click="showModalImagen('cambiar')"
                >Cambiar</button>
              </div>
              <div class="col-md-4">
                <button
                  v-show="btnEliminar"
                  type="button"
                  class="btn btn-danger btn-block"
                  @click="showModalImagen('eliminar')"
                >Eliminar</button>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
    <modal name="agregar_eliminar_imagen" classes="my_modal" :width="450" :height="450">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">{{modalImagen.titulo}}</h5>
          <button type="button" class="close" @click="$modal.hide('agregar_eliminar_imagen')">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <template v-if="modalImagen.nomBtn!='Agregar'">
            <div class="position-relative form-group">
              <label for="select_imagen" class>{{modalImagen.nomLabel}}</label>
              <select
                name="select_imagen"
                id="select_imagen"
                v-model.number="modalImagen.select_imagen"
                class="form-control"
              >
                <option value="1" v-if="parametros.imagen1">Primera</option>
                <option value="2" v-if="parametros.imagen2">Segunda</option>
                <option value="3" v-if="parametros.imagen3">Tercera</option>
              </select>
            </div>
          </template>
          <template v-if="modalImagen.nomBtn==='Cambiar'||modalImagen.nomBtn==='Agregar'">
            <div class="position-relative form-group">
              <label for="imagen" class>Seleccione la nueva Imagen</label>
              <input
                name="imagen"
                @change="verificarImagen"
                id="imagen"
                type="file"
                class="form-control-file"
                ref="inputImagenModal"
              />
              <span v-if="modalImagen.errors" class="text-danger">{{modalImagen.errors}}</span>
            </div>
          </template>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            @click="$modal.hide('agregar_eliminar_imagen')"
          >Cancelar</button>
          <button type="button" class="btn btn-primary" @click="accionModal">{{modalImagen.nomBtn}}</button>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import vuex from "vuex";

export default {
  props: ["info", "modificarInfo"],
  watch: {
    modificarInfo() {
      if (this.modificarInfo) {
        this.llenarInfo();
        this.$emit("cambiarVariable");
      }
    }
  },
  data() {
    return {
      parametros: {
        oxidasa: "",
        catalasa: "",
        atrato: "",
        tsi: "",
        lia: "",
        sim: "",
        rm: "",
        vp: "",
        nitrato: "",
        caldo_urea: "",
        of: "",
        glucosa: "",
        lactosa: "",
        manitol: "",
        xilosa: "",
        arabinosa: "",
        sacarosa: "",
        otros_azucares: "",
        almidon: "",
        lecitinasa: "",
        lipasa: "",
        otras_enzimas: "",
        hidro_caseina: "",
        hidro_gelatina: "",
        hidro_urea: "",
        creci_nacl: "",
        creci_dif_temp: "",
        ordenamiento: "",
        tincion_gram: "positivo",
        tincion_esporas: "presencia",
        ubicacion_esporas: "central",
        tincion_capsula: "presencia",
        otras_caracteristicas: "",
        imagen1: "",
        imagen2: "",
        imagen3: "",
        descripcion_imagenes: ""
      },
      modalImagen: {
        nomBtn: "Cambiar",
        select_imagen: 1,
        imagen: "",
        titulo: "",
        nomLabel: "Cual imagen desea cambiar?",
        errors: ""
      },
      tituloForm: "",
      nomBtn: "",
      errors: [],
      erroresImagenes: "",
      imagenes: []
    };
  },
  methods: {
    evento() {
      if (this.tituloForm === "Agregar Característica") {
        let formData = new FormData();
        this.appendInfo(formData);
        axios
          .post("/cepas/bacteria/caract-bioqui", formData, {
            headers: { "Content-Type": "multipart/form-data" }
          })
          .then(res => {
            this.errors = [];
            this.$refs.inputImagen.value = "";
            this.tituloForm = "Editar Característica";
            this.nomBtn = "Editar";
            this.$emit("agregar", res.data);
            this.toastr(
              "Agregar Características Bioquímicas",
              "Características Bioquímicas agregadas con exito!!",
              "success"
            );
          })
          .catch(error => {
            if (error.response) {
              this.errors = [];
              this.errors = error.response.data.errors;
              this.toastr("Error!!", "", "error");
            }
          });
      } else {
        axios
          .put(`/cepas/bacteria/caract-bioqui/${this.info.id}`, this.parametros)
          .then(res => {
            this.errors = [];
            this.$emit("editar", res.data);
            this.toastr(
              "Editar Características Bioquímicas",
              "Características Bioquímicas editadas con exito!!",
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
    obtenerImagenes(e) {
      this.limpiar(0);
      let file = e.target.files[3];
      if (file) {
        this.erroresImagenes = "Solo puede subir max 3 imágenes.";
        this.limpiar(1);
      } else {
        let allowedExtensions = /(.jpg|.jpeg)$/i;
        let imagenes = [];
        for (let index = 0; index < 3; index++) {
          let imagen = e.target.files[index];
          if (imagen) {
            if (!allowedExtensions.exec(imagen.name) || imagen.size > 2000000) {
              this.limpiar(1);
              this.erroresImagenes =
                "Las imagenes deben ser en formato .jpeg/.jpg y menor a 2Mb.";
              imagenes = "";
              break;
            } else {
              this.erroresImagenes = "";
              imagenes.push(imagen);
            }
          } else {
            break;
          }
        }
        this.cargarImagenes(imagenes);
      }
    },
    cargarImagenes(imagenes) {
      if (imagenes) {
        for (let index = 0; index < imagenes.length; index++) {
          let reader = new FileReader();
          reader.onload = e => {
            switch (index) {
              case 0:
                this.parametros.imagen1 = imagenes[index];
                this.pushImagen(1, e.target.result, true);
                break;
              case 1:
                this.parametros.imagen2 = imagenes[index];
                this.pushImagen(2, e.target.result, false);
                break;
              case 2:
                this.parametros.imagen3 = imagenes[index];
                this.pushImagen(3, e.target.result, false);
                break;
            }
          };
          reader.readAsDataURL(imagenes[index]);
        }
      }
    },
    pushImagen(num, imagen, active) {
      this.imagenes.push({
        num: num,
        source: imagen,
        isActive: active
      });
    },
    llenarArregloImagenes() {
      if (this.parametros.imagen1) {
        this.pushImagen(1, this.info.imagenPublica1, true);
        if (this.parametros.imagen2) {
          this.pushImagen(2, this.info.imagenPublica2, false);
        }
        if (this.parametros.imagen3) {
          this.pushImagen(3, this.info.imagenPublica3, false);
        }
      } else if (this.parametros.imagen2) {
        this.pushImagen(2, this.info.imagenPublica2, true);
        if (this.parametros.imagen3) {
          this.pushImagen(3, this.info.imagenPublica3, false);
        }
      } else if (this.parametros.imagen3) {
        this.pushImagen(3, this.info.imagenPublica3, true);
      }
    },
    limpiar(num) {
      switch (num) {
        case 0:
          this.parametros.imagen1 = "";
          this.parametros.imagen2 = "";
          this.parametros.imagen3 = "";
          this.imagenes = [];
          break;
        case 1:
          this.$refs.inputImagen.value = "";
          break;
      }
    },
    llenarInfo() {
      this.imagenes = [];
      this.parametros.oxidasa = this.info.oxidasa;
      this.parametros.catalasa = this.info.catalasa;
      this.parametros.atrato = this.info.atrato;
      this.parametros.tsi = this.info.tsi;
      this.parametros.lia = this.info.lia;
      this.parametros.sim = this.info.sim;
      this.parametros.rm = this.info.rm;
      this.parametros.vp = this.info.vp;
      this.parametros.nitrato = this.info.nitrato;
      this.parametros.caldo_urea = this.info.caldo_urea;
      this.parametros.of = this.info.of;
      this.parametros.glucosa = this.info.glucosa;
      this.parametros.lactosa = this.info.lactosa;
      this.parametros.manitol = this.info.manitol;
      this.parametros.xilosa = this.info.xilosa;
      this.parametros.arabinosa = this.info.arabinosa;
      this.parametros.sacarosa = this.info.sacarosa;
      this.parametros.otros_azucares = this.info.otros_azucares;
      this.parametros.almidon = this.info.almidon;
      this.parametros.lecitinasa = this.info.lecitinasa;
      this.parametros.lipasa = this.info.lipasa;
      this.parametros.otras_enzimas = this.info.otras_enzimas;
      this.parametros.hidro_caseina = this.info.hidro_caseina;
      this.parametros.hidro_gelatina = this.info.hidro_gelatina;
      this.parametros.hidro_urea = this.info.hidro_urea;
      this.parametros.creci_nacl = this.info.creci_nacl;
      this.parametros.creci_dif_temp = this.info.creci_dif_temp;
      this.parametros.otras_caracteristicas = this.info.otras_caract;
      this.parametros.imagen1 = this.info.imagen1;
      this.parametros.imagen2 = this.info.imagen2;
      this.parametros.imagen3 = this.info.imagen3;
      this.parametros.descripcion_imagenes = this.info.descripcion;
      this.llenarArregloImagenes();
    },
    appendInfo(formData) {
      if (this.$route.params.cepaBacteriaId) {
        formData.append("cepaId", this.$route.params.cepaBacteriaId);
      } else {
        formData.append("cepaId", this.$route.params.cepaId);
      }
      formData.append("oxidasa", this.parametros.oxidasa);
      formData.append("catalasa", this.parametros.catalasa);
      formData.append("atrato", this.parametros.atrato);
      formData.append("tsi", this.parametros.tsi);
      formData.append("lia", this.parametros.lia);
      formData.append("sim", this.parametros.sim);
      formData.append("rm", this.parametros.rm);
      formData.append("vp", this.parametros.vp);
      formData.append("nitrato", this.parametros.nitrato);
      formData.append("caldo_urea", this.parametros.caldo_urea);
      formData.append("of", this.parametros.of);
      formData.append("glucosa", this.parametros.glucosa);
      formData.append("lactosa", this.parametros.lactosa);
      formData.append("manitol", this.parametros.manitol);
      formData.append("xilosa", this.parametros.xilosa);
      formData.append("arabinosa", this.parametros.arabinosa);
      formData.append("sacarosa", this.parametros.sacarosa);
      formData.append("otros_azucares", this.parametros.otros_azucares);
      formData.append("almidon", this.parametros.almidon);
      formData.append("lecitinasa", this.parametros.lecitinasa);
      formData.append("lipasa", this.parametros.lipasa);
      formData.append("otras_enzimas", this.parametros.otras_enzimas);
      formData.append("hidro_caseina", this.parametros.hidro_caseina);
      formData.append("hidro_gelatina", this.parametros.hidro_gelatina);
      formData.append("hidro_urea", this.parametros.hidro_urea);
      formData.append("creci_nacl", this.parametros.creci_nacl);
      formData.append("creci_dif_temp", this.parametros.creci_dif_temp);
      formData.append("otras_caract", this.parametros.otras_caracteristicas);
      formData.append("imagen1", this.parametros.imagen1);
      formData.append("imagen2", this.parametros.imagen2);
      formData.append("imagen3", this.parametros.imagen3);
      formData.append(
        "imagenes_descripcion",
        this.parametros.descripcion_imagenes
      );
    },
    agregar() {
      this.mostrarForm = true;
      this.mostrarBtnAgregar = false;
    },
    cancelar() {
      this.mostrarForm = false;
      this.mostrarBtnAgregar = true;
    },
    showModalImagen(tipo) {
      this.seleccionar();
      this.modalImagen.errors = "";
      this.modalImagen.imagen = "";
      if (tipo === "cambiar") {
        this.modalImagen.nomBtn = "Cambiar";
        this.modalImagen.titulo = "Cambiar Imagen";
        this.modalImagen.nomLabel = "Cual imagen desea cambiar?";
      } else if (tipo === "eliminar") {
        this.modalImagen.nomBtn = "Eliminar";
        this.modalImagen.titulo = "Eliminar Imagen";
        this.modalImagen.nomLabel = "Cual imagen desea eliminar?";
      } else {
        this.modalImagen.nomBtn = "Agregar";
        this.modalImagen.titulo = "Agregar Imagen";
      }

      this.$modal.show("agregar_eliminar_imagen");
    },
    accionModal() {
      this.modalImagen.errors = "";
      if (this.modalImagen.nomBtn === "Cambiar") {
        if (this.$refs.inputImagenModal.value) {
          let formData = new FormData();
          formData.append("numero", this.modalImagen.select_imagen);
          formData.append("imagen", this.modalImagen.imagen);
          formData.append("_method", "PUT");
          axios
            .post(
              `/cepas/bacteria/caract-bioqui/cambiar-imagen/${this.info.id}`,
              formData,
              {
                headers: { "Content-Type": "multipart/form-data" }
              }
            )
            .then(res => {
              this.$emit("editar", res.data);
              this.$modal.hide("agregar_eliminar_imagen");
              this.toastr(
                "Cambiar Imagen",
                "La imagen fue cambiada con exito!!",
                "success"
              );
            })
            .catch(error => {
              if (error.response) {
                this.modalImagen.errors = [];
                this.modalImagen.errors = error.response.data.errors;
                this.toastr("Error!!", "", "error");
                // console.log(error.response.data);
              }
            });
        } else {
          this.modalImagen.errors = "Favor seleccionar una imagen.";
        }
      } else if (this.modalImagen.nomBtn === "Eliminar") {
        let parametros = {
          numero: this.modalImagen.select_imagen
        };
        axios
          .put(
            `/cepas/bacteria/caract-bioqui/eliminar-imagen/${this.info.id}`,
            parametros
          )
          .then(res => {
            this.$emit("editar", res.data);
            this.$modal.hide("agregar_eliminar_imagen");
            this.toastr(
              "Eliminar Imagen",
              "Imagen eliminada con exito!!",
              "success"
            );
          })
          .catch(error => {
            if (error.response) {
              this.modalImagen.errors = [];
              this.modalImagen.errors = error.response.data.errors;
              this.toastr("Error!!", "", "error");
              // console.log(error.response.data);
            }
          });
      } else {
        if (this.$refs.inputImagenModal.value) {
          this.colocarNumeroAgregar();
          let formData = new FormData();
          formData.append("numero", this.modalImagen.select_imagen);
          formData.append("imagen", this.modalImagen.imagen);
          formData.append("_method", "PUT");
          axios
            .post(
              `/cepas/bacteria/caract-bioqui/agregar-imagen/${this.info.id}`,
              formData,
              {
                headers: { "Content-Type": "multipart/form-data" }
              }
            )
            .then(res => {
              this.$emit("editar", res.data);
              this.$modal.hide("agregar_eliminar_imagen");
              this.toastr(
                "Agregar Imagen",
                "La imagen fue agregada con exito!!",
                "success"
              );
            })
            .catch(error => {
              if (error.response) {
                this.modalImagen.errors = [];
                this.modalImagen.errors = error.response.data.errors;
                this.toastr("Error!!", "", "error");
                // console.log(error.response.data);
              }
            });
        } else {
          this.modalImagen.errors = "Favor seleccionar una imagen.";
        }
      }
    },
    colocarNumeroAgregar() {
      if (!this.parametros.imagen1) {
        this.modalImagen.select_imagen = 1;
      } else if (!this.parametros.imagen2) {
        this.modalImagen.select_imagen = 2;
      } else if (!this.parametros.imagen3) {
        this.modalImagen.select_imagen = 3;
      }
    },
    seleccionar() {
      if (this.parametros.imagen1) {
        this.modalImagen.select_imagen = 1;
      } else if (this.parametros.imagen2) {
        this.modalImagen.select_imagen = 2;
      } else if (this.parametros.imagen3) {
        this.modalImagen.select_imagen = 3;
      }
    },
    verificarImagen(e) {
      this.modalImagen.errors = "";
      let file = e.target.files[0];
      this.modalImagen.imagen = file;
      let allowedExtensions = /(.jpg|.jpeg)$/i;
      if (file) {
        if (!allowedExtensions.exec(file.name) || file.size > 2000000) {
          this.modalImagen.errors =
            "La imagen debe ser en formato .jpeg/.jpg y menor a 2Mb.";
          this.$refs.inputImagenModal.value = "";
          this.modalImagen.imagen = "";
        }
      }
    }
  },
  computed: {
    ...vuex.mapGetters(["getInfoCaractMicroBacterias"]),
    required() {
      if (this.tituloForm === "Agregar Característica") {
        return true;
      } else {
        return false;
      }
    },
    btnClase() {
      if (this.tituloForm === "Agregar Característica") {
        return "btn-primary";
      } else {
        return "btn-warning";
      }
    },
    classRow() {
      if (this.tituloForm === "Agregar Característica") {
        return "col-md-4";
      } else {
        return "col-md-6";
      }
    },
    mostraImagenes() {
      if (
        this.parametros.imagen1 ||
        this.parametros.imagen2 ||
        this.parametros.imagen3
      ) {
        return true;
      } else {
        return false;
      }
    },
    btnAgregar() {
      if (
        !this.parametros.imagen1 ||
        !this.parametros.imagen2 ||
        !this.parametros.imagen3
      ) {
        return true;
      } else {
        return false;
      }
    },
    btnCambiar() {
      if (
        this.parametros.imagen1 ||
        this.parametros.imagen2 ||
        this.parametros.imagen3
      ) {
        return true;
      } else {
        return false;
      }
    },
    btnEliminar() {
      if (
        this.parametros.imagen1 ||
        this.parametros.imagen2 ||
        this.parametros.imagen3
      ) {
        return true;
      } else {
        return false;
      }
    }
  },
  mounted() {
    if (this.info) {
      this.llenarInfo();
      this.tituloForm = "Editar Característica";
      this.nomBtn = "Editar";
    } else {
      this.tituloForm = "Agregar Característica";
      this.nomBtn = "Agregar";
    }
  }
};
</script>

<style lang="css">
</style>