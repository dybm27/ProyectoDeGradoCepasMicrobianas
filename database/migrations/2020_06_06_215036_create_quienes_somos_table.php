<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateQuienesSomosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('quienes_somos', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('quienes_somos_tipos_id');
            $table->foreign('quienes_somos_tipos_id')->references('id')->on('quienes_somos_tipos');
            $table->longText('cuerpo');
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
        Schema::dropIfExists('quienes_somos');
    }
}
