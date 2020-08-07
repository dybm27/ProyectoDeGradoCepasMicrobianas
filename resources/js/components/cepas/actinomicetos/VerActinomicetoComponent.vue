<template>
  <div class="tabs-animation">
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="card border-dark mb-3">
            <div class="card-header">Cepa Microbiana - Actinomiceto</div>
            <div class="card-body text-dark">
              <div class="table-responsive">
                <table class="table table-striped">
                  <tbody>
                    <tr>
                      <th>Codigo</th>
                      <td>{{cepa.cepa.codigo}}</td>
                      <th>Grupo Microbiano</th>
                      <td>{{getGrupoCepa.nombre}}</td>
                    </tr>
                    <tr>
                      <th>Genero</th>
                      <td>{{getGeneroCepa.nombre}}</td>
                      <th>Especie</th>
                      <td>{{getEspecieCepa.nombre}}</td>
                    </tr>
                    <tr>
                      <th>Reino</th>
                      <td>{{getReinoCepa.nombre}}</td>
                      <th>Phylum</th>
                      <td>{{getPhylumCepa.nombre}}</td>
                    </tr>
                    <tr>
                      <th>Clase</th>
                      <td>{{getClaseCepa.nombre}}</td>
                      <th>Orden</th>
                      <td>{{getOrdenCepa.nombre}}</td>
                    </tr>
                    <tr>
                      <th>Estado</th>
                      <td>{{cepa.cepa.estado}}</td>
                      <th>Origen</th>
                      <td>{{cepa.cepa.origen}}</td>
                    </tr>
                    <template v-if="cepa.cepa.otras_caract">
                      <tr>
                        <th>Otras Características:</th>
                        <td>{{cepa.cepa.otras_caract}}</td>
                      </tr>
                    </template>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card border-dark mb-3">
            <div class="card-header d-flex">
              Exportar a PDF
              <button
                :disabled="btnTodoDisabled"
                class="btn-icon btn-icon-only btn-pill btn btn-outline-success ml-auto"
                @click="imprimir('todo')"
              >
                <i class="fas fa-print"></i>
                TODO
              </button>
            </div>
            <div class="card-body text-dark">
              <div class="position-relative form-group">
                <label for="exampleCustomMutlipleSelect">Selecciona lo que deseas Imprimir</label>
                <select
                  multiple
                  type="select"
                  v-model="selectImprimir"
                  :class="['custom-select', errorSelect ? 'is-invalid':'']"
                >
                  <option value="cepa">Cepa</option>
                  <template v-if="getCaractMacro!=''">
                    <option value="caract-macro">Características Macroscópicas</option>
                  </template>
                  <template v-if="getCaractMicro">
                    <option value="caract-micro">Características Microscópicas</option>
                  </template>
                  <template v-if="getIdentiBioqui">
                    <option value="identi-bioqui">Identificación Bioquímica</option>
                  </template>
                  <template v-if="getOtrasCaract">
                    <option value="otras-caract">Otras Características</option>
                  </template>
                </select>
                <em v-if="errorSelect" class="error invalid-feedback">{{errorSelect}}</em>
              </div>
              <button
                class="btn btn-danger"
                @click="imprimir('select')"
                :disabled="btnSeleccionadoDisabled"
              >Solo lo Seleccionado</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <template v-if="getCaractMacro!=''">
      <div class="mb-3 card">
        <div class="card-header-tab card-header">
          <div
            class="card-header-title font-size-lg text-capitalize font-weight-normal"
          >Características Macroscópicas</div>
          <div class="btn-actions-pane-right text-capitalize">
            <IconoMostrar @accionMostrar="mostrarOcultarCaract('macro')" />
          </div>
        </div>
        <div class="contaider mb-3 mt-3 ml-3 mr-3" v-if="mostrarCaractMacro">
          <div class="row">
            <div class="col-md-4" v-for="(item, index) in 3" :key="index">
              <div class="card">
                <template v-if="getCaractMacro[index]">
                  <img class="card-img-top" :src="getCaractMacro[index].imagenPublica" />
                  <div class="card-body overflow-auto">
                    <h5 class="card-title">{{getCaractMacro[index].medio}}</h5>
                    <div class="table-responsive">
                      <table class="table table-striped">
                        <tbody>
                          <tr>
                            <th>Textura:</th>
                            <td>{{getInfoCaractMacroActinomicetosById({tipo:'textura',id:getCaractMacro[index].textura_id}).nombre}}</td>
                          </tr>
                          <tr>
                            <th>Color:</th>
                            <td>{{getInfoCaractMacroActinomicetosById({tipo:'color',id:getCaractMacro[index].color_id}).nombre}}</td>
                          </tr>
                          <tr>
                            <th>Forma:</th>
                            <td>{{getInfoCaractMacroActinomicetosById({tipo:'forma',id:getCaractMacro[index].forma_id}).nombre}}</td>
                          </tr>
                          <tr>
                            <th>Superficie:</th>
                            <td>{{getInfoCaractMacroActinomicetosById({tipo:'superficie',id:getCaractMacro[index].superficie_id}).nombre}}</td>
                          </tr>
                          <tr>
                            <th>Borde:</th>
                            <td>{{getInfoCaractMacroActinomicetosById({tipo:'borde',id:getCaractMacro[index].borde_id}).nombre}}</td>
                          </tr>
                          <tr>
                            <th>Pigmento:</th>
                            <td>{{getInfoCaractMacroActinomicetosById({tipo:'pigmento',id:getCaractMacro[index].pigmento_id}).nombre}}</td>
                          </tr>
                          <tr>
                            <th>Secreción de Geosminas:</th>
                            <td>{{primeraMayus(getCaractMacro[index].secrecion_geosminas)}}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <template v-if="getCaractMacro[index].otras_caract">
                      <p>
                        <b>Otras Características:</b>
                        {{getCaractMacro[index].otras_caract}}
                      </p>
                    </template>
                  </div>
                  <div class="card-footer">
                    <small class="text-muted">
                      <b>Creada:</b>
                      {{modificarFecha(getCaractMacro[index].created_at)}}
                    </small>
                  </div>
                </template>
                <template v-else>
                  <div class="card-body text-center mb-5">
                    <h5 class="card-title mt-5">Medio {{item}} No registrado</h5>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-if="getCaractMicro">
      <div class="mb-3 card">
        <div class="card-header-tab card-header">
          <div
            class="card-header-title font-size-lg text-capitalize font-weight-normal"
          >Características Microscópicas</div>
          <div class="btn-actions-pane-right text-capitalize">
            <IconoMostrar @accionMostrar="mostrarOcultarCaract('micro')" />
          </div>
        </div>
        <div class="contaider mb-3 mt-3 ml-3 mr-3" v-if="mostrarCaractMicro">
          <div class="row">
            <div class="col-md-5">
              <div class="card">
                <template v-if="imagenes.micro!=''">
                  <div class="mt-3 ml-5 mb-1 mr-5">
                    <Carousel :id="1" :imagenes="imagenes.micro"></Carousel>
                  </div>
                  <div class="card-footer">
                    <small class="text-muted"></small>
                  </div>
                </template>
              </div>
            </div>
            <div class="col-md-7">
              <div class="card">
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table table-striped">
                      <tbody>
                        <tr>
                          <th>Tinción de Gram:</th>
                          <td>{{getInfoCaractMicroActinomicetosById({tipo:'tincion',id:getCaractMicro.tinciongram_id}).nombre}}</td>
                        </tr>
                        <tr>
                          <th>Forma:</th>
                          <td>{{getInfoCaractMicroActinomicetosById({tipo:'forma',id:getCaractMicro.forma_id}).nombre}}</td>
                        </tr>
                        <tr>
                          <th>Micelío:</th>
                          <td>{{getInfoCaractMicroActinomicetosById({tipo:'micelio',id:getCaractMicro.micelio_id}).nombre}}</td>
                        </tr>
                        <tr>
                          <th>Conidióforo:</th>
                          <td>{{getInfoCaractMicroActinomicetosById({tipo:'conidioforo',id:getCaractMicro.conidioforo_id}).nombre}}</td>
                        </tr>
                        <tr>
                          <th>Forma Estructura de Reproducción:</th>
                          <td>{{primeraMayus(getCaractMicro.forma_estructura_reproduccion )}}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <template v-if="getCaractMicro.otras_caract">
                    <p>
                      <b>Otras Características:</b>
                      {{getCaractMicro.otras_caract}}
                    </p>
                  </template>
                </div>
                <div class="card-footer">
                  <small class="text-muted">
                    <b>Creada:</b>
                    {{modificarFecha(getCaractMicro.created_at)}}
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-if="getIdentiBioqui">
      <div class="mb-3 card">
        <div class="card-header-tab card-header">
          <div
            class="card-header-title font-size-lg text-capitalize font-weight-normal"
          >Identificación Bioquímica</div>
          <div class="btn-actions-pane-right text-capitalize">
            <IconoMostrar @accionMostrar="mostrarOcultarCaract('identi')" />
          </div>
        </div>
        <div class="contaider mb-3 mt-3 ml-3 mr-3" v-if="mostrarIdentiBioqui">
          <div class="row">
            <div class="col-md-5">
              <div class="card">
                <template v-if="imagenes.identi!=''">
                  <div class="mt-2 ml-5 mb-2 mr-5">
                    <Carousel :id="2" :imagenes="imagenes.identi"></Carousel>
                  </div>
                  <div class="card-footer">
                    <small class="text-muted"></small>
                  </div>
                </template>
              </div>
            </div>
            <div class="col-md-7">
              <div class="card">
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table table-striped">
                      <tbody>
                        <tr>
                          <th>Oxidasa:</th>
                          <td>{{primeraMayus(getIdentiBioqui.oxidasa)}}</td>
                          <th>Caseina:</th>
                          <td>{{primeraMayus(getIdentiBioqui.caseina)}}</td>
                        </tr>
                        <tr>
                          <th>Nitratos:</th>
                          <td>{{primeraMayus(getIdentiBioqui.nitrato)}}</td>
                          <th>Catalasa:</th>
                          <td>{{primeraMayus(getIdentiBioqui.catalasa)}}</td>
                        </tr>
                        <tr>
                          <th>Citrato:</th>
                          <td>{{primeraMayus(getIdentiBioqui.citrato)}}</td>
                          <th>Hidrolisís de la Úrea:</th>
                          <td>{{primeraMayus(getIdentiBioqui.hidro_urea)}}</td>
                        </tr>
                        <tr>
                          <th>Hidrolisís de la Gelatina:</th>
                          <td colspan="3">{{primeraMayus(getIdentiBioqui.hidro_gelatina)}}</td>
                        </tr>
                        <tr>
                          <th>Sensibilidad a Antibióticos:</th>
                          <td colspan="3">{{primeraMayus(getIdentiBioqui.sensi_antibioticos)}}</td>
                        </tr>
                        <tr>
                          <th colspan="4" class="text-center">Fermentación</th>
                        </tr>
                        <tr>
                          <th>Lactosa:</th>
                          <td>{{primeraMayus(getIdentiBioqui.fer_lactosa)}}</td>
                          <th>Manitol:</th>
                          <td>{{primeraMayus(getIdentiBioqui.fer_manitol)}}</td>
                        </tr>
                        <tr>
                          <th>Inositol:</th>
                          <td>{{primeraMayus(getIdentiBioqui.fer_inositol)}}</td>
                          <th>Sacarosa:</th>
                          <td>{{primeraMayus(getIdentiBioqui.fer_sacarosa)}}</td>
                        </tr>
                        <template v-if="getIdentiBioqui.fer_otro">
                          <tr>
                            <th>Otros Azúcares:</th>
                            <td colspan="3">{{primeraMayus(getIdentiBioqui.fer_otro)}}</td>
                          </tr>
                        </template>
                      </tbody>
                    </table>
                  </div>
                  <template v-if="getIdentiBioqui.otras_caract">
                    <p>
                      <b>Otras Características:</b>
                      {{getIdentiBioqui.otras_caract}}
                    </p>
                  </template>
                </div>
                <div class="card-footer">
                  <small class="text-muted">
                    <b>Creada:</b>
                    {{modificarFecha(getIdentiBioqui.created_at)}}
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-if="getOtrasCaract">
      <div class="mb-3 card">
        <div class="card-header-tab card-header">
          <div
            class="card-header-title font-size-lg text-capitalize font-weight-normal"
          >Otras Características</div>
          <div class="btn-actions-pane-right text-capitalize">
            <IconoMostrar @accionMostrar="mostrarOcultarCaract('otras')" />
          </div>
        </div>
        <div class="contaider mb-3 mt-3 ml-3 mr-3" v-if="mostrarOtrasCaract">
          <div class="row">
            <div class="col-md-5">
              <div class="card">
                <template v-if="imagenes.otras!=''">
                  <div class="mt-2 ml-5 mb-2 mr-5">
                    <Carousel :id="3" :imagenes="imagenes.otras"></Carousel>
                  </div>
                  <div class="card-footer">
                    <small class="text-muted"></small>
                  </div>
                </template>
              </div>
            </div>
            <div class="col-md-7">
              <div class="card">
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table table-striped">
                      <tbody>
                        <tr>
                          <th>Fijación Nitrogeno:</th>
                          <td>{{primeraMayus(getOtrasCaract.fijacion_nitrogeno)}}</td>
                        </tr>
                        <tr>
                          <th>Producción AIA:</th>
                          <td>{{primeraMayus(getOtrasCaract.produccion_aia)}}</td>
                        </tr>
                        <tr>
                          <th>Giberelinas:</th>
                          <td>{{primeraMayus(getOtrasCaract.giberelinas)}}</td>
                        </tr>
                        <tr>
                          <th>Producción Sideróforos:</th>
                          <td>{{primeraMayus(getOtrasCaract.produccion_sideroforos)}}</td>
                        </tr>
                        <tr>
                          <th>Solubilización de Fósforo:</th>
                          <td>{{primeraMayus(getOtrasCaract.solubili_fosforo)}}</td>
                        </tr>
                        <tr>
                          <th>Producción PHA:</th>
                          <td>{{primeraMayus(getOtrasCaract.produccion_pha)}}</td>
                        </tr>
                        <tr>
                          <th>Alta Producción De Antibióticos:</th>
                          <td>{{primeraMayus(getOtrasCaract.alta_produc_antibioticos)}}</td>
                        </tr>
                        <tr>
                          <th>Actividades Enzimáticas:</th>
                          <td>{{primeraMayus(getOtrasCaract.activi_enzimaticas)}}</td>
                        </tr>
                        <tr>
                          <th>Antagonismos:</th>
                          <td>{{primeraMayus(getOtrasCaract.antagonismos)}}</td>
                        </tr>
                        <tr></tr>
                      </tbody>
                    </table>
                  </div>
                  <template v-if="getOtrasCaract.otras_caract">
                    <p>
                      <b>Otras Características:</b>
                      {{getOtrasCaract.otras_caract}}
                    </p>
                  </template>
                </div>
                <div class="card-footer">
                  <small class="text-muted">
                    <b>Creada:</b>
                    {{modificarFecha(getOtrasCaract.created_at)}}
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import moment from "moment";
import Carousel from "../../carousel/CarouselComponent.vue";
import IconoMostrar from "../IconoMostrarInfoVer.vue";
import Toastr from "../../../mixins/toastr";
import vuex from "vuex";
moment.locale("es");
export default {
  components: { Carousel, IconoMostrar },
  data() {
    return {
      selectImprimir: [],
      errorSelect: "",
      imagenes: {
        micro: [],
        otras: [],
        identi: [],
      },
      mostrarCaractMacro: false,
      mostrarCaractMicro: false,
      mostrarIdentiBioqui: false,
      mostrarOtrasCaract: false,
      btnTodo: false,
      btnSeleccionado: false,
    };
  },
  mixins: [Toastr],
  computed: {
    ...vuex.mapState("cepa", ["cepa"]),
    ...vuex.mapGetters("cepa", [
      "getCaractMacro",
      "getCaractMicro",
      "getOtrasCaract",
      "getIdentiBioqui",
    ]),
    ...vuex.mapGetters("info_cepas", [
      "getGrupoCepa",
      "getGeneroCepa",
      "getEspecieCepa",
      "getPhylumCepa",
      "getOrdenCepa",
      "getReinoCepa",
      "getClaseCepa",
    ]),
    ...vuex.mapGetters("info_caract", [
      "getInfoCaractMacroActinomicetosById",
      "getInfoCaractMicroActinomicetosById",
    ]),
    btnTodoDisabled() {
      return this.btnTodo;
    },
    btnSeleccionadoDisabled() {
      return this.btnSeleccionado;
    },
  },
  methods: {
    imprimir(tipo) {
      //window.print();
      let imprimir = true;
      switch (tipo) {
        case "todo":
          this.selectImprimir = [];
          this.selectImprimir.push("todo");
          break;
        case "select":
          if (this.selectImprimir.length === 0) {
            imprimir = false;
          }
          break;
      }
      if (imprimir) {
        this.btnTodo = true;
        this.btnSeleccionado = true;
        this.toastr(
          "Descarga!!",
          `La descarga puede demorar unos segundos, dependiendo de la cantidad de informacion. 
           favor esperar!!`,
          "warning"
        );
        axios
          .get(`/cepa/imprimir/${this.cepa.cepa.id}`, {
            params: { imprimir: this.selectImprimir },
            responseType: "blob",
          })
          .then((res) => {
            if (res.request.responseURL === process.env.MIX_LOGIN) {
              localStorage.setItem(
                "mensajeLogin",
                "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"
              );
              window.location.href = "/";
            } else {
              this.toastr(
                "Descarga!!",
                "La descarga se realizo con éxito",
                "success"
              );
              this.errorSelect = "";
              this.selectImprimir = [];
              const url = window.URL.createObjectURL(new Blob([res.data]));
              const link = document.createElement("a");
              link.href = url;
              link.setAttribute(
                "download",
                `Cepa-${this.cepa.cepa.codigo}.pdf`
              );
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
              this.btnTodo = false;
              this.btnSeleccionado = false;
            }
          })
          .catch((error) => {
            if (error.response.status === 403) {
              this.$router.push("/sin-acceso");
            } else {
              this.btnTodo = false;
              this.btnSeleccionado = false;
              this.toastr("Error!!", "", "error");
            }
          });
      } else {
        this.errorSelect = "Favor seleccionar minimo una opcion";
      }
    },
    modificarFecha(fecha) {
      return moment(fecha).fromNow();
    },
    modificarFecha2(fecha) {
      return moment(fecha).format("D-MMM-YYYY hh:mma");
    },
    primeraMayus(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    llenarArregloImagenes(data, tipo) {
      if (data.imagen1) {
        this.pushImagen(1, data.imagenPublica1, true, tipo);
        if (data.imagen2) {
          this.pushImagen(2, data.imagenPublica2, false, tipo);
        }
        if (data.imagen3) {
          this.pushImagen(3, data.imagenPublica3, false, tipo);
        }
      } else if (data.imagen2) {
        this.pushImagen(2, data.imagenPublica2, true, tipo);
        if (data.imagen3) {
          this.pushImagen(3, data.imagenPublica3, false, tipo);
        }
      } else if (data.imagen3) {
        this.pushImagen(3, data.imagenPublica3, true, tipo);
      }
    },
    pushImagen(num, imagen, active, tipo) {
      switch (tipo) {
        case "micro":
          this.imagenes.micro.push({
            num: num,
            source: imagen,
            isActive: active,
          });
          break;
        case "otras":
          this.imagenes.otras.push({
            num: num,
            source: imagen,
            isActive: active,
          });
          break;
        case "identi":
          this.imagenes.identi.push({
            num: num,
            source: imagen,
            isActive: active,
          });
          break;
      }
    },
    mostrarOcultarCaract(tipo) {
      switch (tipo) {
        case "macro":
          this.mostrarCaractMacro = !this.mostrarCaractMacro;
          break;
        case "micro":
          this.mostrarCaractMicro = !this.mostrarCaractMicro;
          break;
        case "identi":
          this.mostrarIdentiBioqui = !this.mostrarIdentiBioqui;
          break;
        case "otras":
          this.mostrarOtrasCaract = !this.mostrarOtrasCaract;
          break;
      }
    },
  },
  created() {
    if (this.getCaractMicro) {
      this.llenarArregloImagenes(this.getCaractMicro, "micro");
    }
    if (this.getIdentiBioqui) {
      this.llenarArregloImagenes(this.getIdentiBioqui, "identi");
    }
    if (this.getOtrasCaract) {
      this.llenarArregloImagenes(this.getOtrasCaract, "otras");
    }
  },
};
</script>
