<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Str;

class InvestigadorResource extends JsonResource
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
            'type' => 'investigador',
            'id' => $this->resource->id,
            'attributes' => [
                'nombres' => $this->resource->nombres,
                'apellidos' => $this->resource->apellidos,
                'email' => $this->resource->email,
                'nivel_estudio' => $this->resource->nivel_estudio,
                'cargo' => $this->resource->cargo,
                'imagen' => url($this->resource->imagenPublica)
            ]
        ];
    }
}
