<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCaracBioquiHongosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('carac_bioqui_hongos', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('hongo_id');
            $table->foreign('hongo_id')->references('id')->on('hongo_filamentosos')->onDelete('cascade');
            $table->string('enzimas',100);
            $table->string('azucares',100);
            $table->longText('otras_caracteristicas')->nullable();
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
        Schema::dropIfExists('carac_bioqui_hongos');
    }
}
