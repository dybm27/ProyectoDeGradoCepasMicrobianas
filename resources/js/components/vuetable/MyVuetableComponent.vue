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
        <filter-bar @exportarExcel="exportarExcel" :disabled="disabledBtn" :nameGet="nameGet" />
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <div class="table-responsive">
          <vuetable
            noDataTemplate="Datos no Disponibles"
            ref="vuetable"
            :css="css.table"
            :api-url="apiUrl"
            :fields="fields"
            data-path="data"
            pagination-path
            :sort-order="sortOrder"
            :append-params="appendParams"
            :detail-row-component="detailRowComponent"
            @vuetable:pagination-data="onPaginationData"
            @vuetable:cell-clicked="onCellClicked"
            @vuetable:loaded="loaded"
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
import moment from "moment";
import Vuetable from "vuetable-2/src/components/Vuetable";
import FilterBar from "./FilterBarComponent";
import VuetablePagination from "./PaginationComponent";
import VuetablePaginationInfo from "./PaginationInfoComponent";
export default {
  name: "my-vuetable",
  components: {
    Vuetable,
    FilterBar,
    VuetablePagination,
    VuetablePaginationInfo
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
    nameGet: {
      type: String,
      required: true
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
      },
      disabledBtn: false,
      dataAnterior: []
    };
  },
  methods: {
    imagen(value) {
      return '<img width="80" heigth="80" src="' + value + '"></i>';
    },
    tipoAgar(value) {
      return value === "No" ? '<i class="fas fa-times"></i>' : value;
    },
    numeroReplicas(value) {
      return value === 0 ? '<i class="fas fa-times"></i>' : value;
    },
    recuentoMicorgota(value) {
      return value === null ? '<i class="fas fa-times"></i>' : value;
    },
    medioCultivo(value) {
      return value === null ? '<i class="fas fa-times"></i>' : value;
    },
    numeroPases(value) {
      return value === 0 ? '<i class="fas fa-times"></i>' : value;
    },
    allcap(value) {
      return value.toUpperCase();
    },
    genderLabel(value) {
      return value === "M"
        ? '<span class="mb-2 mr-2 btn-icon btn-icon-only btn-shadow btn-outline-2x btn btn-outline-success"><i class="pe-7s-male"></i> Male</span>'
        : '<span class="mb-2 mr-2 btn-icon btn-icon-only btn-shadow btn-outline-2x btn btn-outline-warning"><i class="pe-7s-female"></i> Female</span>';
    },
    formatDate(value, fmt = "D-MMM-YYYY") {
      return value == null ? "" : moment(value).format(fmt);
    },
    onPaginationData(paginationData) {
      this.$refs.pagination.setPaginationData(paginationData);
      this.$refs.paginationInfo.setPaginationData(paginationData);
    },
    onChangePage(page) {
      this.dataAnterior = this.$refs.vuetable.tableData;
      this.$refs.vuetable.changePage(page);
    },
    onCellClicked(data, field, event) {
      //console.log("cellClicked: ", field.name);
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
      this.dataAnterior = this.$refs.vuetable.tableData;
      Vue.nextTick(() => this.$refs.vuetable.refresh());
    },
    loaded() {
      if (this.$refs.vuetable.tableData.length === 0) {
        this.disabledBtn = true;
      } else {
        this.disabledBtn = false;
        this.EventosCustomActions();
        this.$events.fire("verificarBloqueos-" + this.nameGet);
      }
    },
    EventosCustomActions() {
      if (this.dataAnterior.length != 0) {
        for (let index = 0; index < this.dataAnterior.length; index++) {
          this.$events.fire(
            index + "-eliminarEventosBtns-" + this.nameGet,
            this.dataAnterior[index].id
          );
          this.$events.fire(
            index + "-eliminarEventosCheck-" + this.nameGet,
            this.dataAnterior[index].id
          );
        }
      }
      for (
        let index = 0;
        index < this.$refs.vuetable.tableData.length;
        index++
      ) {
        this.$events.fire(index + "-crearEventosBtns-" + this.nameGet);
        this.$events.fire(index + "-crearEventosCheck-" + this.nameGet);
      }
    },
    exportarExcel(tipo) {
      if (tipo === "todo") {
        axios
          .get(`/exportar/${this.nameGet}`, {
            responseType: "blob"
          })
          .then(res => {
            this.toastr(
              "Descarga!!",
              "La descarga se realizo con éxito",
              "success",
              5000
            );
            const url = window.URL.createObjectURL(new Blob([res.data]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", this.nameGet + ".xlsx");
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          })
          .catch(error => {
            if (error.response) {
            }
          });
      } else {
        let datos = this.$refs.vuetable.tableData;
        axios
          .get(`/exportar/tabla/${this.nameGet}`, {
            params: { datos: datos },
            responseType: "blob"
          })
          .then(res => {
            this.toastr(
              "Descarga!!",
              "La descarga se realizo con éxito",
              "success",
              5000
            );
            const url = window.URL.createObjectURL(new Blob([res.data]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", this.nameGet + ".xlsx");
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          })
          .catch(error => {
            if (error.response) {
            }
          });
      }
    },
    toastr(titulo, msg, tipo, time) {
      this.$toastr.Add({
        title: titulo,
        msg: msg,
        position: "toast-top-right",
        type: tipo,
        timeout: time,
        progressbar: true,
        //progressBarValue:"", // if you want set progressbar value
        style: {},
        classNames: ["animated", "zoomInUp"],
        closeOnHover: true,
        clickClose: true,
        onCreated: () => {},
        onClicked: () => {},
        onClosed: () => {},
        onMouseOver: () => {},
        onMouseOut: () => {}
      });
    }
  },
  mounted() {
    this.$events.$on(this.nameGet + "-filter-set", eventData =>
      this.onFilterSet(eventData)
    );
    this.$events.$on(this.nameGet + "-filter-reset", e => this.onFilterReset());
  },
  destroyed() {
    this.$events.off(this.nameGet + "-filter-set");
    this.$events.off(this.nameGet + "-filter-reset");
  }
};
</script>