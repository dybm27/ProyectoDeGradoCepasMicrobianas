<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Str;

class ActinomicetoCaractMicroResource extends JsonResource
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
            'type' => 'caract_micro_actinomiceto',
            'id' => $this->resource->id,
            'attributes' => [
                'tincion' => $this->resource->tincionGram->nombre,
                'forma' => $this->resource->forma->nombre,
                'conidioforo' => $this->resource->conidioforo->nombre,
                'micelio' => $this->resource->micelio->nombre,
                'forma_estructura_reproduccion' => $this->resource->forma_estructura_reproduccion,
                'otras_caract' => $this->resource->otras_caract,
                'imagen1' => url($this->resource->imagenPublica1),
                'imagen2' => url($this->resource->imagenPublica2),
                'imagen3' => url($this->resource->imagenPublica3)
            ]
        ];
    }
}
