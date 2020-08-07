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
              @click="$modal.show('eliminar_caract_macro_levadura')"
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
    <modal name="eliminar_caract_macro_levadura" classes="my_modal" :width="400" :height="300">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Eliminar Característica Macroscópica</h5>
          <button
            type="button"
            class="close"
            @click="$modal.hide('eliminar_caract_macro_levadura')"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>Esta segura/o de eliminar la característica?.</p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            @click="$modal.hide('eliminar_caract_macro_levadura')"
          >Cancelar</button>
          <button
            type="button"
            class="btn btn-success"
            :disabled="bloquearBtnModal"
            @click="eliminarMedio"
          >Eliminar</button>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import vuex from "vuex";
import Toastr from "../../../../mixins/toastr";
import infoCaractMacroMixin from "../../../../mixins/infoCaractMacro";
import FormCaractMacro from "../forms-caract/FormCaractMacroComponent.vue";
export default {
  components: { FormCaractMacro },
  mixins: [Toastr, infoCaractMacroMixin],
  data() {
    return {
      bloquearBtnModal: false,
    };
  },
  methods: {
    ...vuex.mapActions("cepa", [
      "accionAgregarCaract",
      "accionEditarCaract",
      "accionEliminarCaract",
    ]),
    agregarInfo(data) {
      this.accionAgregarCaract({ tipo: "macro", data: data });
      this.mostrarBtnAgregar = true;
      this.modificarForm = true;
    },
    editarInfo(data) {
      this.accionEditarCaract({ tipo: "macro", data: data });
      this.modificarForm = true;
    },
    eliminarMedio() {
      this.bloquearBtnModal = true;
      let id = 0;
      let num = 0;
      if (this.mostrarForm1) {
        id = this.getCaractMacro[0].id;
        num = 1;
      } else if (this.mostrarForm2) {
        id = this.getCaractMacro[1].id;
        num = 2;
      } else {
        id = this.getCaractMacro[2].id;
        num = 3;
      }
      axios
        .delete(`/cepas/levadura/caract-macro/${id}`)
        .then((res) => {
          this.bloquearBtnModal = false;
          this.mostrarBtnAgregar = true;
          this.modificarForm = true;
          this.$modal.hide("eliminar_caract_macro_levadura");
          this.accionEliminarCaract({ tipo: "macro", data: res.data });
          this.formatear(num);
          this.toastr(
            "Eliminar Medio",
            "Medio eliminado con exito!!",
            "success"
          );
        })
        .catch((error) => {
          if (error.response.status === 403) {
            this.$router.push("/sin-acceso");
          } else if (error.response.status === 405) {
            window.location.href = "/";
          } else {
            this.bloquearBtnModal = false;
            this.toastr("Error!!", "", "error");
          }
        });
    },
  },
  computed: {
    ...vuex.mapGetters("cepa", ["getCaractMacro"]),
  },
};
</script>