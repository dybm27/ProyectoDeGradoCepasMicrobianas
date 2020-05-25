<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCaracMicroActinomicetosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('carac_micro_actinomicetos', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('actinomiceto_id');
            $table->foreign('actinomiceto_id')->references('id')->on('actinomicetos')->onDelete('cascade');
            $table->unsignedBigInteger('tinciongram_id');
            $table->foreign('tinciongram_id')->references('id')->on('tincion_gram_actinomicetos');
            $table->unsignedBigInteger('forma_id');
            $table->foreign('forma_id')->references('id')->on('forma_caract_micro_actinomicetos');
            $table->unsignedBigInteger('micelio_id');
            $table->foreign('micelio_id')->references('id')->on('micelio_actinomicetos');
            $table->unsignedBigInteger('conidioforo_id');
            $table->foreign('conidioforo_id')->references('id')->on('conidioforo_actinomicetos');
            $table->string('forma_estructura_reproduccion', 100);
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
        Schema::dropIfExists('carac_micro_actinomicetos');
    }
}
