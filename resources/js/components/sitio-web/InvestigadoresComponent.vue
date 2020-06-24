<template>
  <div>
    <div class="app-page-title">
      <div class="page-title-wrapper">
        <div class="page-title-heading">
          <div class="page-title-icon">
            <i class="pe-7s-id icon-gradient bg-mean-fruit"></i>
          </div>
          <div>
            Investigadores
            <div class="page-title-subheading opacity-10">
              <nav>
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a>
                      <i class="fa fa-home"></i>
                    </a>
                  </li>
                  <li class="breadcrumb-item">
                    <a>Tabla Investigadores</a>
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
          Tabla Dinámica Investigadores
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
              @click="abrirFormulario(0)"
              class="btn-wide btn-outline-2x mr-md-2 btn btn-outline-danger btn-sm"
            >Cancelar</button>
          </template>
        </div>
      </div>
      <div class="card-body">
        <template v-if="!formulario">
          <tabla-investigadores @cambiarTipo="cambiarTipo"></tabla-investigadores>
        </template>
        <template v-else>
          <form-investigadores
            :idInvestigador="id"
            @cambiarTipo="cambiarTipo"
            @cambiarVariableFormulario="cambiarVariableFormulario"
          ></form-investigadores>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import vuex from "vuex";
export default {
  data() {
    return { formulario: false, id: 0, tipo: "" };
  },
  methods: {
    ...vuex.mapActions("investigadores", [
      "obtenerInvestigadores",
      "accionInvestigador"
    ]),
    abrirFormulario(id) {
      if (id != 0) {
        this.id = id;
      } else {
        this.id = 0;
      }
      this.formulario = !this.formulario;
    },
    cambiarVariableFormulario() {
      this.formulario = !this.formulario;
    },
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
    this.obtenerInvestigadores();
    this.$events.$on("abrirFormularioInvestigador", e =>
      this.abrirFormulario(e)
    );
    window.Echo.channel("investigador").listen("InvestigadorEvent", e => {
      this.accionInvestigador({ tipo: e.tipo, data: e.investigador });
      this.$events.fire(
        e.investigador.id + "-actualizarPublicarInvestigador",
        e.investigador.publicar
      );
      if (!this.formulario) {
        this.$events.fire("actualizartablaInvestigador");
      }
    });
  }
};
</script>
