<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLevadurasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('levaduras', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('cepa_id');
            $table->foreign('cepa_id')->references('id')->on('cepas')->onDelete('cascade');
            $table->unsignedBigInteger('division_id');
            $table->foreign('division_id')->references('id')->on('divisions');
            $table->unsignedBigInteger('clase_id');
            $table->foreign('clase_id')->references('id')->on('clases');
            $table->unsignedBigInteger('orden_id');
            $table->foreign('orden_id')->references('id')->on('ordens');
            $table->unsignedBigInteger('familia_id');
            $table->foreign('familia_id')->references('id')->on('familias');
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
        Schema::dropIfExists('levaduras');
    }
}
