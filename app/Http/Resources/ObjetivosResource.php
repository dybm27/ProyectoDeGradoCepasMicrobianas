<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Str;

class ObjetivosResource extends JsonResource
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
            'type' => 'objetivos',
            'id' => $this->resource->id,
            'attributes' => [
                'cuerpo' => $this->resource->cuerpo,
            ],
            'links' => [
                'self' => route('obtener.objetivos')
            ]
        ];
    }
}
