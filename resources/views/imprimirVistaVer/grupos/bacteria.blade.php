@extends('imprimirVistaVer.layout')

@section('contenido-pdf')
@if (in_array('todo',$imprimir)||in_array('cepa',$imprimir))
<div class="div-cepa">
    <table class="table tabla-cepa">
        <thead>
            <tr>
                <th colspan="2">Cepa Microbiana </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><b>Código de la Cepa:</b> {{$cepa->codigo}}</td>
                <td><b>Grupo Microbiano:</b> {{$cepa->grupoMicrobiano->nombre}}</td>
            </tr>
            <tr>
                <td><b>Genero:</b> {{$cepa->genero->nombre}}</td>
                <td><b>Especie:</b> {{$cepa->especie->nombre}}</td>
            </tr>
            <tr>
                <td><b>Estado:</b> {{$cepa->estado}}</td>
                <td><b>Origen:</b> {{$cepa->origen}}</td>
            </tr>
        </tbody>
    </table>
</div>
@endif
@if(count($cepa->bacteria->caractMacroscopicas))
    @if (in_array('todo',$imprimir)||in_array('caract-macro',$imprimir))
    <div class="div-caract-macro">
        <table class="table tabla-caract-macro">
            <tbody>
                <tr>
                    <td colspan="{{$cantidad+1}}" class="thead-caract-macro"><b>Características Macroscópicas</b></td>
                </tr>
                <tr>
                    <td rowspan="2" class="thead-caract-macro" style="padding-top: 10px"><b>Caracteres</b></td>
                    <td colspan="{{$cantidad}}" class="thead-caract-macro"><b>Medios Selectivos</b></td>
                </tr>
                <tr>
                @foreach ($cepa->bacteria->caractMacroscopicas as $caract)
                    <td class="thead-caract-macro"><b>{{$caract->medio}}</b></td>
                @endforeach       
                </tr>
                <tr>
                    <td><b>Forma</b></td>
                    @foreach ($cepa->bacteria->caractMacroscopicas as $caract)
                        <td>{{$caract->forma->nombre}}</td>
                    @endforeach 
                </tr>
                <tr>
                    <td><b>Elevacion</b></td>
                    @foreach ($cepa->bacteria->caractMacroscopicas as $caract)
                        <td>{{$caract->elevacion->nombre}}</td>
                    @endforeach 
                </tr>
                <tr>
                    <td><b>Borde</b></td>
                    @foreach ($cepa->bacteria->caractMacroscopicas as $caract)
                        <td>{{$caract->borde->nombre}}</td>
                    @endforeach 
                </tr>
                <tr>
                    <td><b>Superficie</b></td>
                    @foreach ($cepa->bacteria->caractMacroscopicas as $caract)
                        <td>{{$caract->superficie->nombre}}</td>
                    @endforeach 
                </tr>
                <tr>
                    <td><b>Detalle Optico</b></td>
                    @foreach ($cepa->bacteria->caractMacroscopicas as $caract)
                        <td>{{$caract->detalleOptico->nombre}}</td>
                    @endforeach 
                </tr>
                <tr>
                    <td><b>Color</b></td>
                    @foreach ($cepa->bacteria->caractMacroscopicas as $caract)
                        <td>{{$caract->color->nombre}}</td>
                    @endforeach 
                </tr>
                <tr>
                    <td><b>Tamaño</b></td>
                    @foreach ($cepa->bacteria->caractMacroscopicas as $caract)
                        <td>{{$caract->tamano}}</td>
                    @endforeach 
                </tr>
                <tr>
                    <td colspan="{{$cantidad+1}}" style="text-align: center">
                        @foreach ($cepa->bacteria->caractMacroscopicas as $caract)
                        <b>{{$caract->medio}}</b>
                        <img width="100px" height="100px" src="{{public_path($caract->imagenPublica)}}" 
                                style="padding-top: 25px;padding-right: 40px"/>     
                        @endforeach         
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    @endif
@endif
@if(!is_null($cepa->bacteria->caractMicroscopica))
    @if (in_array('todo',$imprimir)||in_array('caract-micro',$imprimir))
    <div class="div-caract-micro">
        <table class="table tabla-caract-micro">
            <tbody>
                <tr>
                    <td colspan="2" class="thead-caract-micro"><b>Características Microscópicas</b></td>
                </tr>
                <tr>
                    <td><b>Forma</b></td>
                    <td>{{$cepa->bacteria->caractMicroscopica->forma->nombre}}</td>
                </tr>
                <tr>
                    <td><b>Ordenamineto</b></td>
                    <td>{{$cepa->bacteria->caractMicroscopica->ordenamiento}}</td>
                </tr>
                <tr>
                    <td><b>Tinción de Gram</b></td>
                    <td>{{$cepa->bacteria->caractMicroscopica->tincion_gram}}</td>
                </tr>
                <tr>
                    <td><b>Tinción de Esporas</b></td>
                    <td>{{$cepa->bacteria->caractMicroscopica->tincion_esporas}}</td>
                </tr>
                @if ($cepa->bacteria->caractMicroscopica->ubicacion_esporas)
                    <tr>
                        <td><b>Ubicación de la Espora</b></td>
                        <td>{{$cepa->bacteria->caractMicroscopica->ubicacion_esporas}}</td>
                    </tr>
                @endif
                <tr>
                    <td><b>Tinción de Cápsula</b></td>
                    <td>{{$cepa->bacteria->caractMicroscopica->tincion_capsula}}</td>
                </tr>
                <tr>
                    <td colspan="2" style="text-align: center">
                        @if ($cepa->bacteria->caractMicroscopica->imagenPublica1) 
                            <img width="100px" height="100px" src="{{public_path($cepa->bacteria->caractMicroscopica->imagenPublica1)}}" 
                            style="padding-top: 25px;padding-right: 60px"/>
                        @endif
                        @if ($cepa->bacteria->caractMicroscopica->imagenPublica2) 
                            <img width="100px" height="100px" src="{{public_path($cepa->bacteria->caractMicroscopica->imagenPublica2)}}" 
                            style="padding-top: 25px;padding-right: 60px"/>
                        @endif
                        @if ($cepa->bacteria->caractMicroscopica->imagenPublica3) 
                            <img width="100px" height="100px" src="{{public_path($cepa->bacteria->caractMicroscopica->imagenPublica3)}}" 
                            style="padding-top: 25px"/>
                        @endif    
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    @endif
@endif
@if(!is_null($cepa->bacteria->caractBioquimica))
    @if (in_array('todo',$imprimir)||in_array('caract-bioqui',$imprimir))
    <div class="div-caract-bioqui">
        <table class="table tabla-caract-bioqui">
            <tbody>
                <tr>
                    <td colspan="4" class="thead-caract-bioqui"><b>Características Bioquímicas</b></td>
                </tr>
                <tr>
                    <td><b>Oxidasa</b></td>
                    <td>{{$cepa->bacteria->caractBioquimica->oxidasa}}</td>
                    <td><b>Catalasa</b></td>
                    <td>{{$cepa->bacteria->caractBioquimica->catalasa}}</td>
                </tr>
                <tr>
                    <td><b>LIA</b></td>
                    <td>{{$cepa->bacteria->caractBioquimica->lia}}</td>
                    <td><b>SIM</b></td>
                    <td>{{$cepa->bacteria->caractBioquimica->sim}}</td>
                </tr>
                <tr>
                    <td><b>Citrato</b></td>
                    <td>{{$cepa->bacteria->caractBioquimica->citrato}}</td>
                    <td><b>TSI</b></td>
                    <td>{{$cepa->bacteria->caractBioquimica->tsi}}</td>
                </tr>
                <tr>
                    <td><b>RM</b></td>
                    <td>{{$cepa->bacteria->caractBioquimica->rm}}</td>
                    <td><b>VP</b></td>
                    <td>{{$cepa->bacteria->caractBioquimica->vp}}</td>
                </tr>
                <tr>
                    <td><b>Glucosa</b></td>
                    <td>{{$cepa->bacteria->caractBioquimica->glucosa}}</td>
                    <td><b>Lactosa</b></td>
                    <td>{{$cepa->bacteria->caractBioquimica->lactosa}}</td>
                </tr>
                <tr>
                    <td><b>Nitrato</b></td>
                    <td>{{$cepa->bacteria->caractBioquimica->nitrato}}</td>
                    <td><b>Caldo Úrea</b></td>
                    <td>{{$cepa->bacteria->caractBioquimica->caldo_urea}}</td>
                </tr>
                <tr>
                    <td><b>Manitol</b></td>
                    <td>{{$cepa->bacteria->caractBioquimica->manitol}}</td>
                    <td><b>Xilosa</b></td>
                    <td>{{$cepa->bacteria->caractBioquimica->xilosa}}</td>
                </tr>
                <tr>
                    <td><b>OF</b></td>
                    <td>{{$cepa->bacteria->caractBioquimica->of}}</td>
                    <td><b>Almidón</b></td>
                    <td>{{$cepa->bacteria->caractBioquimica->almidon}}</td>
                </tr>
                <tr>
                    <td><b>Arabinosa</b></td>
                    <td>{{$cepa->bacteria->caractBioquimica->arabinosa}}</td>
                    <td><b>Sacarosa</b></td>
                    <td>{{$cepa->bacteria->caractBioquimica->sacarosa}}</td>
                </tr>
                <tr>
                    <td><b>Lecitinasa</b></td>
                    <td>{{$cepa->bacteria->caractBioquimica->lecitinasa}}</td>
                    <td><b>Lipasa</b></td>
                    <td>{{$cepa->bacteria->caractBioquimica->lipasa}}</td>
                </tr>
                <tr>
                    <td><b>Hidrolisís de la Caseína</b></td>
                    <td colspan="3">{{$cepa->bacteria->caractBioquimica->hidro_caseina}}</td>
                </tr>
                <tr>
                    <td><b>Hidrolisís de la Gelatina</b></td>
                    <td colspan="3">{{$cepa->bacteria->caractBioquimica->hidro_gelatina}}</td></tr>
                <tr>
                    <td><b>Hidrolisís de la Úrea</b></td>
                    <td colspan="3">{{$cepa->bacteria->caractBioquimica->hidro_urea}}</td>
                    
                </tr>
                <tr>
                    <td><b>Crecimiento en Nacl</b></td>
                    <td colspan="3">{{$cepa->bacteria->caractBioquimica->creci_nacl}}</td></tr>
                <tr>
                    <td><b>Crecimiento en Diferentes Temperaturas</b></td>
                    <td colspan="3">{{$cepa->bacteria->caractBioquimica->creci_dif_temp}}</td>
                </tr>
                <tr>
                    <td colspan="4" style="text-align: center">
                        @if ($cepa->bacteria->caractBioquimica->imagenPublica1) 
                            <img width="100px" height="100px" src="{{public_path($cepa->bacteria->caractBioquimica->imagenPublica1)}}" 
                            style="padding-top: 25px;padding-right: 60px"/>
                        @endif
                        @if ($cepa->bacteria->caractBioquimica->imagenPublica2) 
                            <img width="100px" height="100px" src="{{public_path($cepa->bacteria->caractBioquimica->imagenPublica2)}}" 
                            style="padding-top: 25px;padding-right: 60px"/>
                        @endif
                        @if ($cepa->bacteria->caractBioquimica->imagenPublica3) 
                            <img width="100px" height="100px" src="{{public_path($cepa->bacteria->caractBioquimica->imagenPublica3)}}" 
                                style="padding-top: 25px"/>
                        @endif    
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    @endif
@endif
@if(!is_null($cepa->bacteria->caractFisiologica))
    @if (in_array('todo',$imprimir)||in_array('caract-fisio',$imprimir))
    <div class="div-caract-fisio">
        <table class="table tabla-caract-fisio">
            <tbody>
                <tr>
                    <td colspan="2" class="thead-caract-fisio"><b>Características Fisiológicas</b></td>
                </tr>
                <tr>
                    <td><b>Acido Indolacético</b></td>
                    <td>{{$cepa->bacteria->caractFisiologica->acido_indolacetico}}</td>
                </tr>
                <tr>
                    <td><b>Fósforo</b></td>
                    <td>{{$cepa->bacteria->caractFisiologica->fosforo}}</td>
                </tr>
                <tr>
                    <td><b>Sideróforos</b></td>
                    <td>{{$cepa->bacteria->caractFisiologica->sideroforos}}</td>
                </tr>
                <tr>
                    <td><b>Nitrógeno</b></td>
                    <td>{{$cepa->bacteria->caractFisiologica->nitrogeno}}</td>
                </tr>
                <tr>
                    <td colspan="2" style="text-align: center">
                        @if ($cepa->bacteria->caractFisiologica->imagenPublica1) 
                            <img width="100px" height="100px" src="{{public_path($cepa->bacteria->caractFisiologica->imagenPublica1)}}" 
                            style="padding-top: 25px;padding-right: 60px"/>
                        @endif
                        @if ($cepa->bacteria->caractFisiologica->imagenPublica2) 
                            <img width="100px" height="100px" src="{{public_path($cepa->bacteria->caractFisiologica->imagenPublica2)}}" 
                            style="padding-top: 25px;padding-right: 60px"/>
                        @endif
                        @if ($cepa->bacteria->caractFisiologica->imagenPublica3) 
                            <img width="100px" height="100px" src="{{public_path($cepa->bacteria->caractFisiologica->imagenPublica3)}}" 
                                style="padding-top: 25px"/>
                        @endif    
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    @endif
@endif
@if(!is_null($cepa->bacteria->identMolecular))
    @if (in_array('todo',$imprimir)||in_array('identi-molecu',$imprimir))
    <div class="div-identi-molecu">
        <table class="table tabla-identi-molecu">
            <tbody>
                <tr>
                    <td colspan="5" class="thead-identi-molecu"><b>Identificación Molecular</b></td>
                </tr>
                <tr>
                    <td rowspan="3"  class="thead-identi-molecu"  style="text-align: center;padding-top: 40px;padding-bottom: -40px"><b>PCR</b></td>
                    <td class="thead-identi-molecu"><b>Nombre</b></td>
                    <td class="thead-identi-molecu"><b>Secuencia</b></td>
                    <td class="thead-identi-molecu"><b>Producto</b></td>
                    <td class="thead-identi-molecu"><b>{{$cepa->grupoMicrobiano->nombre}}</b></td>
                </tr>
                <tr>
                    <td><b>F </b>{{$cepa->bacteria->identMolecular->nombre_forward}}</td>
                    <td>{{$cepa->bacteria->identMolecular->secuen_forward}}</td>
                    <td>{{$cepa->bacteria->identMolecular->produc_forward}}</td>
                    <td>{{$cepa->genero->nombre.' '.$cepa->especie->nombre}}</td>
                </tr>
                <tr>
                    <td><b>R </b>{{$cepa->bacteria->identMolecular->nombre_reversed}}</td>
                    <td>{{$cepa->bacteria->identMolecular->secuen_reversed}}</td>
                    <td>{{$cepa->bacteria->identMolecular->produc_reversed}}</td>
                    <td>{{$cepa->genero->nombre.' '.$cepa->especie->nombre}}</td>
                </tr>
                <tr>
                    <td colspan="2">
                        <b>Informe de Secuenciación</b>
                    </td>
                    <td colspan="3">
                        {{$cepa->bacteria->identMolecular->obser_secuenciacion}}
                    </td>
                </tr>
                <tr>
                    <td colspan="2" style="text-align: center">
                        <b>Imagen PCR</b>
                        <div>
                            <img width="100px" height="100px" src="{{public_path($cepa->bacteria->identMolecular->img_pcrPublica)}}" 
                            style="padding-top: 30px"/>
                        </div>
                    </td>
                    <td colspan="3" style="text-align: center">
                        <div>
                            <b>Imagen Secuenciación</b>
                        </div>
                        <div>
                            <img width="200px" height="100px" src="{{public_path($cepa->bacteria->identMolecular->img_secuenPublica)}}" 
                            style="padding-top: 30px"/>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    @endif
@endif
@if(count($cepa->bacteria->metodosConservacion))
    @if (in_array('todo',$imprimir)||in_array('metodo-conser',$imprimir))
    <div class="div-metodos-conser">
        <table class="table tabla-metodos-conser">
            <tbody>
                <tr>
                    <td colspan="5" class="thead-metodos-conser"><b>Métodos De Conservación</b></td>
                </tr>
                @foreach ($cepa->bacteria->metodosConservacion as $metodo)
                    <tr>
                        <td rowspan="3" style="text-align: center">
                            <div>
                                <img width="100px" height="100px" src="{{public_path($metodo->imagenPublica)}}" 
                                style="padding-top: 30px"/>
                            </div>
                        </td>        
                        <td><b>Tipo de Método</b></td>
                        <td>{{$metodo->tipoMetodo->nombre}}</td>
                        <td><b>Tipo Agar</b></td>
                        <td>
                            @if ($metodo->tipoMetodo=='4')
                                {{$metodo->tipoAgar->nombre}}
                            @else
                                NO APLICA
                            @endif  
                        </td>          
                    </tr>
                    <tr>
                        <td><b>Fecha</b></td>
                        <td>
                            @php
                                $fecha= date('d-M-Y', strtotime($metodo->fecha))
                            @endphp
                            {{$fecha}}
                        </td>
                        <td><b>Número de Réplicas</b></td>
                        <td>{{$metodo->numero_replicas}}</td> 
                    </tr>
                    <tr>
                        <td colspan="2"><b>Recuento Microgota</b></td>  
                        <td colspan="2">{{$metodo->recuento_microgota}}</td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>
    @endif
@endif
@endsection