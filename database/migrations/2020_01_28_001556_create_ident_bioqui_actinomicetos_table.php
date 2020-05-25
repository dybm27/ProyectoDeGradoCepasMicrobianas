<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateIdentBioquiActinomicetosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ident_bioqui_actinomicetos', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('actinomiceto_id');
            $table->foreign('actinomiceto_id')->references('id')->on('actinomicetos')->onDelete('cascade');
            $table->string('oxidasa', 100);
            $table->string('catalasa', 100);
            $table->string('citrato', 100);
            $table->string('nitrato', 100);
            $table->string('hidro_urea', 100);
            $table->string('caseina', 100);
            $table->string('hidro_gelatina', 100);
            $table->string('fer_lactosa', 100)->nullable();
            $table->string('fer_manitol', 100)->nullable();
            $table->string('fer_inositol', 100)->nullable();
            $table->string('fer_sacarosa', 100)->nullable();
            $table->string('sensi_antibioticos', 100);
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
        Schema::dropIfExists('ident_bioqui_actinomicetos');
    }
}
