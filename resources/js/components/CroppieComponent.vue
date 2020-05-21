<template>
  <div>
    <div id="croppie" class="container"></div>
    <template v-if="mostrarBtn">
      <button class="btn btn-success" :disabled="btnAprobar" @click="resultado">Aprobar Imagen</button>
      <span class="text-danger" v-if="mostrarMensaje">Debe Aprobar la imagen</span>
    </template>
  </div>
</template>

<script>
import Croppie from "croppie";
export default {
  props: ["imagen", "mostrarBtn", "zoom", "editar"],
  data() {
    return {
      croppie: null,
      btnAprobar: false
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
        enableOrientationboolean: true
      });
      this.croppie.bind({
        url: this.imagen,
        zoom: this.zoom
      });
    },
    resultado() {
      this.croppie.result().then(res => {
        this.btnAprobar = true;
        this.$emit("cambiarValorImagen", res);
      });
    }
  },
  watch: {
    imagen() {
      if (this.imagen) {
        this.btnAprobar = false;
        this.croppie.destroy();
        this.crearCroppie();
      }
    }
  },
  computed: {
    mostrarMensaje() {
      if (!this.btnAprobar && !this.editar) {
        return true;
      }
      return false;
    }
  }
};
</script>