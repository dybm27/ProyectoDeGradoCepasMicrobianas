<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Str;

class PublicacionResource extends JsonResource
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
            'type' => 'publicacion',
            'id' => $this->resource->id,
            'attributes' => [
                'nombre_documento' => $this->resource->nombre_documento,
                'nombre_autor' => $this->resource->nombre_autor,
                'descripcion' => $this->resource->descripcion,
                'imagen' =>  url($this->resource->imagenPublica),
                'descargar' => url($this->resource->rutaPublica)
            ]
        ];
    }
}
