<template>
  <div>
    <div class="app-page-title">
      <div class="page-title-wrapper">
        <div class="page-title-heading">
          <div class="page-title-icon">
            <i class="pe-7s-users icon-gradient bg-mean-fruit"></i>
          </div>
          <div>
            Administrar Usuarios
            <div class="page-title-subheading opacity-10">
              <nav>
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a>
                      <i class="fa fa-home"></i>
                    </a>
                  </li>
                  <li class="breadcrumb-item">
                    <a>{{tipo}}</a>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        <div class="page-title-actions"></div>
      </div>
    </div>
    <ul class="body-tabs body-tabs-layout tabs-animated body-tabs-animated nav">
      <li class="nav-item">
        <router-link :to="{name:'tabla-usuarios'}" class="nav-link" active-class="active" exact>
          <span>Tabla Usuarios</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{name:'tabla-seguimiento'}" class="nav-link" active-class="active">
          <span>Tabla de seguimiento</span>
        </router-link>
      </li>
    </ul>
    <router-view @rutaHijo="ocultarLink"></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return { tipo: "" };
  },
  methods: {
    ocultarLink(ruta) {
      if (ruta.includes("seguimiento")) {
        this.tipo = "Seguimiento";
      } else {
        this.tipo = "Usuarios";
      }
    }
  }
};
</script>
