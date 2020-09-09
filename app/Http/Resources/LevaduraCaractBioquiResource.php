<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Str;

class LevaduraCaractBioquiResource extends JsonResource
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
            'type' => 'caract_bioqui_levadura',
            'id' => $this->resource->id,
            'attributes' => [
                'ureasa' => $this->resource->ureasa,
                'fenol_oxidasa' => $this->resource->fenol_oxidasa,
                'produccion_acido' => $this->resource->produccion_acido,
                'termotolerancia_37' => $this->resource->termotolerancia_37,
                'termotolerancia_42' => $this->resource->termotolerancia_42,
                'termotolerancia_45' => $this->resource->termotolerancia_45,
                'termotolerancia_otra' => $this->resource->termotolerancia_otra,
                'crecimiento' => $this->resource->crecimiento,
                'nitratos' => $this->resource->nitratos,
                'otras_caract' => $this->resource->otras_caract,
                'imagen1' => url($this->resource->imagenPublica1),
                'imagen2' => url($this->resource->imagenPublica2),
                'imagen3' => url($this->resource->imagenPublica3)
            ]
        ];
    }
}
