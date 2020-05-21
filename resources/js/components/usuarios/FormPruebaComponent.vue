<template>
  <div>
    <div class="container mt-3 ml-2 mr-2">
      <div class="row justify-content-md-center">
        <div class="col-sm-6">
          <div class="main-card mb-3 card">
            <div class="card-body">
              <div class="position-relative form-group">
                <label for="nombre">Imagen</label>
                <input
                  name="nombre"
                  id="nombre"
                  placeholder="..."
                  accept="image/jpeg"
                  type="file"
                  :show-size="1024"
                  class="form-control-file"
                  @change="setupCropper"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="main-card mb-3 card">
            <div class="card-body">
              <template v-if="objectUrl">
                <div class="container">
                  <div class="row">
                    <div class="col-md-6 image-container">
                      <img ref="imagen" :src="objectUrl" class="d-block w-100" />
                      <button @click="resetCropper">reset</button>
                      <button @click="rotateLeft">Rotar izq</button>
                      <button @click="rotateRight">Rotrar der</button>
                    </div>
                    <div class="col-md-6">
                      <img ref="source" :src="previewCropped" class="d-block w-100" />
                    </div>
                  </div>
                </div>
              </template>
            </div>
          </div>
          <button @click="enviar">enviar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cropper from "cropperjs";
import debounce from "lodash/debounce";

export default {
  data() {
    return {
      imagen: "",
      cropper: null,
      objectUrl: null,
      previewCropped: null,
      selectedFile: null,
      debouncedUpdatePreview: debounce(this.updatePreview, 257)
    };
  },
  methods: {
    resetCropper() {
      this.cropper.reset();
    },
    rotateLeft() {
      this.cropper.rotate(-90);
    },
    rotateRight() {
      this.cropper.rotate(90);
    },
    setupCropper(selectedFile) {
      let file = selectedFile.target.files[0];
      this.imagen = file;
      if (this.cropper) {
        this.cropper.destroy();
      }

      if (this.objectUrl) {
        window.URL.revokeObjectURL(this.objectUrl);
      }

      if (!selectedFile) {
        this.cropper = null;
        this.objectUrl = null;
        this.previewCropped = null;
        return;
      }
      this.cargarImagen(file);
    },
    cargarImagen(file) {
      let reader = new Image();
      reader.onload = e => {
        this.objectUrl = reader.src;
        this.$nextTick(this.setupCropperInstance);
      };
      reader.src = URL.createObjectURL(file);
    },
    setupCropperInstance() {
      this.cropper = new Cropper(this.$refs.imagen, {
        aspectRatio: 2,
        crop: this.debouncedUpdatePreview
      });
    },
    updatePreview(event) {
      const canvas = this.cropper.getCroppedCanvas();
      this.previewCropped = canvas.toDataURL("image/png");
    },
    enviar() {
      const canvas = this.cropper.getCroppedCanvas();
      canvas.toBlob(blob => {
        console.log(blob);
        console.log(this.imagen);
      });
    }
  }
};
</script>

<style lang="css" scoped>
.image-container {
  display: inline-block;
}
</style>;