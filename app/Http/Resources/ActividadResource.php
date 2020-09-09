<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Str;

class ActividadResource extends JsonResource
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
            'type' => 'actividad',
            'id' => $this->resource->id,
            'attributes' => [
                'titulo' => $this->resource->titulo,
                'link' => $this->resource->link,
                'cuerpo' => $this->resource->cuerpo,
                'fecha' => $this->resource->fecha,
                'lugar' => $this->resource->lugar,
                'imagen' => url($this->resource->imagenPublica),
                'fecha_creacion' => $this->resource->created_at,
                'slug' => $this->resource->slug,
            ],
            'links' => [
                'self' => route('obtener.actividad', ['slug' => $request->slug])
            ]
        ];
    }
}
