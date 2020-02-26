<template>
  <div>
    <div class="custom-checkbox custom-control" v-if="rowData.publicar==0">
      <input
        type="checkbox"
        :id="rowData.id"
        v-model="checkPublicar"
        class="custom-control-input"
        disabled
      />
      <label class="custom-control-label" :for="rowData.id">No Publicado</label>
    </div>
    <div class="custom-checkbox custom-control" v-else>
      <input
        type="checkbox"
        :id="rowData.id"
        v-model="checkPublicar"
        class="custom-control-input"
        disabled
      />
      <label class="custom-control-label" :for="rowData.id">Publicado</label>
    </div>
  </div>
</template>

  <script>
export default {
  props: {
    rowData: {
      type: Object,
      required: true
    },
    rowIndex: {
      type: Number
    }
  },
  data() {
    return {
      publicar: true
    };
  },
  methods: {
    itemAction(action, data, index) {
      console.log("custom-actions: " + action, data.id, index);
    }
  },
  computed: {
    checkPublicar: {
      get: function() {
        if (this.rowData.publicar == 0) {
          return false;
        } else {
          return true;
        }
      },
      set: function(newValue) {
        console.log(newValue);
        if (newValue) {
          this.rowData.publicar = 1;
        } else {
          this.rowData.publicar = 0;
        }
        console.log(this.rowData.publicar);
      }
    }
  }
};
</script>