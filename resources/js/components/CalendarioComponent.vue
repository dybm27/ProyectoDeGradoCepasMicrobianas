<template>
  <div>
    <div class="app-page-title">
      <div class="page-title-wrapper">
        <div class="page-title-heading">
          <div class="page-title-icon">
            <i class="pe-7s-date icon-gradient bg-mean-fruit"></i>
          </div>
          <div>
            Seguimiento a los Métodos de Conservación
            <div class="page-title-subheading opacity-10">
              <nav>
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a>
                      <i class="fa fa-home"></i>
                    </a>
                  </li>
                  <li class="breadcrumb-item">
                    <a>Calendario</a>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        <div class="page-title-actions"></div>
      </div>
    </div>
    <ul class="body-tabs body-tabs-layout tabs-animated body-tabs-animated nav"></ul>
    <div class="tabs-animation">
      <template v-if="numPestaña==1">
        <div class="main-card mb-4 card">
          <div class="card-body mt-3 mr-2 ml-2">
            <div class="table-responsive">
              <!--  :themeSystem="bootstrap"-->
              <FullCalendar
                :firstDay="0"
                ref="fullCalendar"
                defaultView="dayGridMonth"
                :fixedWeekCount="false"
                :eventLimit="true"
                :googleCalendarApiKey="googleCalendarApiKey"
                :header="header"
                :eventSources="eventSources"
                :locale="locale"
                :customButtons="customButtons"
                :plugins="calendarPlugins"
                :weekends="calendarWeekends"
                :events="eventos"
                @dateClick="dateClick"
                @eventClick="eventClick"
                :eventRender="v => eventRender(v)"
              />
            </div>
          </div>
        </div>
      </template>
      <template v-else>
        <div class="container">
          <div class="main-card mb-3 card">
            <div class="card-body">
              <div class="row justify-content-center">
                <div class="col-md-8">
                  <div
                    class="alert alert-danger mt-4 text-center"
                    role="alert"
                  >Ya has ingresado desde otra pestaña del navegador!!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
    <transition name="fade">
      <modal
        name="agregar-editar_eliminar-evento"
        :maxWidth="400"
        :adaptive="true"
        height="auto"
        :scrollable="true"
      >
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">{{titulo_modal}}</h5>
            <button
              type="button"
              class="close"
              @click="$modal.hide('agregar-editar_eliminar-evento')"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="position-relative form-group">
              <label for="titulo" class>Título</label>
              <input
                name="titulo"
                id="titulo"
                placeholder="..."
                type="text"
                :class="['form-control',$v.modal.titulo.$error?'error-input-select':'']"
                v-model.trim="$v.modal.titulo.$model"
              />
              <em
                v-if="$v.modal.titulo.$error&&!$v.modal.titulo.required"
                class="text-error-input"
              >{{mensajes.required}}</em>
            </div>
            <template v-if="!diaSemana">
              <div class="form-row">
                <div class="col-md-6">
                  <template v-if="!allday">
                    <div class="container">
                      <div class="row">
                        <label for="fecha" class>Fecha</label>
                      </div>
                      <div class="row">
                        <date-picker
                          ref="datepickerFecha"
                          :lang="lang"
                          v-model.trim="$v.modal.fecha.$model"
                          :class="$v.modal.fecha.$error?'error-input-select':''"
                          type="datetime"
                          value-type="format"
                          placeholder="..."
                        ></date-picker>
                        <em
                          v-if="$v.modal.fecha.$error&&!$v.modal.fecha.required"
                          class="text-error-input"
                        >{{mensajes.required}}</em>
                      </div>
                    </div>
                  </template>
                  <template v-else>
                    <div class="container">
                      <div class="row">
                        <label for="hora" class>Hora</label>
                      </div>
                      <div class="row">
                        <date-picker
                          ref="datepickerTiempo"
                          v-model.trim="$v.modal.tiempo.$model"
                          :class="$v.modal.tiempo.$error?'error-input-select':''"
                          type="time"
                          value-type="format"
                          placeholder="..."
                        ></date-picker>
                        <em
                          v-if="$v.modal.tiempo.$error&&!$v.modal.tiempo.required"
                          class="text-error-input"
                        >{{mensajes.required}}</em>
                      </div>
                    </div>
                  </template>
                </div>
                <div class="col-md-6">
                  <div class="position-relative form-group">
                    <label for="color" class>Color</label>
                    <input
                      name="color"
                      id="color"
                      placeholder="..."
                      type="color"
                      :class="['form-control',$v.modal.color.$error?'error-input-select':'']"
                      v-model.trim="$v.modal.color.$model"
                    />
                    <em
                      v-if="$v.modal.color.$error&&!$v.modal.color.required"
                      class="text-error-input"
                    >{{mensajes.required}}</em>
                  </div>
                </div>
              </div>
            </template>
            <div class="position-relative form-group" v-else>
              <label for="color" class>Color</label>
              <input
                name="color"
                id="color"
                placeholder="..."
                type="color"
                :class="['form-control',$v.modal.color.$error?'error-input-select':'']"
                v-model.trim="$v.modal.color.$model"
              />
              <em
                v-if="$v.modal.color.$error&&!$v.modal.color.required"
                class="text-error-input"
              >{{mensajes.required}}</em>
            </div>
            <div class="position-relative form-group">
              <label for="descrpcion">Descripción</label>
              <textarea
                name="text"
                id="descrpcion"
                :class="['form-control',$v.modal.descripcion.$error?'error-input-select':'']"
                v-model.trim="$v.modal.descripcion.$model"
              ></textarea>
              <em
                v-if="$v.modal.descripcion.$error&&!$v.modal.descripcion.required"
                class="text-error-input"
              >{{mensajes.required}}</em>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-success"
              @click="metodoModal('agregar')"
              :disabled="bloquearBtnModal"
              v-if="btnAgregar"
            >Agregar</button>
            <button
              type="button"
              class="btn btn-warning"
              @click="metodoModal('editar')"
              :disabled="bloquearBtnModal"
              v-if="btnEditar"
            >Editar</button>
            <button
              type="button"
              class="btn btn-danger"
              @click="metodoModal('eliminar')"
              :disabled="bloquearBtnModal"
              v-if="btnEliminar"
            >Eliminar</button>
            <button
              type="button"
              class="btn btn-secondary"
              @click="$modal.hide('agregar-editar_eliminar-evento')"
            >Cancelar</button>
          </div>
        </div>
      </modal>
    </transition>
  </div>
</template>

<script>
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import bootstrapPlugin from "@fullcalendar/bootstrap";
import listPlugin from "@fullcalendar/list";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import esLocale from "@fullcalendar/core/locales/es";

import DatePicker from "vue2-datepicker";
import Lang from "vue2-datepicker/locale/es";
import moment from "moment";
import vuex from "vuex";

import bloquearPestañasMixin from "../mixins/bloquearPestañas";
import Toastr from "../mixins/toastr";
import { required } from "vuelidate/lib/validators";
export default {
  components: {
    FullCalendar, // make the <FullCalendar> tag available
    DatePicker,
  },
  data() {
    return {
      bootstrap: "bootstrap",
      calendarPlugins: [
        // plugins must be defined in the JS
        dayGridPlugin,
        timeGridPlugin,
        interactionPlugin,
        bootstrapPlugin,
        listPlugin,
        googleCalendarPlugin, // needed for dateClick
      ],
      calendarWeekends: true,
      googleCalendarApiKey: process.env.MIX_GOOGLE_KEY_CALENDAR,
      eventos: {
        url: "/info-panel/eventos",
        className: "eventos mostrar-cursor",
        textColor: "black",
        failure: function (error) {
          if (error.xhr.responseURL === process.env.MIX_LOGIN) {
            localStorage.setItem(
              "mensajeLogin",
              "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"
            );
            window.location.href = "/";
          }
        },
      },
      eventSources: [
        {
          googleCalendarId: "es.co#holiday@group.v.calendar.google.com",
          color: "#ff0000",
          className: "google mostrar-cursor-default",
          textColor: "black",
        },
        {
          //se debe chulear la opcion de compartir publicamente el calendario en google calendar para poder mostrarlo
          //googleCalendarId: "majumba.ufps@gmail.com"
        },
        {
          url: "/info-panel/eventos-metodos-bacterias",
          className: "eventos-metodos-bacterias mostrar-cursor-default",
          color: "#38c172",
          textColor: "black",
          failure: function (error) {
            if (error.xhr.responseURL === process.env.MIX_LOGIN) {
              localStorage.setItem(
                "mensajeLogin",
                "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"
              );
              window.location.href = "/";
            }
          },
        },
        {
          url: "/info-panel/eventos-metodos-levaduras",
          className: "eventos-metodos-levaduras mostrar-cursor-default",
          color: "#38c172",
          textColor: "black",
          failure: function (error) {
            if (error.xhr.responseURL === process.env.MIX_LOGIN) {
              localStorage.setItem(
                "mensajeLogin",
                "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"
              );
              window.location.href = "/";
            }
          },
        },
        {
          url: "/info-panel/eventos-metodos-hongos",
          className: "eventos-metodos-hongos mostrar-cursor-default",
          color: "#38c172",
          textColor: "black",
          failure: function (error) {
            if (error.xhr.responseURL === process.env.MIX_LOGIN) {
              localStorage.setItem(
                "mensajeLogin",
                "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"
              );
              window.location.href = "/";
            }
          },
        },
        {
          url: "/info-panel/eventos-actividades",
          className: "eventos-actividades mostrar-cursor-default",
          color: "#16aaff",
          textColor: "black",
          failure: function (error) {
            if (error.xhr.responseURL === process.env.MIX_LOGIN) {
              localStorage.setItem(
                "mensajeLogin",
                "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"
              );
              window.location.href = "/";
            }
          },
        },
      ],
      header: {
        left: "prevYear,prev,next,nextYear today botonAgregarEvento",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
      },
      locale: esLocale,
      customButtons: {
        botonAgregarEvento: {
          text: "Agregar Evento",
          click: () => this.abrirModal("agregar1"),
        },
      },
      modal: {
        titulo: "",
        fecha: "",
        descripcion: "",
        autor: "",
        color: "#f7b924",
        tiempo: "",
        id: "",
      },
      lang: Lang,
      errors: [],
      titulo_modal: "",
      btnAgregar: true,
      btnEditar: true,
      btnEliminar: true,
      allday: false,
      diaSemana: false,
      fechaCalendario: "",
      bloquearBtnModal: false,
      mensajes: { required: "El campo es requerido." },
    };
  },
  validations() {
    if (this.diaSemana) {
      return {
        modal: {
          titulo: { required },
          descripcion: { required },
          color: { required },
        },
      };
    } else if (this.allday) {
      return {
        modal: {
          titulo: { required },
          descripcion: { required },
          tiempo: { required },
          color: { required },
        },
      };
    } else {
      return {
        modal: {
          titulo: { required },
          descripcion: { required },
          fecha: { required },
          color: { required },
        },
      };
    }
  },
  mixins: [bloquearPestañasMixin("calendario"), Toastr],
  methods: {
    eventClick(info) {
      info.jsEvent.preventDefault();
      this.allday = false;
      this.diaSemana = false;
      if (info.event.extendedProps.autor) {
        this.modal.fecha = moment(info.event.start).format(
          "YYYY-MM-DD HH:mm:ss"
        );
        this.modal.titulo = info.event.title;
        this.modal.descripcion = info.event.extendedProps.descripcion;
        this.modal.autor = info.event.extendedProps.autor;
        this.modal.id = info.event.id;

        this.abrirModal("editar1");
      }
    },
    dateClick(info) {
      if (info.allDay) {
        this.allday = true;
        this.diaSemana = false;
      } else {
        this.allday = false;
        this.diaSemana = true;
      }
      this.fechaCalendario = info.dateStr;
      this.abrirModal("agregar2");
    },
    //ocultar o mostrar sabado y domingo
    toggleWeekends() {
      this.calendarWeekends = !this.calendarWeekends; // update a property
    },
    //ir a una fecha expecifica "2000-01-01"
    gotoPast(fecha) {
      let calendarApi = this.$refs.fullCalendar.getApi(); // from the ref="..."
      calendarApi.gotoDate(fecha); // call a method on the Calendar object
    },
    //agregar tooltip y popover
    eventRender(info) {
      if (info.event.extendedProps.codigo) {
        $(info.el).popover({
          title: function () {
            let html = `<b>Metodo de Conservación: ${info.event.title}</b>`;
            return html;
          },
          content: function () {
            let html = `<p><b>Codigo de la Cepa: </b>${info.event.extendedProps.codigo}</p>
              <p><b>Grupo Microbiano: </b>${info.event.extendedProps.grupo_microbiano} </p>
              <p><b>Genero: </b>${info.event.extendedProps.genero} </p>
              <p><b>Especie: </b>${info.event.extendedProps.especie}</p>`;
            return html;
          },
          trigger: "hover",
          placement: "left",
          html: true,
          container: "body",
        });
      } else if (info.event.extendedProps.lugar) {
        $(info.el).tooltip({
          html: true,
          title: `<b>Actividad: </b>${info.event.title}`,
        });
      } else if (!info.event.extendedProps.idAutor) {
        $(info.el).tooltip({
          title: info.event.title,
        });
      }
    },
    abrirModal(tipo) {
      this.errors = [];
      switch (tipo) {
        case "agregar1":
          this.modal.fecha = "";
          this.modal.titulo = "";
          this.modal.descripcion = "";
          this.modal.autor = "";
          this.modal.color = "#f7b924";
          this.modal.time = "";
          this.btnAgregar = true;
          this.btnEditar = false;
          this.btnEliminar = false;
          this.allday = false;
          this.diaSemana = false;
          this.titulo_modal = "Agregar Evento";
          break;
        case "agregar2":
          this.modal.titulo = "";
          this.modal.descripcion = "";
          this.modal.autor = "";
          this.modal.color = "#f7b924";
          this.modal.tiempo = "";
          this.btnAgregar = true;
          this.btnEditar = false;
          this.btnEliminar = false;
          this.titulo_modal = "Agregar Evento";
          break;
        case "editar1":
          this.btnAgregar = false;
          this.btnEditar = true;
          this.btnEliminar = true;
          this.titulo_modal = "Editar o Eliminar Evento";
          break;
      }
      this.$modal.show("agregar-editar_eliminar-evento");
    },
    metodoModal(tipo) {
      this.bloquearBtnModal = true;
      let calendarApi = this.$refs.fullCalendar.getApi();
      switch (tipo) {
        case "agregar":
          this.$v.modal.$touch();
          if (!this.$v.$invalid) {
            if (this.allday) {
              this.modal.fecha = this.fechaCalendario + " " + this.modal.tiempo;
            } else {
              if (this.diaSemana) {
                this.modal.fecha = moment(this.fechaCalendario).format(
                  "YYYY-MM-DD HH:mm:ss"
                );
              }
              this.modal.tiempo = "lo que sea";
            }
            axios
              .post("eventos/agregar", this.modal)
              .then((res) => {
                if (res.request.responseURL === process.env.MIX_LOGIN) {
                  localStorage.setItem(
                    "mensajeLogin",
                    "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"
                  );
                  window.location.href = "/";
                } else {
                  this.bloquearBtnModal = false;
                  calendarApi.refetchEvents();

                  this.toastr(
                    "Agregar Evento",
                    "El Evento fue agregado con exito!!",
                    "success"
                  );
                  this.$modal.hide("agregar-editar_eliminar-evento");
                }
              })
              .catch((error) => {
                if (
                  error.response.status === 405 ||
                  error.response.status === 401
                ) {
                  localStorage.setItem(
                    "mensajeLogin",
                    "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"
                  );
                  window.location.href = "/";
                } else {
                  this.bloquearBtnModal = false;
                  if (error.response.status === 422) {
                    this.errors = error.response.data.errors;
                  }
                }
              });
          } else {
            this.bloquearBtnModal = false;
            this.toastr(
              "Error!!",
              "Favor llenar correctamente los campos",
              "error"
            );
          }
          break;
        case "editar":
          this.$v.modal.$touch();
          if (!this.$v.$invalid) {
            axios
              .put(`eventos/editar/${this.modal.id}`, this.modal)
              .then((res) => {
                this.bloquearBtnModal = false;
                calendarApi.refetchEvents();
                this.toastr(
                  "Editar Evento",
                  "El Evento fue editado con exito!!",
                  "success"
                );
                this.$modal.hide("agregar-editar_eliminar-evento");
              })
              .catch((error) => {
                if (
                  error.response.status === 405 ||
                  error.response.status === 401
                ) {
                  localStorage.setItem(
                    "mensajeLogin",
                    "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"
                  );
                  window.location.href = "/";
                } else {
                  this.bloquearBtnModal = false;
                  if (error.response.status === 422) {
                    this.errors = error.response.data.errors;
                  }
                }
              });
          } else {
            this.bloquearBtnModal = false;
            this.toastr(
              "Error!!",
              "Favor llenar correctamente los campos",
              "error"
            );
          }
          break;
        case "eliminar":
          axios
            .delete(`eventos/eliminar/${this.modal.id}`)
            .then((res) => {
              this.bloquearBtnModal = false;
              calendarApi.refetchEvents();
              this.toastr(
                "Eliminar Evento",
                "El Evento fue eliminado con exito!!",
                "success"
              );
              this.$modal.hide("agregar-editar_eliminar-evento");
            })
            .catch((error) => {
              if (
                error.response.status === 405 ||
                error.response.status === 401
              ) {
                localStorage.setItem(
                  "mensajeLogin",
                  "Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"
                );
                window.location.href = "/";
              } else {
                this.bloquearBtnModal = false;
                if (error.response.status === 422) {
                  this.errors = error.response.data.errors;
                }
              }
            });
          break;
      }
    },
  },
  computed: {
    ...vuex.mapState(["auth"]),
    tiempo() {
      return this.modal.tiempo;
    },
    fecha() {
      return this.modal.fecha;
    },
  },
  created() {
    this.$emit("rutaSider", window.location.pathname);
    window.Echo.channel("calendario-refrescar").listen(
      "RefrescarCalendarioEvent",
      (e) => {
        if (this.$refs.fullCalendar) {
          let calendarApi = this.$refs.fullCalendar.getApi();
          calendarApi.refetchEvents();
        }
      }
    );
  },
  /**
  watch: {
    fecha() {
      this.$refs.datepickerFecha.closePopup();
    },
    tiempo() {
      this.$refs.datepickerTiempo.closePopup();
    },
  }, */
};
</script>
