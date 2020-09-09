<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Str;

class LevaduraCaractMacroResource extends JsonResource
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
            'type' => 'caract_macro_levadura',
            'id' => $this->resource->id,
            'attributes' => [
                'medio' => $this->resource->medio,
                'textura' => $this->resource->textura->nombre,
                'color' => $this->resource->color->nombre,
                'topografia_superficie' => $this->resource->topografia_superficie,
                'borde_colonia' => $this->resource->borde_colonia,
                'imagen' => url($this->resource->imagenPublica)
            ]
        ];
    }
}
