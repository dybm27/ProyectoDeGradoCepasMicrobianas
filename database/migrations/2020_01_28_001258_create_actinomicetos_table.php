<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateActinomicetosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('actinomicetos', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('cepa_id');
            $table->foreign('cepa_id')->references('id')->on('cepas')->onDelete('cascade');
            $table->unsignedBigInteger('clase_id');
            $table->foreign('clase_id')->references('id')->on('clases');
            $table->unsignedBigInteger('orden_id');
            $table->foreign('orden_id')->references('id')->on('ordens');
            $table->unsignedBigInteger('phylum_id');
            $table->foreign('phylum_id')->references('id')->on('phylums');
            $table->unsignedBigInteger('reino_id');
            $table->foreign('reino_id')->references('id')->on('reinos');
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
        Schema::dropIfExists('actinomicetos');
    }
}
