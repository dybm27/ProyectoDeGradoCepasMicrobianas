!function(e){const t=e.es=e.es||{};t.dictionary=Object.assign(t.dictionary||{},{"%0 of %1":"%0 de %1","Align cell text to the bottom":"","Align cell text to the center":"","Align cell text to the left":"","Align cell text to the middle":"","Align cell text to the right":"","Align cell text to the top":"","Align center":"Centrar","Align left":"Alinear a la izquierda","Align right":"Alinear a la derecha","Align table to the left":"","Align table to the right":"",Alignment:"",Aquamarine:"Aguamarina",Background:"",Big:"Grande",Black:"Negro","Block quote":"Entrecomillado",Blue:"Azul","Blue marker":"Marcador azul",Bold:"Negrita",Border:"","Bulleted List":"Lista de puntos",Cancel:"Cancelar","Cell properties":"","Center table":"","Centered image":"Imagen centrada","Change image text alternative":"Cambiar el texto alternativo de la imagen","Choose heading":"Elegir Encabezado",Color:"","Color picker":"",Column:"Columna",Dashed:"","Decrease indent":"Disminuir sangría",Default:"Por defecto","Delete column":"Eliminar columna","Delete row":"Eliminar fila","Dim grey":"Gris Oscuro",Dimensions:"","Document colors":"Colores del documento",Dotted:"",Double:"",Downloadable:"Descargable","Dropdown toolbar":"Barra de herramientas desplegable","Edit link":"Editar enlace","Editor toolbar":"Barra de herramientas de edición","Enter image caption":"Introducir título de la imagen","Font Background Color":"Color de Fondo","Font Color":"Color de Fuente","Font Family":"Fuente","Font Size":"Tamaño de fuente","Full size image":"Imagen a tamaño completo",Green:"Verde","Green marker":"Marcador verde","Green pen":"Texto verde",Grey:"Gris",Groove:"","Header column":"Columna de encabezado","Header row":"Fila de encabezado",Heading:"Encabezado","Heading 1":"Encabezado 1","Heading 2":"Encabezado 2","Heading 3":"Encabezado 3","Heading 4":"Encabezado 4","Heading 5":"Encabezado 5","Heading 6":"Encabezado 6",Height:"",Highlight:"Resaltar","Horizontal line":"Línea horizontal","Horizontal text alignment toolbar":"",Huge:"Enorme","Image toolbar":"Barra de herramientas de imagen","image widget":"Widget de imagen","Increase indent":"Aumentar sangría","Insert column left":"Insertar columna izquierda","Insert column right":"Insertar columna derecha","Insert image":"Insertar imagen","Insert media":"Insertar contenido multimedia","Insert paragraph after block":"","Insert paragraph before block":"","Insert row above":"Insertar fila encima","Insert row below":"Insertar fila debajo","Insert table":"Insertar tabla",Inset:"",Italic:"Cursiva",Justify:"Justificar","Justify cell text":"","Left aligned image":"Imagen alineada a la izquierda","Light blue":"Azul Claro","Light green":"Verde Claro","Light grey":"Gris Claro",Link:"Enlace","Link URL":"URL del enlace","Media URL":"URL del contenido multimedia","media widget":"Widget de contenido multimedia","Merge cell down":"Combinar celda inferior","Merge cell left":"Combinar celda izquierda","Merge cell right":"Combinar celda derecha","Merge cell up":"Combinar celda superior","Merge cells":"Combinar celdas",Next:"Siguiente",None:"","Numbered List":"Lista numerada","Open in a new tab":"Abrir en una pestaña nueva ","Open link in new tab":"Abrir enlace en una pestaña nueva",Orange:"Anaranjado",Outset:"",Padding:"",Paragraph:"Párrafo","Paste the media URL in the input.":"Pega la URL del contenido multimedia","Pink marker":"Marcador rosa",Previous:"Anterior",Purple:"Morado",Red:"Rojo","Red pen":"Texto rojo",Redo:"Rehacer","Remove color":"Remover color","Remove highlight":"Quitar resaltado","Rich Text Editor":"Editor de Texto Enriquecido","Rich Text Editor, %0":"Editor de Texto Enriquecido, %0",Ridge:"","Right aligned image":"Imagen alineada a la derecha",Row:"Fila",Save:"Guardar","Select column":"","Select row":"","Show more items":"Mostrar más elementos","Side image":"Imagen lateral",Small:"Pequeño",Solid:"","Split cell horizontally":"Dividir celdas horizontalmente","Split cell vertically":"Dividir celdas verticalmente",Strikethrough:"Tachado",Style:"",Subscript:"Subíndice",Superscript:"Superíndice","Table alignment toolbar":"","Table cell text alignment":"","Table properties":"","Table toolbar":"Barra de herramientas de tabla","Text alignment":"Alineación del texto","Text alignment toolbar":"Barra de herramientas de alineación del texto","Text alternative":"Texto alternativo","Text highlight toolbar":"Barra de herramientas de resaltado de texto",'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".':"","The URL must not be empty.":"La URL no debe estar vacía",'The value is invalid. Try "10px" or "2em" or simply "2".':"","This link has no URL":"Este enlace no tiene URL","This media URL is not supported.":"La URL de este contenido multimedia no está soportada",Tiny:"Minúsculo","Tip: Paste the URL into the content to embed faster.":"Tip: pega la URL dentro del contenido para embeber más rápido",Turquoise:"Turquesa",Underline:"Subrayado",Undo:"Deshacer",Unlink:"Quitar enlace","Upload failed":"Fallo en la subida","Upload in progress":"Subida en progreso","Vertical text alignment toolbar":"",White:"Blanco","Widget toolbar":"Barra de herramientas del widget",Width:"",Yellow:"Amarillo","Yellow marker":"Marcador amarillo"}),t.getPluralForm=function(e){return 1!=e}}(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{102:function(e,t,a){"use strict";var r={methods:{cambiarValorImagen:function(e){e?this.parametros.imagen=e:this.validarTipoForm?this.parametros.imagen="":(this.parametros.imagen=this.info.imagen,this.imagenMiniatura=this.info.imagenPublica,this.$refs.inputImagen.value="")},obtenerImagen:function(e){var t=e.target.files[0];t?!/(.jpg|.jpeg|.png)$/i.exec(t.name)||t.size>2e6?(this.imagenError="La imagen debe ser en formato .jpg .png y menor a 2Mb.",this.imagenMiniatura=this.info.imagenPublica,this.$refs.inputImagen.value="",this.parametros.imagen=this.info.imagen):(this.imagenError="",this.cargarImagen(t)):(this.imagenMiniatura=this.info.imagenPublica,this.$refs.inputImagen.value="",this.parametros.imagen=this.info.imagen)},cargarImagen:function(e){var t=this,a=new Image;a.onload=function(e){t.imagenMiniatura=a.src},a.src=URL.createObjectURL(e)}},computed:{mostraImagen:function(){return this.imagenMiniatura},mostrarBtnCroppie:function(){return this.imagenMiniatura!=this.info.imagenPublica}}};t.a=r},31:function(e,t,a){"use strict";var r=a(157),i=a.n(r),o={props:["id","imagen","mostrarBtnCroppie","zoom","editar","enableZoom","boundaryHeigth","viewportWidth"],data:function(){return{croppie:null,btnAprobar:!0}},mounted:function(){this.crearCroppie()},methods:{crearCroppie:function(){var e=document.getElementById(this.id);this.croppie=new i.a(e,{viewport:{width:this.viewportWidth,height:200},boundary:{height:this.boundaryHeigth},enableZoom:this.enableZoom}),this.croppie.bind({url:this.imagen,zoom:this.zoom})},resultado:function(){var e=this;this.croppie.result().then((function(t){e.btnAprobar=!1,e.$emit("cambiarValorImagen",t)}))},cancelar:function(){this.btnAprobar=!0,this.$emit("cambiarValorImagen","")}},watch:{imagen:function(){this.imagen&&(this.btnAprobar=!0,this.croppie.destroy(),this.crearCroppie())}},computed:{mostrarMensaje:function(){return!(!this.btnAprobar||this.editar)}}},n=a(1),s=Object(n.a)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{attrs:{id:e.id}}),e._v(" "),e.mostrarBtnCroppie?[e.btnAprobar?[a("button",{staticClass:"btn btn-success",on:{click:e.resultado}},[e._v("Aprobar Imagen")]),e._v(" "),e.mostrarMensaje?a("em",{staticClass:"text-danger small"},[e._v("Debe Aprobar la imagen")]):e._e()]:[a("button",{staticClass:"btn btn-danger float-right",on:{click:e.cancelar}},[e._v("Cancelar")])]]:e._e()],2)}),[],!1,null,null,null);t.a=s.exports},44:function(e,t,a){"use strict";t.a=function(e){return{data:function(){return{"numPestañas":0,"numPestaña":0}},methods:{"obtenerValorPestañas":function(){var t=this.$ls.get(e);t?(this.numPestañas=t.numPestañas+1,this.numPestaña=this.numPestañas,this.$ls.set(e,{"numPestañas":this.numPestañas,"numPestañaSaliente":0})):(this.numPestañas=1,this.numPestaña=1,this.$ls.set(e,{"numPestañas":1,"numPestañaSaliente":0}))},"modificarValorPestañas":function(t,a){t&&a?(this.numPestañas=t.numPestañas,t.numPestañas<a.numPestañas&&t.numPestañaSaliente<this.numPestaña&&(this.numPestaña=this.numPestaña-1)):1==this.numPestaña&&this.$ls.set(e,{"numPestañas":this.numPestañas,"numPestañaSaliente":0})},verificar:function(){1===this.numPestañas?this.$ls.remove(e):this.$ls.set(e,{"numPestañas":--this.numPestañas,"numPestañaSaliente":this.numPestaña})},beforeunload:function(){this.verificar()}},mounted:function(){this.obtenerValorPestañas(),window.addEventListener("beforeunload",this.beforeunload)},created:function(){this.$ls.on(e,this.modificarValorPestañas)},beforeDestroy:function(){this.verificar(),this.$ls.off(e,this.modificarValorPestañas),window.removeEventListener("beforeunload",this.beforeunload)}}}},652:function(e,t,a){"use strict";a.r(t);var r=a(44),i=a(0),o=a(88),n=a(77),s=[{name:"nombres",sortField:"nombres",title:"Nombres",titleClass:"text-center"},{name:"apellidos",sortField:"apellidos",title:"Apellidos",titleClass:"text-center"},{name:"email",sortField:"email",title:"Email",titleClass:"text-center"},{name:"nivel_estudio",sortField:"nivel_estudio",title:"Nivel Estudio",titleClass:"text-center"},{name:"cargo",sortField:"cargo",title:"Cargo",titleClass:"text-center"},{name:"__component:checkboxs_investigadores",title:"Publicar",titleClass:"text-center",dataClass:"text-center",sortField:"publicar"},{name:"__component:acciones_investigadores",title:"Acciones",titleClass:"text-center",dataClass:"text-center"}],l=a(6),c=a(67);function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(Object(a),!0).forEach((function(t){u(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var p={components:{MyVuetable:a(12).a},data:function(){return{fields:s,sortOrder:[{field:"nombres",direction:"asc"}],id:"",bloquearBtnModal:!1}},mixins:[l.a,Object(c.a)("Investigador")],computed:d(d({},i.a.mapState("investigadores",["investigadores"])),{},{mostrarTabla:function(){return""!=this.investigadores&&null!=this.investigadores}}),methods:d(d({},i.a.mapActions("investigadores",["accionInvestigador"])),{},{beforeOpenEliminar:function(e){this.id=e.params.id},eliminarInvestigador:function(){var e=this;this.bloquearBtnModal=!0,axios.delete("/investigadores/".concat(this.id)).then((function(t){e.bloquearBtnModal=!1,e.accionInvestigador({tipo:"eliminar",data:t.data}),e.$modal.hide("modal_eliminar_investigador"),e.toastr("Eliminar Investigador","Investigador eliminado con exito!!","success"),e.actualizarTabla()})).catch((function(t){403===t.response.status?e.$router.push("/sin-acceso"):405===t.response.status||405===t.response.status?(localStorage.setItem("mensajeLogin","Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"),window.location.href="/"):(e.bloquearBtnModal=!1,e.toastr("Error!!!!","","error"))}))}}),created:function(){this.$emit("cambiarTipo","tabla")}},v=a(1),g=Object(v.a)(p,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.mostrarTabla?[a("MyVuetable",{ref:"tabla",attrs:{apiUrl:"/info-panel/investigadores-tabla",fields:e.fields,sortOrder:e.sortOrder,detailRowComponent:"",nameGet:"investigadores"}})]:[e._m(0)],e._v(" "),a("transition",{attrs:{name:"fade"}},[a("modal",{attrs:{name:"modal_eliminar_investigador",classes:"my_modal",maxWidth:400,adaptive:!0,height:"auto",scrollable:!0},on:{"before-open":e.beforeOpenEliminar,closed:e.closeEliminar}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLongTitle"}},[e._v("Eliminar Investigador")]),e._v(" "),a("button",{staticClass:"close",attrs:{type:"button"},on:{click:function(t){return e.$modal.hide("modal_eliminar_investigador")}}},[a("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])]),e._v(" "),a("div",{staticClass:"modal-body"},[a("p",[e._v("Esta segura/o de eliminar el Investigador?.")])]),e._v(" "),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(t){return e.$modal.hide("modal_eliminar_investigador")}}},[e._v("Cancelar")]),e._v(" "),a("button",{staticClass:"btn btn-success",attrs:{type:"button",disabled:e.bloquearBtnModal},on:{click:e.eliminarInvestigador}},[e._v("Eliminar")])])])])],1)],2)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"text-center"},[t("h5",{staticClass:"mt-5 mb-5"},[t("span",{staticClass:"pr-1"},[t("b",{staticClass:"text-success"},[this._v("AÚN NO SE HAN AGREGADO INVESTIGADORES")])])])])}],!1,null,null,null).exports,b=a(102),h=a(31),f=a(2);function _(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function $(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?_(Object(a),!0).forEach((function(t){C(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):_(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function C(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var I=/^[A-Za-z\sÁÉÍÓÚáéíóúñÑüÜ]+$/,y={components:{Croppie:h.a},props:["idInvestigador"],data:function(){return{info:"",parametros:{nombres:"",apellidos:"",email:"",nivel_estudio:"",cargo:"",imagen:"",publicar:!1},tituloForm:"",imagenMiniatura:"",nomBtn:"",imagenError:"",errors:[],bloquearBtn:!1,mensajes:{required:"El campo es requerido.",alpha:"El campo solo puede contener letras.",unique:"Ya existe un registro con ese email.",email:"El email debe ser valido."}}},validations:{parametros:{nombres:{required:f.required,alpha:function(e){return""==e||!!I.test(e)}},apellidos:{required:f.required,alpha:function(e){return""==e||!!I.test(e)}},email:{required:f.required,email:f.email,unique:function(e){return""==e||!this.validarEmailUnique}},nivel_estudio:{required:f.required,alpha:function(e){return""==e||!!I.test(e)}},cargo:{required:f.required,alpha:function(e){return""==e||!!I.test(e)}},imagen:{required:f.required}}},mixins:[l.a,b.a],methods:$($({},i.a.mapActions("investigadores",["accionInvestigador"])),{},{evento:function(){var e=this;this.bloquearBtn=!0,this.$v.parametros.$touch(),this.$v.$invalid?(this.bloquearBtn=!1,this.toastr("Error!!","Favor llenar correctamente los campos","error")):"Agregar Investigador"===this.tituloForm?axios.post("/investigadores",this.parametros).then((function(t){"http://127.0.0.1:8000/"===t.request.responseURL?(localStorage.setItem("mensajeLogin","Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"),window.location.href="/"):(e.bloquearBtn=!1,e.toastr("Agregar Investigador","Investigador agregado con exito!!","success"),e.accionInvestigador({tipo:"agregar",data:t.data}),e.$emit("cambiarVariableFormulario"))})).catch((function(t){e.verificarError(t.response.status,t.response.data.errors)})):axios.put("/investigadores/".concat(this.idInvestigador),this.parametros).then((function(t){e.bloquearBtn=!1,e.toastr("Editar Investigador","Investigador editado con exito!!","success"),window.Echo.private("desbloquearBtnsInvestigador").whisper("desbloquearBtnsInvestigador",{id:t.data.id}),e.$events.fire("eliminarMiBloqueoInvestigador",{id:t.data.id}),e.accionInvestigador({tipo:"editar",data:t.data}),e.$emit("cambiarVariableFormulario")})).catch((function(t){e.verificarError(t.response.status,t.response.data.errors)}))},llenarInfo:function(){this.parametros.nombres=this.info.nombres,this.parametros.apellidos=this.info.apellidos,this.parametros.email=this.info.email,this.parametros.cargo=this.info.cargo,this.parametros.nivel_estudio=this.info.nivel_estudio,this.parametros.imagen=this.info.imagen,this.imagenMiniatura=this.info.imagenPublica,1==this.info.publicar&&(this.parametros.publicar=!0)}}),computed:$($({},i.a.mapGetters("investigadores",["getInvestigadorById","getInvestigadorByEmail"])),{},{btnClase:function(){return"Agregar Investigador"===this.tituloForm?"btn-success":"btn-warning"},validarTipoForm:function(){return"Agregar Investigador"===this.tituloForm},titulo:function(){return this.tituloForm},nomBtnComputed:function(){return this.nomBtn},validarEmailUnique:function(){return!!this.getInvestigadorByEmail(this.parametros.email)&&this.getInvestigadorByEmail(this.parametros.email).id!=this.info.id}}),created:function(){0===this.idInvestigador?(this.tituloForm="Agregar Investigador",this.nomBtn="Agregar",this.$emit("cambiarTipo","agregar")):(this.info=this.getInvestigadorById(this.idInvestigador),this.llenarInfo(),this.$emit("cambiarTipo","editar"),this.tituloForm="Editar Investigador",this.nomBtn="Editar")}};function P(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function O(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var w={components:{Tabla:g,Form:Object(v.a)(y,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container mt-3 ml-2 mr-2"},[a("div",{staticClass:"row justify-content-md-center"},[a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"main-card mb-3 card"},[a("form",{on:{submit:function(t){return t.preventDefault(),e.evento(t)}}},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[e._v(e._s(e.titulo))]),e._v(" "),""!=e.errors?[a("div",{staticClass:"alert alert-danger"},e._l(e.errors,(function(t,r){return a("p",{key:r},[e._v(e._s(t[0]))])})),0)]:e._e(),e._v(" "),a("div",{staticClass:"position-relative form-group"},[a("label",{attrs:{for:"nombres"}},[e._v("Nombres")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.parametros.nombres.$model,expression:"$v.parametros.nombres.$model",modifiers:{trim:!0}}],class:["form-control",e.$v.parametros.nombres.$error?"error-input-select":""],attrs:{name:"nombres",id:"nombres",placeholder:"...",type:"text"},domProps:{value:e.$v.parametros.nombres.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.parametros.nombres,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),e._v(" "),e.$v.parametros.nombres.$error&&!e.$v.parametros.nombres.required?a("em",{staticClass:"text-error-input"},[e._v(e._s(e.mensajes.required))]):e._e(),e._v(" "),e.$v.parametros.nombres.$error&&!e.$v.parametros.nombres.alpha?a("em",{staticClass:"text-error-input"},[e._v(e._s(e.mensajes.alpha))]):e._e()]),e._v(" "),a("div",{staticClass:"position-relative form-group"},[a("label",{attrs:{for:"apellidos"}},[e._v("Apellidos")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.parametros.apellidos.$model,expression:"$v.parametros.apellidos.$model",modifiers:{trim:!0}}],class:["form-control",e.$v.parametros.apellidos.$error?"error-input-select":""],attrs:{name:"apellidos",id:"apellidos",placeholder:"...",type:"text"},domProps:{value:e.$v.parametros.apellidos.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.parametros.apellidos,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),e._v(" "),e.$v.parametros.apellidos.$error&&!e.$v.parametros.apellidos.required?a("em",{staticClass:"text-error-input"},[e._v(e._s(e.mensajes.required))]):e._e(),e._v(" "),e.$v.parametros.apellidos.$error&&!e.$v.parametros.apellidos.alpha?a("em",{staticClass:"text-error-input"},[e._v(e._s(e.mensajes.alpha))]):e._e()]),e._v(" "),a("div",{staticClass:"position-relative form-group"},[a("label",{attrs:{for:"email"}},[e._v("Email")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.parametros.email.$model,expression:"$v.parametros.email.$model",modifiers:{trim:!0}}],class:["form-control",e.$v.parametros.email.$error?"error-input-select":""],attrs:{name:"email",id:"email",placeholder:"...",type:"email"},domProps:{value:e.$v.parametros.email.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.parametros.email,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),e._v(" "),e.$v.parametros.email.$error&&!e.$v.parametros.email.required?a("em",{staticClass:"text-error-input"},[e._v(e._s(e.mensajes.required))]):e._e(),e._v(" "),e.$v.parametros.email.$error&&!e.$v.parametros.email.email?a("em",{staticClass:"text-error-input"},[e._v(e._s(e.mensajes.email))]):e._e(),e._v(" "),e.$v.parametros.email.$error&&!e.$v.parametros.email.unique?a("em",{staticClass:"text-error-input"},[e._v(e._s(e.mensajes.unique))]):e._e()]),e._v(" "),a("div",{staticClass:"position-relative form-group"},[a("label",{attrs:{for:"nivel_estudio"}},[e._v("Nivel de Estudio")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.parametros.nivel_estudio.$model,expression:"$v.parametros.nivel_estudio.$model",modifiers:{trim:!0}}],class:["form-control",e.$v.parametros.nivel_estudio.$error?"error-input-select":""],attrs:{name:"nivel_estudio",id:"nivel_estudio",placeholder:"...",type:"text"},domProps:{value:e.$v.parametros.nivel_estudio.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.parametros.nivel_estudio,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),e._v(" "),e.$v.parametros.nivel_estudio.$error&&!e.$v.parametros.nivel_estudio.required?a("em",{staticClass:"text-error-input"},[e._v(e._s(e.mensajes.required))]):e._e(),e._v(" "),e.$v.parametros.nivel_estudio.$error&&!e.$v.parametros.nivel_estudio.alpha?a("em",{staticClass:"text-error-input"},[e._v(e._s(e.mensajes.alpha))]):e._e()]),e._v(" "),a("div",{staticClass:"position-relative form-group"},[a("label",{attrs:{for:"cargo"}},[e._v("Cargo")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.parametros.cargo.$model,expression:"$v.parametros.cargo.$model",modifiers:{trim:!0}}],class:["form-control",e.$v.parametros.cargo.$error?"error-input-select":""],attrs:{name:"cargo",id:"cargo",placeholder:"...",type:"text"},domProps:{value:e.$v.parametros.cargo.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.parametros.cargo,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),e._v(" "),e.$v.parametros.cargo.$error&&!e.$v.parametros.cargo.required?a("em",{staticClass:"text-error-input"},[e._v(e._s(e.mensajes.required))]):e._e(),e._v(" "),e.$v.parametros.cargo.$error&&!e.$v.parametros.cargo.alpha?a("em",{staticClass:"text-error-input"},[e._v(e._s(e.mensajes.alpha))]):e._e()]),e._v(" "),a("div",{staticClass:"position-relative form-group"},[a("label",{attrs:{for:"imagen"}},[e._v("Imagen")]),e._v(" "),a("input",{ref:"inputImagen",class:["form-control-file",e.$v.parametros.imagen.$error?"error-input-select":""],attrs:{name:"imagen",id:"imagen",accept:"image/jpeg, image/png",type:"file"},on:{change:e.obtenerImagen}}),e._v(" "),e.imagenError?a("em",{staticClass:"text-error-input"},[e._v(e._s(e.imagenError))]):e._e(),e._v(" "),e.$v.parametros.imagen.$error&&!e.$v.parametros.imagen.required?a("em",{staticClass:"text-error-input"},[e._v(e._s(e.mensajes.required))]):e._e()]),e._v(" "),a("div",{staticClass:"custom-checkbox custom-control mb-2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.parametros.publicar,expression:"parametros.publicar"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"publicar"},domProps:{checked:Array.isArray(e.parametros.publicar)?e._i(e.parametros.publicar,null)>-1:e.parametros.publicar},on:{change:function(t){var a=e.parametros.publicar,r=t.target,i=!!r.checked;if(Array.isArray(a)){var o=e._i(a,null);r.checked?o<0&&e.$set(e.parametros,"publicar",a.concat([null])):o>-1&&e.$set(e.parametros,"publicar",a.slice(0,o).concat(a.slice(o+1)))}else e.$set(e.parametros,"publicar",i)}}}),e._v(" "),a("label",{staticClass:"custom-control-label",attrs:{for:"publicar"}},[e._v("Desea publicar el Investigador?")])]),e._v(" "),a("button",{staticClass:"mb-2 mr-2 btn btn-block",class:e.btnClase,attrs:{disabled:e.bloquearBtn}},[e._v(e._s(e.nomBtnComputed))])],2)])])]),e._v(" "),a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"main-card mb-3 card"},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[e._v("Imagen")]),e._v(" "),e.mostraImagen?[e.mostraImagen===e.info.imagenPublica?[a("Croppie",{attrs:{id:"croppie",imagen:e.mostraImagen,mostrarBtnCroppie:e.mostrarBtnCroppie,enableZoom:!1,zoom:0,editar:!0,boundaryHeigth:300,viewportWidth:200},on:{cambiarValorImagen:e.cambiarValorImagen}})]:[a("Croppie",{attrs:{id:"croppie",imagen:e.mostraImagen,mostrarBtnCroppie:e.mostrarBtnCroppie,zoom:1,enableZoom:!0,editar:!1,boundaryHeigth:300,viewportWidth:200},on:{cambiarValorImagen:e.cambiarValorImagen}})]]:[e._m(0)]],2)])])])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"text-center"},[t("h5",{staticClass:"mt-5 mb-5"},[t("span",{staticClass:"pr-1"},[t("b",{staticClass:"text-warning"},[this._v("SIN IMAGEN")])])])])}],!1,null,null,null).exports},mixins:[Object(o.a)("Investigador","investigadores"),Object(n.a)("Investigador")],computed:function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?P(Object(a),!0).forEach((function(t){O(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):P(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},i.a.mapGetters(["getPermisoByNombre"])),methods:{cambiarTipo:function(e){this.$emit("cambiarTipo",e)}}};function x(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function E(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?x(Object(a),!0).forEach((function(t){j(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):x(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function j(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var A={components:{Contenedor:Object(v.a)(w,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main-card mb-3 card"},[a("div",{staticClass:"card-header-tab card-header"},[e._m(0),e._v(" "),a("div",{staticClass:"btn-actions-pane-right actions-icon-btn"},[e.formulario?[a("button",{staticClass:"btn-wide btn-outline-2x mr-md-2 btn btn-outline-danger btn-sm",on:{click:e.cerrarFormulario}},[e._v("Cancelar")])]:[e.getPermisoByNombre("agregar-investigador")?a("button",{staticClass:"btn-wide btn-outline-2x mr-md-2 btn btn-outline-success btn-sm",on:{click:function(t){return e.abrirFormulario(0)}}},[e._v("Agregar")]):e._e()]],2)]),e._v(" "),a("div",{staticClass:"card-body"},[e.formulario?[a("Form",{attrs:{idInvestigador:e.id},on:{cambiarTipo:e.cambiarTipo,cambiarVariableFormulario:e.cambiarVariableFormulario}})]:[a("Tabla",{on:{cambiarTipo:e.cambiarTipo}})]],2)])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"card-header-title font-size-lg text-capitalize font-weight-normal"},[t("i",{staticClass:"header-icon lnr-laptop-phone mr-3 text-muted opacity-6"}),this._v("\n      Tabla Dinámica Investigadores\n    ")])}],!1,null,null,null).exports},data:function(){return{tipo:""}},mixins:[Object(r.a)("investigador")],methods:E(E({},i.a.mapActions("investigadores",["obtenerInvestigadores","accionInvestigador"])),{},{cambiarTipo:function(e){this.tipo="agregar"===e?"Agregar":"editar"===e?"Editar":""}}),created:function(){var e=this;this.$emit("rutaSider",window.location.pathname),this.obtenerInvestigadores(),window.Echo.channel("investigador").listen("InvestigadorEvent",(function(t){e.accionInvestigador({tipo:t.tipo,data:t.investigador}),e.$events.fire(t.investigador.id+"-actualizarPublicarInvestigador",t.investigador.publicar),e.$events.fire("actualizartablaInvestigador")}))}},q=Object(v.a)(A,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"app-page-title"},[a("div",{staticClass:"page-title-wrapper"},[a("div",{staticClass:"page-title-heading"},[e._m(0),e._v(" "),a("div",[e._v("\n          Investigadores\n          "),a("div",{staticClass:"page-title-subheading opacity-10"},[a("nav",[a("ol",{staticClass:"breadcrumb"},[e._m(1),e._v(" "),e._m(2),e._v(" "),e.tipo?[a("li",{staticClass:"breadcrumb-item"},[a("a",[e._v(e._s(e.tipo))])])]:e._e()],2)])])])]),e._v(" "),a("div",{staticClass:"page-title-actions"})])]),e._v(" "),1==e.numPestaña?[a("Contenedor",{on:{cambiarTipo:e.cambiarTipo}})]:[e._m(3)]],2)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"page-title-icon"},[t("i",{staticClass:"pe-7s-id icon-gradient bg-mean-fruit"})])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",{staticClass:"breadcrumb-item"},[t("a",[t("i",{staticClass:"fa fa-home"})])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",{staticClass:"breadcrumb-item"},[t("a",[this._v("Tabla Investigadores")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"container"},[t("div",{staticClass:"main-card mb-3 card"},[t("div",{staticClass:"card-body"},[t("div",{staticClass:"row justify-content-center"},[t("div",{staticClass:"col-md-8"},[t("div",{staticClass:"alert alert-danger mt-4 text-center",attrs:{role:"alert"}},[this._v("Ya has ingresado desde otra pestaña del navegador!!")])])])])])])}],!1,null,null,null);t.default=q.exports}}]);