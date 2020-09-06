<template>
  <div>
    <template v-if="$route.params.cepaId">
      <ul class="body-tabs body-tabs-layout tabs-animated body-tabs-animated nav">
        <li class="nav-item">
          <router-link
            :to="{name:'caract-macro-cepa-actinomiceto'}"
            role="tab"
            class="nav-link"
            active-class="active"
          >
            <span>C. Macroscópicas</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            :to="{name:'caract-micro-cepa-actinomiceto'}"
            active-class="active"
            role="tab"
            class="nav-link"
          >
            <span>C. Microscópicas</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            :to="{name:'identi-bioqui-cepa-actinomiceto'}"
            active-class="active"
            role="tab"
            class="nav-link"
          >
            <span>I. Bioquímica</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            :to="{name:'otras-caract-cepa-actinomiceto'}"
            active-class="active"
            role="tab"
            class="nav-link"
          >
            <span>O. Características</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            :to="{name:'caract-molecu-cepa-actinomiceto'}"
            active-class="active"
            role="tab"
            class="nav-link"
          >
            <span>C. Molecular</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            :to="{name:'metodo-conser-cepa-actinomiceto'}"
            active-class="active"
            role="tab"
            class="nav-link"
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
            :to="{name:'caract-macro-actinomiceto'}"
            active-class="active"
            role="tab"
            class="nav-link"
          >
            <span>C. Macroscópicas</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            :to="{name:'caract-micro-actinomiceto'}"
            active-class="active"
            role="tab"
            class="nav-link"
          >
            <span>C. Microscópicas</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            :to="{name:'identi-bioqui-actinomiceto'}"
            active-class="active"
            role="tab"
            class="nav-link"
          >
            <span>I. Bioquímica</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            :to="{name:'otras-caract-actinomiceto'}"
            active-class="active"
            role="tab"
            class="nav-link"
          >
            <span>O. Características</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            :to="{name:'caract-molecu-actinomiceto'}"
            active-class="active"
            role="tab"
            class="nav-link"
          >
            <span>C. Molecular</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            :to="{name:'metodo-conser-actinomiceto'}"
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