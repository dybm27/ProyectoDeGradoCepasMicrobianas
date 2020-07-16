<template>
  <div>
    <div class="app-page-title">
      <div class="page-title-wrapper">
        <div class="page-title-heading">
          <div class="page-title-icon">
            <i class="pe-7s-users icon-gradient bg-mean-fruit"></i>
          </div>
          <div>
            Administrar Usuarios
            <div class="page-title-subheading opacity-10">
              <nav>
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a>
                      <i class="fa fa-home"></i>
                    </a>
                  </li>
                  <li class="breadcrumb-item">
                    <a>Usuarios</a>
                  </li>
                  <li class="breadcrumb-item">
                    <a>{{tipo}}</a>
                  </li>
                  <template v-if="tipo2">
                    <li class="breadcrumb-item">
                      <a>{{tipo2}}</a>
                    </li>
                  </template>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        <div class="page-title-actions"></div>
      </div>
    </div>
    <template v-if="numPestaña==1">
      <router-view @rutaHijo="cambiarTipo" @cambiarTipo="cambiarTipo1"></router-view>
    </template>
    <template v-else>
      <div class="container">
        <div class="main-card mb-3 card">
          <div class="card-body">
            <div class="row justify-content-center">
              <div class="col-md-8">
                <div
                  class="alert alert-danger mt-4 text-center"
                  role="alert"
                >Ya has ingresado desde otra pestaña del navegador!!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import vuex from "vuex";
import bloquearPestañasMixin from "../../mixins/bloquearPestañas";
export default {
  data() {
    return { tipo: "", tipo2: null };
  },

  mixins: [bloquearPestañasMixin("usuario")],
  methods: {
    ...vuex.mapActions("usuarios", ["accionUsuario"]),

    cambiarTipo(ruta) {
      if (ruta.includes("seguimiento")) {
        this.tipo = "Tabla Seguimiento";
      } else {
        this.tipo = "Tabla Usuarios";
      }
    },
    cambiarTipo1(tipo) {
      if (tipo === "agregar") {
        this.tipo2 = "Agregar";
      } else if (tipo === "editar") {
        this.tipo2 = "Editar";
      } else {
        this.tipo2 = "";
      }
    }
  },
  created() {
    window.Echo.channel("usuario").listen("UsuarioEvent", e => {
      this.accionUsuario({ tipo: e.tipo, data: e.user });
      this.$events.fire("actualizartablaUsuario");
    });
  }
};
</script>
