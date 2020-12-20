<template>
  <div class="container">
    <div :id="id"></div>
    <template v-if="mostrarBtnCroppie">
      <template v-if="btnAprobar">
        <button class="btn btn-success" @click="resultado" dusk="btn-croppie">
          Aprobar Imagen
        </button>
        <em class="text-danger small" v-if="mostrarMensaje"
          >Debe Aprobar la imagen</em
        >
      </template>
      <template v-else>
        <button class="btn btn-danger float-right" @click="cancelar">
          Cancelar
        </button>
      </template>
    </template>
  </div>
</template>

<script>
import Croppie from "croppie";
export default {
  props: [
    "id",
    "imagen",
    "mostrarBtnCroppie",
    "zoom",
    "editar",
    "enableZoom",
    "boundaryHeigth",
    "viewportWidth",
  ],
  data() {
    return {
      croppie: null,
      btnAprobar: true,
    };
  },
  mounted() {
    this.crearCroppie();
  },
  methods: {
    crearCroppie() {
      let el = document.getElementById(this.id);
      this.croppie = new Croppie(el, {
        viewport: {
          width: this.viewportWidth,
          height: 200,
        },
        boundary: {
          height: this.boundaryHeigth,
        },
        enableZoom: this.enableZoom,
      });
      this.croppie.bind({
        url: this.imagen,
        zoom: this.zoom,
      });
    },
    resultado() {
      this.croppie
        .result({ type: "base64", size: "viewport", format: "jpeg" })
        .then((res) => {
          this.btnAprobar = false;
          this.$emit("cambiarValorImagen", res);
        });
    },
    cancelar() {
      this.btnAprobar = true;
      this.$emit("cambiarValorImagen", "");
    },
  },
  watch: {
    imagen() {
      if (this.imagen) {
        this.btnAprobar = true;
        this.croppie.destroy();
        this.crearCroppie();
      }
    },
  },
  computed: {
    mostrarMensaje() {
      if (this.btnAprobar && !this.editar) {
        return true;
      }
      return false;
    },
  },
};
</script>