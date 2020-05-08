<template>
  <div class="tabs-animation">
    <div class="main-card mb-3 card">
      <div class="card-header-tab card-header">
        <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
          <i class="header-icon lnr-laptop-phone mr-3 text-muted opacity-6"></i>
          Tabla Dinamica Usuarios
        </div>
        <div class="btn-actions-pane-right actions-icon-btn">
          <template v-if="mostrarLinkAgregar">
            <button
              @click="agregar"
              class="btn-wide btn-outline-2x mr-md-2 btn btn-outline-focus btn-sm"
            >Agregar Usuario</button>
          </template>
          <template v-else>
            <button
              @click="cancelar"
              class="btn-wide btn-outline-2x mr-md-2 btn btn-outline-danger btn-sm"
            >Cancelar</button>
          </template>
        </div>
      </div>
      <div class="card-body">
        <router-view @cambiarVariable="cambiarVariable"></router-view>
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
      this.$router.push({ name: "agregar-usuario" });
    },
    cancelar() {
      this.variableAgregar = true;
      this.$router.go(-1);
    },
    cambiarVariable(tipo) {
      if (tipo === "agregar_editar") {
        this.variableAgregar = false;
      } else {
        this.variableAgregar = true;
      }
    }
  },
  computed: {
    mostrarLinkAgregar() {
      return this.variableAgregar;
    }
  }
};
</script>