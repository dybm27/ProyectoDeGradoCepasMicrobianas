<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Str;

class HongoCaractBioquiResource extends JsonResource
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
            'type' => 'caract_bioqui_hongo',
            'id' => $this->resource->id,
            'attributes' => [
                'enzimas' => $this->resource->enzimas,
                'azucares' => $this->resource->azucares,
                'otras_caract' => $this->resource->otras_caracteristicas,
                'imagen1' => url($this->resource->imagenPublica1),
                'imagen2' => url($this->resource->imagenPublica2),
                'imagen3' => url($this->resource->imagenPublica3)
            ]
        ];
    }
}
