<template>
  <div>
    <div class="mb-3">
      <ckeditor
        :editor="editor"
        v-model="editorData"
        :config="editorConfig"
        :disabled="editorDisabled"
      ></ckeditor>
    </div>
    <div class="container">
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
          <div v-html="editorData"></div>
        </div>
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
import Code from "@ckeditor/ckeditor5-basic-styles/src/code";
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

import MyUploadAdapter from "./export-imagen";

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
          Code,
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
          ImageUpload
        ],
        toolbar: {
          items: [
            "bold",
            "italic",
            "underline",
            "strikethrough",
            "code",
            "subscript",
            "superscript",
            "link",
            "|",
            "highlight",
            "|",
            "imageUpload",
            "undo",
            "redo"
          ]
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
        }
      },
      mostrarBtn: true
    };
  },
  methods: {
    aceptarContenido() {
      this.$emit("contenido", this.editorData);
      this.mostrarBtn = false;
      this.editorDisabled = true;
    },
    modificarContenido() {
      this.$emit("contenido", "");
      this.mostrarBtn = true;
      this.editorDisabled = false;
    },
    MyCustomUploadAdapterPlugin(editor) {
      editor.plugins.get("FileRepository").createUploadAdapter = loader => {
        return new MyUploadAdapter(loader);
      };
    }
  },
  computed: {
    validarBtn() {
      if (!this.editorData) {
        return true;
      }
      return false;
    }
  },
  beforeDestroy() {
    this.editor.destroy();
  },
  mounted() {
    if (this.info) {
      this.mostrarBtn = false;
      this.editorData = this.info.cuerpo;
    }
  }
};
</script>