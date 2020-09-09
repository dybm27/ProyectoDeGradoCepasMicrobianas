<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDocumentosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('documentos', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('tipo_documento_id');
            $table->foreign('tipo_documento_id')->references('id')->on('tipo_documentos');
            $table->string('nombre_documento')->unique();
            $table->string('nombre_autor');
            $table->longText('descripcion');
            $table->boolean('publicar')->default(0);
            $table->string('ruta');
            $table->string('rutaPublica');
            $table->string('imagen');
            $table->string('imagenPublica');
            $table->timestamps();
            $table->unique(['tipo_documento_id', 'nombre_documento']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('documentos');
    }
}
