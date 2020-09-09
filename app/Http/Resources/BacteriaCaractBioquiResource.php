<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Str;

class BacteriaCaractBioquiResource extends JsonResource
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
            'type' => 'caract_bioqui_bacteria',
            'id' => $this->resource->id,
            'attributes' => [
                'oxidasa' => $this->resource->oxidasa,
                'catalasa' => $this->resource->catalasa,
                'citrato' => $this->resource->citrato,
                'tsi' => $this->resource->tsi,
                'lia' => $this->resource->lia,
                'sim' => $this->resource->sim,
                'rm' => $this->resource->rm,
                'vp' => $this->resource->vp,
                'nitrato' => $this->resource->nitrato,
                'caldo_urea' => $this->resource->caldo_urea,
                'of' => $this->resource->of,
                'glucosa' => $this->resource->glucosa,
                'lactosa' => $this->resource->lactosa,
                'manitol' => $this->resource->manitol,
                'xilosa' => $this->resource->xilosa,
                'arabinosa' => $this->resource->arabinosa,
                'sacarosa' => $this->resource->sacarosa,
                'otros_azucares' => $this->resource->otros_azucares,
                'almidon' => $this->resource->almidon,
                'lecitinasa' => $this->resource->lecitinasa,
                'lipasa' => $this->resource->lipasa,
                'otras_enzimas' => $this->resource->otras_enzimas,
                'hidrolisis_caseina' => $this->resource->hidro_caseina,
                'hidrolisis_gelatina' => $this->resource->hidro_gelatina,
                'hidrolisis_urea' => $this->resource->hidro_urea,
                'crecimiento_nacl' => $this->resource->creci_nacl,
                'crecimiento_diferentes_temperaturas' => $this->resource->creci_dif_temp,
                'otras_caract' => $this->resource->otras_caract,
                'imagen1' => url($this->resource->imagenPublica1),
                'imagen2' => url($this->resource->imagenPublica2),
                'imagen3' => url($this->resource->imagenPublica3)
            ]
        ];
    }
}
