<template>
  <div id="modal">
    <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button>

<!-- Modal -->

    <button
      class="btn-wide mb-2 mr-2 btn-hover-shine btn btn-primary btn-lg"
      id="show-modal"
      @click="showModal = true"
    >Agregar Nueva Cepa</button>
    <transition name="modal" appear>
      <div class="modal-overlay" v-if="showModal">
        
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false
    };
  }
};
</script>

<style >
/*  {
  margin: 0%;
  padding: 0%;
  box-sizing: border-box;
}*/
.modal-overlay{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 98;
  background-color: rgba(0, 0, 0, 0.3);
}
/*
#modal {
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100wv;
  min-height: 100wv;
  overflow-x: hidden;
}
*/
</style>