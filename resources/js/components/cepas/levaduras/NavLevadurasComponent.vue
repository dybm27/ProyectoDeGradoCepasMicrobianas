<template>
  <div>
    <template v-if="$route.params.cepaId">
      <ul class="body-tabs body-tabs-layout tabs-animated body-tabs-animated nav">
        <li class="nav-item">
          <router-link
            :to="{name:'caract-macro-cepa-levadura'}"
            role="tab"
            class="nav-link"
            active-class="active"
          >
            <span>C. Macroscópicas</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            :to="{name:'caract-micro-cepa-levadura'}"
            role="tab"
            class="nav-link"
            active-class="active"
          >
            <span>C. Microscópicas</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            :to="{name:'caract-bioqui-cepa-levadura'}"
            role="tab"
            class="nav-link"
            active-class="active"
          >
            <span>C. Bioquímicas</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            :to="{name:'identi-molecu-cepa-levadura'}"
            role="tab"
            class="nav-link"
            active-class="active"
          >
            <span>I. Molecular</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            :to="{name:'metodo-conser-cepa-levadura'}"
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
            :to="{name:'caract-macro-levadura'}"
            active-class="active"
            role="tab"
            class="nav-link"
          >
            <span>C. Macroscópicas</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            :to="{name:'caract-micro-levadura'}"
            active-class="active"
            role="tab"
            class="nav-link"
          >
            <span>C. Microscópicas</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            :to="{name:'caract-bioqui-levadura'}"
            active-class="active"
            role="tab"
            class="nav-link"
          >
            <span>C. Bioquímicas</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            :to="{name:'identi-molecu-levadura'}"
            active-class="active"
            role="tab"
            class="nav-link"
          >
            <span>I. Molecular</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            :to="{name:'metodo-conser-levadura'}"
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
