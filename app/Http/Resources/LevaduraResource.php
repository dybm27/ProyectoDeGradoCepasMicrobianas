<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Str;

class LevaduraResource extends JsonResource
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
            'type' => 'levadura',
            'id' => $this->resource->id,
            'attributes' => [
                'codigo' => $this->resource->codigo,
                'grupo_microbiano' => $this->resource->grupoMicrobiano->nombre,
                'genero' => $this->resource->genero->nombre,
                'especie' => $this->resource->especie->nombre,
                'estado' => $this->resource->estado,
                'origen' => $this->resource->origen,
                'otras_caracteristicas' => $this->resource->otras_caract,
                'division' => $this->resource->levadura->division->nombre,
                'clase' => $this->resource->levadura->clase->nombre,
                'orden' => $this->resource->levadura->orden->nombre,
                'familia' => $this->resource->levadura->familia->nombre,
                'slug' =>  $this->resource->slug
            ]
        ];
    }
}
