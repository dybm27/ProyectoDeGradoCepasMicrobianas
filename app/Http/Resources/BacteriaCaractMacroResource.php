<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Str;

class BacteriaCaractMacroResource extends JsonResource
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
            'type' => 'caract_macro_bacteria',
            'id' => $this->resource->id,
            'attributes' => [
                'medio' => $this->resource->medio,
                'detalle_optico' => $this->resource->detalleOptico->nombre,
                'color' => $this->resource->color->nombre,
                'forma' => $this->resource->forma->nombre,
                'superficie' => $this->resource->superficie->nombre,
                'borde' => $this->resource->borde->nombre,
                'elevacion' => $this->resource->elevacion->nombre,
                'tamano' => $this->resource->tamano,
                'otras_caract' => $this->resource->otras_caract,
                'imagen' => url($this->resource->imagenPublica)
            ]
        ];
    }
}
