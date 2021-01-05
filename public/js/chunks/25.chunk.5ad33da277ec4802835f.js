!function(e){const a=e.es=e.es||{};a.dictionary=Object.assign(a.dictionary||{},{"%0 of %1":"%0 de %1","Align cell text to the bottom":"","Align cell text to the center":"","Align cell text to the left":"","Align cell text to the middle":"","Align cell text to the right":"","Align cell text to the top":"","Align center":"Centrar","Align left":"Alinear a la izquierda","Align right":"Alinear a la derecha","Align table to the left":"","Align table to the right":"",Alignment:"",Aquamarine:"Aguamarina",Background:"",Big:"Grande",Black:"Negro","Block quote":"Entrecomillado",Blue:"Azul","Blue marker":"Marcador azul",Bold:"Negrita",Border:"","Bulleted List":"Lista de puntos",Cancel:"Cancelar","Cell properties":"","Center table":"","Centered image":"Imagen centrada","Change image text alternative":"Cambiar el texto alternativo de la imagen","Choose heading":"Elegir Encabezado",Color:"","Color picker":"",Column:"Columna",Dashed:"","Decrease indent":"Disminuir sangría",Default:"Por defecto","Delete column":"Eliminar columna","Delete row":"Eliminar fila","Dim grey":"Gris Oscuro",Dimensions:"","Document colors":"Colores del documento",Dotted:"",Double:"",Downloadable:"Descargable","Dropdown toolbar":"Barra de herramientas desplegable","Edit link":"Editar enlace","Editor toolbar":"Barra de herramientas de edición","Enter image caption":"Introducir título de la imagen","Font Background Color":"Color de Fondo","Font Color":"Color de Fuente","Font Family":"Fuente","Font Size":"Tamaño de fuente","Full size image":"Imagen a tamaño completo",Green:"Verde","Green marker":"Marcador verde","Green pen":"Texto verde",Grey:"Gris",Groove:"","Header column":"Columna de encabezado","Header row":"Fila de encabezado",Heading:"Encabezado","Heading 1":"Encabezado 1","Heading 2":"Encabezado 2","Heading 3":"Encabezado 3","Heading 4":"Encabezado 4","Heading 5":"Encabezado 5","Heading 6":"Encabezado 6",Height:"",Highlight:"Resaltar","Horizontal line":"Línea horizontal","Horizontal text alignment toolbar":"",Huge:"Enorme","Image toolbar":"Barra de herramientas de imagen","image widget":"Widget de imagen","Increase indent":"Aumentar sangría","Insert column left":"Insertar columna izquierda","Insert column right":"Insertar columna derecha","Insert image":"Insertar imagen","Insert media":"Insertar contenido multimedia","Insert paragraph after block":"","Insert paragraph before block":"","Insert row above":"Insertar fila encima","Insert row below":"Insertar fila debajo","Insert table":"Insertar tabla",Inset:"",Italic:"Cursiva",Justify:"Justificar","Justify cell text":"","Left aligned image":"Imagen alineada a la izquierda","Light blue":"Azul Claro","Light green":"Verde Claro","Light grey":"Gris Claro",Link:"Enlace","Link URL":"URL del enlace","Media URL":"URL del contenido multimedia","media widget":"Widget de contenido multimedia","Merge cell down":"Combinar celda inferior","Merge cell left":"Combinar celda izquierda","Merge cell right":"Combinar celda derecha","Merge cell up":"Combinar celda superior","Merge cells":"Combinar celdas",Next:"Siguiente",None:"","Numbered List":"Lista numerada","Open in a new tab":"Abrir en una pestaña nueva ","Open link in new tab":"Abrir enlace en una pestaña nueva",Orange:"Anaranjado",Outset:"",Padding:"",Paragraph:"Párrafo","Paste the media URL in the input.":"Pega la URL del contenido multimedia","Pink marker":"Marcador rosa",Previous:"Anterior",Purple:"Morado",Red:"Rojo","Red pen":"Texto rojo",Redo:"Rehacer","Remove color":"Remover color","Remove highlight":"Quitar resaltado","Rich Text Editor":"Editor de Texto Enriquecido","Rich Text Editor, %0":"Editor de Texto Enriquecido, %0",Ridge:"","Right aligned image":"Imagen alineada a la derecha",Row:"Fila",Save:"Guardar","Select column":"","Select row":"","Show more items":"Mostrar más elementos","Side image":"Imagen lateral",Small:"Pequeño",Solid:"","Split cell horizontally":"Dividir celdas horizontalmente","Split cell vertically":"Dividir celdas verticalmente",Strikethrough:"Tachado",Style:"",Subscript:"Subíndice",Superscript:"Superíndice","Table alignment toolbar":"","Table cell text alignment":"","Table properties":"","Table toolbar":"Barra de herramientas de tabla","Text alignment":"Alineación del texto","Text alignment toolbar":"Barra de herramientas de alineación del texto","Text alternative":"Texto alternativo","Text highlight toolbar":"Barra de herramientas de resaltado de texto",'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".':"","The URL must not be empty.":"La URL no debe estar vacía",'The value is invalid. Try "10px" or "2em" or simply "2".':"","This link has no URL":"Este enlace no tiene URL","This media URL is not supported.":"La URL de este contenido multimedia no está soportada",Tiny:"Minúsculo","Tip: Paste the URL into the content to embed faster.":"Tip: pega la URL dentro del contenido para embeber más rápido",Turquoise:"Turquesa",Underline:"Subrayado",Undo:"Deshacer",Unlink:"Quitar enlace","Upload failed":"Fallo en la subida","Upload in progress":"Subida en progreso","Vertical text alignment toolbar":"",White:"Blanco","Widget toolbar":"Barra de herramientas del widget",Width:"",Yellow:"Amarillo","Yellow marker":"Marcador amarillo"}),a.getPluralForm=function(e){return 1!=e}}(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{463:function(e,a,r){"use strict";r.r(a);var t=r(0),i=r(6),o=r(61),s=r(63),n=r(64),l=r(2),m={components:{CroppieCepas:s.a,Imagenes:n.a},props:["info","modificarInfo"],watch:{modificarInfo:function(){this.modificarInfo&&(this.llenarInfo(),this.$emit("cambiarVariable"))}},data:function(){return{parametros:{cepaId:"",oxidasa:"",catalasa:"",citrato:"",caseina:"",nitrato:"",sensi_antibioticos:"",fer_manitol:"",fer_lactosa:"",fer_inositol:"",fer_sacarosa:"",fer_otro:"",hidro_gelatina:"",hidro_urea:"",otras_caract:"",imagen1:"",imagen2:"",imagen3:""},tituloForm:"",nomBtn:"",errors:[],bloquearBtn:!1,mensajes:{required:"El campo es requerido"}}},validations:{parametros:{oxidasa:{required:l.required},catalasa:{required:l.required},citrato:{required:l.required},caseina:{required:l.required},nitrato:{required:l.required},sensi_antibioticos:{required:l.required},fer_manitol:{required:l.required},fer_lactosa:{required:l.required},fer_inositol:{required:l.required},fer_sacarosa:{required:l.required},hidro_gelatina:{required:l.required},hidro_urea:{required:l.required},imagen1:{required:l.required},imagen2:{required:function(e){return!(""==e&&this.cantImagenes>1)}},imagen3:{required:function(e){return""!=e||3!=this.cantImagenes}}}},mixins:[i.a,o.a],methods:{evento:function(){var e=this;this.bloquearBtn=!0,this.$v.parametros.$touch(),this.$v.$invalid?(this.bloquearBtn=!1,this.toastr("Error!!","Favor llenar correctamente los campos","error")):"Agregar Identificación"===this.tituloForm?axios.post("/cepas/actinomiceto/identi-bioqui",this.parametros).then((function(a){"http://127.0.0.1:8000"===a.request.responseURL?(localStorage.setItem("mensajeLogin","Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"),window.location.href="/"):(e.bloquearBtn=!1,e.errors=[],e.$refs.inputImagen.value="",e.tituloForm="Editar Identificación",e.nomBtn="Editar",e.$emit("agregar",a.data),e.toastr("Agregar Identificación Bioquímica","Identificación Bioquímica agregada con exito!!","success"))})).catch((function(a){e.verificarError(a.response.status,a.response.data.errors)})):axios.put("/cepas/actinomiceto/identi-bioqui/".concat(this.info.id),this.parametros).then((function(a){e.bloquearBtn=!1,e.errors=[],e.$emit("editar",a.data),e.toastr("Editar Identificación Bioquímica","Identificación Bioquímica editada con exito!!","success")})).catch((function(a){e.verificarError(a.response.status,a.response.data.errors)}))},llenarInfo:function(){this.imagenes=[],this.parametros.oxidasa=this.info.oxidasa,this.parametros.catalasa=this.info.catalasa,this.parametros.citrato=this.info.citrato,this.parametros.caseina=this.info.caseina,this.parametros.nitrato=this.info.nitrato,this.parametros.sensi_antibioticos=this.info.sensi_antibioticos,this.parametros.fer_manitol=this.info.fer_manitol,this.parametros.fer_lactosa=this.info.fer_lactosa,this.parametros.fer_inositol=this.info.fer_inositol,this.parametros.fer_sacarosa=this.info.fer_sacarosa,this.parametros.fer_otro=this.info.fer_otro,this.parametros.hidro_gelatina=this.info.hidro_gelatina,this.parametros.hidro_urea=this.info.hidro_urea,this.parametros.otras_caract=this.info.otras_caract,this.parametros.imagen1=this.info.imagen1,this.parametros.imagen2=this.info.imagen2,this.parametros.imagen3=this.info.imagen3,this.llenarArregloImagenes()},accionImagen:function(e){this.$emit("editar",e)}},computed:{validarTipoForm:function(){return"Agregar Identificación"===this.tituloForm},btnClase:function(){return"Agregar Identificación"===this.tituloForm?"btn-success":"btn-warning"},classRow:function(){return"Agregar Identificación"===this.tituloForm?"col-md-4":"col-md-6"}},mounted:function(){this.info?(this.llenarInfo(),this.tituloForm="Editar Identificación",this.nomBtn="Editar"):(this.tituloForm="Agregar Identificación",this.nomBtn="Agregar");var e=[];this.$route.params.cepaActinomicetoSlug?(e=this.$route.params.cepaActinomicetoSlug.split("-"),this.parametros.cepaId=parseInt(e[e.length-1])):(e=this.$route.params.cepaSlug.split("-"),this.parametros.cepaId=parseInt(e[e.length-1]))}},c=r(1);function d(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function u(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?d(Object(r),!0).forEach((function(a){p(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function p(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}var v={components:{FormIdentiBioqui:Object(c.a)(m,(function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",[r("div",{staticClass:"container mt-4"},[r("div",{staticClass:"main-card mb-3 card"},[r("div",{staticClass:"card-body"},[r("h5",{staticClass:"card-title"},[e._v(e._s(e.tituloForm))]),e._v(" "),r("div",{staticClass:"row justify-content-md-center"},[r("div",{staticClass:"col-md-12"},[""!=e.errors?[r("div",{staticClass:"alert alert-danger"},e._l(e.errors,(function(a,t){return r("p",{key:t},[e._v("\n                  "+e._s(a[0])+"\n                ")])})),0)]:e._e(),e._v(" "),r("form",{on:{submit:function(a){return a.preventDefault(),e.evento(a)}}},[r("div",{staticClass:"form-row"},[r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"position-relative form-group"},[r("label",{attrs:{for:"oxidasa"}},[e._v("Oxidasa")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.parametros.oxidasa.$model,expression:"$v.parametros.oxidasa.$model",modifiers:{trim:!0}}],class:["form-control",e.$v.parametros.oxidasa.$error?"error-input-select":""],attrs:{dusk:"oxidasa",name:"oxidasa",id:"oxidasa",placeholder:"...",type:"text"},domProps:{value:e.$v.parametros.oxidasa.$model},on:{input:function(a){a.target.composing||e.$set(e.$v.parametros.oxidasa,"$model",a.target.value.trim())},blur:function(a){return e.$forceUpdate()}}}),e._v(" "),e.$v.parametros.oxidasa.$error&&!e.$v.parametros.oxidasa.required?r("em",{staticClass:"text-error-input"},[e._v(e._s(e.mensajes.required))]):e._e()])]),e._v(" "),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"position-relative form-group"},[r("label",{attrs:{for:"catalasa"}},[e._v("Catalasa")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.parametros.catalasa.$model,expression:"$v.parametros.catalasa.$model",modifiers:{trim:!0}}],class:["form-control",e.$v.parametros.catalasa.$error?"error-input-select":""],attrs:{dusk:"catalasa",name:"catalasa",id:"catalasa",placeholder:"...",type:"text"},domProps:{value:e.$v.parametros.catalasa.$model},on:{input:function(a){a.target.composing||e.$set(e.$v.parametros.catalasa,"$model",a.target.value.trim())},blur:function(a){return e.$forceUpdate()}}}),e._v(" "),e.$v.parametros.catalasa.$error&&!e.$v.parametros.catalasa.required?r("em",{staticClass:"text-error-input"},[e._v(e._s(e.mensajes.required))]):e._e()])]),e._v(" "),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"position-relative form-group"},[r("label",{attrs:{for:"citrato"}},[e._v("Citrato")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.parametros.citrato.$model,expression:"$v.parametros.citrato.$model",modifiers:{trim:!0}}],class:["form-control",e.$v.parametros.citrato.$error?"error-input-select":""],attrs:{dusk:"citrato",name:"citrato",id:"citrato",placeholder:"...",type:"text"},domProps:{value:e.$v.parametros.citrato.$model},on:{input:function(a){a.target.composing||e.$set(e.$v.parametros.citrato,"$model",a.target.value.trim())},blur:function(a){return e.$forceUpdate()}}}),e._v(" "),e.$v.parametros.citrato.$error&&!e.$v.parametros.citrato.required?r("em",{staticClass:"text-error-input"},[e._v(e._s(e.mensajes.required))]):e._e()])])]),e._v(" "),r("div",{staticClass:"form-row"},[r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"position-relative form-group"},[r("label",{attrs:{for:"nitrato"}},[e._v("Nitratos")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.parametros.nitrato.$model,expression:"$v.parametros.nitrato.$model",modifiers:{trim:!0}}],class:["form-control",e.$v.parametros.nitrato.$error?"error-input-select":""],attrs:{dusk:"nitratos",name:"nitrato",id:"nitrato",placeholder:"...",type:"text"},domProps:{value:e.$v.parametros.nitrato.$model},on:{input:function(a){a.target.composing||e.$set(e.$v.parametros.nitrato,"$model",a.target.value.trim())},blur:function(a){return e.$forceUpdate()}}}),e._v(" "),e.$v.parametros.nitrato.$error&&!e.$v.parametros.nitrato.required?r("em",{staticClass:"text-error-input"},[e._v(e._s(e.mensajes.required))]):e._e()])]),e._v(" "),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"position-relative form-group"},[r("label",{attrs:{for:"caseina"}},[e._v("Caseina")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.parametros.caseina.$model,expression:"$v.parametros.caseina.$model",modifiers:{trim:!0}}],class:["form-control",e.$v.parametros.caseina.$error?"error-input-select":""],attrs:{dusk:"caseina",name:"caseina",id:"caseina",placeholder:"...",type:"text"},domProps:{value:e.$v.parametros.caseina.$model},on:{input:function(a){a.target.composing||e.$set(e.$v.parametros.caseina,"$model",a.target.value.trim())},blur:function(a){return e.$forceUpdate()}}}),e._v(" "),e.$v.parametros.caseina.$error&&!e.$v.parametros.caseina.required?r("em",{staticClass:"text-error-input"},[e._v(e._s(e.mensajes.required))]):e._e()])]),e._v(" "),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"position-relative form-group"},[r("label",{attrs:{for:"hidro_urea"}},[e._v("Hidrolisis de la urea")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.parametros.hidro_urea.$model,expression:"$v.parametros.hidro_urea.$model",modifiers:{trim:!0}}],class:["form-control",e.$v.parametros.hidro_urea.$error?"error-input-select":""],attrs:{dusk:"hidro_urea",name:"hidro_urea",id:"hidro_urea",placeholder:"...",type:"text"},domProps:{value:e.$v.parametros.hidro_urea.$model},on:{input:function(a){a.target.composing||e.$set(e.$v.parametros.hidro_urea,"$model",a.target.value.trim())},blur:function(a){return e.$forceUpdate()}}}),e._v(" "),e.$v.parametros.hidro_urea.$error&&!e.$v.parametros.hidro_urea.required?r("em",{staticClass:"text-error-input"},[e._v(e._s(e.mensajes.required))]):e._e()])])]),e._v(" "),r("div",{staticClass:"form-row"},[r("div",{class:e.classRow},[r("div",{staticClass:"position-relative form-group"},[r("label",{attrs:{for:"hidro_gelatina"}},[e._v("Hidrolisis de la gelatina")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.parametros.hidro_gelatina.$model,expression:"$v.parametros.hidro_gelatina.$model",modifiers:{trim:!0}}],class:["form-control",e.$v.parametros.hidro_gelatina.$error?"error-input-select":""],attrs:{dusk:"hidro_gelatina",name:"hidro_gelatina",id:"hidro_gelatina",placeholder:"...",type:"text"},domProps:{value:e.$v.parametros.hidro_gelatina.$model},on:{input:function(a){a.target.composing||e.$set(e.$v.parametros.hidro_gelatina,"$model",a.target.value.trim())},blur:function(a){return e.$forceUpdate()}}}),e._v(" "),e.$v.parametros.hidro_gelatina.$error&&!e.$v.parametros.hidro_gelatina.required?r("em",{staticClass:"text-error-input"},[e._v(e._s(e.mensajes.required))]):e._e()])]),e._v(" "),e.validarTipoForm?[r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"position-relative form-group"},[r("label",{attrs:{for:"imagen"}},[e._v("Imágenes")]),e._v(" "),r("input",{ref:"inputImagen",class:["form-control-file",e.$v.parametros.imagen1.$error||e.$v.parametros.imagen2.$error||e.$v.parametros.imagen3.$error?"error-input-select":""],attrs:{dusk:"imagen",name:"imagen",id:"imagen",type:"file",accept:"image/jpeg, image/png",multiple:""},on:{change:e.obtenerImagenes}}),e._v(" "),e.erroresImagenes?r("em",{staticClass:"text-error-input"},[e._v(e._s(e.erroresImagenes))]):e._e(),e._v(" "),e.$v.parametros.imagen1.$error&&!e.$v.parametros.imagen1.required||e.$v.parametros.imagen2.$error&&!e.$v.parametros.imagen2.required||e.$v.parametros.imagen3.$error&&!e.$v.parametros.imagen3.required?r("em",{staticClass:"text-error-input"},[e._v(e._s(e.mensajes.required))]):e._e()])])]:e._e(),e._v(" "),r("div",{class:e.classRow},[r("div",{staticClass:"position-relative form-group"},[r("label",{attrs:{for:"sensi_antibioticos"}},[e._v("Sensibilidad a Antibióticos")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.parametros.sensi_antibioticos.$model,expression:"$v.parametros.sensi_antibioticos.$model",modifiers:{trim:!0}}],class:["form-control",e.$v.parametros.sensi_antibioticos.$error?"error-input-select":""],attrs:{dusk:"sensi_antibioticos",name:"sensi_antibioticos",id:"sensi_antibioticos",placeholder:"...",type:"text"},domProps:{value:e.$v.parametros.sensi_antibioticos.$model},on:{input:function(a){a.target.composing||e.$set(e.$v.parametros.sensi_antibioticos,"$model",a.target.value.trim())},blur:function(a){return e.$forceUpdate()}}}),e._v(" "),e.$v.parametros.sensi_antibioticos.$error&&!e.$v.parametros.sensi_antibioticos.required?r("em",{staticClass:"text-error-input"},[e._v(e._s(e.mensajes.required))]):e._e()])])],2),e._v(" "),r("div",{staticClass:"form-row"},[r("div",{staticClass:"col-md-6"},[e._m(0),e._v(" "),r("div",{staticClass:"form-row"},[r("div",{staticClass:"col-md-6"},[r("div",{staticClass:"position-relative form-group"},[r("label",{attrs:{for:"fer_lactosa"}},[e._v("Lactosa")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.parametros.fer_lactosa.$model,expression:"$v.parametros.fer_lactosa.$model",modifiers:{trim:!0}}],class:["form-control",e.$v.parametros.fer_lactosa.$error?"error-input-select":""],attrs:{dusk:"fer_lactosa",name:"fer_lactosa",id:"fer_lactosa",placeholder:"...",type:"text"},domProps:{value:e.$v.parametros.fer_lactosa.$model},on:{input:function(a){a.target.composing||e.$set(e.$v.parametros.fer_lactosa,"$model",a.target.value.trim())},blur:function(a){return e.$forceUpdate()}}}),e._v(" "),e.$v.parametros.fer_lactosa.$error&&!e.$v.parametros.fer_lactosa.required?r("em",{staticClass:"text-error-input"},[e._v(e._s(e.mensajes.required))]):e._e()])]),e._v(" "),r("div",{staticClass:"col-md-6"},[r("div",{staticClass:"position-relative form-group"},[r("label",{attrs:{for:"fer_manitol"}},[e._v("Manitol")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.parametros.fer_manitol.$model,expression:"$v.parametros.fer_manitol.$model",modifiers:{trim:!0}}],class:["form-control",e.$v.parametros.fer_manitol.$error?"error-input-select":""],attrs:{dusk:"fer_manitol",name:"fer_manitol",id:"fer_manitol",placeholder:"...",type:"text"},domProps:{value:e.$v.parametros.fer_manitol.$model},on:{input:function(a){a.target.composing||e.$set(e.$v.parametros.fer_manitol,"$model",a.target.value.trim())},blur:function(a){return e.$forceUpdate()}}}),e._v(" "),e.$v.parametros.fer_manitol.$error&&!e.$v.parametros.fer_manitol.required?r("em",{staticClass:"text-error-input"},[e._v(e._s(e.mensajes.required))]):e._e()])])]),e._v(" "),r("div",{staticClass:"form-row"},[r("div",{staticClass:"col-md-6"},[r("div",{staticClass:"position-relative form-group"},[r("label",{attrs:{for:"fer_inositol"}},[e._v("Inositol")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.parametros.fer_inositol.$model,expression:"$v.parametros.fer_inositol.$model",modifiers:{trim:!0}}],class:["form-control",e.$v.parametros.fer_inositol.$error?"error-input-select":""],attrs:{dusk:"fer_inositol",name:"fer_inositol",id:"fer_inositol",placeholder:"...",type:"text"},domProps:{value:e.$v.parametros.fer_inositol.$model},on:{input:function(a){a.target.composing||e.$set(e.$v.parametros.fer_inositol,"$model",a.target.value.trim())},blur:function(a){return e.$forceUpdate()}}}),e._v(" "),e.$v.parametros.fer_inositol.$error&&!e.$v.parametros.fer_inositol.required?r("em",{staticClass:"text-error-input"},[e._v(e._s(e.mensajes.required))]):e._e()])]),e._v(" "),r("div",{staticClass:"col-md-6"},[r("div",{staticClass:"position-relative form-group"},[r("label",{attrs:{for:"fer_sacarosa"}},[e._v("Sacarosa")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.parametros.fer_sacarosa.$model,expression:"$v.parametros.fer_sacarosa.$model",modifiers:{trim:!0}}],class:["form-control",e.$v.parametros.fer_sacarosa.$error?"error-input-select":""],attrs:{dusk:"fer_sacarosa",name:"fer_sacarosa",id:"fer_sacarosa",placeholder:"...",type:"text"},domProps:{value:e.$v.parametros.fer_sacarosa.$model},on:{input:function(a){a.target.composing||e.$set(e.$v.parametros.fer_sacarosa,"$model",a.target.value.trim())},blur:function(a){return e.$forceUpdate()}}}),e._v(" "),e.$v.parametros.fer_sacarosa.$error&&!e.$v.parametros.fer_sacarosa.required?r("em",{staticClass:"text-error-input"},[e._v(e._s(e.mensajes.required))]):e._e()])])]),e._v(" "),r("div",{staticClass:"position-relative form-group"},[r("label",{attrs:{for:"fer_otro"}},[e._v("Otra Fermentación")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.parametros.fer_otro,expression:"parametros.fer_otro"}],staticClass:"form-control",attrs:{dusk:"fer_otro",name:"fer_otro",id:"fer_otro",placeholder:"...",type:"text"},domProps:{value:e.parametros.fer_otro},on:{input:function(a){a.target.composing||e.$set(e.parametros,"fer_otro",a.target.value)}}})])]),e._v(" "),r("div",{staticClass:"col-md-6"},[r("div",{staticClass:"position-relative form-group"},[r("label",{attrs:{for:"otras_caract"}},[e._v("Otras Características")]),e._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.parametros.otras_caract,expression:"parametros.otras_caract"}],staticClass:"form-control mt-2",staticStyle:{height:"200px"},attrs:{dusk:"otras_caract",name:"otras_caract",id:"otras_caract"},domProps:{value:e.parametros.otras_caract},on:{input:function(a){a.target.composing||e.$set(e.parametros,"otras_caract",a.target.value)}}})])])]),e._v(" "),r("button",{staticClass:"mb-2 mr-2 btn btn-block",class:e.btnClase,attrs:{dusk:"btn-accion",disabled:e.bloquearBtn}},[e._v("\n                "+e._s(e.nomBtn)+"\n              ")])])],2)])])])]),e._v(" "),r("div",{staticClass:"container"},[r("div",{staticClass:"row justify-content-md-center"},[e.validarTipoForm?[r("div",{staticClass:"col-md-12"},[r("div",{staticClass:"main-card mb-3 card"},[r("div",{staticClass:"card-body"},[r("h5",{staticClass:"card-title"},[e._v("Imagenes")]),e._v(" "),e.imagenesCroppie.length===e.cantImagenes&&e.$refs.inputImagen.value?[r("CroppieCepas",{attrs:{imagenes:e.imagenesCroppie,posicion:"horizontal"},on:{cambiarValorImagen:e.cambiarValorImagen}})]:[e._m(1)]],2)])])]:[r("div",{staticClass:"col-md-5"},[r("div",{staticClass:"main-card mb-3 card"},[r("div",{staticClass:"card-body"},[r("h5",{staticClass:"card-title"},[e._v("Imagenes")]),e._v(" "),r("Imagenes",{attrs:{parametros:e.parametros,tipoCepa:"actinomiceto/identi-bioqui",imagenes:e.imagenes,cepa:e.info},on:{accionImagen:e.accionImagen}})],1)])])]],2)])])}),[function(){var e=this.$createElement,a=this._self._c||e;return a("label",{attrs:{for:"manitol"}},[a("b",[this._v("Fermentación de:")])])},function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"text-center"},[a("h5",{staticClass:"mt-5 mb-5"},[a("span",{staticClass:"pr-1"},[a("b",{staticClass:"text-success"},[this._v("SIN IMÁGENES")])])])])}],!1,null,null,null).exports,ModalEliminar:r(33).a},data:function(){return{mostrarBtnAgregar:!0,mostrarForm:!1,modificarForm:!1}},methods:u(u({},t.a.mapActions("cepa",["accionAgregarCaract","accionEditarCaract","accionEliminarCaract"])),{},{agregar:function(e){this.accionAgregarCaract({tipo:"identi_bioqui",data:e}),this.modificarForm=!0},editar:function(e){this.accionEditarCaract({tipo:"identi_bioqui",data:e}),this.modificarForm=!0},eliminar:function(e){this.accionEliminarCaract({tipo:"identi_bioqui",data:e}),this.mostrarBtnAgregar=!0,this.mostrarForm=!1},cambiarVariable:function(){this.modificarForm=!1},btnAgregar:function(){this.mostrarForm=!0,this.mostrarBtnAgregar=!1},cancelar:function(){this.mostrarForm=!1,this.mostrarBtnAgregar=!0}}),computed:u(u({},t.a.mapGetters("cepa",["getIdentiBioqui"])),{},{mostrarBtnEliminar:function(){return!!this.getIdentiBioqui},mostrarBtnCancelar:function(){return!(!this.mostrarForm||this.getIdentiBioqui)},mostrarBtnAgregarComputed:function(){return this.mostrarBtnAgregar}}),mounted:function(){this.getIdentiBioqui&&(this.mostrarBtnAgregar=!1,this.mostrarForm=!0)}},g=Object(c.a)(v,(function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",[r("div",{staticClass:"tabs-animation"},[r("div",{staticClass:"mb-3 card"},[r("div",{staticClass:"card-header-tab card-header"},[e._m(0),e._v(" "),r("div",{staticClass:"btn-actions-pane-right text-capitalize"},[r("button",{directives:[{name:"show",rawName:"v-show",value:e.mostrarBtnCancelar,expression:"mostrarBtnCancelar"}],staticClass:"btn-wide btn-outline-2x mr-md-2 btn btn-outline-danger btn-sm",on:{click:e.cancelar}},[e._v("\n            Cancelar\n          ")]),e._v(" "),r("button",{directives:[{name:"show",rawName:"v-show",value:e.mostrarBtnEliminar,expression:"mostrarBtnEliminar"}],staticClass:"btn-wide btn-outline-2x mr-md-2 btn btn-outline-danger btn-sm",attrs:{dusk:"btn-eliminar"},on:{click:function(a){return e.$modal.show("modal_eliminar_caract")}}},[e._v("\n            Eliminar Identificación\n          ")]),e._v(" "),r("button",{directives:[{name:"show",rawName:"v-show",value:e.mostrarBtnAgregarComputed,expression:"mostrarBtnAgregarComputed"}],staticClass:"btn-wide btn-outline-2x mr-md-2 btn btn-outline-success btn-sm",attrs:{dusk:"btn-agregar"},on:{click:e.btnAgregar}},[e._v("\n            Agregar Identificación\n          ")])])]),e._v(" "),e.mostrarForm?[r("FormIdentiBioqui",{attrs:{modificarInfo:e.modificarForm,info:e.getIdentiBioqui},on:{agregar:e.agregar,editar:e.editar,cambiarVariable:e.cambiarVariable}})]:[e._m(1)]],2)]),e._v(" "),r("ModalEliminar",{attrs:{tipo:"Identificación",tipoCaract:"Identificación Bioquímica",caract:e.getIdentiBioqui,url:"actinomiceto/identi-bioqui"},on:{eliminar:e.eliminar}})],1)}),[function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"card-header-title font-size-lg text-capitalize font-weight-normal"},[a("i",{staticClass:"header-icon lnr-charts icon-gradient bg-happy-green"}),this._v("\n          Identificación Bioquímica\n        ")])},function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"text-center"},[a("h5",{staticClass:"mt-5 mb-5"},[a("span",{staticClass:"pr-1"},[a("b",{staticClass:"text-success"},[this._v("AÚN NO SE HAN AGREGADO LA IDENTIFICACIÓN")])])])])}],!1,null,null,null);a.default=g.exports}}]);