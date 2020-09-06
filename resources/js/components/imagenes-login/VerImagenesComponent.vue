<template>
  <div class="main-card mb-3 card">
    <div class="card-body m-3">
      <h5 class="card-title">imagenes</h5>
      <template v-if="imagenesLogin!=''">
        <div class="container">
          <div class="row justify-content-md-center">
            <div class="col-md-4 mb-3" v-for="(imagen, index) in imagenesLogin" :key="index">
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
                            class="mb-2"
                            v-tooltip="'Mostrando imagen'"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAABwklEQVQ4jc2TvWsUQRiHn9lL9s7kCBgIfpCIxCNVIhxELMRCQRCxSKGIMYKIIJYp7NPkL1CCheEIEWxCPhQs05vSztImoImSQLzczM3Ma5G9u91lNzm7/GBgmNl9eOZ9Z+C0R7UmNdk67+idASl0+ev3F6q6nl7taU0OrTxXmPn/kDFAMRfYtCZEqfT+cQmzFttAY22sANnZ2/1NWCrRV+4H4FJtRoJy0Qjq8Y+H71dTQHMscGf7JytvagwOnuXR65cAeOfAuRDhKpAEam9oEXW9AUCxrwTA7vYvNhaWaTY01bs30a4ZBxI3SR45ytrbJZy13H/1hPrBX768+0hTa+48e8CFscsYGwGtB+vzgB3DyuQ4Xz9v8mnhA7rewGrNradTnKuMtGEJQyEL2GnK6PVxJICtjU0KQcCN6XsMVYYxrgM7MnRgHUieYawpI9UxHMKZgX6GrgxHJ0jGOx/VMNPQkL6HFydGo72kWRvoJaphFtDbeCm6ijiHd0Hukb8JypDzAtLZ/7OH9w5lg+ymrEzMrhK9zfLc7ZNlFRD2IHn3MB7fW+jO1MvRULQ7lgkUa6cFde1EIEDAYSFQi119eyryD6eiyYAFcGMFAAAAAElFTkSuQmCC"
                          />
                        </template>
                        <template v-if="index===0">
                          <button
                            class="btn-icon btn-icon-only btn-shadow btn-outline-2x btn btn-outline-warning"
                            v-tooltip="'Editar Imagen'"
                            @click="editar(imagen.id)"
                            :disabled="bloquear.imagen1"
                          >
                            <i class="fas fa-pencil-alt"></i>
                          </button>
                        </template>
                        <template v-if="index===1">
                          <button
                            class="btn-icon btn-icon-only btn-shadow btn-outline-2x btn btn-outline-warning"
                            v-tooltip="'Editar Imagen'"
                            @click="editar(imagen.id)"
                            :disabled="bloquear.imagen2"
                          >
                            <i class="fas fa-pencil-alt"></i>
                          </button>
                        </template>
                        <template v-if="index===2">
                          <button
                            class="btn-icon btn-icon-only btn-shadow btn-outline-2x btn btn-outline-warning"
                            v-tooltip="'Editar Imagen'"
                            @click="editar(imagen.id)"
                            :disabled="bloquear.imagen3"
                          >
                            <i class="fas fa-pencil-alt"></i>
                          </button>
                        </template>
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
moment.locale("es");
export default {
  props: ["bloqueos"],
  data() {
    return {
      bloquear: { imagen1: false, imagen2: false, imagen3: false },
    };
  },
  computed: {
    ...vuex.mapState("imagenes_login", ["imagenesLogin"]),
  },
  methods: {
    modificarFecha(fecha) {
      return moment(fecha).fromNow();
    },
    editar(id) {
      this.$emit("editarImagen", id);
    },
    disabledBtn(id) {
      let data = this.bloqueos.find((btn) => btn.id === id);
      if (data) {
        switch (id) {
          case 1:
            this.bloquear.imagen1 = true;
            break;
          case 2:
            this.bloquear.imagen2 = true;
            break;
          case 3:
            this.bloquear.imagen3 = true;
            break;
        }
      }
    },
  },
  watch: {
    bloqueos() {
      this.bloquear.imagen1 = false;
      this.bloquear.imagen3 = false;
      this.bloquear.imagen2 = false;
      if (this.bloqueos != "") {
        this.disabledBtn(1);
        this.disabledBtn(2);
        this.disabledBtn(3);
      }
    },
  },
  created() {
    if (this.bloqueos != "") {
      this.disabledBtn(1);
      this.disabledBtn(2);
      this.disabledBtn(3);
    }
  },
};
</script>