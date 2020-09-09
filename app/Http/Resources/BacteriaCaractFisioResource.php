<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Str;

class BacteriaCaractFisioResource extends JsonResource
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
            'type' => 'caract_fisio_bacteria',
            'id' => $this->resource->id,
            'attributes' => [
                'acido_indolacetico' => $this->resource->acido_indolacetico,
                'fosforo' => $this->resource->fosforo,
                'sideroforos' => $this->resource->sideroforos,
                'nitrogeno' => $this->resource->nitrogeno,
                'otras_caract' => $this->resource->otras_caract,
                'imagen1' => url($this->resource->imagenPublica1),
                'imagen2' => url($this->resource->imagenPublica2),
                'imagen3' => url($this->resource->imagenPublica3)
            ]
        ];
    }
}
