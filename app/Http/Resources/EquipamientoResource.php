<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Str;

class EquipamientoResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'type' => 'equipamiento',
            'id' => $this->resource->id,
            'attributes' => [
                'nombre' => $this->resource->nombres,
                'funcion' => $this->resource->apellidos,
                'caracteristicas' => $this->resource->email,
                'imagen' =>  url($this->resource->imagenPublica)
            ]
        ];
    }
}
