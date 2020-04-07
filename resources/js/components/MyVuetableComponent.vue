<template>
  <div class="dataTables_wrapper dt-bootstrap4">
    <div class="row">
      <div class="col-sm-12 col-md-6">
        <div class="dataTables_length" id="example_length">
          <label>
            Buscar
            <select
              v-model.number="appendParams.per_page"
              @change="refreshDatos"
              name="example_length"
              aria-controls="example"
              class="custom-select custom-select-sm form-control form-control-sm"
            >
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select> Resultados
          </label>
        </div>
      </div>
      <div class="col-sm-12 col-md-6">
        <filter-bar></filter-bar>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <div class="table-responsive">
          <!-- :detail-row-component="detailRowComponent" @vuetable:cell-clicked="onCellClicked" -->
          <vuetable
            noDataTemplate="Datos no Disponibles"
            ref="vuetable"
            :css="css.table"
            :api-url="apiUrl"
            :fields="fields"
            pagination-path
            :sort-order="sortOrder"
            :append-params="appendParams"
            :detail-row-component="detailRowComponent"
            @vuetable:pagination-data="onPaginationData"
            @vuetable:cell-clicked="onCellClicked"
          ></vuetable>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 col-md-5">
        <vuetable-pagination-info
          :css="css.infoclass"
          info-template="Mostrando del {from} al {to} de {total} registros"
          noDataTemplate="Sin registros"
          ref="paginationInfo"
        ></vuetable-pagination-info>
      </div>
      <div class="col-sm-12 col-md-7">
        <vuetable-pagination
          class="pull-right"
          :css="css.pagination"
          ref="pagination"
          @vuetable-pagination:change-page="onChangePage"
        ></vuetable-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import accounting from "accounting";
import moment from "moment";

export default {
  name: "my-vuetable",
  components: {
    //...
  },
  props: {
    apiUrl: {
      type: String,
      required: true
    },
    fields: {
      type: Array,
      required: true
    },
    sortOrder: {
      type: Array,
      default() {
        return [];
      }
    },
    detailRowComponent: {
      type: String
    },
    refrescarTabla: {
      type: Boolean
    }
  },
  data() {
    return {
      appendParams: {
        per_page: 10,
        filter: ""
      },
      css: {
        table: {
          tableClass: "table table-striped table-bordered",
          ascendingIcon: "fas fa-angle-double-up",
          descendingIcon: "fas fa-angle-double-down",
          sortHandleIcon: "glyphicon glyphicon-menu-hamburger"
        },
        pagination: {
          wrapperClass: "pagination float-right",
          activeClass: "active",
          disabledClass: "disabled",
          pageClass: "page-item",
          linkClass: "page-link",
          paginationClass: "pagination",
          paginationInfoClass: "float-left",
          dropdownClass: "form-control",
          icons: {
            first: "fa fa-chevron-left",
            prev: "fa fa-chevron-left",
            next: "fa fa-chevron-right",
            last: "fa fa-chevron-right"
          },
          infoClass: "pull-left"
        }
      }
    };
  },
  watch: {
    refrescarTabla() {
      if (this.refrescarTabla) {
        Vue.nextTick(() => this.$refs.vuetable.refresh());
        this.$emit("cambiarVariable");
      }
    }
  },
  methods: {
    allcap(value) {
      return value.toUpperCase();
    },
    genderLabel(value) {
      return value === "M"
        ? '<span class="mb-2 mr-2 btn-icon btn-icon-only btn-shadow btn-outline-2x btn btn-outline-success"><i class="pe-7s-male"></i> Male</span>'
        : '<span class="mb-2 mr-2 btn-icon btn-icon-only btn-shadow btn-outline-2x btn btn-outline-warning"><i class="pe-7s-female"></i> Female</span>';
    },
    formatNumber(value) {
      return accounting.formatNumber(value, 2);
    },
    formatDate(value, fmt = "D MMM YYYY") {
      return value == null ? "" : moment(value, "YYYY-MM-DD").format(fmt);
    },
    onPaginationData(paginationData) {
      this.$refs.pagination.setPaginationData(paginationData);
      this.$refs.paginationInfo.setPaginationData(paginationData);
    },
    onChangePage(page) {
      this.$refs.vuetable.changePage(page);
    },
    onCellClicked(data, field, event) {
      console.log("cellClicked: ", field.name);
      this.$refs.vuetable.toggleDetailRow(data.id);
    },
    onFilterSet(filterText) {
      this.appendParams.filter = filterText;
      Vue.nextTick(() => this.$refs.vuetable.refresh());
    },
    onFilterReset() {
      delete this.appendParams.filter;
      Vue.nextTick(() => this.$refs.vuetable.refresh());
    },
    refreshDatos() {
      Vue.nextTick(() => this.$refs.vuetable.refresh());
    }
  },
  mounted() {
    this.$events.$on("filter-set", eventData => this.onFilterSet(eventData));
    this.$events.$on("filter-reset", e => this.onFilterReset());
  }
};
</script>

<style scoped>
</style>