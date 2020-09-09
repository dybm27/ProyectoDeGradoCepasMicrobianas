<template>
  <div>
    <div class="main-card mb-3 card mt-4 mr-4 ml-4">
      <div class="card-body">
        <h5 class="card-title">{{tituloForm}}</h5>
        <form @submit.prevent="evento">
          <template v-if="errors!=''">
            <div class="alert alert-danger">
              <p v-for="(item, index) in errors" :key="index">{{item[0]}}</p>
            </div>
          </template>
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
                        :class="['form-control', $v.parametros.oxidasa.$error? 'error-input-select':'']"
                        v-model.trim="$v.parametros.oxidasa.$model"
                      />
                      <em
                        v-if="$v.parametros.oxidasa.$error&&!$v.parametros.oxidasa.required"
                        class="text-error-input"
                      >{{mensajes.required}}</em>
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
                        :class="['form-control', $v.parametros.catalasa.$error? 'error-input-select':'']"
                        v-model.trim="$v.parametros.catalasa.$model"
                      />
                      <em
                        v-if="$v.parametros.catalasa.$error&&!$v.parametros.catalasa.required"
                        class="text-error-input"
                      >{{mensajes.required}}</em>
                    </div>
                  </div>
                </div>
                <div class="form-row">
                  <div class="col-md-6">
                    <div class="position-relative form-group">
                      <label for="citrato" class>Citrato</label>
                      <input
                        name="citrato"
                        id="citrato"
                        placeholder="..."
                        type="text"
                        :class="['form-control', $v.parametros.citrato.$error? 'error-input-select':'']"
                        v-model.trim="$v.parametros.citrato.$model"
                      />
                      <em
                        v-if="$v.parametros.citrato.$error&&!$v.parametros.citrato.required"
                        class="text-error-input"
                      >{{mensajes.required}}</em>
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
                        :class="['form-control', $v.parametros.tsi.$error? 'error-input-select':'']"
                        v-model.trim="$v.parametros.tsi.$model"
                      />
                      <em
                        v-if="$v.parametros.tsi.$error&&!$v.parametros.tsi.required"
                        class="text-error-input"
                      >{{mensajes.required}}</em>
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
                        :class="['form-control', $v.parametros.glucosa.$error? 'error-input-select':'']"
                        v-model.trim="$v.parametros.glucosa.$model"
                      />
                      <em
                        v-if="$v.parametros.glucosa.$error&&!$v.parametros.glucosa.required"
                        class="text-error-input"
                      >{{mensajes.required}}</em>
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
                        :class="['form-control', $v.parametros.lactosa.$error? 'error-input-select':'']"
                        v-model.trim="$v.parametros.lactosa.$model"
                      />
                      <em
                        v-if="$v.parametros.lactosa.$error&&!$v.parametros.lactosa.required"
                        class="text-error-input"
                      >{{mensajes.required}}</em>
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
                        :class="['form-control', $v.parametros.manitol.$error? 'error-input-select':'']"
                        v-model.trim="$v.parametros.manitol.$model"
                      />
                      <em
                        v-if="$v.parametros.manitol.$error&&!$v.parametros.manitol.required"
                        class="text-error-input"
                      >{{mensajes.required}}</em>
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
                        :class="['form-control', $v.parametros.xilosa.$error? 'error-input-select':'']"
                        v-model.trim="$v.parametros.xilosa.$model"
                      />
                      <em
                        v-if="$v.parametros.xilosa.$error&&!$v.parametros.xilosa.required"
                        class="text-error-input"
                      >{{mensajes.required}}</em>
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
                        :class="['form-control', $v.parametros.arabinosa.$error? 'error-input-select':'']"
                        v-model.trim="$v.parametros.arabinosa.$model"
                      />
                      <em
                        v-if="$v.parametros.arabinosa.$error&&!$v.parametros.arabinosa.required"
                        class="text-error-input"
                      >{{mensajes.required}}</em>
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
                        :class="['form-control', $v.parametros.sacarosa.$error? 'error-input-select':'']"
                        v-model.trim="$v.parametros.sacarosa.$model"
                      />
                      <em
                        v-if="$v.parametros.sacarosa.$error&&!$v.parametros.sacarosa.required"
                        class="text-error-input"
                      >{{mensajes.required}}</em>
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
                        :class="['form-control', $v.parametros.lia.$error? 'error-input-select':'']"
                        v-model.trim="$v.parametros.lia.$model"
                      />
                      <em
                        v-if="$v.parametros.lia.$error&&!$v.parametros.lia.required"
                        class="text-error-input"
                      >{{mensajes.required}}</em>
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
                        :class="['form-control', $v.parametros.sim.$error? 'error-input-select':'']"
                        v-model.trim="$v.parametros.sim.$model"
                      />
                      <em
                        v-if="$v.parametros.sim.$error&&!$v.parametros.sim.required"
                        class="text-error-input"
                      >{{mensajes.required}}</em>
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
                        :class="['form-control', $v.parametros.rm.$error? 'error-input-select':'']"
                        v-model.trim="$v.parametros.rm.$model"
                      />
                      <em
                        v-if="$v.parametros.rm.$error&&!$v.parametros.rm.required"
                        class="text-error-input"
                      >{{mensajes.required}}</em>
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
                        :class="['form-control', $v.parametros.vp.$error? 'error-input-select':'']"
                        v-model.trim="$v.parametros.vp.$model"
                      />
                      <em
                        v-if="$v.parametros.vp.$error&&!$v.parametros.vp.required"
                        class="text-error-input"
                      >{{mensajes.required}}</em>
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
                        :class="['form-control', $v.parametros.nitrato.$error? 'error-input-select':'']"
                        v-model.trim="$v.parametros.nitrato.$model"
                      />
                      <em
                        v-if="$v.parametros.nitrato.$error&&!$v.parametros.nitrato.required"
                        class="text-error-input"
                      >{{mensajes.required}}</em>
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
                        :class="['form-control', $v.parametros.caldo_urea.$error? 'error-input-select':'']"
                        v-model.trim="$v.parametros.caldo_urea.$model"
                      />
                      <em
                        v-if="$v.parametros.caldo_urea.$error&&!$v.parametros.caldo_urea.required"
                        class="text-error-input"
                      >{{mensajes.required}}</em>
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
                        :class="['form-control', $v.parametros.of.$error? 'error-input-select':'']"
                        v-model.trim="$v.parametros.of.$model"
                      />
                      <em
                        v-if="$v.parametros.of.$error&&!$v.parametros.of.required"
                        class="text-error-input"
                      >{{mensajes.required}}</em>
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
                        :class="['form-control', $v.parametros.almidon.$error? 'error-input-select':'']"
                        v-model.trim="$v.parametros.almidon.$model"
                      />
                      <em
                        v-if="$v.parametros.almidon.$error&&!$v.parametros.almidon.required"
                        class="text-error-input"
                      >{{mensajes.required}}</em>
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
                        :class="['form-control', $v.parametros.lecitinasa.$error? 'error-input-select':'']"
                        v-model.trim="$v.parametros.lecitinasa.$model"
                      />
                      <em
                        v-if="$v.parametros.lecitinasa.$error&&!$v.parametros.lecitinasa.required"
                        class="text-error-input"
                      >{{mensajes.required}}</em>
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
                        :class="['form-control', $v.parametros.lipasa.$error? 'error-input-select':'']"
                        v-model.trim="$v.parametros.lipasa.$model"
                      />
                      <em
                        v-if="$v.parametros.lipasa.$error&&!$v.parametros.lipasa.required"
                        class="text-error-input"
                      >{{mensajes.required}}</em>
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
                  <div class="col-md-6">
                    <div class="position-relative form-group">
                      <label for="hidro_caseina" class>Hidrolisís de la Caseína</label>
                      <input
                        name="hidro_caseina"
                        id="hidro_caseina"
                        placeholder="..."
                        type="text"
                        :class="['form-control', $v.parametros.hidro_caseina.$error? 'error-input-select':'']"
                        v-model.trim="$v.parametros.hidro_caseina.$model"
                      />
                      <em
                        v-if="$v.parametros.hidro_caseina.$error&&!$v.parametros.hidro_caseina.required"
                        class="text-error-input"
                      >{{mensajes.required}}</em>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="position-relative form-group">
                      <label for="hidro_gelatina" class>Hidrolisís de la Gelatina</label>
                      <input
                        name="hidro_gelatina"
                        id="hidro_gelatina"
                        placeholder="..."
                        type="text"
                        :class="['form-control', $v.parametros.hidro_gelatina.$error? 'error-input-select':'']"
                        v-model.trim="$v.parametros.hidro_gelatina.$model"
                      />
                      <em
                        v-if="$v.parametros.hidro_gelatina.$error&&!$v.parametros.hidro_gelatina.required"
                        class="text-error-input"
                      >{{mensajes.required}}</em>
                    </div>
                  </div>
                </div>
                <div class="form-row">
                  <div class="col-md-6">
                    <div class="position-relative form-group">
                      <label for="hidro_urea" class>Hidrolisís de la Úrea</label>
                      <input
                        name="hidro_urea"
                        id="hidro_urea"
                        placeholder="..."
                        type="text"
                        :class="['form-control', $v.parametros.hidro_urea.$error? 'error-input-select':'']"
                        v-model.trim="$v.parametros.hidro_urea.$model"
                      />
                      <em
                        v-if="$v.parametros.hidro_urea.$error&&!$v.parametros.hidro_urea.required"
                        class="text-error-input"
                      >{{mensajes.required}}</em>
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
                        :class="['form-control', $v.parametros.creci_dif_temp.$error? 'error-input-select':'']"
                        v-model.trim="$v.parametros.creci_dif_temp.$model"
                      />
                      <em
                        v-if="$v.parametros.creci_dif_temp.$error&&!$v.parametros.creci_dif_temp.required"
                        class="text-error-input"
                      >{{mensajes.required}}</em>
                    </div>
                  </div>
                </div>
                <div class="form-row">
                  <div :class="classRow">
                    <div class="position-relative form-group">
                      <label for="creci_nacl" class>Crecimiento en Nacl</label>
                      <input
                        name="creci_nacl"
                        id="creci_nacl"
                        placeholder="..."
                        type="text"
                        :class="['form-control', $v.parametros.creci_nacl.$error? 'error-input-select':'']"
                        v-model.trim="$v.parametros.creci_nacl.$model"
                      />
                      <em
                        v-if="$v.parametros.creci_nacl.$error&&!$v.parametros.creci_nacl.required"
                        class="text-error-input"
                      >{{mensajes.required}}</em>
                    </div>
                  </div>
                  <template v-if="validarTipoForm">
                    <div class="col-md-4">
                      <div class="position-relative form-group">
                        <label for="imagen" class>Imágenes</label>
                        <input
                          name="imagen"
                          @change="obtenerImagenes"
                          id="imagen"
                          type="file"
                          accept="image/jpeg, image/png"
                          :class="['form-control-file', 
                              $v.parametros.imagen1.$error
                              ||$v.parametros.imagen2.$error
                              ||$v.parametros.imagen3.$error
                              ? 'error-input-select':'']"
                          ref="inputImagen"
                          multiple
                        />
                        <em v-if="erroresImagenes" class="text-error-input">{{erroresImagenes}}</em>
                        <em
                          v-if="($v.parametros.imagen1.$error
                              &&!$v.parametros.imagen1.required)
                              ||
                              ($v.parametros.imagen2.$error
                              &&!$v.parametros.imagen2.required) 
                              ||
                              ($v.parametros.imagen3.$error
                              &&!$v.parametros.imagen3.required)"
                          class="text-error-input"
                        >{{mensajes.required}}</em>
                      </div>
                    </div>
                  </template>
                  <div :class="classRow">
                    <div class="position-relative form-group">
                      <label for="otras_caract">Otras Características</label>
                      <textarea
                        name="otras_caract"
                        id="otras_caract"
                        class="form-control"
                        v-model="parametros.otras_caract"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <button
                  class="mb-2 mr-2 btn btn-block"
                  :class="btnClase"
                  :disabled="bloquearBtn"
                >{{nomBtn}}</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="container">
      <div class="row justify-content-md-center">
        <template v-if="validarTipoForm">
          <div class="col-md-12">
            <div class="main-card mb-3 card">
              <div class="card-body">
                <h5 class="card-title">Imagenes</h5>
                <template v-if="imagenesCroppie.length===cantImagenes&&$refs.inputImagen.value">
                  <CroppieCepas
                    :imagenes="imagenesCroppie"
                    @cambiarValorImagen="cambiarValorImagen"
                    :posicion="'horizontal'"
                  />
                </template>
                <template v-else>
                  <div class="text-center">
                    <h5 class="mt-5 mb-5">
                      <span class="pr-1">
                        <b class="text-success">SIN IMÁGENES</b>
                      </span>
                    </h5>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </template>
        <template v-else>
          <div class="col-md-5">
            <div class="main-card mb-3 card">
              <div class="card-body">
                <h5 class="card-title">Imagenes</h5>
                <Imagenes
                  :parametros="parametros"
                  :tipoCepa="'bacteria/caract-bioqui'"
                  :imagenes="imagenes"
                  :cepa="info"
                  @accionImagen="accionImagen"
                ></Imagenes>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import Toastr from "../../../../mixins/toastr";
import obtenerImagenCroopie3ImagenesMixin from "../../../../mixins/obtenerImagenCroopie3Imagenes";
import CroppieCepas from "../../CroppieCepasComponent.vue";
import Imagenes from "../../ImagenesComponent.vue";
import { required } from "vuelidate/lib/validators";
export default {
  components: { CroppieCepas, Imagenes },
  props: ["info", "modificarInfo"],
  watch: {
    modificarInfo() {
      if (this.modificarInfo) {
        this.llenarInfo();
        this.$emit("cambiarVariable");
      }
    },
  },
  data() {
    return {
      parametros: {
        cepaId: "",
        oxidasa: "",
        catalasa: "",
        citrato: "",
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
        tincion_gram: "positivo",
        tincion_esporas: "presencia",
        ubicacion_esporas: "central",
        tincion_capsula: "presencia",
        otras_caract: "",
        imagen1: "",
        imagen2: "",
        imagen3: "",
      },
      tituloForm: "",
      nomBtn: "",
      errors: [],
      bloquearBtn: false,
      mensajes: {
        required: "El campo es requerido",
      },
    };
  },
  validations: {
    parametros: {
      oxidasa: { required },
      catalasa: { required },
      citrato: { required },
      tsi: { required },
      lia: { required },
      sim: { required },
      rm: { required },
      vp: { required },
      nitrato: { required },
      caldo_urea: { required },
      of: { required },
      glucosa: { required },
      lactosa: { required },
      manitol: { required },
      xilosa: { required },
      arabinosa: { required },
      sacarosa: { required },
      almidon: { required },
      lecitinasa: { required },
      lipasa: { required },
      hidro_caseina: { required },
      hidro_gelatina: { required },
      hidro_urea: { required },
      creci_nacl: { required },
      creci_dif_temp: { required },
      tincion_gram: { required },
      tincion_esporas: { required },
      ubicacion_esporas: { required },
      tincion_capsula: { required },
      imagen1: { required },
      imagen2: {
        required(value) {
          if (value == "" && this.cantImagenes > 1) return false;
          return true;
        },
      },
      imagen3: {
        required(value) {
          if (value == "" && this.cantImagenes == 3) return false;
          return true;
        },
      },
    },
  },
  mixins: [Toastr, obtenerImagenCroopie3ImagenesMixin],
  methods: {
    cambiarValorImagen(datos) {
      switch (datos.num) {
        case 1:
          this.parametros.imagen1 = datos.data;
          break;
        case 2:
          this.parametros.imagen2 = datos.data;
          break;
        case 3:
          this.parametros.imagen3 = datos.data;
          break;
      }
    },
    evento() {
      this.bloquearBtn = true;
      this.$v.parametros.$touch();
      if (!this.$v.$invalid) {
        if (this.tituloForm === "Agregar Característica") {
          axios
            .post("/cepas/bacteria/caract-bioqui", this.parametros)
            .then((res) => {
              if (res.request.responseURL === process.env.MIX_LOGIN) {
                localStorage.setItem(
                  "mensajeLogin",
                  "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"
                );
                window.location.href = "/";
              } else {
                this.bloquearBtn = false;
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
              }
            })
            .catch((error) => {
              this.verificarError(
                error.response.status,
                error.response.data.errors
              );
            });
        } else {
          axios
            .put(
              `/cepas/bacteria/caract-bioqui/${this.info.id}`,
              this.parametros
            )
            .then((res) => {
              this.bloquearBtn = false;
              this.errors = [];
              this.$emit("editar", res.data);
              this.toastr(
                "Editar Características Bioquímicas",
                "Características Bioquímicas editadas con exito!!",
                "success"
              );
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
    llenarInfo() {
      this.imagenes = [];
      this.parametros.oxidasa = this.info.oxidasa;
      this.parametros.catalasa = this.info.catalasa;
      this.parametros.citrato = this.info.citrato;
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
      this.parametros.otras_caract = this.info.otras_caract;
      this.parametros.imagen1 = this.info.imagen1;
      this.parametros.imagen2 = this.info.imagen2;
      this.parametros.imagen3 = this.info.imagen3;
      this.llenarArregloImagenes();
    },
    accionImagen(data) {
      this.$emit("editar", data);
    },
  },
  computed: {
    validarTipoForm() {
      if (this.tituloForm === "Agregar Característica") {
        return true;
      } else {
        return false;
      }
    },
    btnClase() {
      if (this.tituloForm === "Agregar Característica") {
        return "btn-success";
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
    let array = [];
    if (this.$route.params.cepaBacteriaSlug) {
      array = this.$route.params.cepaBacteriaSlug.split("-");
      this.parametros.cepaId = parseInt(array[array.length - 1]);
    } else {
      array = this.$route.params.cepaSlug.split("-");
      this.parametros.cepaId = parseInt(array[array.length - 1]);
    }
  },
};
</script>