<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Str;

class HongoCaractMacroResource extends JsonResource
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
            'type' => 'caract_macro_hongo',
            'id' => $this->resource->id,
            'attributes' => [
                'medio' => $this->resource->medio,
                'textura' => $this->resource->textura->nombre,
                'color' => $this->resource->color->nombre,
                'caracteristicas_reverso' => $this->resource->caracteristicas_reverso,
                'imagen' => url($this->resource->imagenPublica)
            ]
        ];
    }
}
