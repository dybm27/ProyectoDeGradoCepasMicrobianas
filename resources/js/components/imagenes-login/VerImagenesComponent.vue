<template>
  <div class="main-card mb-3 card">
    <div class="card-body m-3">
      <h5 class="card-title">imagenes</h5>
      <template v-if="getImagenesLogin!=''">
        <div class="container">
          <div class="row justify-content-md-center">
            <div class="col-md-4" v-for="(imagen, index) in getImagenesLogin" :key="index">
              <div class="card">
                <img class="card-img-top" :src="imagen.imagenPublica" />
                <div class="card-body">
                  <h5 class="card-title">{{imagen.titulo}}</h5>
                  <p class="card-text">{{imagen.descripcion}}</p>
                </div>
                <div class="card-footer">
                  <div class="container">
                    <div class="row">
                      <div class="col-md-7">
                        <small class="text-muted">{{modificarFecha(imagen.updated_at)}}</small>
                      </div>
                      <div class="col-md-5 text-right">
                        <template v-if="imagen.mostrar===1">
                          <img
                            v-tooltip="'Mostrando imagen'"
                            :src="'/iconos/icons8-marca-de-verificación-30.png'"
                          />
                        </template>
                        <img
                          v-tooltip="'Editar Imagen'"
                          :src="'/iconos/icons8-editar-imagen-30.png'"
                          @click="editar(imagen.id)"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template v-else>
        <div class="container mt-5">
          <div class="row">
            <div class="col-lg-12 d-flex justify-content-center">
              <div class="loader mt-5">
                <div class="ball-spin-fade-loader">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <hr />
          </div>
          <div class="row">
            <hr />
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import vuex from "vuex";
import moment from "moment";
export default {
  created() {
    this.$emit("rutaHijo", window.location.pathname);
  },
  computed: {
    ...vuex.mapGetters("imagenes_login", ["getImagenesLogin"])
  },
  methods: {
    modificarFecha(fecha) {
      return moment(fecha).fromNow();
    },
    editar(id) {
      this.$emit("editarImagen", id);
    }
  }
};
</script>