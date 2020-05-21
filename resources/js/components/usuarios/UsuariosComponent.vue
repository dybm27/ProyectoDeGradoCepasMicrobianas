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
            <div class="page-title-subheading">Agregar editar o eliminar usuarios y seguimiento</div>
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
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>
