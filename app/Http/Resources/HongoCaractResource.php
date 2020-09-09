<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Str;

class HongoCaractResource extends JsonResource
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
            'type' => 'caracteristicas_hongo',
            'id' => $this->resource->id,
            'attributes' => [
                'cepa' => HongoResource::make($this->resource),
                'caract_macro' => HongoCaractMacroCollection::make($this->resource->hongo->caractMacroscopicas),
                'caract_micro' => HongoCaractMicroResource::make($this->resource->hongo->caractMicroscopica),
                'caract_bioqui' => HongoCaractBioquiResource::make($this->resource->hongo->caractBioquimica),
                'identi_molecu' => HongoIdentiMolecuResource::make($this->resource->hongo->identMolecular),
                'metodo_conser' => HongoMetodoConserCollection::make($this->resource->hongo->metodosConservacion)
            ],
            'links' => [
                'self' => route('obtener.info.cepa.hongo', ['slug' => $request->slug])
            ]
        ];
    }
}
