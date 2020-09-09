<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Str;

class BacteriaMetodoConserResource extends JsonResource
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
            'type' => 'metodo_conser_bacteria',
            'id' => $this->resource->id,
            'attributes' => [
                'tipo_metodo' => $this->resource->tipoMetodo->nombre,
                'tipo_agar' => $this->resource->tipoAgar->nombre,
                'fecha' => $this->resource->fecha,
                'numero_replicas' => $this->resource->numero_replicas,
                'recuento_microgota' => $this->resource->recuento_microgota,
                'imagen' => url($this->resource->imagenPublica)
            ]
        ];
    }
}
