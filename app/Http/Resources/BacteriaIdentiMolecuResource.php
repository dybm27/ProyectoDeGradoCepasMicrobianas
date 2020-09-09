<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Str;

class BacteriaIdentiMolecuResource extends JsonResource
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
            'type' => 'identi_molecu_bacteria',
            'id' => $this->resource->id,
            'attributes' => [
                'nombre_forward' => $this->resource->nombre_forward,
                'nombre_reversed' => $this->resource->nombre_reversed,
                'secuen_forward' => $this->resource->secuen_forward,
                'secuen_reversed' => $this->resource->secuen_reversed,
                'produc_forward' => $this->resource->produc_forward,
                'produc_reversed' => $this->resource->produc_reversed,
                'obser_secuenciacion' => $this->resource->obser_secuenciacion,
                'imagen_pcr' => url($this->resource->img_pcrPublica),
                'imagen_secuencia' => url($this->resource->img_secuenPublica)
            ]
        ];
    }
}
