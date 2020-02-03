<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateIdentiMolecuBacteriasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('identi_molecu_bacterias', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('bacteria_id');
            $table->foreign('bacteria_id')->references('id')->on('bacterias')->onDelete('cascade');
            $table->string('secuen_forward',100);
            $table->string('secuen_reversed',100);
            $table->string('produc_forward',100);
            $table->string('produc_reversed',100);
            $table->longText('obser_secuenciacion');
            $table->string('img_pcr')->nullable();
            $table->string('img_secuen')->nullable();
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
        Schema::dropIfExists('identi_molecu_bacterias');
    }
}
