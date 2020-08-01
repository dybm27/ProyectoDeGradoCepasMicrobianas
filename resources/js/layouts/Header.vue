<template>
  <div class="app-header header-shadow">
    <HeaderLogo />
    <HeaderMobileMenu />
    <HeaderMenu />
    <HeaderContent />
  </div>
</template>

<script>
import HeaderContent from "./headers/Header-Content.vue";
import HeaderLogo from "./headers/HeaderLogo.vue";
import HeaderMenu from "./headers/HeaderMenu.vue";
import HeaderMobileMenu from "./headers/HeaderMobileMenu.vue";
export default {
  components: { HeaderContent, HeaderMobileMenu, HeaderMenu, HeaderLogo }
};
</script>