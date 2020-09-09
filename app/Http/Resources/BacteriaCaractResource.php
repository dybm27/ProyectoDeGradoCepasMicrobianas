<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Str;

class BacteriaCaractResource extends JsonResource
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
            'type' => 'caracteristicas_bacteria',
            'id' => $this->resource->id,
            'attributes' => [
                'cepa' => BacteriaResource::make($this->resource),
                'caract_macro' => BacteriaCaractMacroCollection::make($this->resource->bacteria->caractMacroscopicas),
                'caract_micro' => BacteriaCaractMicroResource::make($this->resource->bacteria->caractMicroscopica),
                'caract_bioqui' => BacteriaCaractBioquiResource::make($this->resource->bacteria->caractBioquimica),
                'caract_fisio' => BacteriaCaractFisioResource::make($this->resource->bacteria->caractFisiologica),
                'identi_molecu' => BacteriaIdentiMolecuResource::make($this->resource->bacteria->identMolecular),
                'metodo_conser' => BacteriaMetodoConserCollection::make($this->resource->bacteria->metodosConservacion)
            ],
            'links' => [
                'self' => route('obtener.info.cepa.bacteria', ['slug' => $request->slug])
            ]
        ];
    }
}
