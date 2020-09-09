<template>
  <div>
    <template v-if="$route.params.cepaSlug">
      <ul class="body-tabs body-tabs-layout tabs-animated body-tabs-animated nav">
        <li class="nav-item">
          <router-link
            :to="{name:'caract-macro-cepa-hongo'}"
            role="tab"
            class="nav-link"
            active-class="active"
          >
            <span>C. Macroscópicas</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            :to="{name:'caract-micro-cepa-hongo'}"
            role="tab"
            class="nav-link"
            active-class="active"
          >
            <span>C. Microscópicas</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            :to="{name:'caract-bioqui-cepa-hongo'}"
            role="tab"
            class="nav-link"
            active-class="active"
          >
            <span>C. Bioquímicas</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            :to="{name:'identi-molecu-cepa-hongo'}"
            role="tab"
            class="nav-link"
            active-class="active"
          >
            <span>I. Molecular</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            :to="{name:'metodo-conser-cepa-hongo'}"
            role="tab"
            class="nav-link"
            active-class="active"
          >
            <span>M. Conservación</span>
          </router-link>
        </li>
      </ul>
    </template>
    <template v-else>
      <ul class="body-tabs body-tabs-layout tabs-animated body-tabs-animated nav">
        <li class="nav-item">
          <router-link
            :to="{name:'caract-macro-hongo'}"
            active-class="active"
            role="tab"
            class="nav-link"
          >
            <span>C. Macroscópicas</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            :to="{name:'caract-micro-hongo'}"
            active-class="active"
            role="tab"
            class="nav-link"
          >
            <span>C. Microscópicas</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            :to="{name:'caract-bioqui-hongo'}"
            active-class="active"
            role="tab"
            class="nav-link"
          >
            <span>C. Bioquímicas</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            :to="{name:'identi-molecu-hongo'}"
            active-class="active"
            role="tab"
            class="nav-link"
          >
            <span>I. Molecular</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            :to="{name:'metodo-conser-hongo'}"
            active-class="active"
            role="tab"
            class="nav-link"
          >
            <span>M. Conservación</span>
          </router-link>
        </li>
      </ul>
    </template>
    <transition enter-active-class="slideInLeft">
      <router-view></router-view>
    </transition>
  </div>
</template>