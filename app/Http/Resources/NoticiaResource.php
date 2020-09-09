<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Str;

class NoticiaResource extends JsonResource
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
            'type' => 'noticia',
            'id' => $this->resource->id,
            'attributes' => [
                'titulo' => $this->resource->titulo,
                'link' => $this->resource->link,
                'cuerpo' => $this->resource->cuerpo,
                'imagen' => url($this->resource->imagenPublica),
                'fecha_creacion' => $this->resource->created_at,
                'slug' => $this->resource->slug,
            ],
            'links' => [
                'self' => route('obtener.noticia', ['slug' => $request->slug])
            ]
        ];
    }
}
