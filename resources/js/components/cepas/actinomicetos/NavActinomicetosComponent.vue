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
          <span>C. Macroscopicas</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          :to="{name:'caract-micro-actinomiceto'}"
          active-class="active"
          role="tab"
          class="nav-link"
        >
          <span>C. Microscopicas</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          :to="{name:'identi-bioqui-actinomiceto'}"
          active-class="active"
          role="tab"
          class="nav-link"
        >
          <span>I. Bioquimica</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          :to="{name:'otras-caract-actinomiceto'}"
          active-class="active"
          role="tab"
          class="nav-link"
        >
          <span>O. Caracteristicas</span>
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
          <span>M. Conservacion</span>
        </router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>