<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class InvestigadorCollection extends ResourceCollection
{
    public $collects = InvestigadorResource::class;
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
                'self' => route('obtener.investigadores', ['sort' => $request->sort])
            ],
            'meta' => [
                'count' => $this->collection->count()
            ]
        ];
    }
}
