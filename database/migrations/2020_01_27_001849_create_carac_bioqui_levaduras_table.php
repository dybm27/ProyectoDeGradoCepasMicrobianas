<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCaracBioquiLevadurasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('carac_bioqui_levaduras', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('levadura_id');
            $table->foreign('levadura_id')->references('id')->on('levaduras')->onDelete('cascade');
            $table->string('ureasa', 100);
            $table->string('fenol_oxidasa', 100);
            $table->string('produccion_acido', 100);
            $table->string('termotolerancia_37', 100)->nullable();
            $table->string('termotolerancia_42', 100)->nullable();
            $table->string('termotolerancia_45', 100)->nullable();
            $table->string('termotolerancia_otra', 100)->nullable();
            $table->string('crecimiento', 20);
            $table->string('nitratos', 100);
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
        Schema::dropIfExists('carac_bioqui_levaduras');
    }
}
