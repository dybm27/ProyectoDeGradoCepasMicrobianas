<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Str;

class HongoCaractMicroResource extends JsonResource
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
            'type' => 'caract_micro_hongo',
            'id' => $this->resource->id,
            'attributes' => [
                'conidioforo' => $this->resource->conidioforo->nombre,
                'fialides' => $this->resource->fialides,
                'fialides_forma' => $this->resource->fialides_forma,
                'fialides_otra_caracteristica' => $this->resource->fialides_otra_caracteristica,
                'vesicula' => $this->resource->vesicula,
                'espora_asexual' => $this->resource->esporaAsexual->nombre,
                'esporas_asexuales_conidios_tamano' => $this->resource->esporas_asexuales_conidios_tamano,
                'esporas_asexuales_conidios_color' => $this->resource->esporas_asexuales_conidios_color,
                'esporas_asexuales_conidios_forma' => $this->resource->esporas_asexuales_conidios_forma,
                'esporas_asexuales_conidios_otras' => $this->resource->vesicula,
                'espora_sexual' => $this->resource->esporaSexual->nombre,
                'otras_estructuras' => $this->resource->otras_estructuras,
                'imagen1' => url($this->resource->imagenPublica1),
                'imagen2' => url($this->resource->imagenPublica2),
                'imagen3' => url($this->resource->imagenPublica3)
            ]
        ];
    }
}
