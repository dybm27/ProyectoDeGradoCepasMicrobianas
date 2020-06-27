<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMetodoConserLevadurasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('metodo_conser_levaduras', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('levadura_id');
            $table->foreign('levadura_id')->references('id')->on('levaduras');
            $table->unsignedBigInteger('tipo_id');
            $table->foreign('tipo_id')->references('id')->on('tipo_metodo_conservacion_levaduras');
            $table->dateTime('fecha');
            $table->integer('numero_replicas')->nullable();
            $table->string('recuento_microgota', 50)->nullable();
            $table->string('medio_cultivo', 50)->nullable();
            $table->integer('numero_pases')->nullable();
            $table->string('observaciones')->nullable();
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
        Schema::dropIfExists('metodo_conser_levaduras');
    }
}
