<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Str;

class BacteriaCaractMicroResource extends JsonResource
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
            'type' => 'caract_micro_bacteria',
            'id' => $this->resource->id,
            'attributes' => [
                'forma' => $this->resource->forma->nombre,
                'ordenamiento' => $this->resource->ordenamiento,
                'tincion_gram' => $this->resource->tincion_gram,
                'tincion_esporas' => $this->resource->tincion_esporas,
                'ubicacion_esporas' => $this->resource->ubicacion_esporas,
                'tincion_capsula' => $this->resource->tincion_capsula,
                'otras_caract' => $this->resource->otras_caract,
                'imagen1' => url($this->resource->imagenPublica1),
                'imagen2' => url($this->resource->imagenPublica2),
                'imagen3' => url($this->resource->imagenPublica3)
            ]
        ];
    }
}
