<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Str;

class HongoResource extends JsonResource
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
            'type' => 'hongo',
            'id' => $this->resource->id,
            'attributes' => [
                'codigo' => $this->resource->codigo,
                'grupo_microbiano' => $this->resource->grupoMicrobiano->nombre,
                'genero' => $this->resource->genero->nombre,
                'especie' => $this->resource->especie->nombre,
                'estado' => $this->resource->estado,
                'origen' => $this->resource->origen,
                'otras_caracteristicas' => $this->resource->otras_caract,
                'clase' => $this->resource->hongo->clase->nombre,
                'orden' => $this->resource->hongo->orden->nombre,
                'familia' => $this->resource->hongo->familia->nombre,
                'phylum' => $this->resource->hongo->phylum->nombre,
                'slug' =>  $this->resource->slug
            ]
        ];
    }
}
