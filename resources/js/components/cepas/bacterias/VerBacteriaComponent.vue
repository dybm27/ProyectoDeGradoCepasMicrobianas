<template>
  <div class="tabs-animation">
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="card border-dark mb-3">
            <div class="card-header">Cepa Microbiana - Bacteria</div>
            <div class="card-body text-dark">
              <div class="table-responsive">
                <table class="table table-striped">
                  <tbody>
                    <tr>
                      <th>Codigo</th>
                      <td>{{getCepa.cepa.codigo}}</td>
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
                      <th>Estado</th>
                      <td>{{getCepa.cepa.estado}}</td>
                      <th>Origen</th>
                      <td>{{getCepa.cepa.origen}}</td>
                    </tr>
                    <template v-if="getCepa.cepa.otras_caract">
                      <tr>
                        <th>Otras Características:</th>
                        <td>{{getCepa.cepa.otras_caract}}</td>
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
                  <template v-if="getCaractFisio">
                    <option value="caract-fisio">Características Fisiológicas</option>
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
            <img
              :src="'/iconos/icons8-vista-general-3-35.png'"
              @click="mostrarOcultarCaract('macro')"
            />
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
                            <th>Forma:</th>
                            <td>{{getInfoCaractMacroBacteriasById({tipo:'forma',id:getCaractMacro[index].forma_id}).nombre}}</td>
                          </tr>
                          <tr>
                            <th>Borde:</th>
                            <td>{{getInfoCaractMacroBacteriasById({tipo:'borde',id:getCaractMacro[index].borde_id}).nombre}}</td>
                          </tr>
                          <tr>
                            <th>Detalle Óptico:</th>
                            <td>{{getInfoCaractMacroBacteriasById({tipo:'detalle',id:getCaractMacro[index].detalleoptico_id}).nombre}}</td>
                          </tr>
                          <tr>
                            <th>Elevación:</th>
                            <td>{{getInfoCaractMacroBacteriasById({tipo:'elevacion',id:getCaractMacro[index].elevacion_id}).nombre}}</td>
                          </tr>
                          <tr>
                            <th>Superficie:</th>
                            <td>{{getInfoCaractMacroBacteriasById({tipo:'superficie',id:getCaractMacro[index].superficie_id}).nombre}}</td>
                          </tr>
                          <tr>
                            <th>Color:</th>
                            <td>{{getInfoCaractMacroBacteriasById({tipo:'color',id:getCaractMacro[index].color_id}).nombre}}</td>
                          </tr>
                          <tr>
                            <th>Tamaño:</th>
                            <td>{{primeraMayus(getCaractMacro[index].tamano)}}</td>
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
            <img
              :src="'/iconos/icons8-vista-general-3-35.png'"
              @click="mostrarOcultarCaract('micro')"
            />
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
                          <th>Forma:</th>
                          <td>{{getInfoCaractMicroBacteriasById({tipo:'forma',id:getCaractMicro.forma_id}).nombre}}</td>
                        </tr>
                        <tr>
                          <th>Ordenamiento:</th>
                          <td>{{primeraMayus(getCaractMicro.ordenamiento)}}</td>
                        </tr>
                        <tr>
                          <th>Tinción de Gram:</th>
                          <td>{{primeraMayus(getCaractMicro.tincion_gram)}}</td>
                        </tr>
                        <tr>
                          <th>Tinción de Esporas:</th>
                          <td>{{primeraMayus(getCaractMicro.tincion_esporas)}}</td>
                        </tr>
                        <tr>
                          <th>Ubicación de la Espora:</th>
                          <template v-if="getCaractMicro.ubicacion_esporas">
                            <td>{{primeraMayus(getCaractMicro.ubicacion_esporas )}}</td>
                          </template>
                          <template v-else>
                            <td>NO APLICA</td>
                          </template>
                        </tr>
                        <tr>
                          <th>Tinción de Cápsula:</th>
                          <td>{{primeraMayus(getCaractMicro.tincion_capsula )}}</td>
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
    <template v-if="getCaractFisio">
      <div class="mb-3 card">
        <div class="card-header-tab card-header">
          <div
            class="card-header-title font-size-lg text-capitalize font-weight-normal"
          >Características Fisiológicas</div>
          <div class="btn-actions-pane-right text-capitalize">
            <img
              :src="'/iconos/icons8-vista-general-3-35.png'"
              @click="mostrarOcultarCaract('fisio')"
            />
          </div>
        </div>
        <div class="contaider mb-3 mt-3 ml-3 mr-3" v-if="mostrarCaractFisio">
          <div class="row">
            <div class="col-md-5">
              <div class="card">
                <template v-if="imagenes.fisio!=''">
                  <div class="mt-2 ml-5 mb-2 mr-5">
                    <Carousel :id="2" :imagenes="imagenes.fisio"></Carousel>
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
                          <th>Acido Indolacético:</th>
                          <td>{{primeraMayus(getCaractFisio.acido_indolacetico)}}</td>
                        </tr>
                        <tr>
                          <th>Fósforo:</th>
                          <td>{{primeraMayus(getCaractFisio.fosforo)}}</td>
                        </tr>
                        <tr>
                          <th>Sideróforos:</th>
                          <td>{{primeraMayus(getCaractFisio.sideroforos)}}</td>
                        </tr>
                        <tr>
                          <th>Nitrógeno:</th>
                          <td>{{primeraMayus(getCaractFisio.nitrogeno )}}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <template v-if="getCaractFisio.otras_caract">
                    <p>
                      <b>Otras Características:</b>
                      {{getCaractFisio.otras_caract}}
                    </p>
                  </template>
                </div>
                <div class="card-footer">
                  <small class="text-muted">
                    <b>Creada:</b>
                    {{modificarFecha(getCaractFisio.created_at)}}
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
            <img
              :src="'/iconos/icons8-vista-general-3-35.png'"
              @click="mostrarOcultarCaract('bioqui')"
            />
          </div>
        </div>
        <div class="contaider mb-3 mt-3 ml-3 mr-3" v-if="mostrarCaractBioqui">
          <div class="row">
            <div class="col-md-5">
              <div class="card">
                <template v-if="imagenes.bioqui!=''">
                  <div class="mt-2 ml-5 mb-2 mr-5">
                    <Carousel :id="3" :imagenes="imagenes.bioqui"></Carousel>
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
                          <td>{{primeraMayus(getCaractBioqui.oxidasa)}}</td>
                          <th>Catalasa:</th>
                          <td>{{primeraMayus(getCaractBioqui.catalasa)}}</td>
                        </tr>
                        <tr>
                          <th>Citrato:</th>
                          <td>{{primeraMayus(getCaractBioqui.citrato)}}</td>
                          <th>TSI:</th>
                          <td>{{primeraMayus(getCaractBioqui.tsi)}}</td>
                        </tr>
                        <tr>
                          <th>Glucosa:</th>
                          <td>{{primeraMayus(getCaractBioqui.glucosa)}}</td>
                          <th>Lactosa:</th>
                          <td>{{primeraMayus(getCaractBioqui.lactosa)}}</td>
                        </tr>
                        <tr>
                          <th>Manitol:</th>
                          <td>{{primeraMayus(getCaractBioqui.manitol)}}</td>
                          <th>Xilosa:</th>
                          <td>{{primeraMayus(getCaractBioqui.xilosa)}}</td>
                        </tr>
                        <tr>
                          <th>Arabinosa:</th>
                          <td>{{primeraMayus(getCaractBioqui.arabinosa)}}</td>
                          <th>Sacarosa:</th>
                          <td>{{primeraMayus(getCaractBioqui.sacarosa)}}</td>
                        </tr>
                        <tr>
                          <th>LIA:</th>
                          <td>{{primeraMayus(getCaractBioqui.lia)}}</td>
                          <th>SIM:</th>
                          <td>{{primeraMayus(getCaractBioqui.sim)}}</td>
                        </tr>
                        <tr>
                          <th>RM:</th>
                          <td>{{primeraMayus(getCaractBioqui.rm)}}</td>
                          <th>VP:</th>
                          <td>{{primeraMayus(getCaractBioqui.vp)}}</td>
                        </tr>
                        <tr>
                          <th>Nitrato:</th>
                          <td>{{primeraMayus(getCaractBioqui.nitrato)}}</td>
                          <th>Caldo Úrea:</th>
                          <td>{{primeraMayus(getCaractBioqui.caldo_urea)}}</td>
                        </tr>
                        <tr>
                          <th>OF:</th>
                          <td>{{primeraMayus(getCaractBioqui.of)}}</td>
                          <th>Almidón:</th>
                          <td>{{primeraMayus(getCaractBioqui.almidon)}}</td>
                        </tr>
                        <tr>
                          <th>Lecitinasa:</th>
                          <td>{{primeraMayus(getCaractBioqui.lecitinasa)}}</td>
                          <th>Lipasa:</th>
                          <td>{{primeraMayus(getCaractBioqui.lipasa)}}</td>
                        </tr>
                        <template v-if="getCaractBioqui.otros_azucares">
                          <tr>
                            <th colspan="1">Otros Azúcares:</th>
                            <td colspan="3">{{primeraMayus(getCaractBioqui.otros_azucares)}}</td>
                          </tr>
                        </template>
                        <template v-if="getCaractBioqui.otras_enzimas">
                          <tr>
                            <th colspan="1">Otros Enzimas:</th>
                            <td colspan="3">{{primeraMayus(getCaractBioqui.otras_enzimas)}}</td>
                          </tr>
                        </template>
                        <tr>
                          <th colspan="1">Hidrolisís de la Caseína:</th>
                          <td colspan="3">{{primeraMayus(getCaractBioqui.hidro_caseina)}}</td>
                        </tr>
                        <tr>
                          <th colspan="1">Hidrolisís de la Gelatina:</th>
                          <td colspan="3">{{primeraMayus(getCaractBioqui.hidro_gelatina)}}</td>
                        </tr>
                        <tr>
                          <th colspan="1">Crecimiento en Nacl:</th>
                          <td colspan="3">{{primeraMayus(getCaractBioqui.creci_nacl)}}</td>
                        </tr>
                        <tr>
                          <th colspan="1">Hidrolisís de la Úrea:</th>
                          <td colspan="3">{{primeraMayus(getCaractBioqui.hidro_urea)}}</td>
                        </tr>
                        <tr>
                          <th colspan="1">Crecimiento en Diferentes Temperaturas:</th>
                          <td colspan="3">{{primeraMayus(getCaractBioqui.creci_dif_temp)}}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <template v-if="getCaractBioqui.otras_caract">
                    <p>
                      <b>Otras Características:</b>
                      {{getCaractBioqui.otras_caract}}
                    </p>
                  </template>
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
            <img
              :src="'/iconos/icons8-vista-general-3-35.png'"
              @click="mostrarOcultarCaract('identi')"
            />
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
                                <td>{{getIdentiMolecu.secuen_forward}}</td>
                                <td>{{getIdentiMolecu.produc_forward}}</td>
                                <td>{{getGeneroCepa.nombre +' '+ getEspecieCepa.nombre}}</td>
                              </tr>
                              <tr>
                                <th>R</th>
                                <td>{{getIdentiMolecu.nombre_reversed}}</td>
                                <td>{{getIdentiMolecu.secuen_reversed}}</td>
                                <td>{{getIdentiMolecu.produc_reversed}}</td>
                                <td>{{getGeneroCepa.nombre +' '+ getEspecieCepa.nombre}}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <p>
                          <b>Informe de Secuenciación:</b>
                          {{getIdentiMolecu.obser_secuenciacion}}
                        </p>
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
                  <img class="card-img-top" :src="getIdentiMolecu.img_pcrPublica	" />
                </div>
              </div>
            </div>
            <div class="col-md-5">
              <div class="card">
                <div class="card-body text-center">
                  <h5 class="card-title">Imagen Secuenciación</h5>
                </div>
                <div class="mb-3 ml-3 mr-3">
                  <img class="card-img-top" :src="getIdentiMolecu.img_secuenPublica" />
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
            <img
              :src="'/iconos/icons8-vista-general-3-35.png'"
              @click="mostrarOcultarCaract('metodo')"
            />
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
                          <td>{{getInfoMetodoConserBacteriasById({tipo:'tipo_metodo',id:metodo.tipo_id}).nombre}}</td>
                        </tr>
                        <template v-if="metodo.tipo_id===4">
                          <tr>
                            <th>Tipo Agar:</th>
                            <td>{{getInfoMetodoConserBacteriasById({tipo:'tipo_agar',id:metodo.tipo_agar_id}).nombre}}</td>
                          </tr>
                        </template>
                        <tr>
                          <th>Fecha:</th>
                          <td>{{modificarFecha2(metodo.fecha)}}</td>
                        </tr>
                        <tr>
                          <th>Número de Réplicas:</th>
                          <td>{{metodo.numero_replicas}}</td>
                        </tr>
                        <tr>
                          <th>Recuento Microgota:</th>
                          <td>{{metodo.recuento_microgota}}</td>
                        </tr>
                      </tbody>
                    </table>
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
                          <td>{{getInfoMetodoConserBacteriasById({tipo:'tipo_metodo',id:metodo.tipo_id}).nombre}}</td>
                        </tr>
                        <template v-if="metodo.tipo_id===4">
                          <tr>
                            <th>Tipo Agar:</th>
                            <td>{{getInfoMetodoConserBacteriasById({tipo:'tipo_agar',id:metodo.tipo_agar_id}).nombre}}</td>
                          </tr>
                        </template>
                        <tr>
                          <th>Fecha:</th>
                          <td>{{modificarFecha2(metodo.fecha)}}</td>
                        </tr>
                        <tr>
                          <th>Número de Réplicas:</th>
                          <td>{{metodo.numero_replicas}}</td>
                        </tr>
                        <tr>
                          <th>Recuento Microgota:</th>
                          <td>{{metodo.recuento_microgota}}</td>
                        </tr>
                      </tbody>
                    </table>
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
                          <td>{{getInfoMetodoConserBacteriasById({tipo:'tipo_metodo',id:metodo.tipo_id}).nombre}}</td>
                        </tr>
                        <template v-if="metodo.tipo_id===4">
                          <tr>
                            <th>Tipo Agar:</th>
                            <td>{{getInfoMetodoConserBacteriasById({tipo:'tipo_agar',id:metodo.tipo_agar_id}).nombre}}</td>
                          </tr>
                        </template>
                        <tr>
                          <th>Fecha:</th>
                          <td>{{modificarFecha2(metodo.fecha)}}</td>
                        </tr>
                        <tr>
                          <th>Número de Réplicas:</th>
                          <td>{{metodo.numero_replicas}}</td>
                        </tr>
                        <tr>
                          <th>Recuento Microgota:</th>
                          <td>{{metodo.recuento_microgota}}</td>
                        </tr>
                      </tbody>
                    </table>
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
moment.locale("es");
import Carousel from "../../carousel/CarouselComponent.vue";
export default {
  components: { Carousel },
  data() {
    return {
      selectImprimir: [],
      errorSelect: "",
      imagenes: {
        micro: [],
        bioqui: [],
        fisio: []
      },
      mostrarCaractMacro: false,
      mostrarCaractMicro: false,
      mostrarCaractFisio: false,
      mostrarCaractBioqui: false,
      mostrarIdentiMolecu: false,
      mostrarMetodosConser: false,
      metodos: {
        fila1: [],
        fila2: [],
        fila3: []
      },
      btnTodo: false,
      btnSeleccionado: false
    };
  },
  computed: {
    ...vuex.mapGetters("cepa", [
      "getCepa",
      "getCaractMacro",
      "getCaractMicro",
      "getCaractBioqui",
      "getCaractFisio",
      "getMetodoConser",
      "getIdentiMolecu"
    ]),
    ...vuex.mapGetters("info_cepas", [
      "getGrupoCepa",
      "getGeneroCepa",
      "getEspecieCepa"
    ]),
    ...vuex.mapGetters("info_caract", [
      "getInfoCaractMacroBacteriasById",
      "getInfoCaractMicroBacteriasById",
      "getInfoMetodoConserBacteriasById"
    ]),
    btnTodoDisabled() {
      return this.btnTodo;
    },
    btnSeleccionadoDisabled() {
      return this.btnSeleccionado;
    }
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
          "warning",
          10000
        );
        axios
          .get(`/cepa/imprimir/${this.getCepa.cepa.id}`, {
            params: { imprimir: this.selectImprimir },
            responseType: "blob"
          })
          .then(res => {
            this.toastr(
              "Descarga!!",
              "La descarga se realizo con éxito",
              "success",
              5000
            );
            this.errorSelect = "";
            this.selectImprimir = [];
            const url = window.URL.createObjectURL(new Blob([res.data]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute(
              "download",
              `Cepa-${this.getCepa.cepa.codigo}.pdf`
            );
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            this.btnTodo = false;
            this.btnSeleccionado = false;
          })
          .catch(error => {
            this.btnTodo = false;
            this.btnSeleccionado = false;
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
            isActive: active
          });
          break;
        case "bioqui":
          this.imagenes.bioqui.push({
            num: num,
            source: imagen,
            isActive: active
          });
          break;
        case "fisio":
          this.imagenes.fisio.push({
            num: num,
            source: imagen,
            isActive: active
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
        case "fisio":
          this.mostrarCaractFisio = !this.mostrarCaractFisio;
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
    }
  },
  created() {
    if (this.getCaractMicro) {
      this.llenarArregloImagenes(this.getCaractMicro, "micro");
    }
    if (this.getCaractFisio) {
      this.llenarArregloImagenes(this.getCaractFisio, "fisio");
    }
    if (this.getCaractBioqui) {
      this.llenarArregloImagenes(this.getCaractBioqui, "bioqui");
    }
    if (this.getMetodoConser) {
      this.llenarArreglosMetodos(
        this.getMetodoConser.sort(function(a, b) {
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
  }
};
</script>