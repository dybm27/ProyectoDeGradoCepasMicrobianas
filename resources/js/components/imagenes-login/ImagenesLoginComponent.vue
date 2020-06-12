<template>
  <div>
    <div class="app-page-title">
      <div class="page-title-wrapper">
        <div class="page-title-heading">
          <div class="page-title-icon">
            <i class="pe-7s-photo icon-gradient bg-mean-fruit"></i>
          </div>
          <div>
            Imagenes Login
            <div class="page-title-subheading opacity-10">
              <nav>
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a>
                      <i class="fa fa-home"></i>
                    </a>
                  </li>
                  <li class="breadcrumb-item">
                    <a>Imagenes</a>
                  </li>
                  <template v-if="tipo">
                    <li class="breadcrumb-item">
                      <a>{{tipo}}</a>
                    </li>
                  </template>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        <div class="page-title-actions">
          <template v-if="ocultar">
            <router-link
              v-if="validarBtn"
              class="btn-wide mb-2 mr-2 btn-hover-shine btn btn-primary btn-lg"
              :to="{name: 'imagenes-agregar'}"
            >Agregar Imagen</router-link>
          </template>
          <router-link
            v-else
            class="btn-wide mb-2 mr-2 btn-hover-shine btn btn-primary btn-lg"
            :to="{name: 'imagenes-ver'}"
          >Volver</router-link>
        </div>
      </div>
    </div>
    <router-view @rutaHijo="cambiarTipo"></router-view>
  </div>
</template>

<script>
import vuex from "vuex";
export default {
  data() {
    return { tipo: "", ruta: true };
  },
  methods: {
    ...vuex.mapActions("imagenes_login", ["obtenerImagenesLogin"]),
    cambiarTipo(ruta) {
      if (ruta.includes("ver")) {
        this.ruta = true;
        this.tipo = "Ver";
      } else {
        this.ruta = false;
        this.tipo = "Agregar";
      }
    }
  },
  computed: {
    ...vuex.mapGetters("imagenes_login", ["getImagenesLogin"]),
    ocultar() {
      return this.ruta;
    },
    validarBtn() {
      if (this.getImagenesLogin.length > 2) {
        return false;
      } else {
        return true;
      }
    }
  },
  created() {
    this.obtenerImagenesLogin();
  }
};
</script>
