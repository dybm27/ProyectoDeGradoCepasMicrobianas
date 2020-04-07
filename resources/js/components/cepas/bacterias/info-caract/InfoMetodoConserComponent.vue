<template>
  <div>
    <div class="tabs-animation">
      <div class="mb-3 card">
        <div class="card-header-tab card-header">
          <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
            <i class="header-icon lnr-charts icon-gradient bg-happy-green"></i>
            Métodos de Conservación
          </div>
          <div class="btn-actions-pane-right text-capitalize">
            <template v-if="mostrarBtnAgregar">
              <button
                @click="agregar"
                class="btn-wide btn-outline-2x mr-md-2 btn btn-outline-focus btn-sm"
              >Agregar Método</button>
            </template>
            <template v-else>
              <button
                @click="cancelar"
                :to="{name:'metodo-conser-bacteria'}"
                class="btn-wide btn-outline-2x mr-md-2 btn btn-outline-danger btn-sm"
              >Cancelar</button>
            </template>
          </div>
        </div>
        <div>
          <router-view @cambiarVariable="cambiarVariable"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      variableAgregar: true
    };
  },
  methods: {
    agregar() {
      this.variableAgregar = false;
      this.$router.push({ name: "metodo-conser-bacteria-agregar" });
    },
    cancelar() {
      this.variableAgregar = true;
      this.$router.go(-1);
    },
    cambiarVariable(tipo) {
      this.variableAgregar = false;
    }
  },
  computed: {
    mostrarBtnAgregar() {
      return this.variableAgregar;
    }
  }
};
</script>


