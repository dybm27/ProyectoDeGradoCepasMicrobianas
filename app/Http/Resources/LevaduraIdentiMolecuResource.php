<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Str;

class LevaduraIdentiMolecuResource extends JsonResource
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
            'type' => 'identi_molecu_levadura',
            'id' => $this->resource->id,
            'attributes' => [
                'nombre_forward' => $this->resource->nombre_forward,
                'nombre_reversed' => $this->resource->nombre_reversed,
                'secuencia_forward' => $this->resource->secuencia_forward,
                'secuencia_reversed' => $this->resource->secuencia_reversed,
                'producto_forward' => $this->resource->producto_forward,
                'producto_reversed' => $this->resource->producto_reversed,
                'condiciones_pcr' => $this->resource->condiciones_pcr,
                'blast' => $this->resource->blast,
                'analisis_filogenetico' => $this->resource->analisis_filogenetico,
                'observaciones' => $this->resource->observaciones,
                'imagen_pcr' => url($this->resource->imagen_pcrPublica),
                'imagen_blast' => url($this->resource->imagen_blastPublica),
            ]
        ];
    }
}
