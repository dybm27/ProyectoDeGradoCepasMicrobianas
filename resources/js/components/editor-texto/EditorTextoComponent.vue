<template>
  <div class="container">
    <div class="row justify-content-center mb-3">
      <div class="col-md-12">
        <ckeditor
          :editor="editor"
          v-model="editorData"
          :config="editorConfig"
          :disabled="editorDisabled"
          @ready="ready"
          @input="input"
        ></ckeditor>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-4">
        <template v-if="mostrarBtn">
          <button
            class="btn btn-block btn-success"
            :disabled="validarBtn"
            @click="aceptarContenido"
          >Aceptar Contenido</button>
        </template>
        <template v-else>
          <button class="btn btn-block btn-danger" @click="modificarContenido">Modificar Contenido</button>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import SimpleUploadAdapter from "@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter";
import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
import EssentialsPlugin from "@ckeditor/ckeditor5-essentials/src/essentials";
import BoldPlugin from "@ckeditor/ckeditor5-basic-styles/src/bold";
import ItalicPlugin from "@ckeditor/ckeditor5-basic-styles/src/italic";
import Underline from "@ckeditor/ckeditor5-basic-styles/src/underline";
import Strikethrough from "@ckeditor/ckeditor5-basic-styles/src/strikethrough";
import Subscript from "@ckeditor/ckeditor5-basic-styles/src/subscript";
import Superscript from "@ckeditor/ckeditor5-basic-styles/src/superscript";
import LinkPlugin from "@ckeditor/ckeditor5-link/src/link";
import ParagraphPlugin from "@ckeditor/ckeditor5-paragraph/src/paragraph";
import Highlight from "@ckeditor/ckeditor5-highlight/src/highlight";
import Image from "@ckeditor/ckeditor5-image/src/image";
import ImageCaption from "@ckeditor/ckeditor5-image/src/imagecaption";
import ImageResize from "@ckeditor/ckeditor5-image/src/imageresize";
import ImageStyle from "@ckeditor/ckeditor5-image/src/imagestyle";
import ImageToolbar from "@ckeditor/ckeditor5-image/src/imagetoolbar";
import ImageTextAlternative from "@ckeditor/ckeditor5-image/src/imagetextalternative";
import ImageUpload from "@ckeditor/ckeditor5-image/src/imageupload";
import List from "@ckeditor/ckeditor5-list/src/list";
import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment";
import FontFamily from "@ckeditor/ckeditor5-font/src/fontfamily";
import FontSize from "@ckeditor/ckeditor5-font/src/fontsize";
import FontColor from "@ckeditor/ckeditor5-font/src/fontcolor";
import FontBackgroundColor from "@ckeditor/ckeditor5-font/src/fontbackgroundcolor";
import Heading from "@ckeditor/ckeditor5-heading/src/heading";
import HorizontalLine from "@ckeditor/ckeditor5-horizontal-line/src/horizontalline";
import Indent from "@ckeditor/ckeditor5-indent/src/indent";
import IndentBlock from "@ckeditor/ckeditor5-indent/src/indentblock";
import MediaEmbed from "@ckeditor/ckeditor5-media-embed/src/mediaembed";
import SpecialCharacters from "@ckeditor/ckeditor5-special-characters/src/specialcharacters";
import SpecialCharactersEssentials from "@ckeditor/ckeditor5-special-characters/src/specialcharactersessentials";
import Table from "@ckeditor/ckeditor5-table/src/table";
import TableToolbar from "@ckeditor/ckeditor5-table/src/tabletoolbar";
import TableProperties from "@ckeditor/ckeditor5-table/src/tableproperties";
import TableCellProperties from "@ckeditor/ckeditor5-table/src/tablecellproperties";
import BlockQuote from "@ckeditor/ckeditor5-block-quote/src/blockquote";

import MyUploadAdapter from "./export-imagen";
import "./custom.css";
export default {
  props: ["info"],
  data() {
    return {
      editorDisabled: false,
      editor: ClassicEditor,
      editorData: "<p>Content of the editor.</p>",
      editorConfig: {
        extraPlugins: [this.MyCustomUploadAdapterPlugin],
        plugins: [
          EssentialsPlugin,
          BoldPlugin,
          ItalicPlugin,
          Underline,
          Strikethrough,
          Subscript,
          Superscript,
          LinkPlugin,
          ParagraphPlugin,
          Highlight,
          Image,
          ImageCaption,
          ImageResize,
          ImageStyle,
          ImageToolbar,
          ImageTextAlternative,
          ImageUpload,
          List,
          Alignment,
          FontFamily,
          FontSize,
          FontColor,
          FontBackgroundColor,
          Heading,
          HorizontalLine,
          Indent,
          IndentBlock,
          MediaEmbed,
          SpecialCharacters,
          SpecialCharactersEssentials,
          Table,
          TableToolbar,
          TableProperties,
          TableCellProperties,
          BlockQuote
        ],
        toolbar: {
          items: [
            "heading",
            "|",
            "fontFamily",
            "fontSize",
            "fontColor",
            "fontBackgroundColor",
            "|",
            "bold",
            "italic",
            "underline",
            "strikethrough",
            "|",
            "link",
            "|",
            "alignment",
            "|",
            "outdent",
            "indent",
            "|",
            "bulletedList",
            "numberedList",
            "|",
            "undo",
            "redo",
            "|",
            "insertTable",
            "imageUpload",
            "mediaEmbed",
            "highlight",
            "specialCharacters",
            "subscript",
            "superscript",
            "horizontalLine",
            "blockQuote"
          ],
          shouldNotGroupWhenFull: true
        },
        fontFamily: {
          supportAllValues: true
        },
        fontSize: {
          options: [9, 10, 11, 12, 13, "default", 16, 17, 18, 19, 20, 21]
        },
        alignment: {
          options: ["justify", "left", "center", "right"]
        },
        image: {
          toolbar: [
            "imageStyle:alignLeft",
            "imageStyle:alignCenter",
            "imageStyle:alignRight",
            "|",
            "imageTextAlternative"
          ],
          styles: ["full", "side", "alignLeft", "alignCenter", "alignRight"]
        },
        mediaEmbed: {
          removeProviders: [
            "instagram",
            "twitter",
            "googleMaps",
            "flickr",
            "facebook"
          ]
        },
        table: {
          contentToolbar: [
            "tableColumn",
            "tableRow",
            "mergeTableCells",
            "tableProperties",
            "tableCellProperties"
          ]
        }
      },
      mostrarBtn: true,
      html: "",
      imagenes: [],
      todasImagenes: []
    };
  },
  methods: {
    aceptarContenido() {
      this.imagenes = [];
      this.obtenerPathImagenes();
      this.oembedIframe();
      this.$emit("contenido", {
        contenido: this.html,
        imagenesEditor: this.imagenes,
        imagenesGuardadas: this.todasImagenes
      });
      this.mostrarBtn = false;
      this.editorDisabled = true;
    },
    modificarContenido() {
      this.$emit("modificar");
      this.mostrarBtn = true;
      this.editorDisabled = false;
    },
    MyCustomUploadAdapterPlugin(editor) {
      editor.plugins.get("FileRepository").createUploadAdapter = loader => {
        return new MyUploadAdapter(loader);
      };
    },
    oembedIframe() {
      this.html = this.editorData;
      this.html = this.html.replace("oembed url", "iframe src");
      this.html = this.html.replace("watch?v=", "embed/");
    },
    iframeOembed() {
      let cuerpo = this.info.cuerpo;
      cuerpo = cuerpo.replace("iframe src", "oembed url");
      cuerpo = cuerpo.replace("embed/", "watch?v=");
      return cuerpo;
    },
    obtenerPathImagenes() {
      let texto = this.editorData.split("storage");
      for (let index = 1; index < texto.length; index++) {
        this.imagenes.push(texto[index].split('">')[0]);
      }
    },
    obtenerPathTodasImagenes() {
      let texto = this.editorData.split("storage");
      for (let index = 1; index < texto.length; index++) {
        if (this.todasImagenes.indexOf(texto[index].split('">')[0]) == -1) {
          this.todasImagenes.push(texto[index].split('">')[0]);
        }
      }
    },
    ready() {
      if (this.info) {
        let cuerpo = this.iframeOembed();
        this.mostrarBtn = false;
        this.editorDisabled = true;
        this.editorData = cuerpo;
      }
    },
    input(info) {
      this.obtenerPathTodasImagenes();
    }
  },
  computed: {
    validarBtn() {
      if (!this.editorData) {
        return true;
      }
      return false;
    },
  }
};
</script>
