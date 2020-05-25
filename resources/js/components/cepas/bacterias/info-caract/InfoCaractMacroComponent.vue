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
              @click="showModal"
              class="btn-wide btn-outline-2x mr-md-2 btn btn-outline-danger btn-sm"
            >Eliminar Medio</button>
            <button
              v-show="mostrarBtnAgregarComputed"
              @click="abrirForm"
              class="btn-wide btn-outline-2x mr-md-2 btn btn-outline-focus btn-sm"
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
                        <div class="widget-number text-warning">Medio 2</div>
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
                        <div class="widget-number text-danger">Medio 3</div>
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
                        <form-carat-macro-bacteria
                          :info="getCaractMacro[0]"
                          :modificarInfo="modificarForm"
                          @agregar="agregarInfo"
                          @editar="editarInfo"
                          @cambiarVariable="cambiarVariable"
                          :radioId1="'radioId1'"
                          :radioId2="'radioId2'"
                          :radioId3="'radioId3'"
                        ></form-carat-macro-bacteria>
                      </template>
                    </div>
                  </div>
                </template>

                <template v-if="mostrar2">
                  <div class="tab-pane" :class="computedActive2">
                    <div class="card-body">
                      <template v-if="computedMostrarForm2">
                        <form-carat-macro-bacteria
                          :info="getCaractMacro[1]"
                          :modificarInfo="modificarForm"
                          @agregar="agregarInfo"
                          @editar="editarInfo"
                          @cambiarVariable="cambiarVariable"
                          :radioId1="'radioId4'"
                          :radioId2="'radioId5'"
                          :radioId3="'radioId6'"
                        ></form-carat-macro-bacteria>
                      </template>
                    </div>
                  </div>
                </template>

                <template v-if="mostrar3">
                  <div class="tab-pane" :class="computedActive3">
                    <div class="card-body">
                      <template v-if="computedMostrarForm3">
                        <form-carat-macro-bacteria
                          :info="getCaractMacro[2]"
                          :modificarInfo="modificarForm"
                          @agregar="agregarInfo"
                          @editar="editarInfo"
                          @cambiarVariable="cambiarVariable"
                          :radioId1="'radioId7'"
                          :radioId2="'radioId8'"
                          :radioId3="'radioId9'"
                        ></form-carat-macro-bacteria>
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
                    <b class="text-warning">NO SE HA AGREGADO NINGÚN MEDIO</b>
                  </span>
                </h5>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
    <modal name="my_modal" classes="my_modal" :width="400" :height="300">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Eliminar Característica Macroscópica</h5>
          <button type="button" class="close" @click="$modal.hide('my_modal')">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>Esta segura/o de eliminar la característica?.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="$modal.hide('my_modal')">Cancelar</button>
          <button type="button" class="btn btn-primary" @click="eliminarMedio">Eliminar</button>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import vuex from "vuex";

export default {
  data() {
    return {
      active1: "active",
      active2: "",
      active3: "",
      mostrar1: false,
      mostrar2: false,
      mostrar3: false,
      mostrarForm1: true,
      mostrarForm2: false,
      mostrarForm3: false,
      mostrarBtnAgregar: true,
      modificarForm: false
    };
  },
  methods: {
    ...vuex.mapActions([
      "accionAgregarCaract",
      "accionEditarCaract",
      "accionEliminarCaract"
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
        .delete(`/cepas/bacteria/caract-macro/${id}`)
        .then(res => {
          this.mostrarBtnAgregar = true;
          this.modificarForm = true;
          this.$modal.hide("my_modal");
          this.accionEliminarCaract({ tipo: "macro", data: res.data });
          this.formatear(num);
          this.toastr(
            "Eliminar Medio",
            "Medio eliminado con exito!!",
            "success"
          );
        })
        .catch(error => {
          if (error.response) {
            this.toastr("Error!!", "", "error");
          }
        });
    },

    cambiarVariable() {
      this.modificarForm = false;
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

    showModal() {
      this.$modal.show("my_modal");
    },

    cancelar() {
      if (this.mostrarForm1) {
        this.mostrarForm1 = false;
        this.mostrar1 = false;
        this.mostrarBtnAgregar = true;
      } else if (this.mostrarForm2) {
        this.mostrarForm2 = false;
        this.cambiarActive(1);
        this.mostrar2 = false;
        this.mostrarBtnAgregar = true;
      } else if (this.mostrarForm3) {
        this.mostrarForm3 = false;
        this.cambiarActive(2);
        this.mostrar3 = false;
        this.mostrarBtnAgregar = true;
      }
    },

    abrirForm() {
      if (!this.mostrar1) {
        this.cambiarActive(1);
        this.mostrar1 = true;
        this.mostrarBtnAgregar = false;
      } else if (this.getCaractMacro[0] && !this.mostrar2) {
        this.cambiarActive(2);
        this.mostrar2 = true;
        this.mostrarBtnAgregar = false;
      } else if (this.getCaractMacro[1] && !this.mostrar3) {
        this.cambiarActive(3);
        this.mostrar3 = true;
        this.mostrarBtnAgregar = false;
      }
    },

    llenarForms() {
      if (this.getCaractMacro[0]) {
        this.medio1 = this.getCaractMacro[0].medio;
        this.mostrar1 = true;
      }
      if (this.getCaractMacro[1]) {
        this.medio2 = this.getCaractMacro[1].medio;
        this.mostrar2 = true;
      }
      if (this.getCaractMacro[2]) {
        this.medio3 = this.getCaractMacro[2].medio;
        this.mostrar3 = true;
        this.mostrarBtnAgregar = false;
      }
    },

    cambiarActive(num) {
      switch (num) {
        case 1:
          this.active1 = "active";
          this.active2 = "";
          this.active3 = "";
          this.mostrarForm1 = true;
          this.mostrarForm2 = false;
          this.mostrarForm3 = false;
          break;
        case 2:
          this.active1 = "";
          this.active2 = "active";
          this.active3 = "";
          this.mostrarForm1 = false;
          this.mostrarForm2 = true;
          this.mostrarForm3 = false;
          break;
        case 3:
          this.active1 = "";
          this.active2 = "";
          this.active3 = "active";
          this.mostrarForm1 = false;
          this.mostrarForm2 = false;
          this.mostrarForm3 = true;
          break;
      }
    },

    formatear(num) {
      switch (num) {
        case 1:
          if (this.mostrar3) {
            this.mostrar3 = false;
            this.cambiarActive(2);
          } else if (this.mostrar2) {
            this.mostrar2 = false;
            this.cambiarActive(1);
          } else {
            this.mostrar1 = false;
            this.mostrarForm1 = false;
          }
          break;
        case 2:
          if (this.mostrar3) {
            this.mostrar3 = false;
            this.cambiarActive(2);
          } else {
            this.mostrar2 = false;
            this.cambiarActive(1);
          }
          break;
        case 3:
          this.mostrar3 = false;
          this.cambiarActive(2);
          break;
      }
    }
  },

  computed: {
    ...vuex.mapGetters(["getCaractMacro"]),
    computedActive1() {
      return this.active1;
    },
    computedActive2() {
      return this.active2;
    },
    computedActive3() {
      return this.active3;
    },
    computedMostrarForm1() {
      return this.mostrarForm1;
    },
    computedMostrarForm2() {
      return this.mostrarForm2;
    },
    computedMostrarForm3() {
      return this.mostrarForm3;
    },
    mostrarForms() {
      if (!this.getCaractMacro[0] && !this.mostrar1) {
        this.mostrarForm1 = false;
        return false;
      } else {
        this.llenarForms();
        return true;
      }
    },

    mostrarBtnEliminar() {
      if (this.getCaractMacro[0] && this.mostrarForm1) {
        return true;
      } else if (this.getCaractMacro[1] && this.mostrarForm2) {
        return true;
      } else if (this.getCaractMacro[2] && this.mostrarForm3) {
        return true;
      } else {
        return false;
      }
    },

    mostrarBtnCancelar() {
      if (!this.getCaractMacro[0] && this.mostrarForm1) {
        return true;
      } else if (!this.getCaractMacro[1] && this.mostrarForm2) {
        return true;
      } else if (!this.getCaractMacro[2] && this.mostrarForm3) {
        return true;
      } else {
        return false;
      }
    },

    mostrarBtnAgregarComputed() {
      return this.mostrarBtnAgregar;
    },

    medio1: {
      get() {
        if (this.getCaractMacro[0]) {
          return this.getCaractMacro[0].medio;
        }
      },
      set() {}
    },
    medio2: {
      get() {
        if (this.getCaractMacro[1]) {
          return this.getCaractMacro[1].medio;
        }
      },
      set() {}
    },
    medio3: {
      get() {
        if (this.getCaractMacro[2]) {
          return this.getCaractMacro[2].medio;
        }
      },
      set() {}
    }
  }
};
</script>
