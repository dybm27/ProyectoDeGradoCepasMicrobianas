<template>
  <div class="container">
    <template v-if="tipos!=''">
      <div class="row justify-content-md-center">
        <div class="col-md-10">
          <TablaGeneros />
        </div>
      </div>
      <div class="row justify-content-md-center">
        <div class="col-md-10">
          <TablaEspecies />
        </div>
      </div>
      <div class="row justify-content-md-center">
        <div class="col-md-10">
          <TablaOrdens />
        </div>
      </div>
      <div class="row justify-content-md-center">
        <div class="col-md-10">
          <TablaClases />
        </div>
      </div>
      <div class="row justify-content-md-center">
        <div class="col-md-10">
          <TablaPhylums />
        </div>
      </div>
      <div class="row justify-content-md-center">
        <div class="col-md-10">
          <TablaDivisions />
        </div>
      </div>
      <div class="row justify-content-md-center">
        <div class="col-md-10">
          <TablaReinos />
        </div>
      </div>
      <div class="row justify-content-md-center">
        <div class="col-md-10">
          <TablaFamilias />
        </div>
      </div>
    </template>
    <template v-else>
      <div class="row">
        <div class="col-lg-12 d-flex justify-content-center mt-5">
          <div class="loader mt-5">
            <div class="ball-spin-fade-loader mt-5">
              <div></div>
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
    </template>
    <ModalOtraInfoCepas />
  </div>
</template>

<script>
import websocketsOtraInfoMixin from "../../mixins/websocketsOtraInfo";
import ModalOtraInfoCepas from "./tablas/cepas/ModalesComponent.vue";
import TablaGeneros from "./tablas/cepas/generos/TablaGenerosComponent.vue";
import TablaEspecies from "./tablas/cepas/especies/TablaEspeciesComponent.vue";
import TablaOrdens from "./tablas/cepas/ordens/TablaOrdensComponent.vue";
import TablaClases from "./tablas/cepas/clases/TablaClasesComponent.vue";
import TablaPhylums from "./tablas/cepas/phylums/TablaPhylumsComponent.vue";
import TablaDivisions from "./tablas/cepas/divisions/TablaDivisionsComponent.vue";
import TablaReinos from "./tablas/cepas/reinos/TablaReinosComponent.vue";
import TablaFamilias from "./tablas/cepas/familias/TablaFamiliasComponent.vue";
import vuex from "vuex";
export default {
  components: {
    ModalOtraInfoCepas,
    TablaEspecies,
    TablaOrdens,
    TablaGeneros,
    TablaDivisions,
    TablaPhylums,
    TablaClases,
    TablaReinos,
    TablaFamilias,
  },
  mixins: [websocketsOtraInfoMixin("CepasInfo")],
  methods: {
    ...vuex.mapActions("info_cepas", ["obtenerTiposCepas"]),
  },
  computed: {
    ...vuex.mapState("info_cepas", ["tipos"]),
  },
  created() {
    this.obtenerTiposCepas();

    this.$events.$on("verificarBloqueos-generos", (e) =>
      this.verificarBloqueos("genero")
    );
    this.$events.$on("verificarBloqueos-especies", (e) =>
      this.verificarBloqueos("especie")
    );
    this.$events.$on("verificarBloqueos-ordens", (e) =>
      this.verificarBloqueos("orden")
    );
    this.$events.$on("verificarBloqueos-clases", (e) =>
      this.verificarBloqueos("clase")
    );
    this.$events.$on("verificarBloqueos-phylums", (e) =>
      this.verificarBloqueos("phylum")
    );
    this.$events.$on("verificarBloqueos-divisions", (e) =>
      this.verificarBloqueos("division")
    );
    this.$events.$on("verificarBloqueos-reinos", (e) =>
      this.verificarBloqueos("reino")
    );
    this.$events.$on("verificarBloqueos-familias", (e) =>
      this.verificarBloqueos("familia")
    );
  },
  destroyed() {
    this.$events.$off("verificarBloqueos-generos");
    this.$events.$off("verificarBloqueos-especies");
    this.$events.$off("verificarBloqueos-ordens");
    this.$events.$off("verificarBloqueos-clases");
    this.$events.$off("verificarBloqueos-phylums");
    this.$events.$off("verificarBloqueos-divisions");
    this.$events.$off("verificarBloqueos-reinos");
    this.$events.$off("verificarBloqueos-familias");
  },
};
</script>