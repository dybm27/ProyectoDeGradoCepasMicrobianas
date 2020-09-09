<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCepasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cepas', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('codigo', 50)->unique();
            $table->unsignedBigInteger('grupo_microbiano_id');
            $table->unsignedBigInteger('genero_id');
            $table->unsignedBigInteger('especie_id');
            $table->string('estado', 50);
            $table->string('origen', 50);
            $table->boolean('publicar')->default(0);
            $table->string('slug')->unique();
            $table->longText('otras_caract')->nullable();
            $table->timestamps();

            $table->foreign('grupo_microbiano_id')->references('id')->on('grupo_microbianos');
            $table->foreign('genero_id')->references('id')->on('generos');
            $table->foreign('especie_id')->references('id')->on('especies');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cepas');
    }
}
