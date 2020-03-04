<template>
  <div>
    <ul class="body-tabs body-tabs-layout tabs-animated body-tabs-animated nav">
      <li class="nav-item">
        <router-link
          :to="{name:'caract-macro-bacteria'}"
          role="tab"
          class="nav-link"
          active-class="active"
        >
          <span>C. Macroscópicas</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          :to="{name:'caract-micro-bacteria'}"
          role="tab"
          class="nav-link"
          active-class="active"
        >
          <span>C. Microscópicas</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          :to="{name:'caract-bioqui-bacteria'}"
          role="tab"
          class="nav-link"
          active-class="active"
        >
          <span>C. Bioquímicas</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          :to="{name:'caract-fisio-bacteria'}"
          role="tab"
          class="nav-link"
          active-class="active"
        >
          <span>C. Fisiológicas</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          :to="{name:'identi-molecu-bacteria'}"
          role="tab"
          class="nav-link"
          active-class="active"
        >
          <span>I. Molecular</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          :to="{name:'metodo-conser-bacteria'}"
          role="tab"
          class="nav-link"
          active-class="active"
        >
          <span>M. Conservación</span>
        </router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import vuex from "vuex";
export default {
  created() {
    this.obtenerInfoCaractBacterias();
  },
  methods: {
    ...vuex.mapActions(["obtenerInfoCaractBacterias"])
  }
};
</script>