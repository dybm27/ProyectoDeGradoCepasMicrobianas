!function(t){const e=t.es=t.es||{};e.dictionary=Object.assign(e.dictionary||{},{"%0 of %1":"%0 de %1","Align cell text to the bottom":"","Align cell text to the center":"","Align cell text to the left":"","Align cell text to the middle":"","Align cell text to the right":"","Align cell text to the top":"","Align center":"Centrar","Align left":"Alinear a la izquierda","Align right":"Alinear a la derecha","Align table to the left":"","Align table to the right":"",Alignment:"",Aquamarine:"Aguamarina",Background:"",Big:"Grande",Black:"Negro","Block quote":"Entrecomillado",Blue:"Azul","Blue marker":"Marcador azul",Bold:"Negrita",Border:"","Bulleted List":"Lista de puntos",Cancel:"Cancelar","Cell properties":"","Center table":"","Centered image":"Imagen centrada","Change image text alternative":"Cambiar el texto alternativo de la imagen","Choose heading":"Elegir Encabezado",Color:"","Color picker":"",Column:"Columna",Dashed:"","Decrease indent":"Disminuir sangría",Default:"Por defecto","Delete column":"Eliminar columna","Delete row":"Eliminar fila","Dim grey":"Gris Oscuro",Dimensions:"","Document colors":"Colores del documento",Dotted:"",Double:"",Downloadable:"Descargable","Dropdown toolbar":"Barra de herramientas desplegable","Edit link":"Editar enlace","Editor toolbar":"Barra de herramientas de edición","Enter image caption":"Introducir título de la imagen","Font Background Color":"Color de Fondo","Font Color":"Color de Fuente","Font Family":"Fuente","Font Size":"Tamaño de fuente","Full size image":"Imagen a tamaño completo",Green:"Verde","Green marker":"Marcador verde","Green pen":"Texto verde",Grey:"Gris",Groove:"","Header column":"Columna de encabezado","Header row":"Fila de encabezado",Heading:"Encabezado","Heading 1":"Encabezado 1","Heading 2":"Encabezado 2","Heading 3":"Encabezado 3","Heading 4":"Encabezado 4","Heading 5":"Encabezado 5","Heading 6":"Encabezado 6",Height:"",Highlight:"Resaltar","Horizontal line":"Línea horizontal","Horizontal text alignment toolbar":"",Huge:"Enorme","Image toolbar":"Barra de herramientas de imagen","image widget":"Widget de imagen","Increase indent":"Aumentar sangría","Insert column left":"Insertar columna izquierda","Insert column right":"Insertar columna derecha","Insert image":"Insertar imagen","Insert media":"Insertar contenido multimedia","Insert paragraph after block":"","Insert paragraph before block":"","Insert row above":"Insertar fila encima","Insert row below":"Insertar fila debajo","Insert table":"Insertar tabla",Inset:"",Italic:"Cursiva",Justify:"Justificar","Justify cell text":"","Left aligned image":"Imagen alineada a la izquierda","Light blue":"Azul Claro","Light green":"Verde Claro","Light grey":"Gris Claro",Link:"Enlace","Link URL":"URL del enlace","Media URL":"URL del contenido multimedia","media widget":"Widget de contenido multimedia","Merge cell down":"Combinar celda inferior","Merge cell left":"Combinar celda izquierda","Merge cell right":"Combinar celda derecha","Merge cell up":"Combinar celda superior","Merge cells":"Combinar celdas",Next:"Siguiente",None:"","Numbered List":"Lista numerada","Open in a new tab":"Abrir en una pestaña nueva ","Open link in new tab":"Abrir enlace en una pestaña nueva",Orange:"Anaranjado",Outset:"",Padding:"",Paragraph:"Párrafo","Paste the media URL in the input.":"Pega la URL del contenido multimedia","Pink marker":"Marcador rosa",Previous:"Anterior",Purple:"Morado",Red:"Rojo","Red pen":"Texto rojo",Redo:"Rehacer","Remove color":"Remover color","Remove highlight":"Quitar resaltado","Rich Text Editor":"Editor de Texto Enriquecido","Rich Text Editor, %0":"Editor de Texto Enriquecido, %0",Ridge:"","Right aligned image":"Imagen alineada a la derecha",Row:"Fila",Save:"Guardar","Select column":"","Select row":"","Show more items":"Mostrar más elementos","Side image":"Imagen lateral",Small:"Pequeño",Solid:"","Split cell horizontally":"Dividir celdas horizontalmente","Split cell vertically":"Dividir celdas verticalmente",Strikethrough:"Tachado",Style:"",Subscript:"Subíndice",Superscript:"Superíndice","Table alignment toolbar":"","Table cell text alignment":"","Table properties":"","Table toolbar":"Barra de herramientas de tabla","Text alignment":"Alineación del texto","Text alignment toolbar":"Barra de herramientas de alineación del texto","Text alternative":"Texto alternativo","Text highlight toolbar":"Barra de herramientas de resaltado de texto",'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".':"","The URL must not be empty.":"La URL no debe estar vacía",'The value is invalid. Try "10px" or "2em" or simply "2".':"","This link has no URL":"Este enlace no tiene URL","This media URL is not supported.":"La URL de este contenido multimedia no está soportada",Tiny:"Minúsculo","Tip: Paste the URL into the content to embed faster.":"Tip: pega la URL dentro del contenido para embeber más rápido",Turquoise:"Turquesa",Underline:"Subrayado",Undo:"Deshacer",Unlink:"Quitar enlace","Upload failed":"Fallo en la subida","Upload in progress":"Subida en progreso","Vertical text alignment toolbar":"",White:"Blanco","Widget toolbar":"Barra de herramientas del widget",Width:"",Yellow:"Amarillo","Yellow marker":"Marcador amarillo"}),e.getPluralForm=function(t){return 1!=t}}(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{139:function(t,e,r){"use strict";e.a={data:function(){return{active1:"active",active2:"",active3:"",mostrar1:!1,mostrar2:!1,mostrar3:!1,mostrarForm1:!0,mostrarForm2:!1,mostrarForm3:!1,mostrarBtnAgregar:!0,modificarForm:!1,caract:null,num:0}},methods:{agregarInfo:function(t){this.accionAgregarCaract({tipo:"macro",data:t}),this.mostrarBtnAgregar=!0,this.modificarForm=!0},editarInfo:function(t){this.accionEditarCaract({tipo:"macro",data:t}),this.modificarForm=!0},eliminarInfo:function(t){this.accionEliminarCaract({tipo:"macro",data:t}),this.mostrarBtnAgregar=!0,this.modificarForm=!0,this.formatear(this.num)},eliminarMedio:function(){this.mostrarForm1?(this.caract=this.getCaractMacro[0],this.num=1):this.mostrarForm2?(this.caract=this.getCaractMacro[1],this.num=2):(this.caract=this.getCaractMacro[2],this.num=3),this.$modal.show("modal_eliminar_caract")},cambiarVariable:function(){this.modificarForm=!1},cancelar:function(){this.mostrarForm1?(this.mostrarForm1=!1,this.mostrar1=!1,this.mostrarBtnAgregar=!0):this.mostrarForm2?(this.mostrarForm2=!1,this.cambiarActive(1),this.mostrar2=!1,this.mostrarBtnAgregar=!0):this.mostrarForm3&&(this.mostrarForm3=!1,this.cambiarActive(2),this.mostrar3=!1,this.mostrarBtnAgregar=!0)},abrirForm:function(){this.mostrar1?this.getCaractMacro[0]&&!this.mostrar2?(this.cambiarActive(2),this.mostrar2=!0,this.mostrarBtnAgregar=!1):this.getCaractMacro[1]&&!this.mostrar3&&(this.cambiarActive(3),this.mostrar3=!0,this.mostrarBtnAgregar=!1):(this.cambiarActive(1),this.mostrar1=!0,this.mostrarBtnAgregar=!1)},llenarForms:function(){this.getCaractMacro[0]&&(this.medio1=this.getCaractMacro[0].medio,this.mostrar1=!0),this.getCaractMacro[1]&&(this.medio2=this.getCaractMacro[1].medio,this.mostrar2=!0),this.getCaractMacro[2]&&(this.medio3=this.getCaractMacro[2].medio,this.mostrar3=!0,this.mostrarBtnAgregar=!1)},cambiarActive:function(t){switch(t){case 1:this.active1="active",this.active2="",this.active3="",this.mostrarForm1=!0,this.mostrarForm2=!1,this.mostrarForm3=!1;break;case 2:this.active1="",this.active2="active",this.active3="",this.mostrarForm1=!1,this.mostrarForm2=!0,this.mostrarForm3=!1;break;case 3:this.active1="",this.active2="",this.active3="active",this.mostrarForm1=!1,this.mostrarForm2=!1,this.mostrarForm3=!0}},formatear:function(t){switch(t){case 1:this.mostrar3?(this.mostrar3=!1,this.cambiarActive(2)):this.mostrar2?(this.mostrar2=!1,this.cambiarActive(1)):(this.mostrar1=!1,this.mostrarForm1=!1);break;case 2:this.mostrar3?(this.mostrar3=!1,this.cambiarActive(2)):(this.mostrar2=!1,this.cambiarActive(1));break;case 3:this.mostrar3=!1,this.cambiarActive(2)}}},computed:{computedActive1:function(){return this.active1},computedActive2:function(){return this.active2},computedActive3:function(){return this.active3},computedMostrarForm1:function(){return this.mostrarForm1},computedMostrarForm2:function(){return this.mostrarForm2},computedMostrarForm3:function(){return this.mostrarForm3},mostrarForms:function(){return this.getCaractMacro[0]||this.mostrar1?(this.llenarForms(),!0):(this.mostrarForm1=!1,!1)},mostrarBtnEliminar:function(){return!(!this.getCaractMacro[0]||!this.mostrarForm1)||(!(!this.getCaractMacro[1]||!this.mostrarForm2)||!(!this.getCaractMacro[2]||!this.mostrarForm3))},mostrarBtnCancelar:function(){return!(this.getCaractMacro[0]||!this.mostrarForm1)||(!(this.getCaractMacro[1]||!this.mostrarForm2)||!(this.getCaractMacro[2]||!this.mostrarForm3))},mostrarBtnAgregarComputed:function(){return this.mostrarBtnAgregar},medio1:{get:function(){if(this.getCaractMacro[0])return this.getCaractMacro[0].medio},set:function(){}},medio2:{get:function(){if(this.getCaractMacro[1])return this.getCaractMacro[1].medio},set:function(){}},medio3:{get:function(){if(this.getCaractMacro[2])return this.getCaractMacro[2].medio},set:function(){}}}}},31:function(t,e,r){"use strict";var a=r(157),i=r.n(a),o={props:["id","imagen","mostrarBtnCroppie","zoom","editar","enableZoom","boundaryHeigth","viewportWidth"],data:function(){return{croppie:null,btnAprobar:!0}},mounted:function(){this.crearCroppie()},methods:{crearCroppie:function(){var t=document.getElementById(this.id);this.croppie=new i.a(t,{viewport:{width:this.viewportWidth,height:200},boundary:{height:this.boundaryHeigth},enableZoom:this.enableZoom}),this.croppie.bind({url:this.imagen,zoom:this.zoom})},resultado:function(){var t=this;this.croppie.result({type:"base64",size:"viewport",format:"jpeg"}).then((function(e){t.btnAprobar=!1,t.$emit("cambiarValorImagen",e)}))},cancelar:function(){this.btnAprobar=!0,this.$emit("cambiarValorImagen","")}},watch:{imagen:function(){this.imagen&&(this.btnAprobar=!0,this.croppie.destroy(),this.crearCroppie())}},computed:{mostrarMensaje:function(){return!(!this.btnAprobar||this.editar)}}},s=r(1),n=Object(s.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{attrs:{id:t.id}}),t._v(" "),t.mostrarBtnCroppie?[t.btnAprobar?[r("button",{staticClass:"btn btn-success",attrs:{dusk:"btn-croppie"},on:{click:t.resultado}},[t._v("\n        Aprobar Imagen\n      ")]),t._v(" "),t.mostrarMensaje?r("em",{staticClass:"text-danger small"},[t._v("Debe Aprobar la imagen")]):t._e()]:[r("button",{staticClass:"btn btn-danger float-right",on:{click:t.cancelar}},[t._v("\n        Cancelar\n      ")])]]:t._e()],2)}),[],!1,null,null,null);e.a=n.exports},33:function(t,e,r){"use strict";var a={props:["tipo","tipoCaract","caract","url"],data:function(){return{bloquearBtnModal:!1}},mixins:[r(6).a],methods:{eliminar:function(){var t=this;this.bloquearBtnModal=!0,axios.delete("/cepas/".concat(this.url+"/"+this.caract.id)).then((function(e){t.bloquearBtnModal=!1,t.$modal.hide("modal_eliminar_caract"),t.$emit("eliminar",e.data),t.toastr("Eliminar "+t.tipo,t.tipoCaract+" eliminadas con exito!!","success")})).catch((function(e){403===e.response.status?t.$router.push("/sin-acceso"):405===e.response.status||401===e.response.status?(localStorage.setItem("mensajeLogin","Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"),window.location.href="/"):(t.bloquearBtnModal=!1,t.toastr("Error!!","","error"))}))}}},i=r(1),o=Object(i.a)(a,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("transition",{attrs:{name:"fade"}},[r("modal",{attrs:{name:"modal_eliminar_caract",classes:"my_modal",maxWidth:400,adaptive:!0,height:"auto",scrollable:!0}},[r("div",{staticClass:"modal-content"},[r("div",{staticClass:"modal-header"},[r("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLongTitle"}},[t._v("\n            Eliminar "+t._s(t.tipoCaract)+"\n          ")]),t._v(" "),r("button",{staticClass:"close",attrs:{type:"button"},on:{click:function(e){return t.$modal.hide("modal_eliminar_caract")}}},[r("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),r("div",{staticClass:"modal-body"},[r("p",[t._v("Esta segura/o de eliminar la "+t._s(t.tipo)+"?.")])]),t._v(" "),r("div",{staticClass:"modal-footer"},[r("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(e){return t.$modal.hide("modal_eliminar_caract")}}},[t._v("\n            Cancelar\n          ")]),t._v(" "),r("button",{staticClass:"btn btn-success",attrs:{dusk:"btn-eliminar-modal",type:"button",disabled:t.bloquearBtnModal},on:{click:t.eliminar}},[t._v("\n            Eliminar\n          ")])])])])],1)],1)}),[],!1,null,null,null);e.a=o.exports},457:function(t,e,r){"use strict";r.r(e);var a=r(0),i=r(6),o=r(139),s=r(87),n=r(31),c=r(60),l=r(2);function m(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?m(Object(r),!0).forEach((function(e){u(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var p={components:{Croppie:n.a,ModalAgregarInfo:c.a},props:["info","modificarInfo"],data:function(){return{parametros:{cepaId:"",medio:"",color:null,textura:null,topografia_superficie:"",borde_colonia:"",imagen:""},tituloModal:"",tipoModal:"",tituloForm:"",nomBtn:"",errors:[],bloquearBtn:!1,bloquearBtnModal:!1,mensajes:{required:"El campo es requerido",minLength:"El campo debe tener como minimo "}}},validations:{parametros:{medio:{required:l.required},color:{required:l.required},textura:{required:l.required},topografia_superficie:{required:l.required},borde_colonia:{required:l.required},imagen:{required:l.required}}},mixins:[s.a,i.a],methods:{evento:function(){var t=this;this.bloquearBtn=!0,this.$v.parametros.$touch(),this.$v.$invalid?(this.bloquearBtn=!1,this.toastr("Error!!","Favor llenar correctamente los campos","error")):"Agregar Medio"===this.tituloForm?axios.post("/cepas/levadura/caract-macro",this.parametros).then((function(e){"http://127.0.0.1:8000"===e.request.responseURL?(localStorage.setItem("mensajeLogin","Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"),window.location.href="/"):(t.bloquearBtn=!1,t.errors=[],t.$refs.inputImagen.value="",t.tituloForm="Editar Medio",t.nomBtn="Editar",t.$emit("agregar",e.data),t.toastr("Agregar Medio","Medio agregado con exito!!","success"))})).catch((function(e){t.verificarError(e.response.status,e.response.data.errors)})):axios.put("/cepas/levadura/caract-macro/".concat(this.info.id),this.parametros).then((function(e){t.bloquearBtn=!1,t.errors=[],t.$refs.inputImagen.value="",t.$emit("editar",e.data),t.toastr("Editar Medio","Medio editado con exito!!","success")})).catch((function(e){t.verificarError(e.response.status,e.response.data.errors)}))},llenarInfo:function(){this.parametros.medio=this.info.medio,this.parametros.color=this.info.color_id,this.parametros.textura=this.info.textura_id,this.parametros.topografia_superficie=this.info.topografia_superficie,this.parametros.borde_colonia=this.info.borde_colonia,this.parametros.imagen=this.info.imagen,this.imagenMiniatura=this.info.imagenPublica},showModal:function(t){this.tipoModal=t,"color"===t?this.tituloModal="Agregar Nuevo Color":"textura"===t&&(this.tituloModal="Agregar Nueva Textura"),this.$modal.show("modal_agregar_info_caract")},verificarSelects:function(){this.obtenerColores.length>0?this.parametros.color=this.obtenerColores[0].id:this.parametros.color=null,this.obtenerTexturas.length>0?this.parametros.textura=this.obtenerTexturas[0].id:this.parametros.textura=null}},computed:d(d(d({},a.a.mapGetters(["getPermisoByNombre"])),a.a.mapGetters("info_caract",["getInfoCaractMacroLevaduras"])),{},{btnClase:function(){return"Agregar Medio"===this.tituloForm?"btn-success":"btn-warning"},validarTipoForm:function(){return"Agregar Medio"===this.tituloForm},titulo:function(){return this.tituloForm},nomBtnComputed:function(){return this.nomBtn},obtenerColores:function(){return this.getInfoCaractMacroLevaduras.colors},obtenerTexturas:function(){return this.getInfoCaractMacroLevaduras.texturas}}),mounted:function(){void 0===this.info?(this.tituloForm="Agregar Medio",this.nomBtn="Agregar"):(this.llenarInfo(),this.tituloForm="Editar Medio",this.nomBtn="Editar");var t=[];this.$route.params.cepaLevaduraSlug?(t=this.$route.params.cepaLevaduraSlug.split("-"),this.parametros.cepaId=parseInt(t[t.length-1])):(t=this.$route.params.cepaSlug.split("-"),this.parametros.cepaId=parseInt(t[t.length-1]))},created:function(){this.verificarSelects()},watch:{modificarInfo:function(){this.modificarInfo&&(this.llenarInfo(),this.$emit("cambiarVariable"))},obtenerColores:function(){this.obtenerColores.length>0?this.parametros.color=this.obtenerColores[0].id:this.parametros.color=null},obtenerTexturas:function(){this.obtenerTexturas.length>0?this.parametros.textura=this.obtenerTexturas[0].id:this.parametros.textura=null}}},h=r(1);function g(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function b(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?g(Object(r),!0).forEach((function(e){v(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function v(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var f={components:{FormCaractMacro:Object(h.a)(p,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"container"},[r("div",{staticClass:"row justify-content-md-center"},[r("div",{staticClass:"col-sm-6"},[r("div",{staticClass:"main-card mb-3 card"},[r("div",{staticClass:"card-body"},[r("h5",{staticClass:"card-title"},[t._v(t._s(t.titulo))]),t._v(" "),r("form",{on:{submit:function(e){return e.preventDefault(),t.evento(e)}}},[""!=t.errors?[r("div",{staticClass:"alert alert-danger"},t._l(t.errors,(function(e,a){return r("p",{key:a},[t._v("\n                    "+t._s(e[0])+"\n                  ")])})),0)]:t._e(),t._v(" "),r("div",{staticClass:"position-relative form-group"},[r("label",{attrs:{for:"medio"}},[t._v("Medio")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.$v.parametros.medio.$model,expression:"$v.parametros.medio.$model",modifiers:{trim:!0}}],class:["form-control",t.$v.parametros.medio.$error?"error-input-select":""],attrs:{dusk:"medio",name:"medio",id:"medio",placeholder:"...",type:"text"},domProps:{value:t.$v.parametros.medio.$model},on:{input:function(e){e.target.composing||t.$set(t.$v.parametros.medio,"$model",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),t.$v.parametros.medio.$error&&!t.$v.parametros.medio.required?r("em",{staticClass:"text-error-input"},[t._v(t._s(t.mensajes.required))]):t._e()]),t._v(" "),t.getInfoCaractMacroLevaduras?[r("div",{staticClass:"form-row"},[r("div",{staticClass:"col-md-6"},[r("label",{attrs:{for:"color"}},[t._v("Color")]),t._v(" "),r("div",{staticClass:"input-group mb-3"},[r("select",{directives:[{name:"model",rawName:"v-model.trim",value:t.$v.parametros.color.$model,expression:"$v.parametros.color.$model",modifiers:{trim:!0}}],class:["form-control",t.$v.parametros.color.$error?"error-input-select":""],attrs:{name:"select",id:"color"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.$v.parametros.color,"$model",e.target.multiple?r:r[0])}}},t._l(t.obtenerColores,(function(e,a){return r("option",{key:a,domProps:{value:e.id}},[t._v("\n                          "+t._s(e.nombre)+"\n                        ")])})),0),t._v(" "),t.getPermisoByNombre("agregar-otra")?r("div",{staticClass:"input-group-append"},[r("button",{staticClass:"btn-icon btn-icon-only btn-pill btn btn-outline-success",on:{click:function(e){return e.preventDefault(),t.showModal("color")}}},[r("i",{staticClass:"fas fa-plus"})])]):t._e()]),t._v(" "),t.$v.parametros.color.$error&&!t.$v.parametros.color.required?r("em",{staticClass:"text-error-select"},[t._v(t._s(t.mensajes.required))]):t._e()]),t._v(" "),r("div",{staticClass:"col-md-6"},[r("label",{attrs:{for:"textura"}},[t._v("Textura")]),t._v(" "),r("div",{staticClass:"input-group mb-3"},[r("select",{directives:[{name:"model",rawName:"v-model.trim",value:t.$v.parametros.textura.$model,expression:"$v.parametros.textura.$model",modifiers:{trim:!0}}],class:["form-control",t.$v.parametros.textura.$error?"error-input-select":""],attrs:{name:"select",id:"textura"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.$v.parametros.textura,"$model",e.target.multiple?r:r[0])}}},t._l(t.obtenerTexturas,(function(e,a){return r("option",{key:a,domProps:{value:e.id}},[t._v("\n                          "+t._s(e.nombre)+"\n                        ")])})),0),t._v(" "),t.getPermisoByNombre("agregar-otra")?r("div",{staticClass:"input-group-append"},[r("button",{staticClass:"btn-icon btn-icon-only btn-pill btn btn-outline-success",on:{click:function(e){return e.preventDefault(),t.showModal("textura")}}},[r("i",{staticClass:"fas fa-plus"})])]):t._e()]),t._v(" "),t.$v.parametros.textura.$error&&!t.$v.parametros.textura.required?r("em",{staticClass:"text-error-select"},[t._v(t._s(t.mensajes.required))]):t._e()])])]:t._e(),t._v(" "),r("div",{staticClass:"position-relative form-group"},[r("label",{attrs:{for:"imagen"}},[t._v("Imagen")]),t._v(" "),r("input",{ref:"inputImagen",class:["form-control-file",t.$v.parametros.imagen.$error?"error-input-select":""],attrs:{dusk:"imagen",name:"imagen",id:"imagen",accept:"image/jpeg, image/png",type:"file"},on:{change:t.obtenerImagen}}),t._v(" "),t.imagenError?r("em",{staticClass:"text-error-input"},[t._v(t._s(t.imagenError))]):t._e(),t._v(" "),t.$v.parametros.imagen.$error&&!t.$v.parametros.imagen.required?r("em",{staticClass:"text-error-input"},[t._v(t._s(t.mensajes.required))]):t._e()]),t._v(" "),r("div",{staticClass:"position-relative form-group"},[r("label",{attrs:{for:"topografia_superficie"}},[t._v("Topografía de la Superficie")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.$v.parametros.topografia_superficie.$model,expression:"$v.parametros.topografia_superficie.$model",modifiers:{trim:!0}}],class:["form-control",t.$v.parametros.topografia_superficie.$error?"error-input-select":""],attrs:{dusk:"topografia_superficie",name:"topografia_superficie",id:"topografia_superficie",placeholder:"...",type:"text"},domProps:{value:t.$v.parametros.topografia_superficie.$model},on:{input:function(e){e.target.composing||t.$set(t.$v.parametros.topografia_superficie,"$model",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),t.$v.parametros.topografia_superficie.$error&&!t.$v.parametros.topografia_superficie.required?r("em",{staticClass:"text-error-input"},[t._v(t._s(t.mensajes.required))]):t._e()]),t._v(" "),r("div",{staticClass:"position-relative form-group"},[r("label",{attrs:{for:"borde_colonia"}},[t._v("Borde de la Colonia")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.$v.parametros.borde_colonia.$model,expression:"$v.parametros.borde_colonia.$model",modifiers:{trim:!0}}],class:["form-control",t.$v.parametros.borde_colonia.$error?"error-input-select":""],attrs:{dusk:"borde_colonia",name:"borde_colonia",id:"borde_colonia",placeholder:"...",type:"text"},domProps:{value:t.$v.parametros.borde_colonia.$model},on:{input:function(e){e.target.composing||t.$set(t.$v.parametros.borde_colonia,"$model",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),t.$v.parametros.borde_colonia.$error&&!t.$v.parametros.borde_colonia.required?r("em",{staticClass:"text-error-input"},[t._v(t._s(t.mensajes.required))]):t._e()]),t._v(" "),r("button",{staticClass:"mb-2 mr-2 btn btn-block",class:t.btnClase,attrs:{dusk:"btn-accion",disabled:t.bloquearBtn}},[t._v("\n                "+t._s(t.nomBtnComputed)+"\n              ")])],2)])])]),t._v(" "),r("div",{staticClass:"col-sm-6"},[r("div",{staticClass:"main-card mb-3 card"},[r("div",{staticClass:"card-body"},[t.mostraImagen?[t.validarCroppie?[r("Croppie",{attrs:{id:"croppie",imagen:t.mostraImagen,mostrarBtnCroppie:t.mostrarBtnCroppie,enableZoom:!1,zoom:0,editar:!0,boundaryHeigth:300,viewportWidth:200},on:{cambiarValorImagen:t.cambiarValorImagen}})]:[r("Croppie",{attrs:{id:"croppie",imagen:t.mostraImagen,mostrarBtnCroppie:t.mostrarBtnCroppie,zoom:1,enableZoom:!0,editar:!1,boundaryHeigth:300,viewportWidth:200},on:{cambiarValorImagen:t.cambiarValorImagen}})]]:[t._m(0)]],2)])])])]),t._v(" "),r("ModalAgregarInfo",{attrs:{url:"info-caract-levaduras",tipo:t.tipoModal,titulo:t.tituloModal,tipoForm:"levadura"}})],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-center"},[e("h5",{staticClass:"mt-5 mb-5"},[e("span",{staticClass:"pr-1"},[e("b",{staticClass:"text-success"},[this._v("SIN IMAGEN")])])])])}],!1,null,null,null).exports,ModalEliminar:r(33).a},mixins:[i.a,o.a],methods:b({},a.a.mapActions("cepa",["accionAgregarCaract","accionEditarCaract","accionEliminarCaract"])),computed:b({},a.a.mapGetters("cepa",["getCaractMacro"]))},_=Object(h.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"tabs-animation"},[r("div",{staticClass:"mb-3 card"},[r("div",{staticClass:"card-header-tab card-header"},[t._m(0),t._v(" "),r("div",{staticClass:"btn-actions-pane-right text-capitalize"},[r("button",{directives:[{name:"show",rawName:"v-show",value:t.mostrarBtnCancelar,expression:"mostrarBtnCancelar"}],staticClass:"btn-wide btn-outline-2x mr-md-2 btn btn-outline-danger btn-sm",on:{click:t.cancelar}},[t._v("\n            Cancelar\n          ")]),t._v(" "),r("button",{directives:[{name:"show",rawName:"v-show",value:t.mostrarBtnEliminar,expression:"mostrarBtnEliminar"}],staticClass:"btn-wide btn-outline-2x mr-md-2 btn btn-outline-danger btn-sm",attrs:{dusk:"btn-eliminar"},on:{click:t.eliminarMedio}},[t._v("\n            Eliminar Medio\n          ")]),t._v(" "),r("button",{directives:[{name:"show",rawName:"v-show",value:t.mostrarBtnAgregarComputed,expression:"mostrarBtnAgregarComputed"}],staticClass:"btn-wide btn-outline-2x mr-md-2 btn btn-outline-success btn-sm",attrs:{dusk:"btn-agregar"},on:{click:t.abrirForm}},[t._v("\n            Agregar Medio\n          ")])])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12"},[t.mostrarForms?[r("div",{staticClass:"tabs-lg-alternate card-header"},[r("ul",{staticClass:"nav nav-justified"},[t.mostrar1?[r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link",class:t.computedActive1,on:{click:function(e){return t.cambiarActive(1)}}},[r("div",{staticClass:"widget-number text-success"},[t._v("Medio 1")]),t._v(" "),r("div",{staticClass:"tab-subheading"},[t._m(1),t._v("\n                        "+t._s(t.medio1)+"\n                      ")])])])]:t._e(),t._v(" "),t.mostrar2?[r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link",class:t.computedActive2,on:{click:function(e){return t.cambiarActive(2)}}},[r("div",{staticClass:"widget-number text-success"},[t._v("Medio 2")]),t._v(" "),r("div",{staticClass:"tab-subheading"},[t._m(2),t._v("\n                        "+t._s(t.medio2)+"\n                      ")])])])]:t._e(),t._v(" "),t.mostrar3?[r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link",class:t.computedActive3,on:{click:function(e){return t.cambiarActive(3)}}},[r("div",{staticClass:"widget-number text-success"},[t._v("Medio 3")]),t._v(" "),r("div",{staticClass:"tab-subheading"},[t._m(3),t._v("\n                        "+t._s(t.medio3)+"\n                      ")])])])]:t._e()],2)]),t._v(" "),r("div",{staticClass:"tab-content"},[t.mostrar1?[r("div",{staticClass:"tab-pane",class:t.computedActive1},[r("div",{staticClass:"card-body"},[t.computedMostrarForm1?[r("FormCaractMacro",{attrs:{info:t.getCaractMacro[0],modificarInfo:t.modificarForm},on:{agregar:t.agregarInfo,editar:t.editarInfo,cambiarVariable:t.cambiarVariable}})]:t._e()],2)])]:t._e(),t._v(" "),t.mostrar2?[r("div",{staticClass:"tab-pane",class:t.computedActive2},[r("div",{staticClass:"card-body"},[t.computedMostrarForm2?[r("FormCaractMacro",{attrs:{info:t.getCaractMacro[1],modificarInfo:t.modificarForm},on:{agregar:t.agregarInfo,editar:t.editarInfo,cambiarVariable:t.cambiarVariable}})]:t._e()],2)])]:t._e(),t._v(" "),t.mostrar3?[r("div",{staticClass:"tab-pane",class:t.computedActive3},[r("div",{staticClass:"card-body"},[t.computedMostrarForm3?[r("FormCaractMacro",{attrs:{info:t.getCaractMacro[2],modificarInfo:t.modificarForm},on:{agregar:t.agregarInfo,editar:t.editarInfo,cambiarVariable:t.cambiarVariable}})]:t._e()],2)])]:t._e()],2)]:[t._m(4)]],2)])])]),t._v(" "),r("ModalEliminar",{attrs:{tipo:"Característica",tipoCaract:"Característica Macroscópica",caract:t.caract,url:"levadura/caract-macro"},on:{eliminar:t.eliminarInfo}})],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header-title font-size-lg text-capitalize font-weight-normal"},[e("i",{staticClass:"header-icon lnr-charts icon-gradient bg-happy-green"}),this._v("\n          Características Macroscópicas\n        ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"pr-2 opactiy-6"},[e("i",{staticClass:"pe-7s-note2"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"pr-2 opactiy-6"},[e("i",{staticClass:"pe-7s-note2"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"pr-2 opactiy-6"},[e("i",{staticClass:"pe-7s-note2"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-center"},[e("h5",{staticClass:"mt-5 mb-5"},[e("span",{staticClass:"pr-1"},[e("b",{staticClass:"text-success"},[this._v("NO SE HA AGREGADO NINGÚN MEDIO")])])])])}],!1,null,null,null);e.default=_.exports},60:function(t,e,r){"use strict";var a=r(6),i=r(0);function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var c={props:["titulo","tipo","url","tipoForm"],data:function(){return{nombre:"",errors:[],bloquearBtnModal:!1,mensajes:{required:"El campo es requerido.",unique:"Ya existe un registro con ese nombre."}}},validations:{nombre:{required:r(2).required,unique:function(t){return""==t||!this.validarNombreUnico}}},mixins:[a.a],methods:s(s(s(s(s({},i.a.mapActions("info_caract",["accionAgregarTipoCaractLevadura","accionAgregarTipoCaractActinomiceto","accionAgregarTipoCaractHongo","accionAgregarTipoCaractBacteria"])),i.a.mapActions("info_caract",[])),i.a.mapActions("info_caract",[])),i.a.mapActions("info_caract",[])),{},{closed:function(){this.nombre="",this.errors=[]},agregarInfo:function(){var t=this;if(this.bloquearBtnModal=!0,this.$v.nombre.$touch(),this.$v.$invalid)this.bloquearBtnModal=!1,this.toastr("Error!!","Favor corregir el Error.","error");else{var e={tipo:this.tipo,nombre:this.nombre};axios.post("/".concat(this.url,"/agregar"),e).then((function(e){"http://127.0.0.1:8000"===e.request.responseURL?(localStorage.setItem("mensajeLogin","Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"),window.location.href="/"):(t.bloquearBtnModal=!1,t.guardarInfo(e.data),t.$modal.hide("modal_agregar_info_caract"),t.toastr("Agregar Info!!","".concat(t.tipo," agregado/a con exito"),"success"))})).catch((function(e){t.verificarErrorAxios(e.response.status,e.response.data.errors)}))}},guardarInfo:function(t){switch(this.tipoForm){case"bacteria":this.accionAgregarTipoCaractBacteria({info:t,tipo:this.tipo});break;case"hongo":this.accionAgregarTipoCaractHongo({info:t,tipo:this.tipo});break;case"levadura":this.accionAgregarTipoCaractLevadura({info:t,tipo:this.tipo});break;case"actinomiceto":this.accionAgregarTipoCaractActinomiceto({info:t,tipo:this.tipo})}},verificarErrorAxios:function(t,e){403===t?this.$router.push("/sin-acceso"):405===t||401===t?window.location.href="/":(422===t&&(this.errors=[],this.errors=e),this.bloquearBtnModal=!1,this.toastr("Error!!","","error"))}}),computed:s(s({},i.a.mapGetters("info_caract",["getInfoCaractMacroBacteriasByNombre","getInfoCaractMicroBacteriasByNombre","getInfoMetodoConserBacteriasByNombre","getInfoCaractMacroHongosByNombre","getInfoCaractMicroHongosByNombre","getInfoMetodoConserHongosByNombre","getInfoCaractMacroLevadurasByNombre","getInfoMetodoConserLevadurasByNombre","getInfoCaractMacroActinomicetosByNombre","getInfoCaractMicroActinomicetosByNombre"])),{},{validarNombreUnico:function(){switch(this.tipoForm){case"bacteria":if("borde"==this.tipo||"color"==this.tipo||"detalle"==this.tipo||"elevacion"==this.tipo||"forma_macro"==this.tipo||"superficie"==this.tipo){if(this.getInfoCaractMacroBacteriasByNombre({nombre:this.nombre,tipo:this.tipo}))return!0}else if("forma_micro"==this.tipo){if(this.getInfoCaractMicroBacteriasByNombre({nombre:this.nombre,tipo:this.tipo}))return!0}else if(this.getInfoMetodoConserBacteriasByNombre({nombre:this.nombre,tipo:this.tipo}))return!0;return!1;case"hongo":if("color"==this.tipo||"textura"==this.tipo){if(this.getInfoCaractMacroHongosByNombre({nombre:this.nombre,tipo:this.tipo}))return!0}else if("conidioforo"==this.tipo||"esporaA"==this.tipo||"esporaS"==this.tipo){if(this.getInfoCaractMicroHongosByNombre({nombre:this.nombre,tipo:this.tipo}))return!0}else if(this.getInfoMetodoConserHongosByNombre({nombre:this.nombre,tipo:this.tipo}))return!0;return!1;case"levadura":if("color"==this.tipo||"textura"==this.tipo){if(this.getInfoCaractMacroLevadurasByNombre({nombre:this.nombre,tipo:this.tipo}))return!0}else if(this.getInfoMetodoConserLevadurasByNombre({nombre:this.nombre,tipo:this.tipo}))return!0;break;case"actinomiceto":if("borde"==this.tipo||"color"==this.tipo||"textura"==this.tipo||"pigmento"==this.tipo||"forma_macro"==this.tipo||"superficie"==this.tipo){if(this.getInfoCaractMacroActinomicetosByNombre({nombre:this.nombre,tipo:this.tipo}))return!0}else if(("forma_micro"==this.tipo||"conidioforo"==this.tipo||"tincion"==this.tipo||"micelio"==this.tipo)&&this.getInfoCaractMicroActinomicetosByNombre({nombre:this.nombre,tipo:this.tipo}))return!0;return!1}}})},l=r(1),m=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("transition",{attrs:{name:"fade"}},[r("modal",{attrs:{name:"modal_agregar_info_caract",classes:"my_modal",maxWidth:450,adaptive:!0,height:"auto",scrollable:!0},on:{closed:t.closed}},[r("div",{staticClass:"modal-content"},[r("div",{staticClass:"modal-header"},[r("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLongTitle"}},[t._v(t._s(t.titulo))]),t._v(" "),r("button",{staticClass:"close",attrs:{type:"button"},on:{click:function(e){return t.$modal.hide("modal_agregar_info_caract")}}},[r("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),r("div",{staticClass:"modal-body"},[r("div",{staticClass:"position-relative form-group"},[r("label",{attrs:{for:"nombre"}},[t._v("Nombre")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.$v.nombre.$model,expression:"$v.nombre.$model",modifiers:{trim:!0}}],class:["form-control",t.errors.nombre||t.$v.nombre.$error?"error-input-select":""],attrs:{name:"nombre",id:"nombre",placeholder:"...",type:"text"},domProps:{value:t.$v.nombre.$model},on:{input:function(e){e.target.composing||t.$set(t.$v.nombre,"$model",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),t.errors.nombre?r("em",{staticClass:"text-error-input"},[t._v(t._s(t.errors.nombre[0]))]):t._e(),t._v(" "),t.$v.nombre.$error&&!t.$v.nombre.required?r("em",{staticClass:"text-error-input"},[t._v(t._s(t.mensajes.required))]):t._e(),t._v(" "),t.$v.nombre.$error&&!t.$v.nombre.unique?r("em",{staticClass:"text-error-input"},[t._v(t._s(t.mensajes.unique))]):t._e()])]),t._v(" "),r("div",{staticClass:"modal-footer"},[r("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(e){return t.$modal.hide("modal_agregar_info_caract")}}},[t._v("Cancelar")]),t._v(" "),r("button",{staticClass:"btn btn-success",attrs:{type:"button",disabled:t.bloquearBtnModal},on:{click:t.agregarInfo}},[t._v("Agregar")])])])])],1)],1)}),[],!1,null,null,null);e.a=m.exports},87:function(t,e,r){"use strict";var a={data:function(){return{imagenMiniatura:"",imagenError:""}},methods:{cambiarValorImagen:function(t){t?this.parametros.imagen=t:this.validarTipoForm?this.parametros.imagen="":(this.parametros.imagen=this.info.imagen,this.imagenMiniatura=this.info.imagenPublica,this.$refs.inputImagen.value="")},obtenerImagen:function(t){var e=t.target.files[0];e?!/(.jpg|.jpeg|.png)$/i.exec(e.name)||e.size>2e6?(this.imagenError="La imagen debe ser en formato .png .jpg y menor a 2Mb.",this.$refs.inputImagen.value="",this.info?(this.imagenMiniatura=this.info.imagenPublica,this.parametros.imagen=this.info.imagen):(this.imagenMiniatura="",this.parametros.imagen="")):(this.imagenError="",this.cargarImagen(e)):this.info?(this.imagenMiniatura=this.info.imagenPublica,this.parametros.imagen=this.info.imagen):(this.parametros.imagen="",this.imagenMiniatura="")},cargarImagen:function(t){var e=this,r=new Image;r.onload=function(t){e.imagenMiniatura=r.src},r.src=URL.createObjectURL(t)}},computed:{mostraImagen:function(){return this.imagenMiniatura},mostrarBtnCroppie:function(){return!this.info||this.imagenMiniatura!=this.info.imagenPublica},validarCroppie:function(){return!!this.info&&this.imagenMiniatura==this.info.imagenPublica}}};e.a=a}}]);