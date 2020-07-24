<template>
  <div>
    <div class="app-page-title">
      <div class="page-title-wrapper">
        <div class="page-title-heading">
          <div class="page-title-icon">
            <i class="pe-7s-photo icon-gradient bg-mean-fruit"></i>
          </div>
          <div>
            Imagenes Login
            <div class="page-title-subheading opacity-10">
              <nav>
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a>
                      <i class="fa fa-home"></i>
                    </a>
                  </li>
                  <li class="breadcrumb-item">
                    <a>Imagenes</a>
                  </li>

                  <li class="breadcrumb-item">
                    <template v-if="from">
                      <a>Editar</a>
                    </template>
                    <template v-else>
                      <a>Ver</a>
                    </template>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        <div class="page-title-actions">
          <template v-if="from">
            <button
              class="btn-wide mb-2 mr-2 btn-hover-shine btn btn-danger btn-lg"
              @click="mostrarFrom"
            >Volver</button>
          </template>
        </div>
      </div>
    </div>
    <div class="tabs-animation">
      <template v-if="numPestaña==1">
        <template v-if="!from">
          <VerImagenes @editarImagen="editarImagen" :bloqueos="bloqueos" />
        </template>
        <template v-else>
          <Form :idImagen="idImagen" @mostrarFrom="mostrarFrom" />
        </template>
      </template>
      <template v-else>
        <div class="container">
          <div class="main-card mb-3 card">
            <div class="card-body">
              <div class="row justify-content-center">
                <div class="col-md-8">
                  <div
                    class="alert alert-danger mt-4 text-center"
                    role="alert"
                  >Ya has ingresado desde otra pestaña del navegador!!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import vuex from "vuex";
import bloquearPestañasMixin from "../../mixins/bloquearPestañas";
import VerImagenes from "./VerImagenesComponent.vue";
import Form from "./FromImagenComponent.vue";
export default {
  components: { Form, VerImagenes },
  data() {
    return {
      idImagen: 0,
      from: false,
      bloqueos: [],
      misBloqueos: [],
    };
  },
  mixins: [bloquearPestañasMixin("imagenesLogin")],
  computed: { ...vuex.mapState(["auth"]) },
  methods: {
    ...vuex.mapActions("imagenes_login", [
      "obtenerImagenesLogin",
      "accionImagenLogin",
    ]),
    editarImagen(id) {
      window.Echo.private("bloquearBtnImgLogin").whisper(
        "bloquearBtnImgLogin",
        {
          id: id,
          idUser: this.auth.id,
        }
      );
      this.$events.fire("pushMiBloqueoImgLogin", {
        id: id,
        idUser: this.auth.id,
      });
      this.idImagen = id;
      this.from = !this.from;
    },
    mostrarFrom() {
      window.Echo.private("desbloquearBtnImgLogin").whisper(
        "desbloquearBtnImgLogin",
        {
          id: this.idImagen,
        }
      );
      this.$events.fire("spliceMiBloqueoImgLogin", {
        id: this.idImagen,
      });
      this.idImagen = 0;
      this.from = !this.from;
    },
    // Bloquear Btns
    bloquearBtn(e) {
      this.bloqueos.push({ idUser: e.idUser, id: e.id });
      this.$events.fire(e.id + "-bloquearBtnImgLogin");
    },
    desbloquearBtn(e) {
      this.bloqueos.splice(
        this.bloqueos.findIndex((data) => data.id === e.id),
        1
      );
      this.$events.fire(e.id + "-desbloquearBtnImgLogin");
    },
    // guardar mis bloqueos
    pushMiBloqueo(e) {
      this.misBloqueos.push({
        idUser: e.idUser,
        id: e.id,
      });
    },
    spliceMiBloqueo(e) {
      if (e.id != 0) {
        this.misBloqueos.splice(
          this.misBloqueos.findIndex((data) => data.id === e.id),
          1
        );
      }
    },
    //borrar bloqueos
    borrarBloqueo(e) {
      let data = this.bloqueos.find((data) => data.idUser === e.id);
      if (data) {
        this.desbloquearBtn(data);
      }
    },
    // verificar bloqueos existentes
    verificarBloqueos(tipo) {
      for (let index = 0; index < this.bloqueos.length; index++) {
        this.$events.fire(this.bloqueos[index].id + "-bloquearBtnImgLogin");
      }
    },
    enviarBloqueo() {
      window.Echo.private("recibirBtnImgLogin").whisper("recibirBtnImgLogin", {
        bloqueos: this.misBloqueos,
      });
    },
  },
  mounted() {
    window.Echo.join("ImgLogin")
      .joining((data) => {
        if (this.misBloqueos.length > 0) {
          this.enviarBloqueo();
        }
      })
      .leaving((data) => {
        this.borrarBloqueo(data.user);
      });

    window.Echo.private("bloquearBtnImgLogin").listenForWhisper(
      "bloquearBtnImgLogin",
      (e) => {
        this.bloquearBtn(e);
      }
    );
    window.Echo.private("desbloquearBtnImgLogin").listenForWhisper(
      "desbloquearBtnImgLogin",
      (e) => {
        if (e.id != 0) {
          this.desbloquearBtn(e);
        }
      }
    );
  },
  created() {
    this.$emit("rutaSider", window.location.pathname);
    this.obtenerImagenesLogin();
    window.Echo.channel("imagenesLogin").listen("ImagenesLoginEvent", (e) => {
      this.accionImagenLogin({ tipo: "editar", data: e.imagen });
    });
    window.Echo.private("recibirBtnImgLogin").listenForWhisper(
      "recibirBtnImgLogin",
      (e) => {
        if (e.bloqueos.length > 0) {
          this.bloquearBtn(e.bloqueos[0]);
        }
      }
    );
    this.$events.$on("pushMiBloqueoImgLogin", (e) => {
      this.pushMiBloqueo(e);
    });
    this.$events.$on("spliceMiBloqueoImgLogin", (e) => {
      this.spliceMiBloqueo(e);
    });
  },
  destroyed() {
    this.$events.$off("pushMiBloqueoImgLogin");
    this.$events.$off("spliceMiBloqueoImgLogin");
  },
  beforeDestroy() {
    window.Echo.leave("ImgLogin");
    window.Echo.leave("recibirBtnImgLogin");
    window.Echo.leave("desbloquearBtnImgLogin");
    window.Echo.leave("bloquearBtnImgLogin");
  },
};
</script>
