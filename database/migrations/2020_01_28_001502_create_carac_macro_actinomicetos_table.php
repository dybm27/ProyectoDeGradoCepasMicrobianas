<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCaracMacroActinomicetosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('carac_macro_actinomicetos', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('actinomiceto_id');
            $table->foreign('actinomiceto_id')->references('id')->on('actinomicetos')->onDelete('cascade');
            $table->string('medio', 50);
            $table->unsignedBigInteger('textura_id');
            $table->foreign('textura_id')->references('id')->on('textura_actinomicetos');
            $table->unsignedBigInteger('color_id');
            $table->foreign('color_id')->references('id')->on('color_actinomicetos');
            $table->unsignedBigInteger('forma_id');
            $table->foreign('forma_id')->references('id')->on('forma_caract_macro_actinomicetos');
            $table->unsignedBigInteger('superficie_id');
            $table->foreign('superficie_id')->references('id')->on('superficie_actinomicetos');
            $table->unsignedBigInteger('borde_id');
            $table->foreign('borde_id')->references('id')->on('borde_actinomicetos');
            $table->unsignedBigInteger('pigmento_id');
            $table->foreign('pigmento_id')->references('id')->on('pigmento_actinomicetos');
            $table->string('secrecion_geosminas', 100);
            $table->string('otras_caract')->nullable();
            $table->string('imagen');
            $table->string('imagenPublica');
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
        Schema::dropIfExists('carac_macro_actinomicetos');
    }
}
