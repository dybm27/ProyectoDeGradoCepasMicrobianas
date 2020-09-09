<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Str;

class LevaduraCaractMicroResource extends JsonResource
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
            'type' => 'caract_micro_levadura',
            'id' => $this->resource->id,
            'attributes' => [
                'hifas' => $this->resource->hifas,
                'pseudohifas' => $this->resource->pseudohifas,
                'balistoconidias' => $this->resource->balistoconidias,
                'produccion_tubo_germinativo' => $this->resource->produccion_tubo_germinativo,
                'capsula' => $this->resource->capsula,
                'blastoconidias' => $this->resource->blastoconidias,
                'produccion_clamidosporas' => $this->resource->produccion_clamidosporas,
                'artroconidias' => $this->resource->artroconidias,
                'induccion_filamentizacion' => $this->resource->induccion_filamentizacion,
                'formacion_asco_y_ascosporas' => $this->resource->formacion_asco_y_ascosporas,
                'otras_caract' => $this->resource->otras_caract,
                'imagen1' => url($this->resource->imagenPublica1),
                'imagen2' => url($this->resource->imagenPublica2),
                'imagen3' => url($this->resource->imagenPublica3)
            ]
        ];
    }
}
