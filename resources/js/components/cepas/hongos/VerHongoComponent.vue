<template>
  <div class="tabs-animation">
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="card border-dark mb-3">
            <div class="card-header">Cepa Microbiana - Hongo</div>
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
                      <th>Clase</th>
                      <td>{{getClaseCepa.nombre}}</td>
                      <th>Orden</th>
                      <td>{{getOrdenCepa.nombre}}</td>
                    </tr>
                    <tr>
                      <th>Familia</th>
                      <td>{{getFamiliaCepa.nombre}}</td>
                      <th>Phylum</th>
                      <td>{{getPhylumCepa.nombre}}</td>
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
                  <template v-if="getCaractBioqui">
                    <option value="caract-bioqui">Características Bioquímicas</option>
                  </template>
                  <template v-if="getIdentiMolecu">
                    <option value="identi-molecu">Identificación Molecular</option>
                  </template>
                  <template v-if="getMetodoConser!=''">
                    <option value="metodo-conser">Métodos De Conservación</option>
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
                            <th>Color:</th>
                            <td>{{getInfoCaractMacroHongosById({tipo:'color',id:getCaractMacro[index].color_id}).nombre}}</td>
                          </tr>
                          <tr>
                            <th>Textura:</th>
                            <td>{{getInfoCaractMacroHongosById({tipo:'textura',id:getCaractMacro[index].textura_id}).nombre}}</td>
                          </tr>
                          <tr>
                            <th>Características del reverso:</th>
                            <td>{{primeraMayus(getCaractMacro[index].caracteristicas_reverso)}}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
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
                    <Carousel :imagenes="imagenes.micro"></Carousel>
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
                          <th>Conidióforo:</th>
                          <td>{{getInfoCaractMicroHongosById({tipo:'conidioforo',id:getCaractMicro.conidioforo_id}).nombre}}</td>
                        </tr>
                        <tr>
                          <th>Fiálides:</th>
                          <td>{{primeraMayus(getCaractMicro.fialides)}}</td>
                        </tr>
                        <template v-if="getCaractMicro.fialides==='Presencia'">
                          <tr>
                            <th>Forma Fiálides:</th>
                            <td>{{primeraMayus(getCaractMicro.fialides_forma)}}</td>
                          </tr>
                          <template v-if="getCaractMicro.fialides_otra_caracteristica">
                            <tr>
                              <th>Otras características Fiálides:</th>
                              <td>{{primeraMayus(getCaractMicro.fialides_otra_caracteristica)}}</td>
                            </tr>
                          </template>
                        </template>
                        <tr>
                          <th>Vesícula:</th>
                          <td>{{primeraMayus(getCaractMicro.vesicula)}}</td>
                        </tr>
                        <tr>
                          <th>Espora Asexual:</th>
                          <td>{{getInfoCaractMicroHongosById({tipo:'asexual',id:getCaractMicro.espora_asexual_id}).nombre}}</td>
                        </tr>
                        <template v-if="getCaractMicro.espora_asexual_id===2">
                          <tr>
                            <th>Tamaño Conidiosporas:</th>
                            <td>{{primeraMayus(getCaractMicro.esporas_asexuales_conidios_tamano)}}</td>
                          </tr>
                          <tr>
                            <th>Color Conidiosporas:</th>
                            <td>{{primeraMayus(getCaractMicro.esporas_asexuales_conidios_color)}}</td>
                          </tr>
                          <tr>
                            <th>Forma Conidiosporas:</th>
                            <td>{{primeraMayus(getCaractMicro.esporas_asexuales_conidios_forma)}}</td>
                          </tr>
                          <template v-if="getCaractMicro.esporas_asexuales_conidios_otras">
                            <tr>
                              <th>Otras características Conidiosporas:</th>
                              <td>{{primeraMayus(getCaractMicro.esporas_asexuales_conidios_otras)}}</td>
                            </tr>
                          </template>
                        </template>
                        <tr>
                          <th>Espora Sexual:</th>
                          <td>{{getInfoCaractMicroHongosById({tipo:'sexual',id:getCaractMicro.espora_sexual_id}).nombre}}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <template v-if="getCaractMicro.otras_estructuras">
                    <p>
                      <b>Otras estructuras:</b>
                      {{getCaractMicro.otras_estructuras}}
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
    <template v-if="getCaractBioqui">
      <div class="mb-3 card">
        <div class="card-header-tab card-header">
          <div
            class="card-header-title font-size-lg text-capitalize font-weight-normal"
          >Características Bioquímicas</div>
          <div class="btn-actions-pane-right text-capitalize">
            <IconoMostrar @accionMostrar="mostrarOcultarCaract('bioqui')" />
          </div>
        </div>
        <div class="contaider mb-3 mt-3 ml-3 mr-3" v-if="mostrarCaractBioqui">
          <div class="row">
            <div class="col-md-5">
              <div class="card">
                <template v-if="imagenes.bioqui!=''">
                  <div class="mt-2 ml-5 mb-2 mr-5">
                    <Carousel :imagenes="imagenes.bioqui"></Carousel>
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
                          <th>Enzimas:</th>
                          <td>{{primeraMayus(getCaractBioqui.enzimas)}}</td>
                        </tr>
                        <tr>
                          <th>Azúcares:</th>
                          <td>{{primeraMayus(getCaractBioqui.azucares)}}</td>
                        </tr>
                        <template v-if="getCaractBioqui.otras_caracteristicas">
                          <tr>
                            <th>Otras Características:</th>
                            <td>{{primeraMayus(getCaractBioqui.otras_caracteristicas)}}</td>
                          </tr>
                        </template>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="card-footer">
                  <small class="text-muted">
                    <b>Creada:</b>
                    {{modificarFecha(getCaractBioqui.created_at)}}
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-if="getIdentiMolecu">
      <div class="mb-3 card">
        <div class="card-header-tab card-header">
          <div
            class="card-header-title font-size-lg text-capitalize font-weight-normal"
          >Identificación Molecular</div>
          <div class="btn-actions-pane-right text-capitalize">
            <IconoMostrar @accionMostrar="mostrarOcultarCaract('identi')" />
          </div>
        </div>
        <div class="contaider mb-3 mt-3 ml-3 mr-3" v-if="mostrarIdentiMolecu">
          <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-body">
                  <div class="container">
                    <div class="row justify-content-md-center">
                      <div class="col-md-1 mt-5">
                        <h5>
                          <b>PCR</b>
                        </h5>
                      </div>
                      <div class="col-md-11">
                        <div class="table-responsive">
                          <table class="table table-striped">
                            <thead>
                              <th></th>
                              <th>Nombre</th>
                              <th>Secuencia</th>
                              <th>Producto</th>
                              <th>{{getGrupoCepa.nombre}}</th>
                            </thead>
                            <tbody>
                              <tr>
                                <th>F</th>
                                <td>{{getIdentiMolecu.nombre_forward}}</td>
                                <td>{{getIdentiMolecu.secuencia_forward}}</td>
                                <td>{{getIdentiMolecu.producto_forward}}</td>
                                <td>{{getGeneroCepa.nombre +' '+ getEspecieCepa.nombre}}</td>
                              </tr>
                              <tr>
                                <th>R</th>
                                <td>{{getIdentiMolecu.nombre_reversed}}</td>
                                <td>{{getIdentiMolecu.secuencia_reversed}}</td>
                                <td>{{getIdentiMolecu.producto_reversed}}</td>
                                <td>{{getGeneroCepa.nombre +' '+ getEspecieCepa.nombre}}</td>
                              </tr>
                              <tr>
                                <th colspan="2">Condiciones PCR</th>
                                <td colspan="3">{{getIdentiMolecu.condiciones_pcr}}</td>
                              </tr>
                              <tr>
                                <th colspan="2">BLAST</th>
                                <td colspan="3">{{getIdentiMolecu.blast}}</td>
                              </tr>
                              <tr>
                                <th colspan="2">Análisis Filogenético</th>
                                <td colspan="3">{{getIdentiMolecu.analisis_filogenetico}}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <template v-if="getIdentiMolecu.observaciones">
                          <p>
                            <b>observaciones:</b>
                            {{getIdentiMolecu.observaciones}}
                          </p>
                        </template>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-footer">
                  <small class="text-muted">
                    <b>Creada:</b>
                    {{modificarFecha(getIdentiMolecu.created_at)}}
                  </small>
                </div>
              </div>
            </div>
          </div>
          <div class="row mt-3 justify-content-center">
            <div class="col-md-5">
              <div class="card">
                <div class="card-body text-center">
                  <h5 class="card-title">Imagen Pcr</h5>
                </div>
                <div class="mb-3 ml-3 mr-3">
                  <img class="card-img-top" :src="getIdentiMolecu.imagen_pcrPublica" />
                </div>
              </div>
            </div>
            <div class="col-md-5">
              <div class="card">
                <div class="card-body text-center">
                  <h5 class="card-title">Imagen Blast</h5>
                </div>
                <div class="mb-3 ml-3 mr-3">
                  <img class="card-img-top" :src="getIdentiMolecu.imagen_blastPublica" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-if="getMetodoConser!=''">
      <div class="mb-3 card">
        <div class="card-header-tab card-header">
          <div
            class="card-header-title font-size-lg text-capitalize font-weight-normal"
          >Métodos De Conservación</div>
          <div class="btn-actions-pane-right text-capitalize">
            <IconoMostrar @accionMostrar="mostrarOcultarCaract('metodo')" />
          </div>
        </div>
        <div class="container mb-3 mt-3 ml-3 mr-3" v-if="mostrarMetodosConser">
          <div class="row">
            <div class="col-md-4">
              <div class="card p-3 mb-2" v-for="(metodo, index) in metodos.fila1" :key="index">
                <img class="card-img-top" :src="metodo.imagenPublica" />
                <div class="card-body overflow-auto">
                  <div class="table-responsive">
                    <table class="table table-striped">
                      <tbody>
                        <tr>
                          <th>Método de Conservación:</th>
                          <td>{{getInfoMetodoConserHongosById({tipo:'tipo_metodo',id:metodo.tipo_id}).nombre}}</td>
                        </tr>
                        <tr>
                          <th>Fecha:</th>
                          <td>{{modificarFecha2(metodo.fecha)}}</td>
                        </tr>
                        <template v-if="metodo.numero_replicas">
                          <tr>
                            <th>Número de Réplicas:</th>
                            <td>{{metodo.numero_replicas}}</td>
                          </tr>
                        </template>
                        <template v-if="metodo.numero_pases">
                          <tr>
                            <th>Número de Pases:</th>
                            <td>{{metodo.numero_pases}}</td>
                          </tr>
                        </template>
                        <template v-if="metodo.recuento_microgota">
                          <tr>
                            <th>Recuento Microgota:</th>
                            <td>{{metodo.recuento_microgota}}</td>
                          </tr>
                        </template>
                        <template v-if="metodo.medio_cultivo">
                          <tr>
                            <th>Medio de Cultivo:</th>
                            <td>{{metodo.medio_cultivo}}</td>
                          </tr>
                        </template>
                      </tbody>
                    </table>
                    <template v-if="metodo.observaciones">
                      <p>
                        <b>observaciones:</b>
                        {{metodo.observaciones}}
                      </p>
                    </template>
                  </div>
                </div>
                <div class="card-footer">
                  <small class="text-muted">
                    <b>Creada:</b>
                    {{modificarFecha(metodo.created_at)}}
                  </small>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card p-3 mb-2" v-for="(metodo, index) in metodos.fila2" :key="index">
                <img class="card-img-top" :src="metodo.imagenPublica" />
                <div class="card-body overflow-auto">
                  <div class="table-responsive">
                    <table class="table table-striped">
                      <tbody>
                        <tr>
                          <th>Método de Conservación:</th>
                          <td>{{getInfoMetodoConserHongosById({tipo:'tipo_metodo',id:metodo.tipo_id}).nombre}}</td>
                        </tr>
                        <tr>
                          <th>Fecha:</th>
                          <td>{{modificarFecha2(metodo.fecha)}}</td>
                        </tr>
                        <template v-if="metodo.numero_replicas">
                          <tr>
                            <th>Número de Réplicas:</th>
                            <td>{{metodo.numero_replicas}}</td>
                          </tr>
                        </template>
                        <template v-if="metodo.numero_pases">
                          <tr>
                            <th>Número de Pases:</th>
                            <td>{{metodo.numero_pases}}</td>
                          </tr>
                        </template>
                        <template v-if="metodo.recuento_microgota">
                          <tr>
                            <th>Recuento Microgota:</th>
                            <td>{{metodo.recuento_microgota}}</td>
                          </tr>
                        </template>
                        <template v-if="metodo.medio_cultivo">
                          <tr>
                            <th>Medio de Cultivo:</th>
                            <td>{{metodo.medio_cultivo}}</td>
                          </tr>
                        </template>
                      </tbody>
                    </table>
                    <template v-if="metodo.observaciones">
                      <p>
                        <b>observaciones:</b>
                        {{metodo.observaciones}}
                      </p>
                    </template>
                  </div>
                </div>
                <div class="card-footer">
                  <small class="text-muted">
                    <b>Creada:</b>
                    {{modificarFecha(metodo.created_at)}}
                  </small>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card p-3 mb-2" v-for="(metodo, index) in metodos.fila3" :key="index">
                <img class="card-img-top" :src="metodo.imagenPublica" />
                <div class="card-body overflow-auto">
                  <div class="table-responsive">
                    <table class="table table-striped">
                      <tbody>
                        <tr>
                          <th>Método de Conservación:</th>
                          <td>{{getInfoMetodoConserHongosById({tipo:'tipo_metodo',id:metodo.tipo_id}).nombre}}</td>
                        </tr>
                        <tr>
                          <th>Fecha:</th>
                          <td>{{modificarFecha2(metodo.fecha)}}</td>
                        </tr>
                        <template v-if="metodo.numero_replicas">
                          <tr>
                            <th>Número de Réplicas:</th>
                            <td>{{metodo.numero_replicas}}</td>
                          </tr>
                        </template>
                        <template v-if="metodo.numero_pases">
                          <tr>
                            <th>Número de Pases:</th>
                            <td>{{metodo.numero_pases}}</td>
                          </tr>
                        </template>
                        <template v-if="metodo.recuento_microgota">
                          <tr>
                            <th>Recuento Microgota:</th>
                            <td>{{metodo.recuento_microgota}}</td>
                          </tr>
                        </template>
                        <template v-if="metodo.medio_cultivo">
                          <tr>
                            <th>Medio de Cultivo:</th>
                            <td>{{metodo.medio_cultivo}}</td>
                          </tr>
                        </template>
                      </tbody>
                    </table>
                    <template v-if="metodo.observaciones">
                      <p>
                        <b>observaciones:</b>
                        {{metodo.observaciones}}
                      </p>
                    </template>
                  </div>
                </div>
                <div class="card-footer">
                  <small class="text-muted">
                    <b>Creada:</b>
                    {{modificarFecha(metodo.created_at)}}
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
import vuex from "vuex";
import IconoMostrar from "../IconoMostrarInfoVer.vue";
import Toastr from "../../../mixins/toastr";
moment.locale("es");
import Carousel from "../../carousel/CarouselComponent.vue";
export default {
  components: { Carousel, IconoMostrar },
  data() {
    return {
      selectImprimir: [],
      errorSelect: "",
      imagenes: {
        micro: [],
        bioqui: [],
      },
      mostrarCaractMacro: false,
      mostrarCaractMicro: false,
      mostrarCaractBioqui: false,
      mostrarIdentiMolecu: false,
      mostrarMetodosConser: false,
      metodos: {
        fila1: [],
        fila2: [],
        fila3: [],
      },
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
      "getCaractBioqui",
      "getMetodoConser",
      "getIdentiMolecu",
    ]),
    ...vuex.mapGetters("info_cepas", [
      "getGrupoCepa",
      "getGeneroCepa",
      "getEspecieCepa",
      "getOrdenCepa",
      "getClaseCepa",
      "getFamiliaCepa",
      "getPhylumCepa",
    ]),
    ...vuex.mapGetters("info_caract", [
      "getInfoCaractMacroHongosById",
      "getInfoCaractMicroHongosById",
      "getInfoMetodoConserHongosById",
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
          `La descarga puede demorar uno segundos, dependiendo de la cantidad de informacion. 
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
        case "bioqui":
          this.imagenes.bioqui.push({
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
        case "bioqui":
          this.mostrarCaractBioqui = !this.mostrarCaractBioqui;
          break;
        case "identi":
          this.mostrarIdentiMolecu = !this.mostrarIdentiMolecu;
          break;
        case "metodo":
          this.mostrarMetodosConser = !this.mostrarMetodosConser;
          break;
      }
    },
    llenarArreglosMetodos(arregloOrdenadoPorFechaDeCreacion) {
      let contador = 1;
      for (
        let index = 0;
        index < arregloOrdenadoPorFechaDeCreacion.length;
        index++
      ) {
        switch (contador) {
          case 1:
            this.metodos.fila1.push(arregloOrdenadoPorFechaDeCreacion[index]);
            contador++;
            break;
          case 2:
            this.metodos.fila2.push(arregloOrdenadoPorFechaDeCreacion[index]);
            contador++;
            break;
          case 3:
            this.metodos.fila3.push(arregloOrdenadoPorFechaDeCreacion[index]);
            contador = 1;
            break;
        }
      }
    },
  },
  created() {
    if (this.getCaractMicro) {
      this.llenarArregloImagenes(this.getCaractMicro, "micro");
    }
    if (this.getCaractBioqui) {
      this.llenarArregloImagenes(this.getCaractBioqui, "bioqui");
    }
    if (this.getMetodoConser) {
      this.llenarArreglosMetodos(
        this.getMetodoConser.sort(function (a, b) {
          if (a.created_at > b.created_at) {
            return -1;
          }
          if (a.created_at < b.created_at) {
            return 1;
          }
          return 0;
        })
      );
    }
  },
};
</script>
