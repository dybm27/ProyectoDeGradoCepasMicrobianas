<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMetodoConserBacteriasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('metodo_conser_bacterias', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('bacteria_id');
            $table->foreign('bacteria_id')->references('id')->on('bacterias')->onDelete('cascade');
            $table->unsignedBigInteger('tipo_id');
            $table->foreign('tipo_id')->references('id')->on('tipo_metodo_conservacion_bacterias');
            $table->string('tipo_agar',50)->nullable();
            $table->date('fecha');
            $table->integer('numero_replicas');
            $table->string('recuento_microgota',50);
            $table->string('imagen')->nullable();
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
        Schema::dropIfExists('metodo_conser_bacterias');
    }
}
