<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOtrasCaracActinomicetosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('otras_carac_actinomicetos', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('actinomiceto_id');
            $table->foreign('actinomiceto_id')->references('id')->on('actinomicetos')->onDelete('cascade');
            $table->string('fijacion_nitrogeno', 100);
            $table->string('produccion_aia', 100);
            $table->string('giberelinas', 100);
            $table->string('produccion_sideroforos', 100);
            $table->string('solubili_fosforo', 100);
            $table->string('produccion_pha', 100);
            $table->string('alta_produc_antibioticos', 100);
            $table->string('activi_enzimaticas', 100);
            $table->string('antagonismos', 100);
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
        Schema::dropIfExists('otras_carac_actinomicetos');
    }
}
