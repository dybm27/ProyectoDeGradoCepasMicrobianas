<template>
  <div class="app-container">
    <div class="h-100">
      <div class="h-100 no-gutters row">
        <div class="d-none d-lg-block col-lg-4">
          <div class="slider-light">
            <div class="slick-slider">
              <div>
                <div
                  class="position-relative h-100 d-flex justify-content-center align-items-center bg-plum-plate"
                  tabindex="-1"
                >
                  <div
                    class="slide-img-bg"
                    style="background-image: url('assets/images/originals/city.jpg');"
                  ></div>
                  <div class="slider-content">
                    <h3>Perfect Balance</h3>
                    <p>ArchitectUI is like a dream. Some think it's too good to be true! Extensive collection of unified React Boostrap Components and Elements.</p>
                  </div>
                </div>
              </div>
              <div>
                <div
                  class="position-relative h-100 d-flex justify-content-center align-items-center bg-premium-dark"
                  tabindex="-1"
                >
                  <div
                    class="slide-img-bg"
                    style="background-image: url('assets/images/originals/citynights.jpg');"
                  ></div>
                  <div class="slider-content">
                    <h3>Scalable, Modular, Consistent</h3>
                    <p>Easily exclude the components you don't require. Lightweight, consistent Bootstrap based styles across all elements and components</p>
                  </div>
                </div>
              </div>
              <div>
                <div
                  class="position-relative h-100 d-flex justify-content-center align-items-center bg-sunny-morning"
                  tabindex="-1"
                >
                  <div
                    class="slide-img-bg"
                    style="background-image: url('assets/images/originals/citydark.jpg');"
                  ></div>
                  <div class="slider-content">
                    <h3>Complex, but lightweight</h3>
                    <p>We've included a lot of components that cover almost all use cases for any type of application.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="h-100 d-flex bg-white justify-content-center align-items-center col-md-12 col-lg-8"
        >
          <div class="mx-auto app-login-box col-sm-12 col-md-10 col-lg-9">
            <div class="app-logo"></div>
            <h4 class="mb-0">
              <span class="d-block">Welcome back,</span>
              <span>Please sign in to your account.</span>
            </h4>
            <div class="divider row"></div>
            <div>
              <form @submit.prevent="iniciarSesion">
                <div class="form-row">
                  <div class="col-md-6">
                    <div class="position-relative form-group">
                      <label for="exampleEmail" class>Email</label>
                      <input
                        id="email"
                        type="email"
                        :class="['form-control', error!='' ? 'is-invalid':'']"
                        name="email"
                        v-model="form.email"
                        placeholder="Email..."
                        required
                      />
                      <em v-if="error!='' " class="error invalid-feedback">{{error.email[0]}}</em>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <label for="password" class>Contraseña</label>
                    <div class="input-group mb-3">
                      <input
                        id="password"
                        :type="showPass===true?'text':'password'"
                        :class="['form-control', error!='' ? 'is-invalid':'']"
                        name="password"
                        placeholder="Contraseña..."
                        v-model="form.password"
                        required
                      />
                      <div class="input-group-append">
                        <span class="input-group-text">
                          <i class="fas fa-eye" v-if="showPass" @click="showPass=!showPass"></i>
                          <i class="fas fa-eye-slash" v-else @click="showPass=!showPass"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="position-relative form-check">
                  <input name="check" id="exampleCheck" type="checkbox" class="form-check-input" />
                  <label for="exampleCheck" class="form-check-label">Recuerdame</label>
                </div>
                <div class="divider row"></div>
                <div class="d-flex align-items-center">
                  <div class="ml-auto">
                    <a href="#" class="btn-lg btn btn-link">Recuperar Contraseña?</a>
                    <button class="btn btn-primary btn-lg">Ingresar</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vuex from "vuex";
export default {
  data() {
    return {
      showPass: false,
      form: {
        email: "",
        password: ""
      },
      emailError: "",
      error: [],
      btn: false
    };
  },
  methods: {
    ...vuex.mapActions(["obtenerUserAutenticado2"]),
    iniciarSesion() {
      axios.get("/sanctum/csrf-cookie").then(response => {
        axios
          .post("login", this.form)
          .then(res => {
            this.obtenerUserAutenticado2(res.data);
            this.$router.push({ name: "home" });
          })
          .catch(error => {
            if (error.response) {
              this.error = error.response.data.errors;
            }
          });
      });
    }
  }
};
</script>