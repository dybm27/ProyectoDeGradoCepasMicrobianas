<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Str;

class ActinomicetoResource extends JsonResource
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
            'type' => 'actinomiceto',
            'id' => $this->resource->id,
            'attributes' => [
                'codigo' => $this->resource->codigo,
                'grupo_microbiano' => $this->resource->grupoMicrobiano->nombre,
                'genero' => $this->resource->genero->nombre,
                'especie' => $this->resource->especie->nombre,
                'estado' => $this->resource->estado,
                'origen' => $this->resource->origen,
                'otras_caracteristicas' => $this->resource->otras_caract,
                'clase' => $this->resource->actinomiceto->clase->nombre,
                'orden' => $this->resource->actinomiceto->orden->nombre,
                'phylum' => $this->resource->actinomiceto->phylum->nombre,
                'reino' => $this->resource->actinomiceto->reino->nombre,
                'slug' =>  $this->resource->slug
            ]
        ];
    }
}
