<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateActividadsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('actividads', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('titulo')->unique();
            $table->string('lugar');
            $table->string('link')->nullable();
            $table->longText('cuerpo')->nullable();
            $table->dateTime('fecha');
            $table->boolean('publicar')->default(0);
            $table->string('slug')->unique();
            $table->string('imagen');
            $table->string('imagenPublica');
            $table->longText('imagenesEditor')->nullable();
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
        Schema::dropIfExists('actividads');
    }
}
