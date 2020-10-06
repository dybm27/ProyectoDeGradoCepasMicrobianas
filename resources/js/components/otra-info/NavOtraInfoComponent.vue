<template>
  <div>
    <ul class="body-tabs body-tabs-layout tabs-animated body-tabs-animated nav">
      <li class="nav-item">
        <router-link
          :to="{ name: 'otra-info-cepas' }"
          class="nav-link"
          active-class="active"
          dusk="nav-cepas"
          exact
        >
          <span>Cepas</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          :to="{ name: 'otra-info-bacterias' }"
          class="nav-link"
          dusk="nav-bacterias"
          active-class="active"
        >
          <span>Bacterias</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          :to="{ name: 'otra-info-hongos' }"
          class="nav-link"
          dusk="nav-hongos"
          active-class="active"
        >
          <span>Hongos</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          :to="{ name: 'otra-info-levaduras' }"
          class="nav-link"
          dusk="nav-levaduras"
          active-class="active"
        >
          <span>Levaduras</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          :to="{ name: 'otra-info-actinomicetos' }"
          class="nav-link"
          dusk="nav-actinomicetos"
          active-class="active"
        >
          <span>Actinomicetos</span>
        </router-link>
      </li>
    </ul>
    <div class="tabs-animation">
      <transition enter-active-class="slideInLeft">
        <router-view @rutaHijo="cambiarTipo"></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    cambiarTipo(tipo) {
      this.$emit("rutaHijo", tipo);
    },
  },
};
</script>