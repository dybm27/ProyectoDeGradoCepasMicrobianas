!function(a){const e=a.es=a.es||{};e.dictionary=Object.assign(e.dictionary||{},{"%0 of %1":"%0 de %1","Align cell text to the bottom":"","Align cell text to the center":"","Align cell text to the left":"","Align cell text to the middle":"","Align cell text to the right":"","Align cell text to the top":"","Align center":"Centrar","Align left":"Alinear a la izquierda","Align right":"Alinear a la derecha","Align table to the left":"","Align table to the right":"",Alignment:"",Aquamarine:"Aguamarina",Background:"",Big:"Grande",Black:"Negro","Block quote":"Entrecomillado",Blue:"Azul","Blue marker":"Marcador azul",Bold:"Negrita",Border:"","Bulleted List":"Lista de puntos",Cancel:"Cancelar","Cell properties":"","Center table":"","Centered image":"Imagen centrada","Change image text alternative":"Cambiar el texto alternativo de la imagen","Choose heading":"Elegir Encabezado",Color:"","Color picker":"",Column:"Columna",Dashed:"","Decrease indent":"Disminuir sangría",Default:"Por defecto","Delete column":"Eliminar columna","Delete row":"Eliminar fila","Dim grey":"Gris Oscuro",Dimensions:"","Document colors":"Colores del documento",Dotted:"",Double:"",Downloadable:"Descargable","Dropdown toolbar":"Barra de herramientas desplegable","Edit link":"Editar enlace","Editor toolbar":"Barra de herramientas de edición","Enter image caption":"Introducir título de la imagen","Font Background Color":"Color de Fondo","Font Color":"Color de Fuente","Font Family":"Fuente","Font Size":"Tamaño de fuente","Full size image":"Imagen a tamaño completo",Green:"Verde","Green marker":"Marcador verde","Green pen":"Texto verde",Grey:"Gris",Groove:"","Header column":"Columna de encabezado","Header row":"Fila de encabezado",Heading:"Encabezado","Heading 1":"Encabezado 1","Heading 2":"Encabezado 2","Heading 3":"Encabezado 3","Heading 4":"Encabezado 4","Heading 5":"Encabezado 5","Heading 6":"Encabezado 6",Height:"",Highlight:"Resaltar","Horizontal line":"Línea horizontal","Horizontal text alignment toolbar":"",Huge:"Enorme","Image toolbar":"Barra de herramientas de imagen","image widget":"Widget de imagen","Increase indent":"Aumentar sangría","Insert column left":"Insertar columna izquierda","Insert column right":"Insertar columna derecha","Insert image":"Insertar imagen","Insert media":"Insertar contenido multimedia","Insert paragraph after block":"","Insert paragraph before block":"","Insert row above":"Insertar fila encima","Insert row below":"Insertar fila debajo","Insert table":"Insertar tabla",Inset:"",Italic:"Cursiva",Justify:"Justificar","Justify cell text":"","Left aligned image":"Imagen alineada a la izquierda","Light blue":"Azul Claro","Light green":"Verde Claro","Light grey":"Gris Claro",Link:"Enlace","Link URL":"URL del enlace","Media URL":"URL del contenido multimedia","media widget":"Widget de contenido multimedia","Merge cell down":"Combinar celda inferior","Merge cell left":"Combinar celda izquierda","Merge cell right":"Combinar celda derecha","Merge cell up":"Combinar celda superior","Merge cells":"Combinar celdas",Next:"Siguiente",None:"","Numbered List":"Lista numerada","Open in a new tab":"Abrir en una pestaña nueva ","Open link in new tab":"Abrir enlace en una pestaña nueva",Orange:"Anaranjado",Outset:"",Padding:"",Paragraph:"Párrafo","Paste the media URL in the input.":"Pega la URL del contenido multimedia","Pink marker":"Marcador rosa",Previous:"Anterior",Purple:"Morado",Red:"Rojo","Red pen":"Texto rojo",Redo:"Rehacer","Remove color":"Remover color","Remove highlight":"Quitar resaltado","Rich Text Editor":"Editor de Texto Enriquecido","Rich Text Editor, %0":"Editor de Texto Enriquecido, %0",Ridge:"","Right aligned image":"Imagen alineada a la derecha",Row:"Fila",Save:"Guardar","Select column":"","Select row":"","Show more items":"Mostrar más elementos","Side image":"Imagen lateral",Small:"Pequeño",Solid:"","Split cell horizontally":"Dividir celdas horizontalmente","Split cell vertically":"Dividir celdas verticalmente",Strikethrough:"Tachado",Style:"",Subscript:"Subíndice",Superscript:"Superíndice","Table alignment toolbar":"","Table cell text alignment":"","Table properties":"","Table toolbar":"Barra de herramientas de tabla","Text alignment":"Alineación del texto","Text alignment toolbar":"Barra de herramientas de alineación del texto","Text alternative":"Texto alternativo","Text highlight toolbar":"Barra de herramientas de resaltado de texto",'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".':"","The URL must not be empty.":"La URL no debe estar vacía",'The value is invalid. Try "10px" or "2em" or simply "2".':"","This link has no URL":"Este enlace no tiene URL","This media URL is not supported.":"La URL de este contenido multimedia no está soportada",Tiny:"Minúsculo","Tip: Paste the URL into the content to embed faster.":"Tip: pega la URL dentro del contenido para embeber más rápido",Turquoise:"Turquesa",Underline:"Subrayado",Undo:"Deshacer",Unlink:"Quitar enlace","Upload failed":"Fallo en la subida","Upload in progress":"Subida en progreso","Vertical text alignment toolbar":"",White:"Blanco","Widget toolbar":"Barra de herramientas del widget",Width:"",Yellow:"Amarillo","Yellow marker":"Marcador amarillo"}),e.getPluralForm=function(a){return 1!=a}}(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{451:function(a,e,t){"use strict";t.r(e);var o=t(0),r=t(6),i=t(61),s=t(64),n=t(63),c=t(2),l={components:{CroppieCepas:s.a,Imagenes:n.a},props:["info","modificarInfo"],watch:{modificarInfo:function(){this.modificarInfo&&(this.llenarInfo(),this.$emit("cambiarVariable"))}},data:function(){return{parametros:{cepaId:"",hifas:"Presencia",capsula:"Presencia",pseudohifas:"Presencia",balistoconidias:"Presencia",produccion_tubo_germinativo:"Presencia",blastoconidias:"Presencia",produccion_clamidosporas:"Presencia",artroconidias:"Presencia",induccion_filamentizacion:"Presencia",formacion_asco_y_ascosporas:"Presencia",otras_caract:"",imagen1:"",imagen2:"",imagen3:""},tituloForm:"",nomBtn:"",errors:[],bloquearBtn:!1,mensajes:{required:"El campo es requerido"}}},validations:{parametros:{imagen1:{required:c.required},imagen2:{required:function(a){return!(""==a&&this.cantImagenes>1)}},imagen3:{required:function(a){return""!=a||3!=this.cantImagenes}}}},mixins:[i.a,r.a],methods:{evento:function(){var a=this;this.bloquearBtn=!0,this.$v.parametros.$touch(),this.$v.$invalid?(this.bloquearBtn=!1,this.toastr("Error!!","Favor llenar correctamente los campos","error")):"Agregar Característica"===this.tituloForm?axios.post("/cepas/levadura/caract-micro",this.parametros).then((function(e){"http://127.0.0.1:8000/"===e.request.responseURL?(localStorage.setItem("mensajeLogin","Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"),window.location.href="/"):(a.bloquearBtn=!1,a.errors=[],a.$refs.inputImagen.value="",a.tituloForm="Editar Característica",a.nomBtn="Editar",a.$emit("agregar",e.data),a.toastr("Agregar Característica Microscópica","Característica Microscópica agregada con exito!!","success"))})).catch((function(e){a.verificarError(e.response.status,e.response.data.errors)})):axios.put("/cepas/levadura/caract-micro/".concat(this.info.id),this.parametros).then((function(e){a.bloquearBtn=!1,a.errors=[],a.$emit("editar",e.data),a.toastr("Editar Característica Microscópica","Característica Microscópica editada con exito!!","success")})).catch((function(e){a.verificarError(e.response.status,e.response.data.errors)}))},llenarInfo:function(){this.imagenes=[],this.parametros.hifas=this.info.hifas,this.parametros.capsula=this.info.capsula,this.parametros.pseudohifas=this.info.pseudohifas,this.parametros.balistoconidias=this.info.balistoconidias,this.parametros.produccion_tubo_germinativo=this.info.produccion_tubo_germinativo,this.parametros.blastoconidias=this.info.blastoconidias,this.parametros.produccion_clamidosporas=this.info.produccion_clamidosporas,this.parametros.artroconidias=this.info.artroconidias,this.parametros.induccion_filamentizacion=this.info.induccion_filamentizacion,this.parametros.formacion_asco_y_ascosporas=this.info.formacion_asco_y_ascosporas,this.parametros.otras_caract=this.info.otras_caract,this.parametros.imagen1=this.info.imagen1,this.parametros.imagen2=this.info.imagen2,this.parametros.imagen3=this.info.imagen3,this.llenarArregloImagenes()},accionImagen:function(a){this.$emit("editar",a)}},computed:{validarTipoForm:function(){return"Agregar Característica"===this.tituloForm},btnClase:function(){return"Agregar Característica"===this.tituloForm?"btn-success":"btn-warning"}},mounted:function(){this.info?(this.llenarInfo(),this.tituloForm="Editar Característica",this.nomBtn="Editar"):(this.tituloForm="Agregar Característica",this.nomBtn="Agregar");var a=[];this.$route.params.cepaLevaduraSlug?(a=this.$route.params.cepaLevaduraSlug.split("-"),this.parametros.cepaId=parseInt(a[a.length-1])):(a=this.$route.params.cepaSlug.split("-"),this.parametros.cepaId=parseInt(a[a.length-1]))}},m=t(1);function d(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(a);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,o)}return t}function u(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?d(Object(t),!0).forEach((function(e){p(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function p(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}var v={components:{FormCaractMicro:Object(m.a)(l,(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"mt-4 mr-4 ml-4"},[t("div",{staticClass:"row justify-content-md-center"},[t("div",{staticClass:"col-sm-6"},[t("div",{staticClass:"main-card mb-3 card"},[t("div",{staticClass:"card-body"},[t("h5",{staticClass:"card-title"},[a._v(a._s(a.tituloForm))]),a._v(" "),t("form",{on:{submit:function(e){return e.preventDefault(),a.evento(e)}}},[""!=a.errors?[t("div",{staticClass:"alert alert-danger"},a._l(a.errors,(function(e,o){return t("p",{key:o},[a._v(a._s(e[0]))])})),0)]:a._e(),a._v(" "),t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"position-relative form-group"},[t("label",[a._v("Hifas")]),a._v(" "),t("div",[t("div",{staticClass:"custom-radio custom-control custom-control-inline"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.parametros.hifas,expression:"parametros.hifas"}],staticClass:"custom-control-input",attrs:{type:"radio",id:"hifas1",name:"hifas",value:"Presencia"},domProps:{checked:a._q(a.parametros.hifas,"Presencia")},on:{change:function(e){return a.$set(a.parametros,"hifas","Presencia")}}}),a._v(" "),t("label",{staticClass:"custom-control-label",attrs:{for:"hifas1"}},[a._v("Presencia")])]),a._v(" "),t("div",{staticClass:"custom-radio custom-control custom-control-inline"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.parametros.hifas,expression:"parametros.hifas"}],staticClass:"custom-control-input",attrs:{type:"radio",id:"hifas2",name:"hifas",value:"Ausencia"},domProps:{checked:a._q(a.parametros.hifas,"Ausencia")},on:{change:function(e){return a.$set(a.parametros,"hifas","Ausencia")}}}),a._v(" "),t("label",{staticClass:"custom-control-label",attrs:{for:"hifas2"}},[a._v("Ausencia")])])])])]),a._v(" "),t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"position-relative form-group"},[t("label",[a._v("Cápsula")]),a._v(" "),t("div",[t("div",{staticClass:"custom-radio custom-control custom-control-inline"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.parametros.capsula,expression:"parametros.capsula"}],staticClass:"custom-control-input",attrs:{type:"radio",id:"capsula1",name:"capsula",value:"Presencia"},domProps:{checked:a._q(a.parametros.capsula,"Presencia")},on:{change:function(e){return a.$set(a.parametros,"capsula","Presencia")}}}),a._v(" "),t("label",{staticClass:"custom-control-label",attrs:{for:"capsula1"}},[a._v("Presencia")])]),a._v(" "),t("div",{staticClass:"custom-radio custom-control custom-control-inline"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.parametros.capsula,expression:"parametros.capsula"}],staticClass:"custom-control-input",attrs:{type:"radio",id:"capsula2",name:"capsula",value:"Ausencia"},domProps:{checked:a._q(a.parametros.capsula,"Ausencia")},on:{change:function(e){return a.$set(a.parametros,"capsula","Ausencia")}}}),a._v(" "),t("label",{staticClass:"custom-control-label",attrs:{for:"capsula2"}},[a._v("Ausencia")])])])])])]),a._v(" "),t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"position-relative form-group"},[t("label",[a._v("Balistoconidias")]),a._v(" "),t("div",[t("div",{staticClass:"custom-radio custom-control custom-control-inline"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.parametros.balistoconidias,expression:"parametros.balistoconidias"}],staticClass:"custom-control-input",attrs:{type:"radio",id:"balistoconidias1",name:"balistoconidias",value:"Presencia"},domProps:{checked:a._q(a.parametros.balistoconidias,"Presencia")},on:{change:function(e){return a.$set(a.parametros,"balistoconidias","Presencia")}}}),a._v(" "),t("label",{staticClass:"custom-control-label",attrs:{for:"balistoconidias1"}},[a._v("Presencia")])]),a._v(" "),t("div",{staticClass:"custom-radio custom-control custom-control-inline"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.parametros.balistoconidias,expression:"parametros.balistoconidias"}],staticClass:"custom-control-input",attrs:{type:"radio",id:"balistoconidias2",name:"balistoconidias",value:"Ausencia"},domProps:{checked:a._q(a.parametros.balistoconidias,"Ausencia")},on:{change:function(e){return a.$set(a.parametros,"balistoconidias","Ausencia")}}}),a._v(" "),t("label",{staticClass:"custom-control-label",attrs:{for:"balistoconidias2"}},[a._v("Ausencia")])])])])]),a._v(" "),t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"position-relative form-group"},[t("label",[a._v("Artroconidias")]),a._v(" "),t("div",[t("div",{staticClass:"custom-radio custom-control custom-control-inline"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.parametros.artroconidias,expression:"parametros.artroconidias"}],staticClass:"custom-control-input",attrs:{type:"radio",id:"artroconidias1",name:"artroconidias",value:"Presencia"},domProps:{checked:a._q(a.parametros.artroconidias,"Presencia")},on:{change:function(e){return a.$set(a.parametros,"artroconidias","Presencia")}}}),a._v(" "),t("label",{staticClass:"custom-control-label",attrs:{for:"artroconidias1"}},[a._v("Presencia")])]),a._v(" "),t("div",{staticClass:"custom-radio custom-control custom-control-inline"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.parametros.artroconidias,expression:"parametros.artroconidias"}],staticClass:"custom-control-input",attrs:{type:"radio",id:"artroconidias2",name:"artroconidias",value:"Ausencia"},domProps:{checked:a._q(a.parametros.artroconidias,"Ausencia")},on:{change:function(e){return a.$set(a.parametros,"artroconidias","Ausencia")}}}),a._v(" "),t("label",{staticClass:"custom-control-label",attrs:{for:"artroconidias2"}},[a._v("Ausencia")])])])])])]),a._v(" "),t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"position-relative form-group"},[t("label",[a._v("Pseudohifas")]),a._v(" "),t("div",[t("div",{staticClass:"custom-radio custom-control custom-control-inline"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.parametros.pseudohifas,expression:"parametros.pseudohifas"}],staticClass:"custom-control-input",attrs:{type:"radio",id:"pseudohifas1",name:"pseudohifas",value:"Presencia"},domProps:{checked:a._q(a.parametros.pseudohifas,"Presencia")},on:{change:function(e){return a.$set(a.parametros,"pseudohifas","Presencia")}}}),a._v(" "),t("label",{staticClass:"custom-control-label",attrs:{for:"pseudohifas1"}},[a._v("Presencia")])]),a._v(" "),t("div",{staticClass:"custom-radio custom-control custom-control-inline"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.parametros.pseudohifas,expression:"parametros.pseudohifas"}],staticClass:"custom-control-input",attrs:{type:"radio",id:"pseudohifas2",name:"pseudohifas",value:"Ausencia"},domProps:{checked:a._q(a.parametros.pseudohifas,"Ausencia")},on:{change:function(e){return a.$set(a.parametros,"pseudohifas","Ausencia")}}}),a._v(" "),t("label",{staticClass:"custom-control-label",attrs:{for:"pseudohifas2"}},[a._v("Ausencia")])])])])]),a._v(" "),t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"position-relative form-group"},[t("label",[a._v("Blastoconidias")]),a._v(" "),t("div",[t("div",{staticClass:"custom-radio custom-control custom-control-inline"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.parametros.blastoconidias,expression:"parametros.blastoconidias"}],staticClass:"custom-control-input",attrs:{type:"radio",id:"blastoconidias1",name:"blastoconidias",value:"Presencia"},domProps:{checked:a._q(a.parametros.blastoconidias,"Presencia")},on:{change:function(e){return a.$set(a.parametros,"blastoconidias","Presencia")}}}),a._v(" "),t("label",{staticClass:"custom-control-label",attrs:{for:"blastoconidias1"}},[a._v("Presencia")])]),a._v(" "),t("div",{staticClass:"custom-radio custom-control custom-control-inline"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.parametros.blastoconidias,expression:"parametros.blastoconidias"}],staticClass:"custom-control-input",attrs:{type:"radio",id:"blastoconidias2",name:"blastoconidias",value:"Ausencia"},domProps:{checked:a._q(a.parametros.blastoconidias,"Ausencia")},on:{change:function(e){return a.$set(a.parametros,"blastoconidias","Ausencia")}}}),a._v(" "),t("label",{staticClass:"custom-control-label",attrs:{for:"blastoconidias2"}},[a._v("Ausencia")])])])])])]),a._v(" "),t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"position-relative form-group"},[t("label",[a._v("Producción de Clamidosporas")]),a._v(" "),t("div",[t("div",{staticClass:"custom-radio custom-control custom-control-inline"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.parametros.produccion_clamidosporas,expression:"parametros.produccion_clamidosporas"}],staticClass:"custom-control-input",attrs:{type:"radio",id:"produccion_clamidosporas1",name:"produccion_clamidosporas",value:"Presencia"},domProps:{checked:a._q(a.parametros.produccion_clamidosporas,"Presencia")},on:{change:function(e){return a.$set(a.parametros,"produccion_clamidosporas","Presencia")}}}),a._v(" "),t("label",{staticClass:"custom-control-label",attrs:{for:"produccion_clamidosporas1"}},[a._v("Presencia")])]),a._v(" "),t("div",{staticClass:"custom-radio custom-control custom-control-inline"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.parametros.produccion_clamidosporas,expression:"parametros.produccion_clamidosporas"}],staticClass:"custom-control-input",attrs:{type:"radio",id:"produccion_clamidosporas2",name:"produccion_clamidosporas",value:"Ausencia"},domProps:{checked:a._q(a.parametros.produccion_clamidosporas,"Ausencia")},on:{change:function(e){return a.$set(a.parametros,"produccion_clamidosporas","Ausencia")}}}),a._v(" "),t("label",{staticClass:"custom-control-label",attrs:{for:"produccion_clamidosporas2"}},[a._v("Ausencia")])])])])]),a._v(" "),t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"position-relative form-group"},[t("label",[a._v("Inducción de Filamentización")]),a._v(" "),t("div",[t("div",{staticClass:"custom-radio custom-control custom-control-inline"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.parametros.induccion_filamentizacion,expression:"parametros.induccion_filamentizacion"}],staticClass:"custom-control-input",attrs:{type:"radio",id:"induccion_filamentizacion1",name:"induccion_filamentizacion",value:"Presencia"},domProps:{checked:a._q(a.parametros.induccion_filamentizacion,"Presencia")},on:{change:function(e){return a.$set(a.parametros,"induccion_filamentizacion","Presencia")}}}),a._v(" "),t("label",{staticClass:"custom-control-label",attrs:{for:"induccion_filamentizacion1"}},[a._v("Presencia")])]),a._v(" "),t("div",{staticClass:"custom-radio custom-control custom-control-inline"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.parametros.induccion_filamentizacion,expression:"parametros.induccion_filamentizacion"}],staticClass:"custom-control-input",attrs:{type:"radio",id:"induccion_filamentizacion2",name:"induccion_filamentizacion",value:"Ausencia"},domProps:{checked:a._q(a.parametros.induccion_filamentizacion,"Ausencia")},on:{change:function(e){return a.$set(a.parametros,"induccion_filamentizacion","Ausencia")}}}),a._v(" "),t("label",{staticClass:"custom-control-label",attrs:{for:"induccion_filamentizacion2"}},[a._v("Ausencia")])])])])])]),a._v(" "),t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"position-relative form-group"},[t("label",[a._v("Producción de Tubo Germinativo")]),a._v(" "),t("div",[t("div",{staticClass:"custom-radio custom-control custom-control-inline"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.parametros.produccion_tubo_germinativo,expression:"parametros.produccion_tubo_germinativo"}],staticClass:"custom-control-input",attrs:{type:"radio",id:"produccion_tubo_germinativo1",name:"produccion_tubo_germinativo",value:"Presencia"},domProps:{checked:a._q(a.parametros.produccion_tubo_germinativo,"Presencia")},on:{change:function(e){return a.$set(a.parametros,"produccion_tubo_germinativo","Presencia")}}}),a._v(" "),t("label",{staticClass:"custom-control-label",attrs:{for:"produccion_tubo_germinativo1"}},[a._v("Presencia")])]),a._v(" "),t("div",{staticClass:"custom-radio custom-control custom-control-inline"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.parametros.produccion_tubo_germinativo,expression:"parametros.produccion_tubo_germinativo"}],staticClass:"custom-control-input",attrs:{type:"radio",id:"produccion_tubo_germinativo2",name:"produccion_tubo_germinativo",value:"Ausencia"},domProps:{checked:a._q(a.parametros.produccion_tubo_germinativo,"Ausencia")},on:{change:function(e){return a.$set(a.parametros,"produccion_tubo_germinativo","Ausencia")}}}),a._v(" "),t("label",{staticClass:"custom-control-label",attrs:{for:"produccion_tubo_germinativo2"}},[a._v("Ausencia")])])])])]),a._v(" "),t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"position-relative form-group"},[t("label",[a._v("Formación de Asco y Ascosporas")]),a._v(" "),t("div",[t("div",{staticClass:"custom-radio custom-control custom-control-inline"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.parametros.formacion_asco_y_ascosporas,expression:"parametros.formacion_asco_y_ascosporas"}],staticClass:"custom-control-input",attrs:{type:"radio",id:"formacion_asco_y_ascosporas1",name:"formacion_asco_y_ascosporas",value:"Presencia"},domProps:{checked:a._q(a.parametros.formacion_asco_y_ascosporas,"Presencia")},on:{change:function(e){return a.$set(a.parametros,"formacion_asco_y_ascosporas","Presencia")}}}),a._v(" "),t("label",{staticClass:"custom-control-label",attrs:{for:"formacion_asco_y_ascosporas1"}},[a._v("Presencia")])]),a._v(" "),t("div",{staticClass:"custom-radio custom-control custom-control-inline"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.parametros.formacion_asco_y_ascosporas,expression:"parametros.formacion_asco_y_ascosporas"}],staticClass:"custom-control-input",attrs:{type:"radio",id:"formacion_asco_y_ascosporas2",name:"formacion_asco_y_ascosporas",value:"Ausencia"},domProps:{checked:a._q(a.parametros.formacion_asco_y_ascosporas,"Ausencia")},on:{change:function(e){return a.$set(a.parametros,"formacion_asco_y_ascosporas","Ausencia")}}}),a._v(" "),t("label",{staticClass:"custom-control-label",attrs:{for:"formacion_asco_y_ascosporas2"}},[a._v("Ausencia")])])])])])]),a._v(" "),a.validarTipoForm?[t("div",{staticClass:"position-relative form-group"},[t("label",{attrs:{for:"imagen"}},[a._v("Imágenes")]),a._v(" "),t("input",{ref:"inputImagen",class:["form-control-file",a.$v.parametros.imagen1.$error||a.$v.parametros.imagen2.$error||a.$v.parametros.imagen3.$error?"error-input-select":""],attrs:{name:"imagen",id:"imagen",type:"file",accept:"image/jpeg, image/png",multiple:""},on:{change:a.obtenerImagenes}}),a._v(" "),a.erroresImagenes?t("em",{staticClass:"text-error-input"},[a._v(a._s(a.erroresImagenes))]):a._e(),a._v(" "),a.$v.parametros.imagen1.$error&&!a.$v.parametros.imagen1.required||a.$v.parametros.imagen2.$error&&!a.$v.parametros.imagen2.required||a.$v.parametros.imagen3.$error&&!a.$v.parametros.imagen3.required?t("em",{staticClass:"text-error-input"},[a._v(a._s(a.mensajes.required))]):a._e()])]:a._e(),a._v(" "),t("div",{staticClass:"position-relative form-group"},[t("label",{attrs:{for:"otras_caract"}},[a._v("Otras Características")]),a._v(" "),t("textarea",{directives:[{name:"model",rawName:"v-model",value:a.parametros.otras_caract,expression:"parametros.otras_caract"}],staticClass:"form-control",attrs:{name:"text",id:"otras_caract"},domProps:{value:a.parametros.otras_caract},on:{input:function(e){e.target.composing||a.$set(a.parametros,"otras_caract",e.target.value)}}})]),a._v(" "),t("button",{staticClass:"mb-2 mr-2 btn btn-block",class:a.btnClase,attrs:{disabled:a.bloquearBtn}},[a._v(a._s(a.nomBtn))])],2)])])]),a._v(" "),t("div",{staticClass:"col-sm-6"},[t("div",{staticClass:"main-card mb-3 card"},[t("div",{staticClass:"card-body"},[t("h5",{staticClass:"card-title"},[a._v("Imagenes")]),a._v(" "),a.validarTipoForm?[a.imagenesCroppie.length===a.cantImagenes&&a.$refs.inputImagen.value?[t("CroppieCepas",{attrs:{imagenes:a.imagenesCroppie,posicion:"vertical"},on:{cambiarValorImagen:a.cambiarValorImagen}})]:[a._m(0)]]:[t("Imagenes",{attrs:{parametros:a.parametros,tipoCepa:"levadura/caract-micro",imagenes:a.imagenes,cepa:a.info},on:{accionImagen:a.accionImagen}})]],2)])])])])}),[function(){var a=this.$createElement,e=this._self._c||a;return e("div",{staticClass:"text-center"},[e("h5",{staticClass:"mt-5 mb-5"},[e("span",{staticClass:"pr-1"},[e("b",{staticClass:"text-success"},[this._v("SIN IMÁGENES")])])])])}],!1,null,null,null).exports,ModalEliminar:t(33).a},data:function(){return{mostrarBtnAgregar:!0,mostrarForm:!1,modificarForm:!1}},methods:u(u({},o.a.mapActions("cepa",["accionAgregarCaract","accionEditarCaract","accionEliminarCaract"])),{},{agregar:function(a){this.accionAgregarCaract({tipo:"micro",data:a}),this.modificarForm=!0},editar:function(a){this.accionEditarCaract({tipo:"micro",data:a}),this.modificarForm=!0},eliminar:function(a){this.accionEliminarCaract({tipo:"micro",data:a}),this.mostrarBtnAgregar=!0,this.mostrarForm=!1},cambiarVariable:function(){this.modificarForm=!1},btnAgregar:function(){this.mostrarForm=!0,this.mostrarBtnAgregar=!1},cancelar:function(){this.mostrarForm=!1,this.mostrarBtnAgregar=!0}}),computed:u(u({},o.a.mapGetters("cepa",["getCaractMicro"])),{},{mostrarBtnEliminar:function(){return!!this.getCaractMicro},mostrarBtnCancelar:function(){return!(!this.mostrarForm||this.getCaractMicro)},mostrarBtnAgregarComputed:function(){return this.mostrarBtnAgregar}}),mounted:function(){this.getCaractMicro&&(this.mostrarBtnAgregar=!1,this.mostrarForm=!0)}},g=Object(m.a)(v,(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",[t("div",{staticClass:"tabs-animation"},[t("div",{staticClass:"mb-3 card"},[t("div",{staticClass:"card-header-tab card-header"},[a._m(0),a._v(" "),t("div",{staticClass:"btn-actions-pane-right text-capitalize"},[t("button",{directives:[{name:"show",rawName:"v-show",value:a.mostrarBtnCancelar,expression:"mostrarBtnCancelar"}],staticClass:"btn-wide btn-outline-2x mr-md-2 btn btn-outline-danger btn-sm",on:{click:a.cancelar}},[a._v("Cancelar")]),a._v(" "),t("button",{directives:[{name:"show",rawName:"v-show",value:a.mostrarBtnEliminar,expression:"mostrarBtnEliminar"}],staticClass:"btn-wide btn-outline-2x mr-md-2 btn btn-outline-danger btn-sm",on:{click:function(e){return a.$modal.show("modal_eliminar_caract")}}},[a._v("Eliminar Características")]),a._v(" "),t("button",{directives:[{name:"show",rawName:"v-show",value:a.mostrarBtnAgregarComputed,expression:"mostrarBtnAgregarComputed"}],staticClass:"btn-wide btn-outline-2x mr-md-2 btn btn-outline-success btn-sm",on:{click:a.btnAgregar}},[a._v("Agregar Características")])])]),a._v(" "),a.mostrarForm?[t("FormCaractMicro",{attrs:{modificarInfo:a.modificarForm,info:a.getCaractMicro},on:{agregar:a.agregar,editar:a.editar,cambiarVariable:a.cambiarVariable}})]:[a._m(1)]],2)]),a._v(" "),t("ModalEliminar",{attrs:{tipo:"Característica",tipoCaract:"Característica Microscópica",caract:a.getCaractMicro,url:"levadura/caract-micro"},on:{eliminar:a.eliminar}})],1)}),[function(){var a=this.$createElement,e=this._self._c||a;return e("div",{staticClass:"card-header-title font-size-lg text-capitalize font-weight-normal"},[e("i",{staticClass:"header-icon lnr-charts icon-gradient bg-happy-green"}),this._v("\n          Características Microscópicas\n        ")])},function(){var a=this.$createElement,e=this._self._c||a;return e("div",{staticClass:"text-center"},[e("h5",{staticClass:"mt-5 mb-5"},[e("span",{staticClass:"pr-1"},[e("b",{staticClass:"text-success"},[this._v("AÚN NO SE HAN AGREGADO LAS CARACTERÍSTICAS")])])])])}],!1,null,null,null);e.default=g.exports}}]);