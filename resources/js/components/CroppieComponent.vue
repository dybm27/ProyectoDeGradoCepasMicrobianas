<template>
  <div>
    <div id="croppie" class="container"></div>
    <template v-if="mostrarBtn">
      <template v-if="btnAprobar">
        <button class="btn btn-success" @click="resultado">Aprobar Imagen</button>
        <span class="text-danger" v-if="mostrarMensaje">Debe Aprobar la imagen</span>
      </template>
      <template v-else>
        <button class="btn btn-danger float-right" @click="cancelar">Cancelar</button>
      </template>
    </template>
  </div>
</template>

<script>
import Croppie from "croppie";
export default {
  props: ["imagen", "mostrarBtn", "zoom", "editar", "enableZoom"],
  data() {
    return {
      croppie: null,
      btnAprobar: true
    };
  },
  mounted() {
    this.crearCroppie();
  },
  methods: {
    crearCroppie() {
      let el = document.getElementById("croppie");
      this.croppie = new Croppie(el, {
        viewport: {
          width: 200,
          height: 200
        },
        boundary: {
          height: 300
        },
        enableZoom: this.enableZoom
      });
      this.croppie.bind({
        url: this.imagen,
        zoom: this.zoom
      });
    },
    resultado() {
      this.croppie.result().then(res => {
        this.btnAprobar = false;
        this.$emit("cambiarValorImagen", res);
      });
    },
    cancelar() {
      this.btnAprobar = true;
      this.$emit("cambiarValorImagen", "cancelar");
    }
  },
  watch: {
    imagen() {
      if (this.imagen) {
        this.btnAprobar = true;
        this.croppie.destroy();
        this.crearCroppie();
      }
    }
  },
  computed: {
    mostrarMensaje() {
      if (this.btnAprobar && !this.editar) {
        return true;
      }
      return false;
    }
  }
};
</script>