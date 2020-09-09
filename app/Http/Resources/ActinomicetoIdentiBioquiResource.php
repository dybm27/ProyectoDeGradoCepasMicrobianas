<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Str;

class ActinomicetoIdentiBioquiResource extends JsonResource
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
            'type' => 'identi_bioqui_actinomiceto',
            'id' => $this->resource->id,
            'attributes' => [
                'oxidasa' => $this->resource->oxidasa,
                'catalasa' => $this->resource->catalasa,
                'citrato' => $this->resource->citrato,
                'nitrato' => $this->resource->nitrato,
                'hidro_urea' => $this->resource->hidro_urea,
                'caseina' => $this->resource->caseina,
                'hidro_gelatina' => $this->resource->hidro_gelatina,
                'fer_lactosa' => $this->resource->fer_lactosa,
                'fer_manitol' => $this->resource->fer_manitol,
                'fer_inositol' => $this->resource->fer_inositol,
                'fer_sacarosa' => $this->resource->fer_sacarosa,
                'fer_otro' => $this->resource->fer_otro,
                'sensi_antibioticos' => $this->resource->sensi_antibioticos,
                'otras_caract' => $this->resource->otras_caract,
                'imagen1' => url($this->resource->imagenPublica1),
                'imagen2' => url($this->resource->imagenPublica2),
                'imagen3' => url($this->resource->imagenPublica3)
            ]
        ];
    }
}
