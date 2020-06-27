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
    <div class="main-card mb-3 card">
      <div class="card-header-tab card-header">
        <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
          <i class="header-icon lnr-laptop-phone mr-3 text-muted opacity-6"></i>
          Tabla Dinámica Equipamientos
        </div>
        <div class="btn-actions-pane-right actions-icon-btn">
          <template v-if="!formulario">
            <button
              @click="abrirFormulario(0)"
              class="btn-wide btn-outline-2x mr-md-2 btn btn-outline-success btn-sm"
            >Agregar</button>
          </template>
          <template v-else>
            <button
              @click="cerrarFormulario"
              class="btn-wide btn-outline-2x mr-md-2 btn btn-outline-danger btn-sm"
            >Cancelar</button>
          </template>
        </div>
      </div>
      <div class="card-body">
        <template v-if="!formulario">
          <tabla-equipamientos @cambiarTipo="cambiarTipo"></tabla-equipamientos>
        </template>
        <template v-else>
          <form-equipamientos
            :idEquipamiento="id"
            @cambiarTipo="cambiarTipo"
            @cambiarVariableFormulario="cambiarVariableFormulario"
          ></form-equipamientos>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import websocketsMixin from "../../mixins/websockets";
import abrirCerrarFormulario from "../../mixins/abrirCerrarFormulario";
import vuex from "vuex";
export default {
  data() {
    return { tipo: "" };
  },
  mixins: [
    websocketsMixin("Equipamiento", "equipamientos"),
    abrirCerrarFormulario("Equipamiento")
  ],
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
