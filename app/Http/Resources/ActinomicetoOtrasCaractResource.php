<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Str;

class ActinomicetoOtrasCaractResource extends JsonResource
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
            'type' => 'otras_caract_actinomiceto',
            'id' => $this->resource->id,
            'attributes' => [
                'fijacion_nitrogeno' => $this->resource->fijacion_nitrogeno,
                'produccion_aia' => $this->resource->produccion_aia,
                'giberelinas' => $this->resource->giberelinas,
                'produccion_sideroforos' => $this->resource->produccion_sideroforos,
                'solubili_fosforo' => $this->resource->solubili_fosforo,
                'produccion_pha' => $this->resource->produccion_pha,
                'hidro_gelatina' => $this->resource->hidro_gelatina,
                'alta_produc_antibioticos' => $this->resource->alta_produc_antibioticos,
                'activi_enzimaticas' => $this->resource->activi_enzimaticas,
                'antagonismos' => $this->resource->antagonismos,
                'otras_caract' => $this->resource->otras_caract,
                'imagen1' => url($this->resource->imagenPublica1),
                'imagen2' => url($this->resource->imagenPublica2),
                'imagen3' => url($this->resource->imagenPublica3)
            ]
        ];
    }
}
