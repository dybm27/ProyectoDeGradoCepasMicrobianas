!function(e){const r=e.es=e.es||{};r.dictionary=Object.assign(r.dictionary||{},{"%0 of %1":"%0 de %1","Align cell text to the bottom":"","Align cell text to the center":"","Align cell text to the left":"","Align cell text to the middle":"","Align cell text to the right":"","Align cell text to the top":"","Align center":"Centrar","Align left":"Alinear a la izquierda","Align right":"Alinear a la derecha","Align table to the left":"","Align table to the right":"",Alignment:"",Aquamarine:"Aguamarina",Background:"",Big:"Grande",Black:"Negro","Block quote":"Entrecomillado",Blue:"Azul","Blue marker":"Marcador azul",Bold:"Negrita",Border:"","Bulleted List":"Lista de puntos",Cancel:"Cancelar","Cell properties":"","Center table":"","Centered image":"Imagen centrada","Change image text alternative":"Cambiar el texto alternativo de la imagen","Choose heading":"Elegir Encabezado",Color:"","Color picker":"",Column:"Columna",Dashed:"","Decrease indent":"Disminuir sangría",Default:"Por defecto","Delete column":"Eliminar columna","Delete row":"Eliminar fila","Dim grey":"Gris Oscuro",Dimensions:"","Document colors":"Colores del documento",Dotted:"",Double:"",Downloadable:"Descargable","Dropdown toolbar":"Barra de herramientas desplegable","Edit link":"Editar enlace","Editor toolbar":"Barra de herramientas de edición","Enter image caption":"Introducir título de la imagen","Font Background Color":"Color de Fondo","Font Color":"Color de Fuente","Font Family":"Fuente","Font Size":"Tamaño de fuente","Full size image":"Imagen a tamaño completo",Green:"Verde","Green marker":"Marcador verde","Green pen":"Texto verde",Grey:"Gris",Groove:"","Header column":"Columna de encabezado","Header row":"Fila de encabezado",Heading:"Encabezado","Heading 1":"Encabezado 1","Heading 2":"Encabezado 2","Heading 3":"Encabezado 3","Heading 4":"Encabezado 4","Heading 5":"Encabezado 5","Heading 6":"Encabezado 6",Height:"",Highlight:"Resaltar","Horizontal line":"Línea horizontal","Horizontal text alignment toolbar":"",Huge:"Enorme","Image toolbar":"Barra de herramientas de imagen","image widget":"Widget de imagen","Increase indent":"Aumentar sangría","Insert column left":"Insertar columna izquierda","Insert column right":"Insertar columna derecha","Insert image":"Insertar imagen","Insert media":"Insertar contenido multimedia","Insert paragraph after block":"","Insert paragraph before block":"","Insert row above":"Insertar fila encima","Insert row below":"Insertar fila debajo","Insert table":"Insertar tabla",Inset:"",Italic:"Cursiva",Justify:"Justificar","Justify cell text":"","Left aligned image":"Imagen alineada a la izquierda","Light blue":"Azul Claro","Light green":"Verde Claro","Light grey":"Gris Claro",Link:"Enlace","Link URL":"URL del enlace","Media URL":"URL del contenido multimedia","media widget":"Widget de contenido multimedia","Merge cell down":"Combinar celda inferior","Merge cell left":"Combinar celda izquierda","Merge cell right":"Combinar celda derecha","Merge cell up":"Combinar celda superior","Merge cells":"Combinar celdas",Next:"Siguiente",None:"","Numbered List":"Lista numerada","Open in a new tab":"Abrir en una pestaña nueva ","Open link in new tab":"Abrir enlace en una pestaña nueva",Orange:"Anaranjado",Outset:"",Padding:"",Paragraph:"Párrafo","Paste the media URL in the input.":"Pega la URL del contenido multimedia","Pink marker":"Marcador rosa",Previous:"Anterior",Purple:"Morado",Red:"Rojo","Red pen":"Texto rojo",Redo:"Rehacer","Remove color":"Remover color","Remove highlight":"Quitar resaltado","Rich Text Editor":"Editor de Texto Enriquecido","Rich Text Editor, %0":"Editor de Texto Enriquecido, %0",Ridge:"","Right aligned image":"Imagen alineada a la derecha",Row:"Fila",Save:"Guardar","Select column":"","Select row":"","Show more items":"Mostrar más elementos","Side image":"Imagen lateral",Small:"Pequeño",Solid:"","Split cell horizontally":"Dividir celdas horizontalmente","Split cell vertically":"Dividir celdas verticalmente",Strikethrough:"Tachado",Style:"",Subscript:"Subíndice",Superscript:"Superíndice","Table alignment toolbar":"","Table cell text alignment":"","Table properties":"","Table toolbar":"Barra de herramientas de tabla","Text alignment":"Alineación del texto","Text alignment toolbar":"Barra de herramientas de alineación del texto","Text alternative":"Texto alternativo","Text highlight toolbar":"Barra de herramientas de resaltado de texto",'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".':"","The URL must not be empty.":"La URL no debe estar vacía",'The value is invalid. Try "10px" or "2em" or simply "2".':"","This link has no URL":"Este enlace no tiene URL","This media URL is not supported.":"La URL de este contenido multimedia no está soportada",Tiny:"Minúsculo","Tip: Paste the URL into the content to embed faster.":"Tip: pega la URL dentro del contenido para embeber más rápido",Turquoise:"Turquesa",Underline:"Subrayado",Undo:"Deshacer",Unlink:"Quitar enlace","Upload failed":"Fallo en la subida","Upload in progress":"Subida en progreso","Vertical text alignment toolbar":"",White:"Blanco","Widget toolbar":"Barra de herramientas del widget",Width:"",Yellow:"Amarillo","Yellow marker":"Marcador amarillo"}),r.getPluralForm=function(e){return 1!=e}}(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{158:function(e,r,t){"use strict";var a={data:function(){return{imagenMiniatura1:"",imagenMiniatura2:"",imagenError:{imagen1:"",imagen2:""},imagenInfo1:"",imagenInfo2:"",imagenInfoPublica1:"",imagenInfoPublica2:""}},methods:{cambiarValorImagen1:function(e){e?this.parametros.imagen1=e:this.validarTipoForm?this.parametros.imagen1="":(this.parametros.imagen1=this.imagenInfo1,this.imagenMiniatura1=this.imagenInfoPublica1,this.$refs.inputImagen1.value="")},cambiarValorImagen2:function(e){e?this.parametros.imagen2=e:this.validarTipoForm?this.parametros.imagen2="":(this.parametros.imagen2=this.imagenInfo2,this.imagenMiniatura2=this.imagenInfoPublica2,this.$refs.inputImagen2.value="")},obtenerImagen1:function(e){var r=e.target.files[0];r?!/(.jpg|.jpeg|.png)$/i.exec(r.name)||r.size>2e6?(this.imagenError.imagen1="La imagen debe ser en formato .png .jpg y menor a 2Mb.",this.validarTipoForm?(this.imagenMiniatura1="",this.parametros.imagen1=""):(this.imagenMiniatura1=this.imagenInfoPublica1,this.parametros.imagen1=this.imagenInfo1),this.$refs.inputImagen1.value=""):(this.imagenError.imagen1="",this.cargarImagen(r,"imagen1")):this.validarTipoForm?(this.imagenMiniatura1="",this.parametros.imagen1=""):(this.imagenMiniatura1=this.imagenInfoPublica1,this.parametros.imagen1=this.imagenInfo1)},obtenerImagen2:function(e){var r=e.target.files[0];r?!/(.jpg|.jpeg|.png)$/i.exec(r.name)||r.size>2e6?(this.imagenError.imagen2="La imagen debe ser en formato .png .jpg y menor a 2Mb.",this.validarTipoForm?(this.imagenMiniatura2="",this.parametros.imagen2=""):(this.imagenMiniatura2=this.imagenInfoPublica2,this.parametros.imagen2=this.imagenInfo2),this.$refs.inputImagen2.value=""):(this.imagenError.imagen2="",this.cargarImagen(r,"imagen2")):this.validarTipoForm?(this.imagenMiniatura2="",this.parametros.imagen2=""):(this.imagenMiniatura2=this.imagenInfoPublica2,this.parametros.imagen2=this.imagenInfo2)},cargarImagen:function(e,r){var t=this,a=new FileReader;a.onload=function(e){switch(r){case"imagen1":t.imagenMiniatura1=e.target.result;break;case"imagen2":t.imagenMiniatura2=e.target.result}},a.readAsDataURL(e)}},computed:{mostraImagen1:function(){return this.imagenMiniatura1},mostraImagen2:function(){return this.imagenMiniatura2},mostrarBtnCroppie1:function(){return!this.info||this.imagenMiniatura1!=this.imagenInfoPublica1},mostrarBtnCroppie2:function(){return!this.info||this.imagenMiniatura2!=this.imagenInfoPublica2},validarCroppie1:function(){return!!this.info&&this.imagenMiniatura1==this.imagenInfoPublica1},validarCroppie2:function(){return!!this.info&&this.imagenMiniatura2==this.imagenInfoPublica2}}};r.a=a},31:function(e,r,t){"use strict";var a=t(157),i=t.n(a),o={props:["id","imagen","mostrarBtnCroppie","zoom","editar","enableZoom","boundaryHeigth","viewportWidth"],data:function(){return{croppie:null,btnAprobar:!0}},mounted:function(){this.crearCroppie()},methods:{crearCroppie:function(){var e=document.getElementById(this.id);this.croppie=new i.a(e,{viewport:{width:this.viewportWidth,height:200},boundary:{height:this.boundaryHeigth},enableZoom:this.enableZoom}),this.croppie.bind({url:this.imagen,zoom:this.zoom})},resultado:function(){var e=this;this.croppie.result().then((function(r){e.btnAprobar=!1,e.$emit("cambiarValorImagen",r)}))},cancelar:function(){this.btnAprobar=!0,this.$emit("cambiarValorImagen","")}},watch:{imagen:function(){this.imagen&&(this.btnAprobar=!0,this.croppie.destroy(),this.crearCroppie())}},computed:{mostrarMensaje:function(){return!(!this.btnAprobar||this.editar)}}},n=t(1),s=Object(n.a)(o,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"container"},[t("div",{attrs:{id:e.id}}),e._v(" "),e.mostrarBtnCroppie?[e.btnAprobar?[t("button",{staticClass:"btn btn-success",on:{click:e.resultado}},[e._v("Aprobar Imagen")]),e._v(" "),e.mostrarMensaje?t("em",{staticClass:"text-danger small"},[e._v("Debe Aprobar la imagen")]):e._e()]:[t("button",{staticClass:"btn btn-danger float-right",on:{click:e.cancelar}},[e._v("Cancelar")])]]:e._e()],2)}),[],!1,null,null,null);r.a=s.exports},33:function(e,r,t){"use strict";var a={props:["tipo","tipoCaract","caract","url"],data:function(){return{bloquearBtnModal:!1}},mixins:[t(6).a],methods:{eliminar:function(){var e=this;this.bloquearBtnModal=!0,axios.delete("/cepas/".concat(this.url+"/"+this.caract.id)).then((function(r){e.bloquearBtnModal=!1,e.$modal.hide("modal_eliminar_caract"),e.$emit("eliminar",r.data),e.toastr("Eliminar "+e.tipo,e.tipoCaract+" eliminadas con exito!!","success")})).catch((function(r){403===r.response.status?e.$router.push("/sin-acceso"):405===r.response.status||401===r.response.status?(localStorage.setItem("mensajeLogin","Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"),window.location.href="/"):(e.bloquearBtnModal=!1,e.toastr("Error!!","","error"))}))}}},i=t(1),o=Object(i.a)(a,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("transition",{attrs:{name:"fade"}},[t("modal",{attrs:{name:"modal_eliminar_caract",classes:"my_modal",maxWidth:400,adaptive:!0,height:"auto",scrollable:!0}},[t("div",{staticClass:"modal-content"},[t("div",{staticClass:"modal-header"},[t("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLongTitle"}},[e._v("Eliminar "+e._s(e.tipoCaract))]),e._v(" "),t("button",{staticClass:"close",attrs:{type:"button"},on:{click:function(r){return e.$modal.hide("modal_eliminar_caract")}}},[t("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])]),e._v(" "),t("div",{staticClass:"modal-body"},[t("p",[e._v("Esta segura/o de eliminar la "+e._s(e.tipo)+"?.")])]),e._v(" "),t("div",{staticClass:"modal-footer"},[t("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(r){return e.$modal.hide("modal_eliminar_caract")}}},[e._v("Cancelar")]),e._v(" "),t("button",{staticClass:"btn btn-success",attrs:{type:"button",disabled:e.bloquearBtnModal},on:{click:e.eliminar}},[e._v("Eliminar")])])])])],1)],1)}),[],!1,null,null,null);r.a=o.exports},446:function(e,r,t){"use strict";t.r(r);var a=t(0),i=t(6),o=t(158),n=t(31),s=t(2);function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){m(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function m(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var d={components:{Croppie:n.a},props:["info","modificarInfo"],data:function(){return{parametros:{cepaId:"",nombre_forward:"",nombre_reversed:"",secuencia_forward:"",secuencia_reversed:"",producto_forward:"",producto_reversed:"",condiciones_pcr:"",blast:"",analisis_filogenetico:"",observaciones:"",imagen1:"",imagen2:""},tituloForm:"",nomBtn:"",errors:[],bloquearBtn:!1,mensajes:{required:"El campo es requerido"}}},validations:{parametros:{nombre_forward:{required:s.required},nombre_reversed:{required:s.required},secuencia_forward:{required:s.required},secuencia_reversed:{required:s.required},producto_forward:{required:s.required},producto_reversed:{required:s.required},condiciones_pcr:{required:s.required},blast:{required:s.required},analisis_filogenetico:{required:s.required},imagen1:{required:s.required},imagen2:{required:s.required}}},mixins:[i.a,o.a],watch:{modificarInfo:function(){this.modificarInfo&&(this.llenarInfo(),this.$emit("cambiarVariable"))}},methods:{evento:function(){var e=this;this.bloquearBtn=!0,this.$v.parametros.$touch(),this.$v.$invalid?(this.bloquearBtn=!1,this.toastr("Error!!","Favor llenar correctamente los campos","error")):"Agregar Identificación"===this.tituloForm?axios.post("/cepas/hongo/identi-molecu",this.parametros).then((function(r){"http://127.0.0.1:8000/"===r.request.responseURL?(localStorage.setItem("mensajeLogin","Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"),window.location.href="/"):(e.bloquearBtn=!1,e.errors=[],e.$refs.inputImagen1.value="",e.$refs.inputImagen2.value="",e.tituloForm="Editar Identificación",e.nomBtn="Editar",e.$emit("agregar",r.data),e.toastr("Agregar Identificación","Identificación Molecular agregada con exito!!","success"))})).catch((function(r){e.verificarError(r.response.status,r.response.data.errors)})):axios.put("/cepas/hongo/identi-molecu/".concat(this.info.id),this.parametros).then((function(r){e.bloquearBtn=!1,e.errors=[],e.$refs.inputImagen1.value="",e.$refs.inputImagen2.value="",e.$emit("editar",r.data),e.toastr("Editar Identificación","Identificación Molecular editada con exito!!","success")})).catch((function(r){e.verificarError(r.response.status,r.response.data.errors)}))},llenarInfo:function(){this.parametros.nombre_forward=this.info.nombre_forward,this.parametros.nombre_reversed=this.info.nombre_reversed,this.parametros.secuencia_forward=this.info.secuencia_forward,this.parametros.secuencia_reversed=this.info.secuencia_reversed,this.parametros.producto_forward=this.info.producto_forward,this.parametros.producto_reversed=this.info.producto_reversed,this.parametros.condiciones_pcr=this.info.condiciones_pcr,this.parametros.blast=this.info.blast,this.parametros.analisis_filogenetico=this.info.analisis_filogenetico,this.parametros.observaciones=this.info.observaciones,this.parametros.imagen1=this.info.imagen_pcr,this.parametros.imagen2=this.info.imagen_blast,this.imagenMiniatura1=this.info.imagen_pcrPublica,this.imagenMiniatura2=this.info.imagen_blastPublica,this.imagenInfo1=this.info.imagen_pcr,this.imagenInfo2=this.info.imagen_blast,this.imagenInfoPublica1=this.info.imagen_pcrPublica,this.imagenInfoPublica2=this.info.imagen_blastPublica}},computed:l(l({},a.a.mapGetters("info_cepas",["getGeneroCepa","getEspecieCepa"])),{},{btnClase:function(){return"Agregar Identificación"===this.tituloForm?"btn-success":"btn-warning"},validarTipoForm:function(){return"Agregar Identificación"===this.tituloForm},titulo:function(){return this.tituloForm},nomBtnComputed:function(){return this.nomBtn}}),mounted:function(){this.info?(this.llenarInfo(),this.tituloForm="Editar Identificación",this.nomBtn="Editar"):(this.tituloForm="Agregar Identificación",this.nomBtn="Agregar");var e=[];this.$route.params.cepaHongoSlug?(e=this.$route.params.cepaHongoSlug.split("-"),this.parametros.cepaId=parseInt(e[e.length-1])):(e=this.$route.params.cepaSlug.split("-"),this.parametros.cepaId=parseInt(e[e.length-1]))}},u=t(1);function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function g(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){v(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function v(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var f={components:{FormIdentiMolecu:Object(u.a)(d,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"container mt-4"},[t("div",{staticClass:"row justify-content-md-center"},[t("div",{staticClass:"col-md-12"},[t("div",{staticClass:"main-card mb-3 card"},[t("div",{staticClass:"card-body"},[t("h5",{staticClass:"card-title"},[e._v(e._s(e.titulo))]),e._v(" "),t("form",{on:{submit:function(r){return r.preventDefault(),e.evento(r)}}},[""!=e.errors?[t("div",{staticClass:"alert alert-danger"},e._l(e.errors,(function(r,a){return t("p",{key:a},[e._v(e._s(r[0]))])})),0)]:e._e(),e._v(" "),t("div",{staticClass:"position-relative form-group"},[t("label",{attrs:{for:"medio"}},[e._v("Primers")]),e._v(" "),t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-3"},[t("div",{staticClass:"input-group"},[e._m(0),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.parametros.nombre_forward.$model,expression:"$v.parametros.nombre_forward.$model",modifiers:{trim:!0}}],class:["form-control",e.$v.parametros.nombre_forward.$error?"error-input-select":""],attrs:{placeholder:"Nombre..",name:"nombre_forward",id:"nombre_forward",type:"text"},domProps:{value:e.$v.parametros.nombre_forward.$model},on:{input:function(r){r.target.composing||e.$set(e.$v.parametros.nombre_forward,"$model",r.target.value.trim())},blur:function(r){return e.$forceUpdate()}}}),e._v(" "),e.$v.parametros.nombre_forward.$error&&!e.$v.parametros.nombre_forward.required?t("em",{staticClass:"text-error-input"},[e._v(e._s(e.mensajes.required))]):e._e()])]),e._v(" "),t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"position-relative form-group"},[t("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.parametros.secuencia_forward.$model,expression:"$v.parametros.secuencia_forward.$model",modifiers:{trim:!0}}],class:["form-control",e.$v.parametros.secuencia_forward.$error?"error-input-select":""],attrs:{name:"secuencia_forward",id:"secuencia_forward",placeholder:"Secuencia...",type:"text"},domProps:{value:e.$v.parametros.secuencia_forward.$model},on:{input:function(r){r.target.composing||e.$set(e.$v.parametros.secuencia_forward,"$model",r.target.value.trim())},blur:function(r){return e.$forceUpdate()}}}),e._v(" "),e.$v.parametros.secuencia_forward.$error&&!e.$v.parametros.secuencia_forward.required?t("em",{staticClass:"text-error-input"},[e._v(e._s(e.mensajes.required))]):e._e()])]),e._v(" "),t("div",{staticClass:"col-md-3"},[t("div",{staticClass:"position-relative form-group"},[t("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.parametros.producto_forward.$model,expression:"$v.parametros.producto_forward.$model",modifiers:{trim:!0}}],class:["form-control",e.$v.parametros.producto_forward.$error?"error-input-select":""],attrs:{name:"producto_forward",id:"producto_forward",placeholder:"Producto...",type:"text"},domProps:{value:e.$v.parametros.producto_forward.$model},on:{input:function(r){r.target.composing||e.$set(e.$v.parametros.producto_forward,"$model",r.target.value.trim())},blur:function(r){return e.$forceUpdate()}}}),e._v(" "),e.$v.parametros.producto_forward.$error&&!e.$v.parametros.producto_forward.required?t("em",{staticClass:"text-error-input"},[e._v(e._s(e.mensajes.required))]):e._e()])])]),e._v(" "),t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-3"},[t("div",{staticClass:"input-group"},[e._m(1),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.parametros.nombre_reversed.$model,expression:"$v.parametros.nombre_reversed.$model",modifiers:{trim:!0}}],class:["form-control",e.$v.parametros.nombre_reversed.$error?"error-input-select":""],attrs:{placeholder:"Nombre..",name:"nombre_reversed",id:"nombre_reversed",type:"text"},domProps:{value:e.$v.parametros.nombre_reversed.$model},on:{input:function(r){r.target.composing||e.$set(e.$v.parametros.nombre_reversed,"$model",r.target.value.trim())},blur:function(r){return e.$forceUpdate()}}}),e._v(" "),e.$v.parametros.nombre_reversed.$error&&!e.$v.parametros.nombre_reversed.required?t("em",{staticClass:"text-error-input"},[e._v(e._s(e.mensajes.required))]):e._e()])]),e._v(" "),t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"position-relative form-group"},[t("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.parametros.secuencia_reversed.$model,expression:"$v.parametros.secuencia_reversed.$model",modifiers:{trim:!0}}],class:["form-control",e.$v.parametros.secuencia_reversed.$error?"error-input-select":""],attrs:{name:"secuencia_reversed",id:"secuencia_reversed",placeholder:"Secuencia...",type:"text"},domProps:{value:e.$v.parametros.secuencia_reversed.$model},on:{input:function(r){r.target.composing||e.$set(e.$v.parametros.secuencia_reversed,"$model",r.target.value.trim())},blur:function(r){return e.$forceUpdate()}}}),e._v(" "),e.$v.parametros.secuencia_reversed.$error&&!e.$v.parametros.secuencia_reversed.required?t("em",{staticClass:"text-error-input"},[e._v(e._s(e.mensajes.required))]):e._e()])]),e._v(" "),t("div",{staticClass:"col-md-3"},[t("div",{staticClass:"position-relative form-group"},[t("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.parametros.producto_reversed.$model,expression:"$v.parametros.producto_reversed.$model",modifiers:{trim:!0}}],class:["form-control",e.$v.parametros.producto_reversed.$error?"error-input-select":""],attrs:{name:"producto_reversed",id:"producto_reversed",placeholder:"Producto...",type:"text"},domProps:{value:e.$v.parametros.producto_reversed.$model},on:{input:function(r){r.target.composing||e.$set(e.$v.parametros.producto_reversed,"$model",r.target.value.trim())},blur:function(r){return e.$forceUpdate()}}}),e._v(" "),e.$v.parametros.producto_reversed.$error&&!e.$v.parametros.producto_reversed.required?t("em",{staticClass:"text-error-input"},[e._v(e._s(e.mensajes.required))]):e._e()])])])]),e._v(" "),t("div",{staticClass:"form-row justify-content-md-center"},[t("div",{staticClass:"col-md-5"},[t("div",{staticClass:"input-group"},[e._m(2),e._v(" "),t("input",{staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:e.getGeneroCepa.nombre}})])]),e._v(" "),t("div",{staticClass:"col-md-5"},[t("div",{staticClass:"input-group"},[e._m(3),e._v(" "),t("input",{staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:e.getEspecieCepa.nombre}})])])]),e._v(" "),t("div",{staticClass:"form-row justify-content-md-center mt-2"},[t("div",{staticClass:"col-md-4"},[t("div",{staticClass:"position-relative form-group"},[t("label",{attrs:{for:"imagen_pcr"}},[e._v("Imagen PCR")]),e._v(" "),t("input",{ref:"inputImagen1",class:["form-control-file",e.$v.parametros.imagen1.$error?"error-input-select":""],attrs:{name:"imagen_pcr",id:"imagen_pcr",type:"file",accept:"image/jpeg, image/png"},on:{change:e.obtenerImagen1}}),e._v(" "),e.imagenError.imagen1?t("em",{staticClass:"text-error-input"},[e._v(e._s(e.imagenError.imagen1))]):e._e(),e._v(" "),e.$v.parametros.imagen1.$error&&!e.$v.parametros.imagen1.required?t("em",{staticClass:"text-error-input"},[e._v(e._s(e.mensajes.required))]):e._e()])]),e._v(" "),t("div",{staticClass:"col-md-4"},[t("div",{staticClass:"position-relative form-group"},[t("label",{attrs:{for:"imagen_blast"}},[e._v("Imagen BLAST")]),e._v(" "),t("input",{ref:"inputImagen2",class:["form-control-file",e.$v.parametros.imagen2.$error?"error-input-select":""],attrs:{name:"imagen_blast",id:"imagen_blast",type:"file",accept:"image/jpeg, image/png"},on:{change:e.obtenerImagen2}}),e._v(" "),e.imagenError.imagen2?t("em",{staticClass:"text-error-input"},[e._v(e._s(e.imagenError.imagen2))]):e._e(),e._v(" "),e.$v.parametros.imagen2.$error&&!e.$v.parametros.imagen2.required?t("em",{staticClass:"text-error-input"},[e._v(e._s(e.mensajes.required))]):e._e()])])]),e._v(" "),t("div",{staticClass:"form-row justify-content-md-center"},[t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"position-relative form-group"},[t("label",{attrs:{for:"condiciones_pcr"}},[e._v("Condiciones PCR")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.parametros.condiciones_pcr.$model,expression:"$v.parametros.condiciones_pcr.$model",modifiers:{trim:!0}}],class:["form-control",e.$v.parametros.condiciones_pcr.$error?"error-input-select":""],attrs:{name:"condiciones_pcr",id:"condiciones_pcr",placeholder:"...",type:"text"},domProps:{value:e.$v.parametros.condiciones_pcr.$model},on:{input:function(r){r.target.composing||e.$set(e.$v.parametros.condiciones_pcr,"$model",r.target.value.trim())},blur:function(r){return e.$forceUpdate()}}}),e._v(" "),e.$v.parametros.condiciones_pcr.$error&&!e.$v.parametros.condiciones_pcr.required?t("em",{staticClass:"text-error-input"},[e._v(e._s(e.mensajes.required))]):e._e()])]),e._v(" "),t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"position-relative form-group"},[t("label",{attrs:{for:"blast"}},[e._v("Blast")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.parametros.blast.$model,expression:"$v.parametros.blast.$model",modifiers:{trim:!0}}],class:["form-control",e.$v.parametros.blast.$error?"error-input-select":""],attrs:{name:"blast",id:"blast",placeholder:"...",type:"text"},domProps:{value:e.$v.parametros.blast.$model},on:{input:function(r){r.target.composing||e.$set(e.$v.parametros.blast,"$model",r.target.value.trim())},blur:function(r){return e.$forceUpdate()}}}),e._v(" "),e.$v.parametros.blast.$error&&!e.$v.parametros.blast.required?t("em",{staticClass:"text-error-input"},[e._v(e._s(e.mensajes.required))]):e._e()])])]),e._v(" "),t("div",{staticClass:"form-row justify-content-md-center"},[t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"position-relative form-group"},[t("label",{attrs:{for:"analisis_filogenetico"}},[e._v("Análisis Filogenético")]),e._v(" "),t("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.parametros.analisis_filogenetico.$model,expression:"$v.parametros.analisis_filogenetico.$model",modifiers:{trim:!0}}],class:["form-control",e.$v.parametros.analisis_filogenetico.$error?"error-input-select":""],attrs:{name:"analisis_filogenetico",id:"analisis_filogenetico"},domProps:{value:e.$v.parametros.analisis_filogenetico.$model},on:{input:function(r){r.target.composing||e.$set(e.$v.parametros.analisis_filogenetico,"$model",r.target.value.trim())},blur:function(r){return e.$forceUpdate()}}}),e._v(" "),e.$v.parametros.analisis_filogenetico.$error&&!e.$v.parametros.analisis_filogenetico.required?t("em",{staticClass:"text-error-input"},[e._v(e._s(e.mensajes.required))]):e._e()])]),e._v(" "),t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"position-relative form-group"},[t("label",{attrs:{for:"observaciones"}},[e._v("Observaciones")]),e._v(" "),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.parametros.observaciones,expression:"parametros.observaciones"}],staticClass:"form-control",attrs:{name:"observaciones",id:"observaciones"},domProps:{value:e.parametros.observaciones},on:{input:function(r){r.target.composing||e.$set(e.parametros,"observaciones",r.target.value)}}})])])]),e._v(" "),t("button",{staticClass:"mb-2 mr-2 btn btn-block",class:e.btnClase,attrs:{disabled:e.bloquearBtn}},[e._v(e._s(e.nomBtnComputed))])],2)])])])]),e._v(" "),t("div",{staticClass:"row justify-content-md-center"},[t("div",{staticClass:"col-md-5"},[t("div",{staticClass:"main-card mb-3 card"},[t("div",{staticClass:"card-body"},[e.mostraImagen1?[t("h5",{staticClass:"card-title"},[e._v("Imagen PCR")]),e._v(" "),e.validarCroppie1?[t("croppie",{attrs:{id:"croppie1",imagen:e.mostraImagen1,mostrarBtnCroppie:e.mostrarBtnCroppie1,enableZoom:!1,zoom:0,editar:!0,boundaryHeigth:300,viewportWidth:200},on:{cambiarValorImagen:e.cambiarValorImagen1}})]:[t("croppie",{attrs:{id:"croppie1",imagen:e.mostraImagen1,mostrarBtnCroppie:e.mostrarBtnCroppie1,zoom:1,enableZoom:!0,editar:!1,boundaryHeigth:300,viewportWidth:200},on:{cambiarValorImagen:e.cambiarValorImagen1}})]]:[e._m(4)]],2)])]),e._v(" "),t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"main-card mb-3 card"},[t("div",{staticClass:"card-body"},[e.mostraImagen2?[t("h5",{staticClass:"card-title"},[e._v("Imagen BLAST")]),e._v(" "),e.validarCroppie2?[t("Croppie",{attrs:{id:"croppie2",imagen:e.mostraImagen2,mostrarBtnCroppie:e.mostrarBtnCroppie2,enableZoom:!1,zoom:0,editar:!0,boundaryHeigth:300,viewportWidth:300},on:{cambiarValorImagen:e.cambiarValorImagen2}})]:[t("Croppie",{attrs:{id:"croppie2",imagen:e.mostraImagen2,mostrarBtnCroppie:e.mostrarBtnCroppie2,zoom:1,enableZoom:!0,editar:!1,boundaryHeigth:300,viewportWidth:300},on:{cambiarValorImagen:e.cambiarValorImagen2}})]]:[e._m(5)]],2)])])])])}),[function(){var e=this.$createElement,r=this._self._c||e;return r("div",{staticClass:"input-group-prepend"},[r("span",{staticClass:"input-group-text"},[this._v("F")])])},function(){var e=this.$createElement,r=this._self._c||e;return r("div",{staticClass:"input-group-prepend"},[r("span",{staticClass:"input-group-text"},[this._v("R")])])},function(){var e=this.$createElement,r=this._self._c||e;return r("div",{staticClass:"input-group-prepend"},[r("span",{staticClass:"input-group-text"},[this._v("Genero")])])},function(){var e=this.$createElement,r=this._self._c||e;return r("div",{staticClass:"input-group-prepend"},[r("span",{staticClass:"input-group-text"},[this._v("Especie")])])},function(){var e=this.$createElement,r=this._self._c||e;return r("div",{staticClass:"text-center"},[r("h5",{staticClass:"mt-5 mb-5"},[r("span",{staticClass:"pr-1"},[r("b",{staticClass:"text-success"},[this._v("SIN IMAGEN PCR")])])])])},function(){var e=this.$createElement,r=this._self._c||e;return r("div",{staticClass:"text-center"},[r("h5",{staticClass:"mt-5 mb-5"},[r("span",{staticClass:"pr-1"},[r("b",{staticClass:"text-success"},[this._v("SIN IMAGEN BLAST")])])])])}],!1,null,null,null).exports,ModalEliminar:t(33).a},data:function(){return{mostrarBtnAgregar:!0,mostrarForm:!1,modificarForm:!1}},methods:g(g({},a.a.mapActions("cepa",["accionAgregarCaract","accionEditarCaract","accionEliminarCaract"])),{},{agregar:function(e){this.accionAgregarCaract({tipo:"identi",data:e}),this.modificarForm=!0},editar:function(e){this.accionEditarCaract({tipo:"identi",data:e}),this.modificarForm=!0},eliminar:function(e){this.accionEliminarCaract({tipo:"identi",data:e}),this.mostrarBtnAgregar=!0,this.mostrarForm=!1},cambiarVariable:function(){this.modificarForm=!1},btnAgregar:function(){this.mostrarForm=!0,this.mostrarBtnAgregar=!1},cancelar:function(){this.mostrarForm=!1,this.mostrarBtnAgregar=!0}}),computed:g(g({},a.a.mapGetters("cepa",["getIdentiMolecu"])),{},{mostrarBtnEliminar:function(){return!!this.getIdentiMolecu},mostrarBtnCancelar:function(){return!(!this.mostrarForm||this.getIdentiMolecu)},mostrarBtnAgregarComputed:function(){return this.mostrarBtnAgregar}}),mounted:function(){this.getIdentiMolecu&&(this.mostrarBtnAgregar=!1,this.mostrarForm=!0)}},h=Object(u.a)(f,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("div",{staticClass:"tabs-animation"},[t("div",{staticClass:"mb-3 card"},[t("div",{staticClass:"card-header-tab card-header"},[e._m(0),e._v(" "),t("div",{staticClass:"btn-actions-pane-right text-capitalize"},[t("button",{directives:[{name:"show",rawName:"v-show",value:e.mostrarBtnCancelar,expression:"mostrarBtnCancelar"}],staticClass:"btn-wide btn-outline-2x mr-md-2 btn btn-outline-danger btn-sm",on:{click:e.cancelar}},[e._v("Cancelar")]),e._v(" "),t("button",{directives:[{name:"show",rawName:"v-show",value:e.mostrarBtnEliminar,expression:"mostrarBtnEliminar"}],staticClass:"btn-wide btn-outline-2x mr-md-2 btn btn-outline-danger btn-sm",on:{click:function(r){return e.$modal.show("modal_eliminar_caract")}}},[e._v("Eliminar Identificación")]),e._v(" "),t("button",{directives:[{name:"show",rawName:"v-show",value:e.mostrarBtnAgregarComputed,expression:"mostrarBtnAgregarComputed"}],staticClass:"btn-wide btn-outline-2x mr-md-2 btn btn-outline-success btn-sm",on:{click:e.btnAgregar}},[e._v("Agregar Identificación")])])]),e._v(" "),e.mostrarForm?[t("FormIdentiMolecu",{attrs:{modificarInfo:e.modificarForm,info:e.getIdentiMolecu},on:{agregar:e.agregar,editar:e.editar,cambiarVariable:e.cambiarVariable}})]:[e._m(1)]],2)]),e._v(" "),t("ModalEliminar",{attrs:{tipo:"Identificación",tipoCaract:"Identificación Molecular",caract:e.getIdentiMolecu,url:"hongo/identi-molecu"},on:{eliminar:e.eliminar}})],1)}),[function(){var e=this.$createElement,r=this._self._c||e;return r("div",{staticClass:"card-header-title font-size-lg text-capitalize font-weight-normal"},[r("i",{staticClass:"header-icon lnr-charts icon-gradient bg-happy-green"}),this._v("\n          Identificación Molecular\n        ")])},function(){var e=this.$createElement,r=this._self._c||e;return r("div",{staticClass:"text-center"},[r("h5",{staticClass:"mt-5 mb-5"},[r("span",{staticClass:"pr-1"},[r("b",{staticClass:"text-success"},[this._v("AÚN NO SE HA AGREGADO LA IDENTIFICACIÓN")])])])])}],!1,null,null,null);r.default=h.exports}}]);