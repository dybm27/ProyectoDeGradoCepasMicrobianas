!function(e){const a=e.es=e.es||{};a.dictionary=Object.assign(a.dictionary||{},{"%0 of %1":"%0 de %1","Align cell text to the bottom":"","Align cell text to the center":"","Align cell text to the left":"","Align cell text to the middle":"","Align cell text to the right":"","Align cell text to the top":"","Align center":"Centrar","Align left":"Alinear a la izquierda","Align right":"Alinear a la derecha","Align table to the left":"","Align table to the right":"",Alignment:"",Aquamarine:"Aguamarina",Background:"",Big:"Grande",Black:"Negro","Block quote":"Entrecomillado",Blue:"Azul","Blue marker":"Marcador azul",Bold:"Negrita",Border:"","Bulleted List":"Lista de puntos",Cancel:"Cancelar","Cell properties":"","Center table":"","Centered image":"Imagen centrada","Change image text alternative":"Cambiar el texto alternativo de la imagen","Choose heading":"Elegir Encabezado",Color:"","Color picker":"",Column:"Columna",Dashed:"","Decrease indent":"Disminuir sangría",Default:"Por defecto","Delete column":"Eliminar columna","Delete row":"Eliminar fila","Dim grey":"Gris Oscuro",Dimensions:"","Document colors":"Colores del documento",Dotted:"",Double:"",Downloadable:"Descargable","Dropdown toolbar":"Barra de herramientas desplegable","Edit link":"Editar enlace","Editor toolbar":"Barra de herramientas de edición","Enter image caption":"Introducir título de la imagen","Font Background Color":"Color de Fondo","Font Color":"Color de Fuente","Font Family":"Fuente","Font Size":"Tamaño de fuente","Full size image":"Imagen a tamaño completo",Green:"Verde","Green marker":"Marcador verde","Green pen":"Texto verde",Grey:"Gris",Groove:"","Header column":"Columna de encabezado","Header row":"Fila de encabezado",Heading:"Encabezado","Heading 1":"Encabezado 1","Heading 2":"Encabezado 2","Heading 3":"Encabezado 3","Heading 4":"Encabezado 4","Heading 5":"Encabezado 5","Heading 6":"Encabezado 6",Height:"",Highlight:"Resaltar","Horizontal line":"Línea horizontal","Horizontal text alignment toolbar":"",Huge:"Enorme","Image toolbar":"Barra de herramientas de imagen","image widget":"Widget de imagen","Increase indent":"Aumentar sangría","Insert column left":"Insertar columna izquierda","Insert column right":"Insertar columna derecha","Insert image":"Insertar imagen","Insert media":"Insertar contenido multimedia","Insert paragraph after block":"","Insert paragraph before block":"","Insert row above":"Insertar fila encima","Insert row below":"Insertar fila debajo","Insert table":"Insertar tabla",Inset:"",Italic:"Cursiva",Justify:"Justificar","Justify cell text":"","Left aligned image":"Imagen alineada a la izquierda","Light blue":"Azul Claro","Light green":"Verde Claro","Light grey":"Gris Claro",Link:"Enlace","Link URL":"URL del enlace","Media URL":"URL del contenido multimedia","media widget":"Widget de contenido multimedia","Merge cell down":"Combinar celda inferior","Merge cell left":"Combinar celda izquierda","Merge cell right":"Combinar celda derecha","Merge cell up":"Combinar celda superior","Merge cells":"Combinar celdas",Next:"Siguiente",None:"","Numbered List":"Lista numerada","Open in a new tab":"Abrir en una pestaña nueva ","Open link in new tab":"Abrir enlace en una pestaña nueva",Orange:"Anaranjado",Outset:"",Padding:"",Paragraph:"Párrafo","Paste the media URL in the input.":"Pega la URL del contenido multimedia","Pink marker":"Marcador rosa",Previous:"Anterior",Purple:"Morado",Red:"Rojo","Red pen":"Texto rojo",Redo:"Rehacer","Remove color":"Remover color","Remove highlight":"Quitar resaltado","Rich Text Editor":"Editor de Texto Enriquecido","Rich Text Editor, %0":"Editor de Texto Enriquecido, %0",Ridge:"","Right aligned image":"Imagen alineada a la derecha",Row:"Fila",Save:"Guardar","Select column":"","Select row":"","Show more items":"Mostrar más elementos","Side image":"Imagen lateral",Small:"Pequeño",Solid:"","Split cell horizontally":"Dividir celdas horizontalmente","Split cell vertically":"Dividir celdas verticalmente",Strikethrough:"Tachado",Style:"",Subscript:"Subíndice",Superscript:"Superíndice","Table alignment toolbar":"","Table cell text alignment":"","Table properties":"","Table toolbar":"Barra de herramientas de tabla","Text alignment":"Alineación del texto","Text alignment toolbar":"Barra de herramientas de alineación del texto","Text alternative":"Texto alternativo","Text highlight toolbar":"Barra de herramientas de resaltado de texto",'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".':"","The URL must not be empty.":"La URL no debe estar vacía",'The value is invalid. Try "10px" or "2em" or simply "2".':"","This link has no URL":"Este enlace no tiene URL","This media URL is not supported.":"La URL de este contenido multimedia no está soportada",Tiny:"Minúsculo","Tip: Paste the URL into the content to embed faster.":"Tip: pega la URL dentro del contenido para embeber más rápido",Turquoise:"Turquesa",Underline:"Subrayado",Undo:"Deshacer",Unlink:"Quitar enlace","Upload failed":"Fallo en la subida","Upload in progress":"Subida en progreso","Vertical text alignment toolbar":"",White:"Blanco","Widget toolbar":"Barra de herramientas del widget",Width:"",Yellow:"Amarillo","Yellow marker":"Marcador amarillo"}),a.getPluralForm=function(e){return 1!=e}}(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{115:function(e,a,t){"use strict";window.Vue=t(180);var i=new Vue,n={props:["source","text","active","directionClass","num"]},r=t(1),s={props:["order","id"],data:function(){return{buttonClass:"carousel-control-".concat(this.order)}},computed:{iconClass:function(){return"".concat(this.buttonClass,"-icon")}},methods:{handleClick:function(e){"next"===this.order?i.$emit("goNext-"+this.id):"prev"===this.order&&i.$emit("goPrev-"+this.id)}}},o={components:{CarouselItem:Object(r.a)(n,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("transition",{attrs:{name:"slide"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.active,expression:"active"}],staticClass:"carousel-item",class:e.directionClass},[t("div",{staticClass:"container"},[t("div",{staticClass:"row"},[t("span",{staticClass:"badge badge-pill badge-success float-left"},[e._v(e._s(e.num))])]),e._v(" "),t("div",{staticClass:"row justify-content-md-center"},[t("img",{staticClass:"border border-success rounded",attrs:{width:"200px",height:"200px",src:e.source,alt:e.text}})])])])])],1)}),[],!1,null,null,null).exports,CarouselControl:Object(r.a)(s,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("a",{class:e.buttonClass,attrs:{href:"#carouselExampleControls",role:"button","data-slide":e.order},on:{click:function(a){return a.preventDefault(),e.handleClick(a)}}},[t("span",{class:e.iconClass,staticStyle:{"background-color":"#3ac47d"},attrs:{"aria-hidden":"true"}}),e._v(" "),t("span",{staticClass:"sr-only"},[e._t("default")],2)])])}),[],!1,null,null,null).exports},props:["imagenes","id"],data:function(){return{directionClass:"",prevData:!0,nextData:!0}},watch:{imagenes:function(){this.imagenes&&(this.verificarPrev(),this.verificarNext())}},methods:{getActiveIndex:function(){return this.imagenes.findIndex((function(e){return e.isActive}))},next:function(){var e,a=this.getActiveIndex(),t=a+1;t>this.imagenes.length-1||(this.prevData=!0,e=this.imagenes[a],this.imagenes[t].isActive=!0,e.isActive=!1,this.directionClass="slide-next",(t+=1)>this.imagenes.length-1&&(this.nextData=!1))},prev:function(){var e,a=this.getActiveIndex(),t=a-1;t<0||(this.nextData=!0,e=this.imagenes[a],this.imagenes[t].isActive=!0,e.isActive=!1,this.directionClass="slide-prev",(t-=1)<0&&(this.prevData=!1))},verificarNext:function(){this.getActiveIndex()+1>this.imagenes.length-1?this.nextData=!1:this.nextData=!0},verificarPrev:function(){var e=this.getActiveIndex()-1;this.prevData=!(e<0)}},computed:{validarPrev:function(){return this.prevData},validarNext:function(){return this.nextData}},created:function(){this.verificarPrev(),this.verificarNext(),i.$on("goPrev-"+this.id,this.prev).$on("goNext-"+this.id,this.next)}},l=Object(r.a)(o,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"carousel slide",attrs:{id:"carouselExampleControls"}},[t("div",{staticClass:"carousel-inner"},e._l(e.imagenes,(function(a){return t("CarouselItem",{key:a.num,attrs:{source:a.source,text:a.text,num:a.num,active:a.isActive,directionClass:e.directionClass}})})),1),e._v(" "),t("CarouselControl",{directives:[{name:"show",rawName:"v-show",value:e.validarPrev,expression:"validarPrev"}],attrs:{id:e.id,order:"prev"}},[e._v("Previous")]),e._v(" "),t("CarouselControl",{directives:[{name:"show",rawName:"v-show",value:e.validarNext,expression:"validarNext"}],attrs:{id:e.id,order:"next"}},[e._v("Next")])],1)}),[],!1,null,null,null);a.a=l.exports},31:function(e,a,t){"use strict";var i=t(157),n=t.n(i),r={props:["id","imagen","mostrarBtnCroppie","zoom","editar","enableZoom","boundaryHeigth","viewportWidth"],data:function(){return{croppie:null,btnAprobar:!0}},mounted:function(){this.crearCroppie()},methods:{crearCroppie:function(){var e=document.getElementById(this.id);this.croppie=new n.a(e,{viewport:{width:this.viewportWidth,height:200},boundary:{height:this.boundaryHeigth},enableZoom:this.enableZoom}),this.croppie.bind({url:this.imagen,zoom:this.zoom})},resultado:function(){var e=this;this.croppie.result().then((function(a){e.btnAprobar=!1,e.$emit("cambiarValorImagen",a)}))},cancelar:function(){this.btnAprobar=!0,this.$emit("cambiarValorImagen","")}},watch:{imagen:function(){this.imagen&&(this.btnAprobar=!0,this.croppie.destroy(),this.crearCroppie())}},computed:{mostrarMensaje:function(){return!(!this.btnAprobar||this.editar)}}},s=t(1),o=Object(s.a)(r,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"container"},[t("div",{attrs:{id:e.id}}),e._v(" "),e.mostrarBtnCroppie?[e.btnAprobar?[t("button",{staticClass:"btn btn-success",attrs:{dusk:"btn-croppie"},on:{click:e.resultado}},[e._v("Aprobar Imagen")]),e._v(" "),e.mostrarMensaje?t("em",{staticClass:"text-danger small"},[e._v("Debe Aprobar la imagen")]):e._e()]:[t("button",{staticClass:"btn btn-danger float-right",on:{click:e.cancelar}},[e._v("Cancelar")])]]:e._e()],2)}),[],!1,null,null,null);a.a=o.exports},33:function(e,a,t){"use strict";var i={props:["tipo","tipoCaract","caract","url"],data:function(){return{bloquearBtnModal:!1}},mixins:[t(6).a],methods:{eliminar:function(){var e=this;this.bloquearBtnModal=!0,axios.delete("/cepas/".concat(this.url+"/"+this.caract.id)).then((function(a){e.bloquearBtnModal=!1,e.$modal.hide("modal_eliminar_caract"),e.$emit("eliminar",a.data),e.toastr("Eliminar "+e.tipo,e.tipoCaract+" eliminadas con exito!!","success")})).catch((function(a){403===a.response.status?e.$router.push("/sin-acceso"):405===a.response.status||401===a.response.status?(localStorage.setItem("mensajeLogin","Sobrepasaste el limite de inactividad o iniciaste sesion desde otro navegador. Por favor ingresa nuevamente"),window.location.href="/"):(e.bloquearBtnModal=!1,e.toastr("Error!!","","error"))}))}}},n=t(1),r=Object(n.a)(i,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("transition",{attrs:{name:"fade"}},[t("modal",{attrs:{name:"modal_eliminar_caract",classes:"my_modal",maxWidth:400,adaptive:!0,height:"auto",scrollable:!0}},[t("div",{staticClass:"modal-content"},[t("div",{staticClass:"modal-header"},[t("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLongTitle"}},[e._v("\n            Eliminar "+e._s(e.tipoCaract)+"\n          ")]),e._v(" "),t("button",{staticClass:"close",attrs:{type:"button"},on:{click:function(a){return e.$modal.hide("modal_eliminar_caract")}}},[t("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])]),e._v(" "),t("div",{staticClass:"modal-body"},[t("p",[e._v("Esta segura/o de eliminar la "+e._s(e.tipo)+"?.")])]),e._v(" "),t("div",{staticClass:"modal-footer"},[t("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(a){return e.$modal.hide("modal_eliminar_caract")}}},[e._v("\n            Cancelar\n          ")]),e._v(" "),t("button",{staticClass:"btn btn-success",attrs:{dusk:"btn-eliminar-modal",type:"button",disabled:e.bloquearBtnModal},on:{click:e.eliminar}},[e._v("\n            Eliminar\n          ")])])])])],1)],1)}),[],!1,null,null,null);a.a=r.exports},61:function(e,a,t){"use strict";var i={data:function(){return{erroresImagenes:"",imagenesCroppie:[],imagenes:[],cantImagenes:""}},methods:{cambiarValorImagen:function(e){switch(e.num){case 1:this.imagenes[0].source=e.data,this.parametros.imagen1=e.data;break;case 2:this.imagenes[1].source=e.data,this.parametros.imagen2=e.data;break;case 3:this.imagenes[2].source=e.data,this.parametros.imagen3=e.data}},obtenerImagenes:function(e){if(this.cantImagenes=0,this.limpiar(0),e.target.files[3])this.erroresImagenes="Solo puede subir max 3 imágenes.",this.limpiar(1);else{for(var a=/(.jpg|.jpeg|.png)$/i,t=[],i=0;i<3;i++){var n=e.target.files[i];if(!n)break;if(!a.exec(n.name)||n.size>2e6){this.limpiar(1),this.erroresImagenes="Las imagenes deben ser en formato .png .jpg y menor a 2Mb.",t="";break}this.erroresImagenes="",t.push(n)}this.cantImagenes=t.length,this.cargarImagenes(t)}},cargarImagenes:function(e){var a=this;if(this.imagenesCroppie=[],e)for(var t=function(t){var i=new FileReader;i.onload=function(e){switch(t){case 0:a.pushImagen(1,e.target.result,!0),a.imagenesCroppie.push(e.target.result);break;case 1:a.pushImagen(2,e.target.result,!1),a.imagenesCroppie.push(e.target.result);break;case 2:a.pushImagen(3,e.target.result,!1),a.imagenesCroppie.push(e.target.result)}},i.readAsDataURL(e[t])},i=0;i<e.length;i++)t(i)},pushImagen:function(e,a,t){this.imagenes.push({num:e,source:a,isActive:t})},llenarArregloImagenes:function(){this.parametros.imagen1?(this.pushImagen(1,this.info.imagenPublica1,!0),this.parametros.imagen2&&this.pushImagen(2,this.info.imagenPublica2,!1),this.parametros.imagen3&&this.pushImagen(3,this.info.imagenPublica3,!1)):this.parametros.imagen2?(this.pushImagen(2,this.info.imagenPublica2,!0),this.parametros.imagen3&&this.pushImagen(3,this.info.imagenPublica3,!1)):this.parametros.imagen3&&this.pushImagen(3,this.info.imagenPublica3,!0)},limpiar:function(e){switch(e){case 0:this.parametros.imagen1="",this.parametros.imagen2="",this.parametros.imagen3="",this.imagenes=[];break;case 1:this.$refs.inputImagen.value=""}}}};a.a=i},63:function(e,a,t){"use strict";var i=t(157),n=t.n(i),r={props:["imagenes","posicion"],data:function(){return{croppie1:null,croppie2:null,croppie3:null,btnAprobar1:!0,btnAprobar2:!0,btnAprobar3:!0}},mounted:function(){for(var e=0;e<this.imagenes.length;e++)this.crearCroppie(e+1,this.imagenes[e])},methods:{crearCroppie:function(e,a){switch(e){case 1:var t=document.getElementById("croppie1");this.croppie1=new n.a(t,{viewport:{width:200,height:200},boundary:{height:250}}),this.croppie1.bind({url:a});break;case 2:var i=document.getElementById("croppie2");this.croppie2=new n.a(i,{viewport:{width:200,height:200},boundary:{height:250}}),this.croppie2.bind({url:a});break;case 3:var r=document.getElementById("croppie3");this.croppie3=new n.a(r,{viewport:{width:200,height:200},boundary:{height:250}}),this.croppie3.bind({url:a})}},resultado:function(e){var a=this;switch(e){case 1:this.croppie1.result().then((function(t){a.btnAprobar1=!1,a.$emit("cambiarValorImagen",{data:t,num:e})}));break;case 2:this.croppie2.result().then((function(t){a.btnAprobar2=!1,a.$emit("cambiarValorImagen",{data:t,num:e})}));break;case 3:this.croppie3.result().then((function(t){a.btnAprobar3=!1,a.$emit("cambiarValorImagen",{data:t,num:e})}))}},cancelar:function(e){switch(e){case 1:this.btnAprobar1=!0,this.$emit("cambiarValorImagen",{data:"",num:e});break;case 2:this.btnAprobar2=!0,this.$emit("cambiarValorImagen",{data:"",num:e});break;case 3:this.btnAprobar3=!0,this.$emit("cambiarValorImagen",{data:"",num:e})}}},computed:{mostrarMensaje1:function(){return!!this.btnAprobar1},mostrarMensaje2:function(){return!!this.btnAprobar2},mostrarMensaje3:function(){return!!this.btnAprobar3}}},s=t(1),o=Object(s.a)(r,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",["horizontal"===e.posicion?[t("div",{staticClass:"container"},[t("div",{staticClass:"row justify-content-md-center"},[t("div",{staticClass:"col-md-4"},[t("div",{staticClass:"container"},[t("div",{attrs:{id:"croppie1"}}),e._v(" "),e.imagenes[0]?[e.btnAprobar1?[t("button",{staticClass:"btn btn-success mb-2",attrs:{dusk:"btn-croppie-1"},on:{click:function(a){return e.resultado(1)}}},[e._v("\n                  Aprobar Imagen\n                ")]),e._v(" "),e.mostrarMensaje1?t("em",{staticClass:"text-danger small"},[e._v("Debe Aprobar la imagen")]):e._e()]:[t("button",{staticClass:"btn btn-danger mb-2 float-right",on:{click:function(a){return e.cancelar(1)}}},[e._v("\n                  Cancelar\n                ")])]]:e._e()],2)]),e._v(" "),t("div",{staticClass:"col-md-4"},[t("div",{staticClass:"container"},[t("div",{attrs:{id:"croppie2"}}),e._v(" "),e.imagenes[1]?[e.btnAprobar2?[t("button",{staticClass:"btn btn-success mb-2",attrs:{dusk:"btn-croppie-2"},on:{click:function(a){return e.resultado(2)}}},[e._v("\n                  Aprobar Imagen\n                ")]),e._v(" "),e.mostrarMensaje2?t("em",{staticClass:"text-danger small"},[e._v("Debe Aprobar la imagen")]):e._e()]:[t("button",{staticClass:"btn btn-danger mb-2 float-right",on:{click:function(a){return e.cancelar(2)}}},[e._v("\n                  Cancelar\n                ")])]]:e._e()],2)]),e._v(" "),t("div",{staticClass:"col-md-4"},[t("div",{staticClass:"container"},[t("div",{attrs:{id:"croppie3"}}),e._v(" "),e.imagenes[2]?[e.btnAprobar3?[t("button",{staticClass:"btn btn-success mb-2",attrs:{dusk:"btn-croppie-3"},on:{click:function(a){return e.resultado(3)}}},[e._v("\n                  Aprobar Imagen\n                ")]),e._v(" "),e.mostrarMensaje3?t("em",{staticClass:"text-danger small"},[e._v("Debe Aprobar la imagen")]):e._e()]:[t("button",{staticClass:"btn btn-danger mb-2 float-right",on:{click:function(a){return e.cancelar(3)}}},[e._v("\n                  Cancelar\n                ")])]]:e._e()],2)])])])]:[t("div",{staticClass:"container"},[t("div",{staticClass:"row mt-2 ml-2 mr-2 mb-2"},[t("div",{attrs:{id:"croppie1"}}),e._v(" "),e.imagenes[0]?[t("div",{staticClass:"container"},[t("div",{staticClass:"row d-flex"},[e.btnAprobar1?[t("button",{staticClass:"btn btn-success",attrs:{dusk:"btn-croppie-1"},on:{click:function(a){return e.resultado(1)}}},[e._v("\n                  Aprobar Imagen\n                ")]),e._v(" "),e.mostrarMensaje1?t("em",{staticClass:"text-danger small mt-2"},[e._v("Debe Aprobar la imagen")]):e._e()]:[t("button",{staticClass:"btn btn-danger ml-auto",on:{click:function(a){return e.cancelar(1)}}},[e._v("\n                  Cancelar\n                ")])]],2)])]:e._e()],2),e._v(" "),t("div",{staticClass:"row mt-2 ml-2 mr-2 mb-2"},[t("div",{attrs:{id:"croppie2"}}),e._v(" "),e.imagenes[1]?[t("div",{staticClass:"container"},[t("div",{staticClass:"row d-flex"},[e.btnAprobar2?[t("button",{staticClass:"btn btn-success",attrs:{dusk:"btn-croppie-2"},on:{click:function(a){return e.resultado(2)}}},[e._v("\n                  Aprobar Imagen\n                ")]),e._v(" "),e.mostrarMensaje2?t("em",{staticClass:"text-danger small mt-2"},[e._v("Debe Aprobar la imagen")]):e._e()]:[t("button",{staticClass:"btn btn-danger ml-auto",on:{click:function(a){return e.cancelar(2)}}},[e._v("\n                  Cancelar\n                ")])]],2)])]:e._e()],2),e._v(" "),t("div",{staticClass:"row mt-2 ml-2 mr-2 mb-2"},[t("div",{attrs:{id:"croppie3"}}),e._v(" "),e.imagenes[2]?[t("div",{staticClass:"container"},[t("div",{staticClass:"row d-flex"},[e.btnAprobar3?[t("button",{staticClass:"btn btn-success",attrs:{dusk:"btn-croppie-3"},on:{click:function(a){return e.resultado(3)}}},[e._v("\n                  Aprobar Imagen\n                ")]),e._v(" "),e.mostrarMensaje3?t("em",{staticClass:"text-danger small mt-2"},[e._v("Debe Aprobar la imagen")]):e._e()]:[t("button",{staticClass:"btn btn-danger ml-auto",on:{click:function(a){return e.cancelar(3)}}},[e._v("\n                  Cancelar\n                ")])]],2)])]:e._e()],2)])]],2)}),[],!1,null,null,null);a.a=o.exports},64:function(e,a,t){"use strict";var i=t(115),n=t(31),r=t(6),s=t(2),o={components:{Carousel:i.a,Croppie:n.a},props:["parametros","tipoCepa","imagenes","cepa"],data:function(){return{modalImagen:{nomBtn:"",select_imagen:1,imagen:"",titulo:"",nomLabel:"",errors:""},imagenMiniatura:"",bloquearBtnModal:!1,mensajes:{required:"El campo es requerido.",sameAs:"Las contraseñas no coinciden",alpha:"El campo solo puede contener letras.",minLength:"La contraseña debe tener mínimo 8 carácteres.",maxLength:"La contraseña debe tener máximo 15 carácteres."}}},validations:{modalImagen:{imagen:{required:s.required}}},mixins:[r.a],methods:{cambiarValorImagen:function(e){this.modalImagen.imagen=e},showModalImagen:function(e){this.seleccionar(),this.imagenMiniatura="",this.modalImagen.errors="",this.modalImagen.imagen="","cambiar"===e?(this.modalImagen.nomBtn="Cambiar",this.modalImagen.titulo="Cambiar Imagen",this.modalImagen.nomLabel="Cual imagen desea cambiar?",this.$modal.show("agregar_cambiar_imagen")):"eliminar"===e?(this.modalImagen.nomBtn="Eliminar",this.modalImagen.titulo="Eliminar Imagen",this.modalImagen.nomLabel="Cual imagen desea eliminar?",this.$modal.show("eliminar_imagen")):(this.modalImagen.nomBtn="Agregar",this.modalImagen.titulo="Agregar Imagen",this.$modal.show("agregar_cambiar_imagen"))},seleccionar:function(){this.parametros.imagen1?this.modalImagen.select_imagen=1:this.parametros.imagen2?this.modalImagen.select_imagen=2:this.parametros.imagen3&&(this.modalImagen.select_imagen=3)},accionModal:function(){var e=this;if(this.bloquearBtnModal=!0,this.modalImagen.errors="","Cambiar"===this.modalImagen.nomBtn)if(this.$v.modalImagen.$touch(),this.$v.$invalid)this.bloquearBtnModal=!1,this.toastr("Error!!","Favor agregar una imagen","error");else{var a={numero:this.modalImagen.select_imagen,imagen:this.modalImagen.imagen};axios.put("/cepas/".concat(this.tipoCepa,"/cambiar-imagen/").concat(this.cepa.id),a).then((function(a){e.bloquearBtnModal=!1,e.$emit("accionImagen",a.data),e.$modal.hide("agregar_cambiar_imagen"),e.toastr("Cambiar Imagen","La imagen fue cambiada con exito!!","success")})).catch((function(a){e.verificarErrorAxios(a.response.status,a.response.data.errors)}))}else if("Eliminar"===this.modalImagen.nomBtn){var t={numero:this.modalImagen.select_imagen};axios.put("/cepas/".concat(this.tipoCepa,"/eliminar-imagen/").concat(this.cepa.id),t).then((function(a){e.bloquearBtnModal=!1,e.$emit("accionImagen",a.data),e.$modal.hide("eliminar_imagen"),e.toastr("Eliminar Imagen","Imagen eliminada con exito!!","success")})).catch((function(a){e.verificarErrorAxios(a.response.status,a.response.data.errors)}))}else if(this.$v.modalImagen.$touch(),this.$v.$invalid)this.bloquearBtnModal=!1,this.toastr("Error!!","Favor agregar una imagen","error");else{this.colocarNumeroAgregar();var i={numero:this.modalImagen.select_imagen,imagen:this.modalImagen.imagen};axios.put("/cepas/".concat(this.tipoCepa,"/agregar-imagen/").concat(this.cepa.id),i).then((function(a){e.bloquearBtnModal=!1,e.$emit("accionImagen",a.data),e.$modal.hide("agregar_cambiar_imagen"),e.toastr("Agregar Imagen","La imagen fue agregada con exito!!","success")})).catch((function(a){e.verificarErrorAxios(a.response.status,a.response.data.errors)}))}},colocarNumeroAgregar:function(){this.parametros.imagen1?this.parametros.imagen2?this.parametros.imagen3||(this.modalImagen.select_imagen=3):this.modalImagen.select_imagen=2:this.modalImagen.select_imagen=1},verificarImagen:function(e){this.modalImagen.errors="";var a=e.target.files[0];a?!/(.jpg|.jpeg|.png)$/i.exec(a.name)||a.size>2e6?(this.modalImagen.errors="La imagen debe ser en formato .png .jpg y menor a 2Mb.",this.$refs.inputImagenModal.value="",this.modalImagen.imagen=""):(this.modalImagen.errors="",this.cargarImagen(a)):(this.modalImagen.imagen="",this.imagenMiniatura="")},cargarImagen:function(e){var a=this,t=new Image;t.onload=function(e){a.imagenMiniatura=t.src},t.src=URL.createObjectURL(e)},verificarErrorAxios:function(e,a){403===e?this.$router.push("/sin-acceso"):405===e||401===e?window.location.href="/":(422===e&&(this.modalImagen.errors=[],this.modalImagen.errors=a),this.bloquearBtnModal=!1,this.toastr("Error!!","","error"))}},computed:{mostraImagenes:function(){return!!(this.parametros.imagen1||this.parametros.imagen2||this.parametros.imagen3)},btnAgregar:function(){return!(this.parametros.imagen1&&this.parametros.imagen2&&this.parametros.imagen3)},btnCambiar:function(){return!!(this.parametros.imagen1||this.parametros.imagen2||this.parametros.imagen3)},btnEliminar:function(){var e=0;return this.parametros.imagen1&&e++,this.parametros.imagen2&&e++,this.parametros.imagen3&&e++,e>1},mostraImagen:function(){return this.imagenMiniatura}}},l=t(1),m=Object(l.a)(o,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[e.mostraImagenes?[t("div",{staticClass:"container"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-12"},[t("Carousel",{attrs:{id:1,imagenes:e.imagenes}})],1)]),e._v(" "),t("div",{staticClass:"row mt-3 mb-3"},[t("div",{staticClass:"col-md-4"},[t("button",{directives:[{name:"show",rawName:"v-show",value:e.btnAgregar,expression:"btnAgregar"}],staticClass:"mr-3 btn btn-success btn-block",attrs:{type:"button"},on:{click:function(a){return e.showModalImagen("agregar")}}},[e._v("Agregar")])]),e._v(" "),t("div",{staticClass:"col-md-4"},[t("button",{directives:[{name:"show",rawName:"v-show",value:e.btnCambiar,expression:"btnCambiar"}],staticClass:"mr-3 btn btn-warning btn-block",attrs:{type:"button"},on:{click:function(a){return e.showModalImagen("cambiar")}}},[e._v("Cambiar")])]),e._v(" "),t("div",{staticClass:"col-md-4"},[t("button",{directives:[{name:"show",rawName:"v-show",value:e.btnEliminar,expression:"btnEliminar"}],staticClass:"btn btn-danger btn-block",attrs:{type:"button"},on:{click:function(a){return e.showModalImagen("eliminar")}}},[e._v("Eliminar")])])])])]:e._e(),e._v(" "),t("transition",{attrs:{name:"fade"}},[t("modal",{attrs:{name:"agregar_cambiar_imagen",classes:"my_modal",adaptive:!0,maxWidth:700,height:"auto",scrollable:!0}},[t("div",{staticClass:"modal-content"},[t("div",{staticClass:"modal-header"},[t("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLongTitle"}},[e._v(e._s(e.modalImagen.titulo))]),e._v(" "),t("button",{staticClass:"close",attrs:{type:"button"},on:{click:function(a){return e.$modal.hide("agregar_cambiar_imagen")}}},[t("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])]),e._v(" "),t("div",{staticClass:"modal-body"},["Agregar"===e.modalImagen.nomBtn?[t("div",{staticClass:"container"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-sm-6"},[t("div",{staticClass:"position-relative form-group"},[t("label",{attrs:{for:"imagen"}},[e._v("Seleccione la nueva Imagen")]),e._v(" "),t("input",{ref:"inputImagenModal",class:["form-control-file",""!=e.$v.modalImagen.imagen.$error?"error-input-select":""],attrs:{name:"imagen",id:"imagen",type:"file",accept:"image/jpeg, image/png"},on:{change:e.verificarImagen}}),e._v(" "),e.modalImagen.errors?t("em",{staticClass:"text-error-input"},[e._v(e._s(e.modalImagen.errors))]):e._e(),e._v(" "),e.$v.modalImagen.imagen.$error&&!e.$v.modalImagen.imagen.required?t("em",{staticClass:"text-error-input"},[e._v(e._s(e.mensajes.required))]):e._e()])]),e._v(" "),t("div",{staticClass:"col-sm-6"},[e.mostraImagen?[t("Croppie",{attrs:{id:"croppie",imagen:e.mostraImagen,mostrarBtnCroppie:!0,zoom:1,enableZoom:!0,editar:!1,boundaryHeigth:230,viewportWidth:200},on:{cambiarValorImagen:e.cambiarValorImagen}})]:[t("div",{staticClass:"text-center"},[t("h5",{staticClass:"mt-5 mb-5"},[t("span",{staticClass:"pr-1"},[t("b",{staticClass:"text-warning"},[e._v("SIN IMAGEN")])])])])]],2)])])]:e._e(),e._v(" "),"Cambiar"===e.modalImagen.nomBtn?[t("div",{staticClass:"container"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-sm-6"},[t("div",{staticClass:"position-relative form-group"},[t("label",{attrs:{for:"select_imagen"}},[e._v(e._s(e.modalImagen.nomLabel))]),e._v(" "),t("select",{directives:[{name:"model",rawName:"v-model.number",value:e.modalImagen.select_imagen,expression:"modalImagen.select_imagen",modifiers:{number:!0}}],staticClass:"form-control",attrs:{name:"select_imagen",id:"select_imagen"},on:{change:function(a){var t=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(a){var t="_value"in a?a._value:a.value;return e._n(t)}));e.$set(e.modalImagen,"select_imagen",a.target.multiple?t:t[0])}}},[e.parametros.imagen1?t("option",{attrs:{value:"1"}},[e._v("Primera")]):e._e(),e._v(" "),e.parametros.imagen2?t("option",{attrs:{value:"2"}},[e._v("Segunda")]):e._e(),e._v(" "),e.parametros.imagen3?t("option",{attrs:{value:"3"}},[e._v("Tercera")]):e._e()])]),e._v(" "),t("div",{staticClass:"position-relative form-group"},[t("label",{attrs:{for:"imagen"}},[e._v("Seleccione la nueva Imagen")]),e._v(" "),t("input",{ref:"inputImagenModal",class:["form-control-file",""!=e.$v.modalImagen.imagen.$error?"error-input-select":""],attrs:{name:"imagen",id:"imagen",type:"file",accept:"image/jpeg, image/png"},on:{change:e.verificarImagen}}),e._v(" "),e.modalImagen.errors?t("em",{staticClass:"text-error-input"},[e._v(e._s(e.modalImagen.errors))]):e._e(),e._v(" "),e.$v.modalImagen.imagen.$error&&!e.$v.modalImagen.imagen.required?t("em",{staticClass:"text-error-input"},[e._v(e._s(e.mensajes.required))]):e._e()])]),e._v(" "),t("div",{staticClass:"col-sm-6"},[e.mostraImagen?[t("Croppie",{attrs:{id:"croppie",imagen:e.mostraImagen,mostrarBtnCroppie:!0,zoom:1,enableZoom:!0,editar:!1,boundaryHeigth:230,viewportWidth:200},on:{cambiarValorImagen:e.cambiarValorImagen}})]:[t("div",{staticClass:"text-center"},[t("h5",{staticClass:"mt-5 mb-5"},[t("span",{staticClass:"pr-1"},[t("b",{staticClass:"text-warning"},[e._v("SIN IMAGEN")])])])])]],2)])])]:e._e()],2),e._v(" "),t("div",{staticClass:"modal-footer"},[t("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(a){return e.$modal.hide("agregar_cambiar_imagen")}}},[e._v("Cancelar")]),e._v(" "),t("button",{staticClass:"btn btn-success",attrs:{type:"button",disabled:e.bloquearBtnModal},on:{click:e.accionModal}},[e._v(e._s(e.modalImagen.nomBtn))])])])])],1),e._v(" "),t("transition",{attrs:{name:"fade"}},[t("modal",{attrs:{name:"eliminar_imagen",classes:"my_modal",adaptive:!0,maxWidth:450,height:"auto",scrollable:!0}},[t("div",{staticClass:"modal-content"},[t("div",{staticClass:"modal-header"},[t("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLongTitle"}},[e._v(e._s(e.modalImagen.titulo))]),e._v(" "),t("button",{staticClass:"close",attrs:{type:"button"},on:{click:function(a){return e.$modal.hide("eliminar_imagen")}}},[t("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])]),e._v(" "),t("div",{staticClass:"modal-body"},[t("div",{staticClass:"position-relative form-group"},[t("label",{attrs:{for:"select_imagen"}},[e._v(e._s(e.modalImagen.nomLabel))]),e._v(" "),t("select",{directives:[{name:"model",rawName:"v-model.number",value:e.modalImagen.select_imagen,expression:"modalImagen.select_imagen",modifiers:{number:!0}}],staticClass:"form-control",attrs:{name:"select_imagen",id:"select_imagen"},on:{change:function(a){var t=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(a){var t="_value"in a?a._value:a.value;return e._n(t)}));e.$set(e.modalImagen,"select_imagen",a.target.multiple?t:t[0])}}},[e.parametros.imagen1?t("option",{attrs:{value:"1"}},[e._v("Primera")]):e._e(),e._v(" "),e.parametros.imagen2?t("option",{attrs:{value:"2"}},[e._v("Segunda")]):e._e(),e._v(" "),e.parametros.imagen3?t("option",{attrs:{value:"3"}},[e._v("Tercera")]):e._e()])])]),e._v(" "),t("div",{staticClass:"modal-footer"},[t("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(a){return e.$modal.hide("eliminar_imagen")}}},[e._v("Cancelar")]),e._v(" "),t("button",{staticClass:"btn btn-success",attrs:{type:"button",disabled:e.bloquearBtnModal},on:{click:e.accionModal}},[e._v(e._s(e.modalImagen.nomBtn))])])])])],1)],2)}),[],!1,null,null,null);a.a=m.exports}}]);