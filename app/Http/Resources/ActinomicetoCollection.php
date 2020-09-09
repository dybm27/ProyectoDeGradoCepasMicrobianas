<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class ActinomicetoCollection extends ResourceCollection
{
    public $collects = ActinomicetoResource::class;
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
                'self' => route('obtener.cepas.actinomicetos', ['sort' => $request->sort])
            ],
            'meta' => [
                'count' => $this->collection->count()
            ]
        ];
    }
}
