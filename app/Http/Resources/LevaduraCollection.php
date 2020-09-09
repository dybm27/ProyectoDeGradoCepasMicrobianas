<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class LevaduraCollection extends ResourceCollection
{
    public $collects = LevaduraResource::class;
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
                'self' => route('obtener.cepas.levaduras', ['sort' => $request->sort])
            ],
            'meta' => [
                'count' => $this->collection->count()
            ]
        ];
    }
}
