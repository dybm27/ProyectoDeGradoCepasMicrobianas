!function(e){const t=e.es=e.es||{};t.dictionary=Object.assign(t.dictionary||{},{"%0 of %1":"%0 de %1","Align cell text to the bottom":"","Align cell text to the center":"","Align cell text to the left":"","Align cell text to the middle":"","Align cell text to the right":"","Align cell text to the top":"","Align center":"Centrar","Align left":"Alinear a la izquierda","Align right":"Alinear a la derecha","Align table to the left":"","Align table to the right":"",Alignment:"",Aquamarine:"Aguamarina",Background:"",Big:"Grande",Black:"Negro","Block quote":"Entrecomillado",Blue:"Azul","Blue marker":"Marcador azul",Bold:"Negrita",Border:"","Bulleted List":"Lista de puntos",Cancel:"Cancelar","Cell properties":"","Center table":"","Centered image":"Imagen centrada","Change image text alternative":"Cambiar el texto alternativo de la imagen","Choose heading":"Elegir Encabezado",Color:"","Color picker":"",Column:"Columna",Dashed:"","Decrease indent":"Disminuir sangría",Default:"Por defecto","Delete column":"Eliminar columna","Delete row":"Eliminar fila","Dim grey":"Gris Oscuro",Dimensions:"","Document colors":"Colores del documento",Dotted:"",Double:"",Downloadable:"Descargable","Dropdown toolbar":"Barra de herramientas desplegable","Edit link":"Editar enlace","Editor toolbar":"Barra de herramientas de edición","Enter image caption":"Introducir título de la imagen","Font Background Color":"Color de Fondo","Font Color":"Color de Fuente","Font Family":"Fuente","Font Size":"Tamaño de fuente","Full size image":"Imagen a tamaño completo",Green:"Verde","Green marker":"Marcador verde","Green pen":"Texto verde",Grey:"Gris",Groove:"","Header column":"Columna de encabezado","Header row":"Fila de encabezado",Heading:"Encabezado","Heading 1":"Encabezado 1","Heading 2":"Encabezado 2","Heading 3":"Encabezado 3","Heading 4":"Encabezado 4","Heading 5":"Encabezado 5","Heading 6":"Encabezado 6",Height:"",Highlight:"Resaltar","Horizontal line":"Línea horizontal","Horizontal text alignment toolbar":"",Huge:"Enorme","Image toolbar":"Barra de herramientas de imagen","image widget":"Widget de imagen","Increase indent":"Aumentar sangría","Insert column left":"Insertar columna izquierda","Insert column right":"Insertar columna derecha","Insert image":"Insertar imagen","Insert media":"Insertar contenido multimedia","Insert paragraph after block":"","Insert paragraph before block":"","Insert row above":"Insertar fila encima","Insert row below":"Insertar fila debajo","Insert table":"Insertar tabla",Inset:"",Italic:"Cursiva",Justify:"Justificar","Justify cell text":"","Left aligned image":"Imagen alineada a la izquierda","Light blue":"Azul Claro","Light green":"Verde Claro","Light grey":"Gris Claro",Link:"Enlace","Link URL":"URL del enlace","Media URL":"URL del contenido multimedia","media widget":"Widget de contenido multimedia","Merge cell down":"Combinar celda inferior","Merge cell left":"Combinar celda izquierda","Merge cell right":"Combinar celda derecha","Merge cell up":"Combinar celda superior","Merge cells":"Combinar celdas",Next:"Siguiente",None:"","Numbered List":"Lista numerada","Open in a new tab":"Abrir en una pestaña nueva ","Open link in new tab":"Abrir enlace en una pestaña nueva",Orange:"Anaranjado",Outset:"",Padding:"",Paragraph:"Párrafo","Paste the media URL in the input.":"Pega la URL del contenido multimedia","Pink marker":"Marcador rosa",Previous:"Anterior",Purple:"Morado",Red:"Rojo","Red pen":"Texto rojo",Redo:"Rehacer","Remove color":"Remover color","Remove highlight":"Quitar resaltado","Rich Text Editor":"Editor de Texto Enriquecido","Rich Text Editor, %0":"Editor de Texto Enriquecido, %0",Ridge:"","Right aligned image":"Imagen alineada a la derecha",Row:"Fila",Save:"Guardar","Select column":"","Select row":"","Show more items":"Mostrar más elementos","Side image":"Imagen lateral",Small:"Pequeño",Solid:"","Split cell horizontally":"Dividir celdas horizontalmente","Split cell vertically":"Dividir celdas verticalmente",Strikethrough:"Tachado",Style:"",Subscript:"Subíndice",Superscript:"Superíndice","Table alignment toolbar":"","Table cell text alignment":"","Table properties":"","Table toolbar":"Barra de herramientas de tabla","Text alignment":"Alineación del texto","Text alignment toolbar":"Barra de herramientas de alineación del texto","Text alternative":"Texto alternativo","Text highlight toolbar":"Barra de herramientas de resaltado de texto",'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".':"","The URL must not be empty.":"La URL no debe estar vacía",'The value is invalid. Try "10px" or "2em" or simply "2".':"","This link has no URL":"Este enlace no tiene URL","This media URL is not supported.":"La URL de este contenido multimedia no está soportada",Tiny:"Minúsculo","Tip: Paste the URL into the content to embed faster.":"Tip: pega la URL dentro del contenido para embeber más rápido",Turquoise:"Turquesa",Underline:"Subrayado",Undo:"Deshacer",Unlink:"Quitar enlace","Upload failed":"Fallo en la subida","Upload in progress":"Subida en progreso","Vertical text alignment toolbar":"",White:"Blanco","Widget toolbar":"Barra de herramientas del widget",Width:"",Yellow:"Amarillo","Yellow marker":"Marcador amarillo"}),t.getPluralForm=function(e){return 1!=e}}(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{109:function(e,t,n){"use strict";t.a=function(e){return{methods:{closeEditar:function(){window.Echo.private("desbloquearBtns"+e).whisper("desbloquearBtns"+e,{id:this.id,tipo:this.modal.tipo}),this.$events.fire("eliminarMiBloqueo"+e,{id:this.id,tipo:this.modal.tipo})},closeEliminar:function(){window.Echo.private("desbloquearBtns"+e).whisper("desbloquearBtns"+e,{id:this.id,tipo:this.modal.tipo}),this.$events.fire("eliminarMiBloqueo"+e,{id:this.id,tipo:this.modal.tipo})}}}}},116:function(e,t,n){"use strict";t.a=function(e){return{data:function(){return{bloqueos:[],miBloqueo:null}},methods:{bloquearBtnsTabla:function(e){this.bloqueos.push({idUser:e.idUser,id:e.id,tipo:e.tipo}),this.$events.fire(e.id+"-bloquearBtns-"+e.tipo)},desbloquearBtnsTabla:function(e){this.bloqueos.splice(this.bloqueos.findIndex((function(t){return t.id===e.id&&t.tipo===e.tipo})),1),this.$events.fire(e.id+"-desbloquearBtns-"+e.tipo)},agregarMiBloqueo:function(e){this.miBloqueo={idUser:e.idUser,id:e.id,tipo:e.tipo}},eliminarMiBloqueo:function(e){0!=e.id&&(this.miBloqueo=null)},borrarBloqueos:function(e){var t=this.bloqueos.find((function(t){return t.idUser===e.id}));t&&this.desbloquearBtnsTabla(t)},verificarBloqueos:function(e){for(var t=0;t<this.bloqueos.length;t++)this.bloqueos[t].tipo==e&&this.$events.fire(this.bloqueos[t].id+"-bloquearBtns-"+e)},enviarBloqueos:function(){window.Echo.private("recibirBtns"+e).whisper("recibirBtns"+e,{miBloqueo:this.miBloqueo})}},mounted:function(){var t=this;window.Echo.join(e).joining((function(e){t.miBloqueo&&t.enviarBloqueos()})).leaving((function(e){t.borrarBloqueos(e.user)})),window.Echo.private("bloquearBtns"+e).listenForWhisper("bloquearBtns"+e,(function(e){t.bloquearBtnsTabla(e)})),window.Echo.private("desbloquearBtns"+e).listenForWhisper("desbloquearBtns"+e,(function(e){0!=e.id&&t.desbloquearBtnsTabla(e)}))},created:function(){var t=this;this.$emit("rutaHijo",window.location.pathname),window.Echo.private("recibirBtns"+e).listenForWhisper("recibirBtns"+e,(function(e){e.miBloqueo&&t.bloquearBtnsTabla(e.miBloqueo)})),this.$events.$on("agregarMiBloqueo"+e,(function(e){t.agregarMiBloqueo(e)})),this.$events.$on("eliminarMiBloqueo"+e,(function(e){t.eliminarMiBloqueo(e)}))},destroyed:function(){this.$events.$off("agregarMiBloqueo"+e),this.$events.$off("eliminarMiBloqueo"+e)},beforeDestroy:function(){window.Echo.leave(e),window.Echo.leave("recibirBtns"+e),window.Echo.leave("desbloquearBtns"+e),window.Echo.leave("bloquearBtns"+e)}}}},12:function(e,t,n){"use strict";var a=n(7),r=n.n(a),i=n(385),o={props:["disabled","nameGet"],data:function(){return{filterText:"",show:!1}},computed:{validarBtn:function(){return this.disabled}},methods:{doFilter:function(){this.$events.fire(this.nameGet+"-filter-set",this.filterText)},resetFilter:function(){this.filterText="",this.$events.fire(this.nameGet+"-filter-reset")},abrirMenu:function(){this.show=!this.show},exportar:function(e){this.show=!this.show,this.$emit("exportarExcel",e)}}},s=n(1),l=Object(s.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"dataTables_filter"},[n("div",{staticClass:"position-relative form-group"},[n("label",[e._v("Buscar:")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.filterText,expression:"filterText"}],staticClass:"form-control form-control-sm",attrs:{placeholder:"...","aria-controls":"example"},domProps:{value:e.filterText},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.doFilter(t)},input:function(t){t.target.composing||(e.filterText=t.target.value)}}}),e._v(" "),n("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"Deshacer",expression:"'Deshacer'"}],staticClass:"btn btn-danger",on:{click:e.resetFilter}},[n("i",{staticClass:"fas fa-redo"})]),e._v(" "),n("div",{class:["dropleft d-inline-block",e.show?"show":""]},[n("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"Imprimir",expression:"'Imprimir'"}],staticClass:"mr-2 dropdown-toggle btn btn-outline-success",attrs:{type:"button"},on:{click:e.abrirMenu}},[n("i",{staticClass:"fas fa-print"})]),e._v(" "),n("div",{class:["dropdown-menu",e.show?"show":""]},[n("button",{staticClass:"dropdown-item",on:{click:function(t){return e.exportar("todo")}}},[e._v("Todo")]),e._v(" "),n("button",{staticClass:"dropdown-item",attrs:{disabled:e.validarBtn},on:{click:function(t){return e.exportar("tabla")}}},[e._v("Tabla")])])])])])}),[],!1,null,null,null).exports,u={mixins:[n(386).a]},c=Object(s.a)(u,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",[n("ul",{staticClass:"pagination"},[n("li",{class:["page-item",{disabled:e.isOnFirstPage}]},[n("a",{staticClass:"page-link",on:{click:function(t){return t.preventDefault(),e.loadPage("prev")}}},[n("span",[e._v("«")])])]),e._v(" "),e.notEnoughPages?e._l(e.totalPage,(function(t){return n("li",{key:t,class:["page-item",{active:e.isCurrentPage(t)}]},[n("a",{staticClass:"page-link",domProps:{innerHTML:e._s(t)},on:{click:function(n){return n.preventDefault(),e.loadPage(t)}}})])})):e._l(e.windowSize,(function(t){return n("li",{key:t,class:["page-item",{active:e.isCurrentPage(e.windowStart+t-1)}]},[n("a",{staticClass:"page-link",domProps:{innerHTML:e._s(e.windowStart+t-1)},on:{click:function(n){return n.preventDefault(),e.loadPage(e.windowStart+t-1)}}})])})),e._v(" "),n("li",{class:["page-item",{disabled:e.isOnLastPage}]},[n("a",{staticClass:"page-link",attrs:{href:""},on:{click:function(t){return t.preventDefault(),e.loadPage("next")}}},[n("span",[e._v("»")])])])],2)])}),[],!1,null,null,null).exports,d={props:{css:{type:Object,default:function(){return{infoClass:"left floated left aligned six wide column"}}},infoTemplate:{type:String,default:function(){return"Displaying {from} to {to} of {total} items"}},noDataTemplate:{type:String,default:function(){return"No relevant data"}}},data:function(){return{tablePagination:null}},computed:{paginationInfo:function(){return null==this.tablePagination||0==this.tablePagination.total?this.noDataTemplate:this.infoTemplate.replace("{from}",this.tablePagination.from||0).replace("{to}",this.tablePagination.to||0).replace("{total}",this.tablePagination.total||0)}},methods:{setPaginationData:function(e){this.tablePagination=e},resetData:function(){this.tablePagination=null}}},f=Object(s.a)(d,(function(){var e=this.$createElement;return(this._self._c||e)("div",{class:["",this.css.infoClass],domProps:{innerHTML:this._s(this.paginationInfo)}})}),[],!1,null,null,null).exports,m=n(6),p={props:["apiUrl","fields","sortOrder","detailRowComponent","nameGet"],components:{Vuetable:i.a,FilterBar:l,VuetablePagination:c,VuetablePaginationInfo:f},mixins:[m.a],data:function(){return{appendParams:{per_page:10,filter:""},css:{table:{tableClass:"table table-striped table-bordered",ascendingIcon:"fas fa-angle-double-up",descendingIcon:"fas fa-angle-double-down",sortHandleIcon:"glyphicon glyphicon-menu-hamburger"},pagination:{wrapperClass:"pagination float-right",activeClass:"active",disabledClass:"disabled",pageClass:"page-item",linkClass:"page-link",paginationClass:"pagination",paginationInfoClass:"float-left",dropdownClass:"form-control",icons:{first:"fa fa-chevron-left",prev:"fa fa-chevron-left",next:"fa fa-chevron-right",last:"fa fa-chevron-right"},infoClass:"pull-left"}},disabledBtn:!1,dataAnterior:[]}},methods:{imagen:function(e){return'<img width="80" heigth="80" src="'+e+'"></i>'},tipoAgar:function(e){return"No"===e?'<i class="fas fa-times"></i>':e},numeroReplicas:function(e){return 0===e?'<i class="fas fa-times"></i>':e},recuentoMicorgota:function(e){return null===e?'<i class="fas fa-times"></i>':e},medioCultivo:function(e){return null===e?'<i class="fas fa-times"></i>':e},numeroPases:function(e){return 0===e?'<i class="fas fa-times"></i>':e},allcap:function(e){return e.toUpperCase()},genderLabel:function(e){return"M"===e?'<span class="mb-2 mr-2 btn-icon btn-icon-only btn-shadow btn-outline-2x btn btn-outline-success"><i class="pe-7s-male"></i> Male</span>':'<span class="mb-2 mr-2 btn-icon btn-icon-only btn-shadow btn-outline-2x btn btn-outline-warning"><i class="pe-7s-female"></i> Female</span>'},formatDate:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"D-MMM-YYYY";return null==e?"":r()(e).format(t)},onPaginationData:function(e){this.$refs.pagination.setPaginationData(e),this.$refs.paginationInfo.setPaginationData(e)},onChangePage:function(e){this.dataAnterior=this.$refs.vuetable.tableData,this.$refs.vuetable.changePage(e)},onCellClicked:function(e,t,n){this.$refs.vuetable.toggleDetailRow(e.id)},onFilterSet:function(e){var t=this;this.appendParams.filter=e,Vue.nextTick((function(){return t.$refs.vuetable.refresh()}))},onFilterReset:function(){var e=this;delete this.appendParams.filter,Vue.nextTick((function(){return e.$refs.vuetable.refresh()}))},refreshDatos:function(){var e=this;this.dataAnterior=this.$refs.vuetable.tableData,Vue.nextTick((function(){return e.$refs.vuetable.refresh()}))},loaded:function(){this.$refs.vuetable.tableData&&(0===this.$refs.vuetable.tableData.length?this.disabledBtn=!0:(this.disabledBtn=!1,this.EventosCustomActions(),this.$events.fire("verificarBloqueos-"+this.nameGet)))},EventosCustomActions:function(){if(0!=this.dataAnterior.length)for(var e=0;e<this.dataAnterior.length;e++)this.$events.fire(e+"-eliminarEventosBtns-"+this.nameGet,this.dataAnterior[e].id),this.$events.fire(e+"-eliminarEventosCheck-"+this.nameGet,this.dataAnterior[e].id);for(var t=0;t<this.$refs.vuetable.tableData.length;t++)this.$events.fire(t+"-crearEventosBtns-"+this.nameGet),this.$events.fire(t+"-crearEventosCheck-"+this.nameGet)},exportarExcel:function(e){var t=this;if("todo"===e)axios.get("/exportar/".concat(this.nameGet),{responseType:"blob"}).then((function(e){if("http://127.0.0.1:8000/"===e.request.responseURL)localStorage.setItem("mensajeLogin","Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"),window.location.href="/";else{t.toastr("Descarga!!","La descarga se realizo con éxito","success",5e3);var n=window.URL.createObjectURL(new Blob([e.data])),a=document.createElement("a");a.href=n,a.setAttribute("download",t.nameGet+".xlsx"),document.body.appendChild(a),a.click(),document.body.removeChild(a)}})).catch((function(e){403===e.response.status?t.$router.push("/sin-acceso"):405!==e.response.status&&401!==e.response.status||(localStorage.setItem("mensajeLogin","Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"),window.location.href="/")}));else{var n=this.$refs.vuetable.tableData;axios.post("/exportar/tabla/".concat(this.nameGet),{datos:n},{responseType:"blob"}).then((function(e){if("http://127.0.0.1:8000/"===e.request.responseURL)localStorage.setItem("mensajeLogin","Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"),window.location.href="/";else{t.toastr("Descarga!!","La descarga se realizo con éxito","success",5e3);var n=window.URL.createObjectURL(new Blob([e.data])),a=document.createElement("a");a.href=n,a.setAttribute("download",t.nameGet+".xlsx"),document.body.appendChild(a),a.click(),document.body.removeChild(a)}})).catch((function(e){403===e.response.status?t.$router.push("/sin-acceso"):405!==e.response.status&&401!==e.response.status||(localStorage.setItem("mensajeLogin","Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"),window.location.href="/")}))}},loadSuccess:function(e){"http://127.0.0.1:8000/"===e.request.responseURL&&(localStorage.setItem("mensajeLogin","Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"),window.location.href="/")},loadError:function(e){403===e.response.status?this.$router.push("/sin-acceso"):405!==e.response.status&&401!==e.response.status||(localStorage.setItem("mensajeLogin","Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"),window.location.href="/")}},mounted:function(){var e=this;this.$events.$on(this.nameGet+"-filter-set",(function(t){return e.onFilterSet(t)})),this.$events.$on(this.nameGet+"-filter-reset",(function(t){return e.onFilterReset()}))},destroyed:function(){this.$events.off(this.nameGet+"-filter-set"),this.$events.off(this.nameGet+"-filter-reset")}},b=Object(s.a)(p,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"dataTables_wrapper dt-bootstrap4"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-12 col-md-6"},[n("div",{staticClass:"dataTables_length",attrs:{id:"example_length"}},[n("label",[e._v("\n          Buscar\n          "),n("select",{directives:[{name:"model",rawName:"v-model.number",value:e.appendParams.per_page,expression:"appendParams.per_page",modifiers:{number:!0}}],staticClass:"custom-select custom-select-sm form-control form-control-sm",attrs:{name:"example_length","aria-controls":"example"},on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(t){var n="_value"in t?t._value:t.value;return e._n(n)}));e.$set(e.appendParams,"per_page",t.target.multiple?n:n[0])},e.refreshDatos]}},[n("option",{attrs:{value:"10"}},[e._v("10")]),e._v(" "),n("option",{attrs:{value:"25"}},[e._v("25")]),e._v(" "),n("option",{attrs:{value:"50"}},[e._v("50")]),e._v(" "),n("option",{attrs:{value:"100"}},[e._v("100")])]),e._v(" Resultados\n        ")])])]),e._v(" "),n("div",{staticClass:"col-sm-12 col-md-6"},[n("filter-bar",{attrs:{disabled:e.disabledBtn,nameGet:e.nameGet},on:{exportarExcel:e.exportarExcel}})],1)]),e._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-12"},[n("div",{staticClass:"table-responsive fixed "},[n("vuetable",{ref:"vuetable",attrs:{noDataTemplate:"Cargando informacion...",css:e.css.table,"api-url":e.apiUrl,fields:e.fields,"data-path":"data","pagination-path":"","sort-order":e.sortOrder,"append-params":e.appendParams,"detail-row-component":e.detailRowComponent},on:{"vuetable:pagination-data":e.onPaginationData,"vuetable:cell-clicked":e.onCellClicked,"vuetable:loaded":e.loaded,"vuetable:load-success":e.loadSuccess,"vuetable:load-error":e.loadError}})],1)])]),e._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-12 col-md-5"},[n("vuetable-pagination-info",{ref:"paginationInfo",attrs:{css:e.css.infoclass,"info-template":"Mostrando del {from} al {to} de {total} registros",noDataTemplate:"Sin registros"}})],1),e._v(" "),n("div",{staticClass:"col-sm-12 col-md-7"},[n("vuetable-pagination",{ref:"pagination",staticClass:"pull-right",attrs:{css:e.css.pagination},on:{"vuetable-pagination:change-page":e.onChangePage}})],1)])])}),[],!1,null,null,null);t.a=b.exports},19:function(e,t,n){"use strict";t.a=function(e){return{data:function(){return{tabla:!1}},methods:{mostrarTabla:function(){this.tabla=!this.tabla},actualizarTabla:function(){this.siHayDatos&&this.$refs.tabla&&this.$refs.tabla.refreshDatos()}},created:function(){var t=this;this.$events.on("actualizartabla"+e,(function(e){return t.actualizarTabla()}))},destroyed:function(){this.$events.off("actualizartabla"+e)}}}},2:function(e,t,n){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"alpha",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"alphaNum",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"numeric",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"between",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"email",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"ipAddress",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"macAddress",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"maxLength",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"minLength",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"required",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"requiredIf",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(t,"requiredUnless",{enumerable:!0,get:function(){return b.default}}),Object.defineProperty(t,"sameAs",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"url",{enumerable:!0,get:function(){return g.default}}),Object.defineProperty(t,"or",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"and",{enumerable:!0,get:function(){return j.default}}),Object.defineProperty(t,"not",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"minValue",{enumerable:!0,get:function(){return w.default}}),Object.defineProperty(t,"maxValue",{enumerable:!0,get:function(){return P.default}}),Object.defineProperty(t,"integer",{enumerable:!0,get:function(){return C.default}}),Object.defineProperty(t,"decimal",{enumerable:!0,get:function(){return O.default}}),t.helpers=void 0;var r=A(n(483)),i=A(n(486)),o=A(n(487)),s=A(n(488)),l=A(n(489)),u=A(n(490)),c=A(n(491)),d=A(n(492)),f=A(n(493)),m=A(n(494)),p=A(n(495)),b=A(n(496)),h=A(n(497)),g=A(n(498)),v=A(n(499)),j=A(n(500)),y=A(n(501)),w=A(n(502)),P=A(n(503)),C=A(n(504)),O=A(n(505)),_=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var t=x();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=r?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(n,i,o):n[i]=e[i]}n.default=e,t&&t.set(e,n);return n}(n(54));function x(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return x=function(){return e},e}function A(e){return e&&e.__esModule?e:{default:e}}t.helpers=_},20:function(e,t,n){"use strict";function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i={props:["tipoModal","tipo"],methods:{mostrarTabla:function(){this.$emit("mostrarTabla")}},computed:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n(0).a.mapGetters(["getPermisoByNombre"]))},o=n(1),s=Object(o.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.getPermisoByNombre("agregar-otra")?n("button",{staticClass:"btn-wide btn-outline-2x mr-md-2 btn btn-outline-success btn-sm",on:{click:function(t){return e.$modal.show("modal_agregar_tipo_"+e.tipoModal,{tipo:e.tipo})}}},[e._v("Agregar")]):e._e(),e._v(" "),n("img",{staticClass:"mostrar-cursor",attrs:{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAABmJLR0QA/wD/AP+gvaeTAAACOklEQVRYhe2XT2sTQRiHn9kNsUnblKoIooKXIhqTDaktagT9GP0MHrRbpNT24sFCq2gbBL+CfgTxoCi2hSataf540YuYQsV6aJuktunOeGgSwm7wsKERZZ/T8OzA+2PmZWYWPDz+R8KL5vFIdqK/kzW1VjKaMh/pfjbF/t5PI23OdCqMsIvw6pihS5VpdlJIIz+YzAJcWzQDFT9LCow26q7rmpb4GH/ytVk6VkZX8oTdaYiT9fGOJkMKLrYRBOCMsqyzdumzi0rIWghu+XJABEDAWjlkLdS/568mvxvLZlxq4pLrKJosZuLzS3bt2CaAcOF2j77rHwGwAvsvC+HnJdeFPTyOkJYNHEuN3lKCSQApxXRueO7dXwkzmB49XUV8BrprqmRJ30Bh+PEGAAoRTY9NCqHcH3qCYnCPqaXrc7vN2nHOVIUwUI0gAD0+fd8ANgDCK3fPIdRD5ToJoKB8jNfAqz+GsSxfRtcOSkBPTZWsKo3roTCY/BZdNaeEIuY6zOHKOLa+Zc9Els2baIc9gyanc/Hke9eFPTyOkJYNfOHDeK8/cDACILt+vejUre0Ic/7tg65Q79YytfcMkKv0HQx9GXi2V58TTd25rITP9QNLSdbzw08X7d5xzoT6thPIRhCASHBbTwBvAKJr905RtVYEyu82jNAglhq9kRmaX2j2jmenBZt2p5T4UR93l60d4JPbIDWKQteLjpCtZhppc0bBOICC2dyVufttFm+PSHaiv9P/TR4e/zS/AX4ptkIOwCnsAAAAAElFTkSuQmCC"},on:{click:e.mostrarTabla}})])}),[],!1,null,null,null);t.a=s.exports},482:function(e,t,n){var a={"./af":252,"./af.js":252,"./ar":253,"./ar-dz":254,"./ar-dz.js":254,"./ar-kw":255,"./ar-kw.js":255,"./ar-ly":256,"./ar-ly.js":256,"./ar-ma":257,"./ar-ma.js":257,"./ar-sa":258,"./ar-sa.js":258,"./ar-tn":259,"./ar-tn.js":259,"./ar.js":253,"./az":260,"./az.js":260,"./be":261,"./be.js":261,"./bg":262,"./bg.js":262,"./bm":263,"./bm.js":263,"./bn":264,"./bn.js":264,"./bo":265,"./bo.js":265,"./br":266,"./br.js":266,"./bs":267,"./bs.js":267,"./ca":268,"./ca.js":268,"./cs":269,"./cs.js":269,"./cv":270,"./cv.js":270,"./cy":271,"./cy.js":271,"./da":272,"./da.js":272,"./de":273,"./de-at":274,"./de-at.js":274,"./de-ch":275,"./de-ch.js":275,"./de.js":273,"./dv":276,"./dv.js":276,"./el":277,"./el.js":277,"./en-au":278,"./en-au.js":278,"./en-ca":279,"./en-ca.js":279,"./en-gb":280,"./en-gb.js":280,"./en-ie":281,"./en-ie.js":281,"./en-il":282,"./en-il.js":282,"./en-in":283,"./en-in.js":283,"./en-nz":284,"./en-nz.js":284,"./en-sg":285,"./en-sg.js":285,"./eo":286,"./eo.js":286,"./es":287,"./es-do":288,"./es-do.js":288,"./es-us":289,"./es-us.js":289,"./es.js":287,"./et":290,"./et.js":290,"./eu":291,"./eu.js":291,"./fa":292,"./fa.js":292,"./fi":293,"./fi.js":293,"./fil":294,"./fil.js":294,"./fo":295,"./fo.js":295,"./fr":296,"./fr-ca":297,"./fr-ca.js":297,"./fr-ch":298,"./fr-ch.js":298,"./fr.js":296,"./fy":299,"./fy.js":299,"./ga":300,"./ga.js":300,"./gd":301,"./gd.js":301,"./gl":302,"./gl.js":302,"./gom-deva":303,"./gom-deva.js":303,"./gom-latn":304,"./gom-latn.js":304,"./gu":305,"./gu.js":305,"./he":306,"./he.js":306,"./hi":307,"./hi.js":307,"./hr":308,"./hr.js":308,"./hu":309,"./hu.js":309,"./hy-am":310,"./hy-am.js":310,"./id":311,"./id.js":311,"./is":312,"./is.js":312,"./it":313,"./it-ch":314,"./it-ch.js":314,"./it.js":313,"./ja":315,"./ja.js":315,"./jv":316,"./jv.js":316,"./ka":317,"./ka.js":317,"./kk":318,"./kk.js":318,"./km":319,"./km.js":319,"./kn":320,"./kn.js":320,"./ko":321,"./ko.js":321,"./ku":322,"./ku.js":322,"./ky":323,"./ky.js":323,"./lb":324,"./lb.js":324,"./lo":325,"./lo.js":325,"./lt":326,"./lt.js":326,"./lv":327,"./lv.js":327,"./me":328,"./me.js":328,"./mi":329,"./mi.js":329,"./mk":330,"./mk.js":330,"./ml":331,"./ml.js":331,"./mn":332,"./mn.js":332,"./mr":333,"./mr.js":333,"./ms":334,"./ms-my":335,"./ms-my.js":335,"./ms.js":334,"./mt":336,"./mt.js":336,"./my":337,"./my.js":337,"./nb":338,"./nb.js":338,"./ne":339,"./ne.js":339,"./nl":340,"./nl-be":341,"./nl-be.js":341,"./nl.js":340,"./nn":342,"./nn.js":342,"./oc-lnc":343,"./oc-lnc.js":343,"./pa-in":344,"./pa-in.js":344,"./pl":345,"./pl.js":345,"./pt":346,"./pt-br":347,"./pt-br.js":347,"./pt.js":346,"./ro":348,"./ro.js":348,"./ru":349,"./ru.js":349,"./sd":350,"./sd.js":350,"./se":351,"./se.js":351,"./si":352,"./si.js":352,"./sk":353,"./sk.js":353,"./sl":354,"./sl.js":354,"./sq":355,"./sq.js":355,"./sr":356,"./sr-cyrl":357,"./sr-cyrl.js":357,"./sr.js":356,"./ss":358,"./ss.js":358,"./sv":359,"./sv.js":359,"./sw":360,"./sw.js":360,"./ta":361,"./ta.js":361,"./te":362,"./te.js":362,"./tet":363,"./tet.js":363,"./tg":364,"./tg.js":364,"./th":365,"./th.js":365,"./tk":366,"./tk.js":366,"./tl-ph":367,"./tl-ph.js":367,"./tlh":368,"./tlh.js":368,"./tr":369,"./tr.js":369,"./tzl":370,"./tzl.js":370,"./tzm":371,"./tzm-latn":372,"./tzm-latn.js":372,"./tzm.js":371,"./ug-cn":373,"./ug-cn.js":373,"./uk":374,"./uk.js":374,"./ur":375,"./ur.js":375,"./uz":376,"./uz-latn":377,"./uz-latn.js":377,"./uz.js":376,"./vi":378,"./vi.js":378,"./x-pseudo":379,"./x-pseudo.js":379,"./yo":380,"./yo.js":380,"./zh-cn":381,"./zh-cn.js":381,"./zh-hk":382,"./zh-hk.js":382,"./zh-mo":383,"./zh-mo.js":383,"./zh-tw":384,"./zh-tw.js":384};function r(e){var t=i(e);return n(t)}function i(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=i,e.exports=r,r.id=482},483:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=(0,n(54).regex)("alpha",/^[a-zA-Z]*$/);t.default=a},484:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a="web"===e.env.BUILD?n(485).withParams:n(387).withParams;t.default=a}).call(this,n(187))},485:function(e,t,n){"use strict";(function(e){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=void 0;var a="undefined"!=typeof window?window:void 0!==e?e:{},r=a.vuelidate?a.vuelidate.withParams:function(e,t){return"object"===n(e)&&void 0!==t?t:e((function(){}))};t.withParams=r}).call(this,n(86))},486:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=(0,n(54).regex)("alphaNum",/^[a-zA-Z0-9]*$/);t.default=a},487:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=(0,n(54).regex)("numeric",/^[0-9]*$/);t.default=a},488:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(54);t.default=function(e,t){return(0,a.withParams)({type:"between",min:e,max:t},(function(n){return!(0,a.req)(n)||(!/\s/.test(n)||n instanceof Date)&&+e<=+n&&+t>=+n}))}},489:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=(0,n(54).regex)("email",/(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/);t.default=a},490:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(54),r=(0,a.withParams)({type:"ipAddress"},(function(e){if(!(0,a.req)(e))return!0;if("string"!=typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(i)}));t.default=r;var i=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},491:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(54);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,a.withParams)({type:"macAddress"},(function(t){if(!(0,a.req)(t))return!0;if("string"!=typeof t)return!1;var n="string"==typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==n&&(6===n.length||8===n.length)&&n.every(r)}))};var r=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},492:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(54);t.default=function(e){return(0,a.withParams)({type:"maxLength",max:e},(function(t){return!(0,a.req)(t)||(0,a.len)(t)<=e}))}},493:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(54);t.default=function(e){return(0,a.withParams)({type:"minLength",min:e},(function(t){return!(0,a.req)(t)||(0,a.len)(t)>=e}))}},494:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(54),r=(0,a.withParams)({type:"required"},(function(e){return"string"==typeof e?(0,a.req)(e.trim()):(0,a.req)(e)}));t.default=r},495:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(54);t.default=function(e){return(0,a.withParams)({type:"requiredIf",prop:e},(function(t,n){return!(0,a.ref)(e,this,n)||(0,a.req)(t)}))}},496:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(54);t.default=function(e){return(0,a.withParams)({type:"requiredUnless",prop:e},(function(t,n){return!!(0,a.ref)(e,this,n)||(0,a.req)(t)}))}},497:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(54);t.default=function(e){return(0,a.withParams)({type:"sameAs",eq:e},(function(t,n){return t===(0,a.ref)(e,this,n)}))}},498:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=(0,n(54).regex)("url",/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i);t.default=a},499:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(54);t.default=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,a.withParams)({type:"or"},(function(){for(var e=this,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return t.length>0&&t.reduce((function(t,n){return t||n.apply(e,a)}),!1)}))}},500:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(54);t.default=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,a.withParams)({type:"and"},(function(){for(var e=this,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return t.length>0&&t.reduce((function(t,n){return t&&n.apply(e,a)}),!0)}))}},501:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(54);t.default=function(e){return(0,a.withParams)({type:"not"},(function(t,n){return!(0,a.req)(t)||!e.call(this,t,n)}))}},502:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(54);t.default=function(e){return(0,a.withParams)({type:"minValue",min:e},(function(t){return!(0,a.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))}},503:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(54);t.default=function(e){return(0,a.withParams)({type:"maxValue",max:e},(function(t){return!(0,a.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))}},504:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=(0,n(54).regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);t.default=a},505:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=(0,n(54).regex)("decimal",/^[-]?\d*(\.\d+)?$/);t.default=a},54:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return r.default}}),t.regex=t.ref=t.len=t.req=void 0;var a,r=(a=n(484))&&a.__esModule?a:{default:a};function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o=function(e){if(Array.isArray(e))return!!e.length;if(null==e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===i(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=o;t.len=function(e){return Array.isArray(e)?e.length:"object"===i(e)?Object.keys(e).length:String(e).length};t.ref=function(e,t,n){return"function"==typeof e?e.call(t,n):n[e]};t.regex=function(e,t){return(0,r.default)({type:e},(function(e){return!o(e)||t.test(e)}))}}}]);