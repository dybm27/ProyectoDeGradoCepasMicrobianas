<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Str;

class LevaduraCaractResource extends JsonResource
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
            'type' => 'caracteristicas_levadura',
            'id' => $this->resource->id,
            'attributes' => [
                'cepa' => LevaduraResource::make($this->resource),
                'caract_macro' => LevaduraCaractMacroCollection::make($this->resource->levadura->caractMacroscopicas),
                'caract_micro' => LevaduraCaractMicroResource::make($this->resource->levadura->caractMicroscopica),
                'caract_bioqui' => LevaduraCaractBioquiResource::make($this->resource->levadura->caractBioquimica),
                'identi_molecu' => LevaduraIdentiMolecuResource::make($this->resource->levadura->identMolecular),
                'metodo_conser' => LevaduraMetodoConserCollection::make($this->resource->levadura->metodosConservacion)
            ],
            'links' => [
                'self' => route('obtener.info.cepa.levadura', ['slug' => $request->slug])
            ]
        ];
    }
}
