<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCaracFisioBacteriasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('carac_fisio_bacterias', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('bacteria_id');
            $table->foreign('bacteria_id')->references('id')->on('bacterias');
            $table->string('acido_indolacetico',100);
            $table->string('fosforo',100);
            $table->string('sideroforos',100);
            $table->string('nitrogeno',100);
            $table->string('otras_caract')->nullable();
            $table->string('imagen1')->nullable();
            $table->string('imagenPublica1')->nullable();
            $table->string('imagen2')->nullable();
            $table->string('imagenPublica2')->nullable();
            $table->string('imagen3')->nullable();
            $table->string('imagenPublica3')->nullable();
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
        Schema::dropIfExists('carac_fisio_bacterias');
    }
}
