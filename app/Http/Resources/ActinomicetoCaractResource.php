<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Str;

class ActinomicetoCaractResource extends JsonResource
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
            'type' => 'caracteristicas_actinomiceto',
            'id' => $this->resource->id,
            'attributes' => [
                'cepa' => ActinomicetoResource::make($this->resource),
                'caract_macro' => ActinomicetoCaractMacroCollection::make($this->resource->actinomiceto->caractMacroscopicas),
                'caract_micro' => ActinomicetoCaractMicroResource::make($this->resource->actinomiceto->caractMicroscopica),
                'identi_bioqui' => ActinomicetoIdentiBioquiResource::make($this->resource->actinomiceto->identBioquimica),
                'otras_caract' => ActinomicetoOtrasCaractResource::make($this->resource->actinomiceto->otrasCaracteristicas),
                //'caract_molecu' => $this->resource->actinomiceto->caractMolecu,
                //'metodo_conser' => $this->resource->actinomiceto->metodoConser
            ],
            'links' => [
                'self' => route('obtener.info.cepa.actinomiceto', ['slug' => $request->slug])
            ]
        ];
    }
}
