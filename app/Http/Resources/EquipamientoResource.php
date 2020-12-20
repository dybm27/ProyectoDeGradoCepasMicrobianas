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
                'nombre' => $this->resource->nombre,
                'funcion' => $this->resource->funcion,
                'caracteristicas' => $this->resource->caracteristicas,
                'imagen' =>  url($this->resource->imagenPublica)
            ]
        ];
    }
}
