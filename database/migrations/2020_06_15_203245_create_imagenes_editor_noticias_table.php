<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateImagenesEditorNoticiasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('imagenes_editor_noticias', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('tipo');
            $table->unsignedBigInteger('noticia_id');
            $table->foreign('noticia_id')->references('id')->on('noticias');
            $table->string('imagen');
            $table->string('imagenPublica');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('imagenes_editors');
    }
}
