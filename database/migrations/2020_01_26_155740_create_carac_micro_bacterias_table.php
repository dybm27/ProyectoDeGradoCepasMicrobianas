<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCaracMicroBacteriasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('carac_micro_bacterias', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('bacteria_id');
            $table->foreign('bacteria_id')->references('id')->on('bacterias')->onDelete('cascade');
            $table->unsignedBigInteger('forma_id');
            $table->foreign('forma_id')->references('id')->on('forma_caract_micros');
            $table->longText('ordenamiento');
            $table->string('tincion_gram',100);
            $table->string('tincion_esporas',100);
            $table->string('ubicacion_esporas',100)->nullable();
            $table->string('tincion_capsula',100);
            $table->longText('otras_caract')->nullable();
            $table->string('imagen1')->nullable();
            $table->string('imagen2')->nullable();
            $table->string('imagen3')->nullable();
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
        Schema::dropIfExists('carac_micro_bacterias');
    }
}
