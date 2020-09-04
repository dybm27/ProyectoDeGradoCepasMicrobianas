<template>
  <div class="main-card card m-3">
    <div class="card-body m-2">
      <h4 class="card-title">Modificar Permisos</h4>
      <div class="container">
        <div class="row justify-content-center m-3" v-if="!bloquearBtn">
          <div class="col-md-4">
            <button class="btn btn-success btn-block" @click="modificarPermisos">Aceptar Cambios</button>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-5 mb-2">
            <h5>Permisos Agregados</h5>
            <draggable
              class="list-group"
              v-model="permisosRol"
              v-bind="dragOptions"
              :key="permisosRol.length"
              tag="ul"
            >
              <transition-group type="transition">
                <li
                  class="list-group-item list-group-item-success"
                  v-for="(element) in permisosRol"
                  :key="element.id"
                >{{ element.nombre }}</li>
              </transition-group>
            </draggable>
          </div>
          <div class="col-md-5">
            <h5>Permisos No agregados</h5>
            <draggable
              class="list-group"
              :key="permisosRol.length"
              v-model="permisosRestantes"
              v-bind="dragOptions"
              tag="ul"
            >
              <transition-group type="transition">
                <li
                  class="list-group-item list-group-item-secondary"
                  v-for="(element) in permisosRestantes"
                  :key="element.id"
                >{{ element.nombre }}</li>
              </transition-group>
            </draggable>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vuex from "vuex";
import Toastr from "../../../mixins/toastr";
import draggable from "vuedraggable";
export default {
  components: {
    draggable,
  },
  props: ["idRol"],
  data() {
    return { permisosRol: [], permisosRestantes: [], drag: false };
  },
  mixins: [Toastr],
  computed: {
    ...vuex.mapState("usuarios", ["permisos"]),
    ...vuex.mapGetters("usuarios", ["getRolById"]),
    dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost",
      };
    },
    bloquearBtn() {
      if (this.permisosRol.length === 0) {
        return true;
      }
      return false;
    },
  },
  created() {
    this.permisosRol = this.getRolById(this.idRol).permisos;
    this.verificarPermisosRestantes();
  },
  methods: {
    ...vuex.mapActions("usuarios", ["accionModificarPermisos"]),
    verificarPermisosRestantes() {
      this.permisos.forEach((x) => {
        if (!this.permisosRol.find((y) => y.id === x.id)) {
          this.permisosRestantes.push(x);
        }
      });
    },
    modificarPermisos() {
      axios
        .put(`/rol/agregar-permisos/${this.idRol}`, {
          permisos: this.permisosRol,
        })
        .then((res) => {
          this.accionModificarPermisos(res.data);
          this.toastr(
            "Modificar Permisos",
            "Permisos modificados con exito!!",
            "success"
          );
          window.Echo.private("desbloquearBtnsRol").whisper(
            "desbloquearBtnsRol",
            {
              id: res.data.id,
            }
          );
          this.$events.fire("eliminarMiBloqueoRol", {
            id: res.data.id,
          });
          this.$emit("cambiarVariableFormulario");
        })
        .catch((error) => {
          if (error.response.status === 405 || error.response.status === 401) {
            window.location.href = "/";
          }
        });
    },
  },
};
</script>