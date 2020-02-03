<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBacteriasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bacterias', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('cepa_id');
            $table->foreign('cepa_id')->references('id')->on('cepas')->onDelete('cascade');
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
        Schema::dropIfExists('bacterias');
    }
}
