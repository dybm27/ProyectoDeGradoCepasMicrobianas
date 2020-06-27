<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateIdentiMolecuHongosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('identi_molecu_hongos', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('hongo_filamentoso_id');
            $table->foreign('hongo_filamentoso_id')->references('id')->on('hongo_filamentosos');
            $table->string('nombre_forward', 100);
            $table->string('nombre_reversed', 100);
            $table->string('secuencia_forward');
            $table->string('secuencia_reversed');
            $table->string('producto_forward');
            $table->string('producto_reversed');
            $table->string('condiciones_pcr',100);
            $table->string('blast',100);
            $table->string('analisis_filogenetico',100);
            $table->string('observaciones')->nullable();
            $table->string('imagen_pcr')->nullable();
            $table->string('imagen_pcrPublica')->nullable();
            $table->string('imagen_blast')->nullable();
            $table->string('imagen_blastPublica')->nullable();
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
        Schema::dropIfExists('identi_molecu_hongos');
    }
}
