<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCaracMacroBacteriasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('carac_macro_bacterias', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('bacteria_id');
            $table->foreign('bacteria_id')->references('id')->on('bacterias');
            $table->string('medio', 50);
            $table->unsignedBigInteger('forma_id');
            $table->foreign('forma_id')->references('id')->on('forma_caract_macro_bacterias');
            $table->unsignedBigInteger('elevacion_id');
            $table->foreign('elevacion_id')->references('id')->on('elevacion_bacterias');
            $table->unsignedBigInteger('borde_id');
            $table->foreign('borde_id')->references('id')->on('borde_bacterias');
            $table->unsignedBigInteger('detalleoptico_id');
            $table->foreign('detalleoptico_id')->references('id')->on('detalle_optico_bacterias');
            $table->unsignedBigInteger('superficie_id');
            $table->foreign('superficie_id')->references('id')->on('superficie_bacterias');
            $table->unsignedBigInteger('color_id');
            $table->foreign('color_id')->references('id')->on('color_bacterias');
            $table->string('tamano', 30);
            $table->string('otras_caract')->nullable();
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
        Schema::dropIfExists('carac_macro_bacterias');
    }
}
