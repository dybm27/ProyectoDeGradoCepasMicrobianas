<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCaracMicroHongosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('carac_micro_hongos', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('hongo_filamentoso_id');
            $table->foreign('hongo_filamentoso_id')->references('id')->on('hongo_filamentosos');
            $table->unsignedBigInteger('conidioforo_id');
            $table->foreign('conidioforo_id')->references('id')->on('conidioforo_hongos');
            $table->string('fialides',15);
            $table->string('fialides_forma',50)->nullable();
            $table->string('fialides_otra_caracteristica')->nullable();
            $table->string('vesicula',100);
            $table->unsignedBigInteger('espora_asexual_id');
            $table->foreign('espora_asexual_id')->references('id')->on('espora_asexual_hongos');
            $table->string('esporas_asexuales_conidios_tamano',100)->nullable();
            $table->string('esporas_asexuales_conidios_color',100)->nullable();
            $table->string('esporas_asexuales_conidios_forma',100)->nullable();
            $table->string('esporas_asexuales_conidios_otras',100)->nullable();
            $table->unsignedBigInteger('espora_sexual_id');
            $table->foreign('espora_sexual_id')->references('id')->on('espora_sexual_hongos');
            $table->string('otras_estructuras')->nullable();
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
        Schema::dropIfExists('carac_micro_hongos');
    }
}
