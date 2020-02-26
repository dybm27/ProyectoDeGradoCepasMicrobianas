<template>
  <div>
    <ul class="body-tabs body-tabs-layout tabs-animated body-tabs-animated nav"></ul>
    <div class="tabs-animation">
      <div class="main-card mb-3 card">
        <div class="card-body">
          <table
            style="width: 100%;"
            id="example"
            class="table table-hover table-striped table-bordered"
            v-if="getActinomicetos !='' && getCepas !=''"
          >
            <thead>
              <tr>
                <th>Codigo</th>
                <th>Genero</th>
                <th>Especie</th>
                <th>Reino</th>
                <th>Phylum</th>
                <th>Clase</th>
                <th>Orden</th>
                <th>Estado</th>
                <th>Origen</th>
                <th>Publicar</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(cepa,index) in getCepas" :key="index">
                <td>{{cepa.codigo}}</td>
                <td>{{cepa.gene_ro}}</td>
                <td>{{cepa.espe_cie}}</td>
                <td>{{getActinomicetos[index].rei_no}}</td>
                <td>{{getActinomicetos[index].phy_lum}}</td>
                <td>{{getActinomicetos[index].cla_se}}</td>
                <td>{{getActinomicetos[index].or_den}}</td>
                <td>{{cepa.estado}}</td>
                <td>{{cepa.origen}}</td>
                <td>
                  <div class="custom-checkbox custom-control" v-if="!getCheckboxs[index].checked">
                    <input
                      type="checkbox"
                      :id="cepa.id"
                      class="custom-control-input"
                      v-model="getCheckboxs[index].checked"
                      @click="publicar(cepa,index)"
                      disabled
                    />
                    <label class="custom-control-label" :for="cepa.id">No Publicado</label>
                  </div>
                  <div class="custom-checkbox custom-control" v-else>
                    <input
                      type="checkbox"
                      :id="cepa.id"
                      class="custom-control-input"
                      v-model="getCheckboxs[index].checked"
                      @click="publicar(cepa,index)"
                      disabled
                    />
                    <label class="custom-control-label" :for="cepa.id">Publicado</label>
                  </div>
                </td>
                <td>
                  <button
                    class="mb-2 mr-2 btn-icon btn-icon-only btn-shadow btn-outline-2x btn btn-outline-primary"
                    data-toggle="tooltip-light"
                    data-placement="top"
                    title="Ver Cepa"
                    @click="verCepa(cepa,index)"
                  >
                    <i class="lnr-eye btn-icon-wrapper"></i>
                  </button>
                  <button
                    class="mb-2 mr-2 btn-icon btn-icon-only btn-shadow btn-outline-2x btn btn-outline-warning"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Editar Cepa"
                    @click="editarCepa(cepa,index)"
                  >
                    <i class="lnr-pencil btn-icon-wrapper"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vuex from "vuex";

export default {
  data() {
    return {};
  },
  methods: {
    ...vuex.mapActions(["obtenerCepasActinomicetos", "obtenerActinomicetos"]),
    verCepa(cepa, index) {},
    editarCepa(cepa, index) {},
    publicar(cepa, index) {
      /*if (this.checkboxs[index].checked == false) {
        this.checkboxs[index].checked=true;
        console.log("No -> Si");
      } else {
        this.checkboxs[index].checked=false;
        console.log("Si -> No");
      }*/
    }
  },
  computed: {
    ...vuex.mapGetters(["getActinomicetos", "getCepas", "getCheckboxs"])
  },
  created() {
    this.obtenerCepasActinomicetos();
    this.obtenerActinomicetos();
  },
  mounted() {
    this.$emit("rutaHijo", window.location.pathname);
  }
};
</script>

<style scoped>
.centrar {
  align-content: center;
  background-color: black;
}
</style>