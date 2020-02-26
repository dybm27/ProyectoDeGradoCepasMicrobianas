<template>
  <div>
    <div class="tabs-animation">
      <div class="mb-3 card">
        <div class="card-header-tab card-header">
          <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
            <i class="header-icon lnr-charts icon-gradient bg-happy-green"></i>
            Caracteristicas Macroscopicas
          </div>
          <div class="btn-actions-pane-right text-capitalize">
            <button
              :disabled="disabled"
              @click="abrirForm"
              class="btn-wide btn-outline-2x mr-md-2 btn btn-outline-focus btn-sm"
            >Agregar Medio</button>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <div v-if="mostrar">
              <div class="tabs-lg-alternate card-header">
                <ul class="nav nav-justified">
                  <li class="nav-item" v-if="mostrar1">
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
                  <li class="nav-item" v-if="mostrar2">
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
                  <li class="nav-item" v-if="mostrar3">
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
                </ul>
              </div>
              <div class="tab-content">
                <div class="tab-pane" v-if="mostrar1" :class="computedActive1">
                  <div class="card-body">
                    <form-carat-macro-bacteria
                      v-if="computedMostrarForm1"
                      :info="getCaractMacro[0]"
                      @agregar="agregarInfo"
                      @editar="editarInfo"
                      @eliminar="eliminarInfo"
                      :radioId1="'radioId1'"
                      :radioId2="'radioId2'"
                      :radioId3="'radioId3'"
                    ></form-carat-macro-bacteria>
                  </div>
                </div>
                <div class="tab-pane" v-if="mostrar2" :class="computedActive2">
                  <div class="card-body">
                    <form-carat-macro-bacteria
                      v-if="computedMostrarForm2"
                      :info="getCaractMacro[1]"
                      @agregar="agregarInfo"
                      @editar="editarInfo"
                      @eliminar="eliminarInfo"
                      :radioId1="'radioId4'"
                      :radioId2="'radioId5'"
                      :radioId3="'radioId6'"
                    ></form-carat-macro-bacteria>
                  </div>
                </div>
                <div class="tab-pane" v-if="mostrar3" :class="computedActive3">
                  <div class="card-body">
                    <form-carat-macro-bacteria
                      v-if="computedMostrarForm3"
                      :info="getCaractMacro[2]"
                      @agregar="agregarInfo"
                      @editar="editarInfo"
                      @eliminar="eliminarInfo"
                      :radioId1="'radioId7'"
                      :radioId2="'radioId8'"
                      :radioId3="'radioId9'"
                    ></form-carat-macro-bacteria>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-center" v-else>
              <h5 class="mt-5 mb-5">
                <span class="pr-1">
                  <b class="text-warning">NO SE HA AGREGADO NINGUN MEDIO</b>
                </span>
              </h5>
            </div>
          </div>
        </div>
        <div class="text-center d-block p-3 card-footer"></div>
      </div>
    </div>
  </div>
</template>

<script>
import vuex from "vuex";

export default {
  data() {
    return {
      medio1: "",
      medio2: "",
      medio3: "",
      active1: "active",
      active2: "",
      active3: "",
      mostrar1: false,
      mostrar2: false,
      mostrar3: false,
      mostrarForm1: true,
      mostrarForm2: false,
      mostrarForm3: false,
      disabled: false,
      mostrar: false
    };
  },
  mounted() {
    this.mostrarForms();
  },
  methods: {
    ...vuex.mapActions(["accionAgregarCaractMacroBacteria"]),
    agregarInfo(data) {
      this.accionAgregarCaractMacroBacteria(data);
    },
    editarInfo(data) {},
    eliminarInfo(data) {},
    abrirForm() {
      if (!this.mostrar1) {
        this.active1 = "active";
        this.active2 = "";
        this.active3 = "";
        this.mostrarForm1 = true;
        this.mostrarForm2 = false;
        this.mostrarForm3 = false;
        this.mostrar1 = true;
      } else if (!this.mostrar2) {
        this.active1 = "";
        this.active2 = "active";
        this.active3 = "";
        this.mostrarForm1 = false;
        this.mostrarForm2 = true;
        this.mostrarForm3 = false;
        this.mostrar2 = true;
      } else {
        this.active1 = "";
        this.active2 = "";
        this.active3 = "active";
        this.mostrarForm1 = false;
        this.mostrarForm2 = false;
        this.mostrarForm3 = true;
        this.mostrar3 = true;
        this.disabled = true;
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
    mostrarForms() {
      if (!this.getCaractMacro[0] && !this.mostrar1) {
        this.mostrar = false;
      } else {
        this.llenarForms();
        this.mostrar = true;
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
    }
  },destroyed() {
    // se ejecuta al destruir la instancia
    console.log("destroyed");
  }
};
</script>

<style scoped>
</style>