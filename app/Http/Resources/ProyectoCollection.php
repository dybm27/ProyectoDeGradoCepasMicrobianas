<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class ProyectoCollection extends ResourceCollection
{
    public $collects = ProyectoResource::class;
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'data' => $this->collection,
            'links' => [
                'self' => route('obtener.proyectos', ['sort' => $request->sort])
            ],
            'meta' => [
                'count' => $this->collection->count()
            ]
        ];
    }
}
