<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCaracMicroLevadurasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('carac_micro_levaduras', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('levadura_id');
            $table->foreign('levadura_id')->references('id')->on('levaduras')->onDelete('cascade');
            $table->string('hifas',15);
            $table->string('pseudohifas',15);
            $table->string('balistoconidias',15);
            $table->string('produccion_tubo_germinativo',15);
            $table->string('capsula',15);
            $table->string('blastoconidias',15);
            $table->string('produccion_clamidosporas',15);
            $table->string('artroconidias',15);
            $table->string('induccion_filamentizacion',15);
            $table->string('formacion_asco_y_ascosporas',15);
            $table->longText('otras_caract');
            $table->string('imagen1')->nullable();
            $table->string('imagen2')->nullable();
            $table->string('imagen3')->nullable();
            $table->longText('descripcion')->nullable();
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
        Schema::dropIfExists('carac_micro_levaduras');
    }
}
