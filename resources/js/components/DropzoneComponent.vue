<template>
  <div id="app">
    <vue-dropzone ref="myVueDropzone" id="drop1" :options="dropOptions" :useCustomSlot="true">
      <div class="card-border mb-5 mt-5 mr-5 ml-5 card card-body border-info">
        <h5 class="card-title">
          <i class="fas fa-cloud-upload-alt"></i> Arraste las imágenes
        </h5>O de click para abrir el administrador de archivos.
      </div>
    </vue-dropzone>
  </div>
</template>

<script>
import vueDropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";

export default {
  data: () => ({
    dropOptions: {
      url: "https://httpbin.org/post",
      thumbnailWidth: 150,
      maxFilesize: 0.5,
      addRemoveLinks: true
      //dictDefaultMessage: "<i class='fas fa-cloud-upload-alt'></i> Subir Imágenes"
    }
  }),
  components: {
    vueDropzone
  },
  mounted() {
    var file = { size: 123, name: "Icon", type: "image/png" };
    var url = "https://myvizo.com/img/logo_sm.png";
    this.$refs.myVueDropzone.manuallyAddFile(file, url);
  }
};
</script>
