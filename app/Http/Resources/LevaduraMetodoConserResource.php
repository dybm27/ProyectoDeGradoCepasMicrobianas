<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Str;

class LevaduraMetodoConserResource extends JsonResource
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
            'type' => 'metodo_conser_levadura',
            'id' => $this->resource->id,
            'attributes' => [
                'tipo_metodo' => $this->resource->tipoMetodo->nombre,
                'fecha' => $this->resource->fecha,
                'numero_replicas' => $this->resource->numero_replicas,
                'recuento_microgota' => $this->resource->recuento_microgota,
                'medio_cultivo' => $this->resource->medio_cultivo,
                'numero_pases' => $this->resource->numero_pases,
                'observaciones' => $this->resource->observaciones,
                'imagen' => url($this->resource->imagenPublica),
            ]
        ];
    }
}
