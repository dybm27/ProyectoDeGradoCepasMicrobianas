<template>
  <div>
    <template v-if="$route.params.cepaSlug">
      <ul
        class="body-tabs body-tabs-layout tabs-animated body-tabs-animated nav"
      >
        <li class="nav-item">
          <router-link
            dusk="nav-caract-macro"
            :to="{ name: 'caract-macro-cepa-bacteria' }"
            role="tab"
            class="nav-link"
            active-class="active"
          >
            <span>C. Macroscópicas</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            dusk="nav-caract-micro"
            :to="{ name: 'caract-micro-cepa-bacteria' }"
            role="tab"
            class="nav-link"
            active-class="active"
          >
            <span>C. Microscópicas</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            dusk="nav-caract-bioqui"
            :to="{ name: 'caract-bioqui-cepa-bacteria' }"
            role="tab"
            class="nav-link"
            active-class="active"
          >
            <span>C. Bioquímicas</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            dusk="nav-caract-fisio"
            :to="{ name: 'caract-fisio-cepa-bacteria' }"
            role="tab"
            class="nav-link"
            active-class="active"
          >
            <span>C. Fisiológicas</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            dusk="nav-identi-molecu"
            :to="{ name: 'identi-molecu-cepa-bacteria' }"
            role="tab"
            class="nav-link"
            active-class="active"
          >
            <span>I. Molecular</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            :to="{ name: 'metodo-conser-cepa-bacteria' }"
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
      <ul
        class="body-tabs body-tabs-layout tabs-animated body-tabs-animated nav"
      >
        <li class="nav-item">
          <router-link
            :to="{ name: 'caract-macro-bacteria' }"
            role="tab"
            class="nav-link"
            active-class="active"
          >
            <span>C. Macroscópicas</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            :to="{ name: 'caract-micro-bacteria' }"
            role="tab"
            class="nav-link"
            active-class="active"
          >
            <span>C. Microscópicas</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            :to="{ name: 'caract-bioqui-bacteria' }"
            role="tab"
            class="nav-link"
            active-class="active"
          >
            <span>C. Bioquímicas</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            :to="{ name: 'caract-fisio-bacteria' }"
            role="tab"
            class="nav-link"
            active-class="active"
          >
            <span>C. Fisiológicas</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            :to="{ name: 'identi-molecu-bacteria' }"
            role="tab"
            class="nav-link"
            active-class="active"
          >
            <span>I. Molecular</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            :to="{ name: 'metodo-conser-bacteria' }"
            role="tab"
            class="nav-link"
            active-class="active"
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
