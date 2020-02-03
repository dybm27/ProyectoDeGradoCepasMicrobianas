<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateIdentiMolecuLevadurasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('identi_molecu_levaduras', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('levadura_id');
            $table->foreign('levadura_id')->references('id')->on('levaduras')->onDelete('cascade');
            $table->string('secuencia_forward',100);
            $table->string('secuencia_reversed',100);
            $table->string('producto_forward',100);
            $table->string('producto_reversed',100);
            $table->string('condiciones_pcr',100);
            $table->string('blast',100);
            $table->string('analisis_filogenetico',100);
            $table->longText('observaciones')->nullable();
            $table->string('imagen_pcr')->nullable();
            $table->string('imagen_blast')->nullable();
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
        Schema::dropIfExists('identi_molecu_levaduras');
    }
}
