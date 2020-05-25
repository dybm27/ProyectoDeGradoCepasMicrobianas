<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCaracMacroHongosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('carac_macro_hongos', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('hongo_filamentoso_id');
            $table->foreign('hongo_filamentoso_id')->references('id')->on('hongo_filamentosos')->onDelete('cascade');
            $table->string('medio',50);
            $table->unsignedBigInteger('color_id');
            $table->foreign('color_id')->references('id')->on('color_hongos');
            $table->unsignedBigInteger('textura_id');
            $table->foreign('textura_id')->references('id')->on('textura_hongos');
            $table->string('caracteristicas_reverso',100);
            $table->string('imagen')->nullable();
            $table->string('imagenPublica')->nullable();
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
        Schema::dropIfExists('carac_macro_hongos');
    }
}
