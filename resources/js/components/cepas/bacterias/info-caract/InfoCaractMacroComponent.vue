<template>
  <div>
    <div class="tabs-animation">
      <div class="mb-3 card">
        <div class="card-header-tab card-header">
          <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
            <i class="header-icon lnr-charts icon-gradient bg-happy-green"></i>
            Características Macroscópicas
          </div>
          <div class="btn-actions-pane-right text-capitalize">
            <button
              v-show="mostrarBtnCancelar"
              @click="cancelar"
              class="btn-wide btn-outline-2x mr-md-2 btn btn-outline-danger btn-sm"
            >Cancelar</button>
            <button
              v-show="mostrarBtnEliminar"
              @click="eliminarMedio"
              class="btn-wide btn-outline-2x mr-md-2 btn btn-outline-danger btn-sm"
            >Eliminar Medio</button>
            <button
              v-show="mostrarBtnAgregarComputed"
              @click="abrirForm"
              class="btn-wide btn-outline-2x mr-md-2 btn btn-outline-success btn-sm"
            >Agregar Medio</button>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <template v-if="mostrarForms">
              <div class="tabs-lg-alternate card-header">
                <ul class="nav nav-justified">
                  <template v-if="mostrar1">
                    <li class="nav-item">
                      <a class="nav-link" :class="computedActive1" @click="cambiarActive(1)">
                        <div class="widget-number text-success">Medio 1</div>
                        <div class="tab-subheading">
                          <span class="pr-2 opactiy-6">
                            <i class="pe-7s-note2"></i>
                          </span>
                          {{medio1}}
                        </div>
                      </a>
                    </li>
                  </template>
                  <template v-if="mostrar2">
                    <li class="nav-item">
                      <a class="nav-link" :class="computedActive2" @click="cambiarActive(2)">
                        <div class="widget-number text-success">Medio 2</div>
                        <div class="tab-subheading">
                          <span class="pr-2 opactiy-6">
                            <i class="pe-7s-note2"></i>
                          </span>
                          {{medio2}}
                        </div>
                      </a>
                    </li>
                  </template>
                  <template v-if="mostrar3">
                    <li class="nav-item">
                      <a class="nav-link" :class="computedActive3" @click="cambiarActive(3)">
                        <div class="widget-number text-success">Medio 3</div>
                        <div class="tab-subheading">
                          <span class="pr-2 opactiy-6">
                            <i class="pe-7s-note2"></i>
                          </span>
                          {{medio3}}
                        </div>
                      </a>
                    </li>
                  </template>
                </ul>
              </div>
              <div class="tab-content">
                <template v-if="mostrar1">
                  <div class="tab-pane" :class="computedActive1">
                    <div class="card-body">
                      <template v-if="computedMostrarForm1">
                        <FormCaractMacro
                          :info="getCaractMacro[0]"
                          :modificarInfo="modificarForm"
                          @agregar="agregarInfo"
                          @editar="editarInfo"
                          @cambiarVariable="cambiarVariable"
                          :radioId1="'radioId1'"
                          :radioId2="'radioId2'"
                          :radioId3="'radioId3'"
                        ></FormCaractMacro>
                      </template>
                    </div>
                  </div>
                </template>
                <template v-if="mostrar2">
                  <div class="tab-pane" :class="computedActive2">
                    <div class="card-body">
                      <template v-if="computedMostrarForm2">
                        <FormCaractMacro
                          :info="getCaractMacro[1]"
                          :modificarInfo="modificarForm"
                          @agregar="agregarInfo"
                          @editar="editarInfo"
                          @cambiarVariable="cambiarVariable"
                          :radioId1="'radioId4'"
                          :radioId2="'radioId5'"
                          :radioId3="'radioId6'"
                        ></FormCaractMacro>
                      </template>
                    </div>
                  </div>
                </template>
                <template v-if="mostrar3">
                  <div class="tab-pane" :class="computedActive3">
                    <div class="card-body">
                      <template v-if="computedMostrarForm3">
                        <FormCaractMacro
                          :info="getCaractMacro[2]"
                          :modificarInfo="modificarForm"
                          @agregar="agregarInfo"
                          @editar="editarInfo"
                          @cambiarVariable="cambiarVariable"
                          :radioId1="'radioId7'"
                          :radioId2="'radioId8'"
                          :radioId3="'radioId9'"
                        ></FormCaractMacro>
                      </template>
                    </div>
                  </div>
                </template>
              </div>
            </template>
            <template v-else>
              <div class="text-center">
                <h5 class="mt-5 mb-5">
                  <span class="pr-1">
                    <b class="text-success">NO SE HA AGREGADO NINGÚN MEDIO</b>
                  </span>
                </h5>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
    <ModalEliminar
      @eliminar="eliminarInfo"
      :tipo="'Característica'"
      :tipoCaract="'Característica Macroscópica'"
      :caract="caract"
      :url="'bacteria/caract-macro'"
    />
  </div>
</template>

<script>
import vuex from "vuex";
import infoCaractMacroMixin from "../../../../mixins/infoCaractMacro";
import FormCaractMacro from "../forms-caract/FormCaractMacroComponent.vue";
import ModalEliminar from "../../ModalEliminarCaractComponent.vue";
export default {
  components: { FormCaractMacro, ModalEliminar },
  mixins: [infoCaractMacroMixin],
  methods: {
    ...vuex.mapActions("cepa", [
      "accionAgregarCaract",
      "accionEditarCaract",
      "accionEliminarCaract",
    ]),
  },
  computed: {
    ...vuex.mapGetters("cepa", ["getCaractMacro"]),
  },
};
</script>
