<template>
  <div>
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
    <router-view></router-view>
  </div>
</template>