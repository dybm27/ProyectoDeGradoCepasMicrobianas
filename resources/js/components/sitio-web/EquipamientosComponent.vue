<template>
  <div>
    <div class="app-page-title">
      <div class="page-title-wrapper">
        <div class="page-title-heading">
          <div class="page-title-icon">
            <i class="pe-7s-portfolio icon-gradient bg-mean-fruit"></i>
          </div>
          <div>
            Equipamientos
            <div class="page-title-subheading opacity-10">
              <nav>
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a>
                      <i class="fa fa-home"></i>
                    </a>
                  </li>
                  <li class="breadcrumb-item">
                    <a>Tabla Equipamientos</a>
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
        <div class="page-title-actions"></div>
      </div>
    </div>
    <template v-if="numPestaña==1">
      <Contenedor @cambiarTipo="cambiarTipo" />
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
import bloquearPestañasMixin from "../../mixins/bloquearPestañas";
import vuex from "vuex";
import Contenedor from "./equipamientos/ContainerComponent.vue";
export default {
  components: { Contenedor },
  data() {
    return { tipo: "" };
  },
  mixins: [bloquearPestañasMixin("equipamiento")],
  methods: {
    ...vuex.mapActions("equipamientos", [
      "obtenerEquipamientos",
      "accionEquipamiento"
    ]),
    cambiarTipo(tipo) {
      if (tipo === "agregar") {
        this.tipo = "Agregar";
      } else if (tipo === "editar") {
        this.tipo = "Editar";
      } else {
        this.tipo = "";
      }
    }
  },
  created() {
    this.$emit("rutaSider", window.location.pathname);
    this.obtenerEquipamientos();
    window.Echo.channel("equipamiento").listen("EquipamientoEvent", e => {
      this.accionEquipamiento({ tipo: e.tipo, data: e.equipamiento });
      this.$events.fire(
        e.equipamiento.id + "-actualizarPublicarEquipamiento",
        e.equipamiento.publicar
      );
      this.$events.fire("actualizartablaEquipamiento");
    });
  }
};
</script>
