<template>
  <div>
    <template v-if="posicion === 'horizontal'">
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col-md-4">
            <div class="container">
              <div id="croppie1"></div>
              <template v-if="imagenes[0]">
                <template v-if="btnAprobar1">
                  <button
                    class="btn btn-success mb-2"
                    @click="resultado(1)"
                    dusk="btn-croppie-1"
                  >
                    Aprobar Imagen
                  </button>
                  <em class="text-danger small" v-if="mostrarMensaje1"
                    >Debe Aprobar la imagen</em
                  >
                </template>
                <template v-else>
                  <button
                    class="btn btn-danger mb-2 float-right"
                    @click="cancelar(1)"
                  >
                    Cancelar
                  </button>
                </template>
              </template>
            </div>
          </div>
          <div class="col-md-4">
            <div class="container">
              <div id="croppie2"></div>
              <template v-if="imagenes[1]">
                <template v-if="btnAprobar2">
                  <button
                    class="btn btn-success mb-2"
                    @click="resultado(2)"
                    dusk="btn-croppie-2"
                  >
                    Aprobar Imagen
                  </button>
                  <em class="text-danger small" v-if="mostrarMensaje2"
                    >Debe Aprobar la imagen</em
                  >
                </template>
                <template v-else>
                  <button
                    class="btn btn-danger mb-2 float-right"
                    @click="cancelar(2)"
                  >
                    Cancelar
                  </button>
                </template>
              </template>
            </div>
          </div>
          <div class="col-md-4">
            <div class="container">
              <div id="croppie3"></div>
              <template v-if="imagenes[2]">
                <template v-if="btnAprobar3">
                  <button
                    class="btn btn-success mb-2"
                    @click="resultado(3)"
                    dusk="btn-croppie-3"
                  >
                    Aprobar Imagen
                  </button>
                  <em class="text-danger small" v-if="mostrarMensaje3"
                    >Debe Aprobar la imagen</em
                  >
                </template>
                <template v-else>
                  <button
                    class="btn btn-danger mb-2 float-right"
                    @click="cancelar(3)"
                  >
                    Cancelar
                  </button>
                </template>
              </template>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="container">
        <div class="row mt-2 ml-2 mr-2 mb-2">
          <div id="croppie1"></div>
          <template v-if="imagenes[0]">
            <div class="container">
              <div class="row d-flex">
                <template v-if="btnAprobar1">
                  <button
                    class="btn btn-success"
                    @click="resultado(1)"
                    dusk="btn-croppie-1"
                  >
                    Aprobar Imagen
                  </button>
                  <em class="text-danger small mt-2" v-if="mostrarMensaje1"
                    >Debe Aprobar la imagen</em
                  >
                </template>
                <template v-else>
                  <button class="btn btn-danger ml-auto" @click="cancelar(1)">
                    Cancelar
                  </button>
                </template>
              </div>
            </div>
          </template>
        </div>
        <div class="row mt-2 ml-2 mr-2 mb-2">
          <div id="croppie2"></div>
          <template v-if="imagenes[1]">
            <div class="container">
              <div class="row d-flex">
                <template v-if="btnAprobar2">
                  <button
                    class="btn btn-success"
                    @click="resultado(2)"
                    dusk="btn-croppie-2"
                  >
                    Aprobar Imagen
                  </button>
                  <em class="text-danger small mt-2" v-if="mostrarMensaje2"
                    >Debe Aprobar la imagen</em
                  >
                </template>
                <template v-else>
                  <button class="btn btn-danger ml-auto" @click="cancelar(2)">
                    Cancelar
                  </button>
                </template>
              </div>
            </div>
          </template>
        </div>
        <div class="row mt-2 ml-2 mr-2 mb-2">
          <div id="croppie3"></div>
          <template v-if="imagenes[2]">
            <div class="container">
              <div class="row d-flex">
                <template v-if="btnAprobar3">
                  <button
                    class="btn btn-success"
                    @click="resultado(3)"
                    dusk="btn-croppie-3"
                  >
                    Aprobar Imagen
                  </button>
                  <em class="text-danger small mt-2" v-if="mostrarMensaje3"
                    >Debe Aprobar la imagen</em
                  >
                </template>
                <template v-else>
                  <button class="btn btn-danger ml-auto" @click="cancelar(3)">
                    Cancelar
                  </button>
                </template>
              </div>
            </div>
          </template>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import Croppie from "croppie";
export default {
  props: ["imagenes", "posicion"],
  data() {
    return {
      croppie1: null,
      croppie2: null,
      croppie3: null,
      btnAprobar1: true,
      btnAprobar2: true,
      btnAprobar3: true,
    };
  },
  mounted() {
    for (let index = 0; index < this.imagenes.length; index++) {
      this.crearCroppie(index + 1, this.imagenes[index]);
    }
  },
  methods: {
    crearCroppie(index, imagen) {
      switch (index) {
        case 1:
          let el1 = document.getElementById("croppie1");
          this.croppie1 = new Croppie(el1, {
            viewport: {
              width: 200,
              height: 200,
            },
            boundary: {
              height: 250,
            },
          });
          this.croppie1.bind({
            url: imagen,
          });
          break;
        case 2:
          let el2 = document.getElementById("croppie2");
          this.croppie2 = new Croppie(el2, {
            viewport: {
              width: 200,
              height: 200,
            },
            boundary: {
              height: 250,
            },
          });
          this.croppie2.bind({
            url: imagen,
          });
          break;
        case 3:
          let el3 = document.getElementById("croppie3");
          this.croppie3 = new Croppie(el3, {
            viewport: {
              width: 200,
              height: 200,
            },
            boundary: {
              height: 250,
            },
          });
          this.croppie3.bind({
            url: imagen,
          });
          break;
      }
    },
    resultado(num) {
      switch (num) {
        case 1:
          this.croppie1.result().then((res) => {
            this.btnAprobar1 = false;
            this.$emit("cambiarValorImagen", { data: res, num: num });
          });
          break;
        case 2:
          this.croppie2.result().then((res) => {
            this.btnAprobar2 = false;
            this.$emit("cambiarValorImagen", { data: res, num: num });
          });
          break;
        case 3:
          this.croppie3.result().then((res) => {
            this.btnAprobar3 = false;
            this.$emit("cambiarValorImagen", { data: res, num: num });
          });
          break;
      }
    },
    cancelar(num) {
      switch (num) {
        case 1:
          this.btnAprobar1 = true;
          this.$emit("cambiarValorImagen", { data: "", num: num });
          break;
        case 2:
          this.btnAprobar2 = true;
          this.$emit("cambiarValorImagen", { data: "", num: num });
          break;
        case 3:
          this.btnAprobar3 = true;
          this.$emit("cambiarValorImagen", { data: "", num: num });
          break;
      }
    },
  },
  computed: {
    mostrarMensaje1() {
      if (this.btnAprobar1) {
        return true;
      }
      return false;
    },
    mostrarMensaje2() {
      if (this.btnAprobar2) {
        return true;
      }
      return false;
    },
    mostrarMensaje3() {
      if (this.btnAprobar3) {
        return true;
      }
      return false;
    },
  },
};
</script>