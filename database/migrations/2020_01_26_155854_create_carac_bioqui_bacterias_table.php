<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCaracBioquiBacteriasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('carac_bioqui_bacterias', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('bacteria_id');
            $table->foreign('bacteria_id')->references('id')->on('bacterias')->onDelete('cascade');
            $table->string('oxidasa',100);
            $table->string('catalasa',100);
            $table->string('atrato',100);
            $table->string('tsi',100);
            $table->string('lia',100);
            $table->string('sim',100);
            $table->string('rm',100);
            $table->string('vp',100);
            $table->string('nitrato',100);
            $table->string('caldo_urea',100);
            $table->string('of',100);
            $table->string('glucosa',100);
            $table->string('lactosa',100);
            $table->string('manitol',100);
            $table->string('xilosa',100);
            $table->string('arabinosa',100);
            $table->string('sacarosa',100);
            $table->string('otros_azucares',100);
            $table->string('almidon',100);
            $table->string('lecitinasa',100);
            $table->string('lipasa',100);
            $table->string('otras_enzimas',100);
            $table->string('hidro_caseina',100);
            $table->string('hidro_gelatina',100);
            $table->string('hidro_urea',100);
            $table->string('creci_nacl',100);
            $table->string('creci_dif_temp',100);
            $table->longText('otras_caract')->nullable();
            $table->string('imagen1')->nullable();
            $table->string('imagenPublica1')->nullable();
            $table->string('imagen2')->nullable();
            $table->string('imagenPublica2')->nullable();
            $table->string('imagen3')->nullable();
            $table->string('imagenPublica3')->nullable();
            $table->longText('descripcion')->nullable();
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
        Schema::dropIfExists('carac_bioqui_bacterias');
    }
}
