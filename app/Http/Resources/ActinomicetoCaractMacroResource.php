<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Str;

class ActinomicetoCaractMacroResource extends JsonResource
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
            'type' => 'caract_macro_actinomiceto',
            'id' => $this->resource->id,
            'attributes' => [
                'medio' => $this->resource->medio,
                'textura' => $this->resource->textura->nombre,
                'color' => $this->resource->color->nombre,
                'forma' => $this->resource->forma->nombre,
                'superficie' => $this->resource->superficie->nombre,
                'borde' => $this->resource->borde->nombre,
                'pigmento' => $this->resource->pigmento->nombre,
                'secrecion_geosminas' => $this->resource->secrecion_geosminas,
                'otras_caract' => $this->resource->otras_caract,
                'imagen' => url($this->resource->imagenPublica)
            ]
        ];
    }
}
