!function(e){const a=e.es=e.es||{};a.dictionary=Object.assign(a.dictionary||{},{"%0 of %1":"%0 de %1","Align cell text to the bottom":"","Align cell text to the center":"","Align cell text to the left":"","Align cell text to the middle":"","Align cell text to the right":"","Align cell text to the top":"","Align center":"Centrar","Align left":"Alinear a la izquierda","Align right":"Alinear a la derecha","Align table to the left":"","Align table to the right":"",Alignment:"",Aquamarine:"Aguamarina",Background:"",Big:"Grande",Black:"Negro","Block quote":"Entrecomillado",Blue:"Azul","Blue marker":"Marcador azul",Bold:"Negrita",Border:"","Bulleted List":"Lista de puntos",Cancel:"Cancelar","Cell properties":"","Center table":"","Centered image":"Imagen centrada","Change image text alternative":"Cambiar el texto alternativo de la imagen","Choose heading":"Elegir Encabezado",Color:"","Color picker":"",Column:"Columna",Dashed:"","Decrease indent":"Disminuir sangría",Default:"Por defecto","Delete column":"Eliminar columna","Delete row":"Eliminar fila","Dim grey":"Gris Oscuro",Dimensions:"","Document colors":"Colores del documento",Dotted:"",Double:"",Downloadable:"Descargable","Dropdown toolbar":"Barra de herramientas desplegable","Edit link":"Editar enlace","Editor toolbar":"Barra de herramientas de edición","Enter image caption":"Introducir título de la imagen","Font Background Color":"Color de Fondo","Font Color":"Color de Fuente","Font Family":"Fuente","Font Size":"Tamaño de fuente","Full size image":"Imagen a tamaño completo",Green:"Verde","Green marker":"Marcador verde","Green pen":"Texto verde",Grey:"Gris",Groove:"","Header column":"Columna de encabezado","Header row":"Fila de encabezado",Heading:"Encabezado","Heading 1":"Encabezado 1","Heading 2":"Encabezado 2","Heading 3":"Encabezado 3","Heading 4":"Encabezado 4","Heading 5":"Encabezado 5","Heading 6":"Encabezado 6",Height:"",Highlight:"Resaltar","Horizontal line":"Línea horizontal","Horizontal text alignment toolbar":"",Huge:"Enorme","Image toolbar":"Barra de herramientas de imagen","image widget":"Widget de imagen","Increase indent":"Aumentar sangría","Insert column left":"Insertar columna izquierda","Insert column right":"Insertar columna derecha","Insert image":"Insertar imagen","Insert media":"Insertar contenido multimedia","Insert paragraph after block":"","Insert paragraph before block":"","Insert row above":"Insertar fila encima","Insert row below":"Insertar fila debajo","Insert table":"Insertar tabla",Inset:"",Italic:"Cursiva",Justify:"Justificar","Justify cell text":"","Left aligned image":"Imagen alineada a la izquierda","Light blue":"Azul Claro","Light green":"Verde Claro","Light grey":"Gris Claro",Link:"Enlace","Link URL":"URL del enlace","Media URL":"URL del contenido multimedia","media widget":"Widget de contenido multimedia","Merge cell down":"Combinar celda inferior","Merge cell left":"Combinar celda izquierda","Merge cell right":"Combinar celda derecha","Merge cell up":"Combinar celda superior","Merge cells":"Combinar celdas",Next:"Siguiente",None:"","Numbered List":"Lista numerada","Open in a new tab":"Abrir en una pestaña nueva ","Open link in new tab":"Abrir enlace en una pestaña nueva",Orange:"Anaranjado",Outset:"",Padding:"",Paragraph:"Párrafo","Paste the media URL in the input.":"Pega la URL del contenido multimedia","Pink marker":"Marcador rosa",Previous:"Anterior",Purple:"Morado",Red:"Rojo","Red pen":"Texto rojo",Redo:"Rehacer","Remove color":"Remover color","Remove highlight":"Quitar resaltado","Rich Text Editor":"Editor de Texto Enriquecido","Rich Text Editor, %0":"Editor de Texto Enriquecido, %0",Ridge:"","Right aligned image":"Imagen alineada a la derecha",Row:"Fila",Save:"Guardar","Select column":"","Select row":"","Show more items":"Mostrar más elementos","Side image":"Imagen lateral",Small:"Pequeño",Solid:"","Split cell horizontally":"Dividir celdas horizontalmente","Split cell vertically":"Dividir celdas verticalmente",Strikethrough:"Tachado",Style:"",Subscript:"Subíndice",Superscript:"Superíndice","Table alignment toolbar":"","Table cell text alignment":"","Table properties":"","Table toolbar":"Barra de herramientas de tabla","Text alignment":"Alineación del texto","Text alignment toolbar":"Barra de herramientas de alineación del texto","Text alternative":"Texto alternativo","Text highlight toolbar":"Barra de herramientas de resaltado de texto",'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".':"","The URL must not be empty.":"La URL no debe estar vacía",'The value is invalid. Try "10px" or "2em" or simply "2".':"","This link has no URL":"Este enlace no tiene URL","This media URL is not supported.":"La URL de este contenido multimedia no está soportada",Tiny:"Minúsculo","Tip: Paste the URL into the content to embed faster.":"Tip: pega la URL dentro del contenido para embeber más rápido",Turquoise:"Turquesa",Underline:"Subrayado",Undo:"Deshacer",Unlink:"Quitar enlace","Upload failed":"Fallo en la subida","Upload in progress":"Subida en progreso","Vertical text alignment toolbar":"",White:"Blanco","Widget toolbar":"Barra de herramientas del widget",Width:"",Yellow:"Amarillo","Yellow marker":"Marcador amarillo"}),a.getPluralForm=function(e){return 1!=e}}(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{208:function(e,a,t){var i=t(22),r=t(645);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var n={insert:"head",singleton:!1};i(r,n);e.exports=r.locals||{}},44:function(e,a,t){"use strict";a.a=function(e){return{data:function(){return{"numPestañas":0,"numPestaña":0}},methods:{"obtenerValorPestañas":function(){var a=this.$ls.get(e);a?(this.numPestañas=a.numPestañas+1,this.numPestaña=this.numPestañas,this.$ls.set(e,{"numPestañas":this.numPestañas,"numPestañaSaliente":0})):(this.numPestañas=1,this.numPestaña=1,this.$ls.set(e,{"numPestañas":1,"numPestañaSaliente":0}))},"modificarValorPestañas":function(a,t){a&&t?(this.numPestañas=a.numPestañas,a.numPestañas<t.numPestañas&&a.numPestañaSaliente<this.numPestaña&&(this.numPestaña=this.numPestaña-1)):1==this.numPestaña&&this.$ls.set(e,{"numPestañas":this.numPestañas,"numPestañaSaliente":0})},verificar:function(){1===this.numPestañas?this.$ls.remove(e):this.$ls.set(e,{"numPestañas":--this.numPestañas,"numPestañaSaliente":this.numPestaña})},beforeunload:function(){this.verificar()}},mounted:function(){this.obtenerValorPestañas(),window.addEventListener("beforeunload",this.beforeunload)},created:function(){this.$ls.on(e,this.modificarValorPestañas)},beforeDestroy:function(){this.verificar(),this.$ls.off(e,this.modificarValorPestañas),window.removeEventListener("beforeunload",this.beforeunload)}}}},644:function(e,a,t){"use strict";var i=t(208);t.n(i).a},645:function(e,a,t){(e.exports=t(205)(!1)).push([e.i,".slide-fade-enter-active[data-v-d124930e]{transition:all .3s ease}.slide-fade-leave-active[data-v-d124930e]{transition:all .8s cubic-bezier(1,.5,.8,1)}.slide-fade-enter[data-v-d124930e],.slide-fade-leave-to[data-v-d124930e]{transform:translateX(10px);opacity:0}",""])},662:function(e,a,t){"use strict";t.r(a);var i=t(0),r=t(44);function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,i)}return t}function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}var l={methods:{ruta:function(e){this.$emit("rutaHijo",e)},cambiarTipo:function(e){this.$emit("cambiarTipo",e)}},computed:function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}({},i.a.mapGetters(["getPermisoByNombres"]))},s=(t(644),t(1));function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,i)}return t}function d(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){u(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function u(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}var m={components:{Nav:Object(s.a)(l,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[e.getPermisoByNombres(["agregar-proyecto","editar-proyecto","eliminar-proyecto"])&&e.getPermisoByNombres(["agregar-publicacion","editar-publicacion","eliminar-publicacion"])?t("ul",{staticClass:"body-tabs body-tabs-layout tabs-animated body-tabs-animated nav"},[t("li",{staticClass:"nav-item"},[t("router-link",{staticClass:"nav-link",attrs:{to:{name:"proyectos"},"active-class":"active",exact:""}},[t("span",[e._v("Proyectos")])])],1),e._v(" "),t("li",{staticClass:"nav-item"},[t("router-link",{staticClass:"nav-link",attrs:{to:{name:"publicaciones"},"active-class":"active"}},[t("span",[e._v("Publicaciones")])])],1)]):e._e(),e._v(" "),t("div",{staticClass:"tabs-animation"},[t("transition",{attrs:{"enter-active-class":"slideInLeft"}},[t("router-view",{on:{rutaHijo:e.ruta,cambiarTipo:e.cambiarTipo}})],1)],1)])}),[],!1,null,"d124930e",null).exports},data:function(){return{tipo:"",tipo2:""}},mixins:[Object(r.a)("documento")],methods:d(d({},i.a.mapActions("documentos",["obtenerDocumentos","accionPublicacion","accionProyecto"])),{},{ruta:function(e){e.includes("publicaciones")?this.tipo="Tabla Publicaciones":this.tipo="Tabla Proyectos"},cambiarTipo:function(e){this.tipo2="agregar"===e?"Agregar":"editar"===e?"Editar":""}}),created:function(){var e=this;this.$emit("rutaSider",window.location.pathname),this.obtenerDocumentos(),window.Echo.channel("publicacion").listen("PublicacionEvent",(function(a){e.accionPublicacion({tipo:a.tipo,data:a.publicacion}),e.$events.fire(a.publicacion.id+"-actualizarPublicarPublicacion",a.publicacion.publicar),e.$events.fire("actualizartablaPublicacion")})),window.Echo.channel("proyecto").listen("ProyectoEvent",(function(a){e.accionProyecto({tipo:a.tipo,data:a.proyecto}),e.$events.fire(a.proyecto.id+"-actualizarPublicarProyecto",a.proyecto.publicar),e.$events.fire("actualizartablaProyecto")}))}},b=Object(s.a)(m,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("div",{staticClass:"app-page-title"},[t("div",{staticClass:"page-title-wrapper"},[t("div",{staticClass:"page-title-heading"},[e._m(0),e._v(" "),t("div",[e._v("\n          Documentos\n          "),t("div",{staticClass:"page-title-subheading opacity-10"},[t("nav",[t("ol",{staticClass:"breadcrumb"},[e._m(1),e._v(" "),t("li",{staticClass:"breadcrumb-item"},[t("a",[e._v(e._s(e.tipo))])]),e._v(" "),e.tipo2?[t("li",{staticClass:"breadcrumb-item"},[t("a",[e._v(e._s(e.tipo2))])])]:e._e()],2)])])])]),e._v(" "),t("div",{staticClass:"page-title-actions"})])]),e._v(" "),1==e.numPestaña?[t("Nav",{on:{rutaHijo:e.ruta,cambiarTipo:e.cambiarTipo}})]:[e._m(2)]],2)}),[function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"page-title-icon"},[a("i",{staticClass:"pe-7s-paperclip icon-gradient bg-mean-fruit"})])},function(){var e=this.$createElement,a=this._self._c||e;return a("li",{staticClass:"breadcrumb-item"},[a("a",[a("i",{staticClass:"fa fa-home"})])])},function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"main-card mb-3 card"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"alert alert-danger mt-4 text-center",attrs:{role:"alert"}},[this._v("Ya has ingresado desde otra pestaña del navegador!!")])])])])])])}],!1,null,null,null);a.default=b.exports}}]);