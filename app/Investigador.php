<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Investigador extends Model
{
    protected $fillable = [
        'nombres', 'apellidos', 'email', 'nivel_estudio',
        'cargo', 'publicar', 'imagen', 'imagenPublica'
    ];
}
