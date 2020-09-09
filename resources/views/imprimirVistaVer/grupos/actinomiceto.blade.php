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
                    <td><b>Reino:</b> {{$cepa->actinomiceto->reino->nombre}}</td>
                    <td><b>Phylum:</b> {{$cepa->actinomiceto->phylum->nombre}}</td>
                </tr><tr>
                    <td><b>Clase:</b> {{$cepa->actinomiceto->clase->nombre}}</td>
                    <td><b>Orden:</b> {{$cepa->actinomiceto->orden->nombre}}</td>
                </tr>
                <tr>
                    <td><b>Estado:</b> {{$cepa->estado}}</td>
                    <td><b>Origen:</b> {{$cepa->origen}}</td>
                </tr>
            </tbody>
        </table>
    </div>
@endif
@if(count($cepa->actinomiceto->caractMacroscopicas))
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
                @foreach ($cepa->actinomiceto->caractMacroscopicas as $caract)
                    <td class="thead-caract-macro"><b>{{$caract->medio}}</b></td>
                @endforeach       
                </tr>
                <tr>
                    <td><b>Textura</b></td>
                    @foreach ($cepa->actinomiceto->caractMacroscopicas as $caract)
                        <td>{{$caract->textura->nombre}}</td>
                    @endforeach 
                </tr>
                <tr>
                    <td><b>Color</b></td>
                    @foreach ($cepa->actinomiceto->caractMacroscopicas as $caract)
                        <td>{{$caract->color->nombre}}</td>
                    @endforeach 
                </tr>
                <tr>
                    <td><b>Superficie</b></td>
                    @foreach ($cepa->actinomiceto->caractMacroscopicas as $caract)
                        <td>{{$caract->superficie->nombre}}</td>
                    @endforeach 
                </tr>
                <tr>
                    <td><b>Borde</b></td>
                    @foreach ($cepa->actinomiceto->caractMacroscopicas as $caract)
                        <td>{{$caract->borde->nombre}}</td>
                    @endforeach 
                </tr>
                <tr>
                    <td><b>Pigmento</b></td>
                    @foreach ($cepa->actinomiceto->caractMacroscopicas as $caract)
                        <td>{{$caract->pigmento->nombre}}</td>
                    @endforeach 
                </tr>
                <tr>
                    <td><b>Secreción de Geosminas</b></td>
                    @foreach ($cepa->actinomiceto->caractMacroscopicas as $caract)
                        <td>{{$caract->secrecion_geosminas}}</td>
                    @endforeach 
                </tr>
                <tr>
                    <td colspan="{{$cantidad+1}}" style="text-align: center">
                        @foreach ($cepa->actinomiceto->caractMacroscopicas as $caract)
                        <b>{{$caract->medio}}</b>
                        <img id="redondear" width="150px" height="150px" src="{{public_path($caract->imagenPublica)}}" 
                                style="padding-top: 25px;padding-right: 15px"/>     
                        @endforeach         
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="nueva-pagina"></div>
    @endif
@endif
@if(!is_null($cepa->actinomiceto->caractMicroscopica))
    @if (in_array('todo',$imprimir)||in_array('caract-micro',$imprimir))
    <div class="div-caract-micro">
        <table class="table tabla-caract-micro">
            <tbody>
                <tr>
                    <td colspan="2" class="thead-caract-micro"><b>Características Microscópicas</b></td>
                </tr>
                <tr>
                    <td><b>Tinción de Gram</b></td>
                    <td>{{$cepa->actinomiceto->caractMicroscopica->tincionGram->nombre}}</td>
                </tr>
                <tr>
                    <td><b>Forma</b></td>
                    <td>{{$cepa->actinomiceto->caractMicroscopica->forma->nombre}}</td>
                </tr>
                <tr>
                    <td><b>Micelío</b></td>
                    <td>{{$cepa->actinomiceto->caractMicroscopica->micelio->nombre}}</td>
                </tr>
                <tr>
                    <td><b>Conidióforo</b></td>
                    <td>{{$cepa->actinomiceto->caractMicroscopica->conidioforo->nombre}}</td>
                </tr>
                <tr>
                    <td><b>Forma Estructura de Reproducción</b></td>
                    <td>{{$cepa->actinomiceto->caractMicroscopica->forma_estructura_reproduccion}}</td>
                </tr>
                <tr>
                    <td colspan="2" style="text-align: center">
                        @if ($cepa->actinomiceto->caractMicroscopica->imagenPublica1) 
                            <img id="redondear" width="150px" height="150px" src="{{public_path($cepa->actinomiceto->caractMicroscopica->imagenPublica1)}}" 
                            style="padding-top: 25px;padding-right: 60px"/>
                        @endif
                        @if ($cepa->actinomiceto->caractMicroscopica->imagenPublica2) 
                            <img id="redondear" width="150px" height="150px" src="{{public_path($cepa->actinomiceto->caractMicroscopica->imagenPublica2)}}" 
                            style="padding-top: 25px;padding-right: 60px"/>
                        @endif
                        @if ($cepa->actinomiceto->caractMicroscopica->imagenPublica3) 
                            <img id="redondear" width="150px" height="150px" src="{{public_path($cepa->actinomiceto->caractMicroscopica->imagenPublica3)}}" 
                            style="padding-top: 25px"/>
                        @endif    
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="nueva-pagina"></div>
    @endif
@endif
@if(!is_null($cepa->actinomiceto->identBioquimica))
    @if (in_array('todo',$imprimir)||in_array('identi-bioqui',$imprimir))
    @php
        $rowFer=2;
        if(!is_null($cepa->actinomiceto->identBioquimica->fer_otro)){
            $rowFer++;
        }
    @endphp
    <div class="div-identi-bioqui">
        <table class="table tabla-identi-bioqui">
            <tbody>
                <tr>
                    <td colspan="5" class="thead-identi-bioqui"><b>Identificaciones Bioquímicas</b></td>
                </tr>
                <tr>
                    <td colspan="2"><b>Oxidasa</b></td>
                    <td>{{$cepa->actinomiceto->identBioquimica->oxidasa}}</td>
                    <td><b>Caseina</b></td>
                    <td>{{$cepa->actinomiceto->identBioquimica->caseina}}</td>
                </tr>
                <tr>
                    <td colspan="2"><b>Nitratos</b></td>
                    <td>{{$cepa->actinomiceto->identBioquimica->nitrato}}</td>
                    <td><b>Catalasa</b></td>
                    <td>{{$cepa->actinomiceto->identBioquimica->catalasa}}</td>
                </tr>
                <tr>
                    <td colspan="2"><b>Hidrolisís de la Úrea</b></td>
                    <td>{{$cepa->actinomiceto->identBioquimica->hidro_urea}}</td>
                    <td><b>Citrato</b></td>
                    <td>{{$cepa->actinomiceto->identBioquimica->citrato}}</td>                   
                </tr>
                <tr>
                    <td colspan="2"><b>Hidrolisís de la Gelatina</b></td>
                    <td colspan="3">{{$cepa->actinomiceto->identBioquimica->hidro_gelatina}}</td>
                </tr>
                <tr>
                    <td colspan="2"><b>Sensibilidad a Antibióticos</b></td>
                    <td colspan="3">{{$cepa->actinomiceto->identBioquimica->sensi_antibioticos}}</td>
                </tr>
                <tr>
                    <td rowspan="{{$rowFer}}" style="text-align: center;padding-top: 10px"><b>Fermentación</b></td>
                    <td><b>Lactosa</b></td>
                    <td>{{$cepa->actinomiceto->identBioquimica->fer_lactosa}}</td>
                    <td><b>Manitol</b></td>
                    <td>{{$cepa->actinomiceto->identBioquimica->fer_manitol}}</td>
                </tr>
                <tr>
                    <td><b>Inositol</b></td>
                    <td>{{$cepa->actinomiceto->identBioquimica->fer_inositol}}</td>
                    <td><b>Sacarosa</b></td>
                    <td>{{$cepa->actinomiceto->identBioquimica->fer_sacarosa}}</td>
                </tr>
                @if ($rowFer==3)
                    <tr>
                        <td><b>Otros Azúcares</b></td>
                        <td colspan="3">{{$cepa->actinomiceto->identBioquimica->fer_otro}}</td>
                    </tr>
                @endif
                <tr>
                    <td colspan="5" style="text-align: center">
                        @if ($cepa->actinomiceto->identBioquimica->imagenPublica1) 
                            <img id="redondear" width="150px" height="150px" src="{{public_path($cepa->actinomiceto->identBioquimica->imagenPublica1)}}" 
                            style="padding-top: 25px;padding-right: 60px"/>
                        @endif
                        @if ($cepa->actinomiceto->identBioquimica->imagenPublica2) 
                            <img id="redondear" width="150px" height="150px" src="{{public_path($cepa->actinomiceto->identBioquimica->imagenPublica2)}}" 
                            style="padding-top: 25px;padding-right: 60px"/>
                        @endif
                        @if ($cepa->actinomiceto->identBioquimica->imagenPublica3) 
                            <img id="redondear" width="150px" height="150px" src="{{public_path($cepa->actinomiceto->identBioquimica->imagenPublica3)}}" 
                                style="padding-top: 25px"/>
                        @endif    
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="nueva-pagina"></div>
    @endif
@endif
@if(!is_null($cepa->actinomiceto->otrasCaracteristicas))
    @if (in_array('todo',$imprimir)||in_array('otras-caract',$imprimir))
    <div class="div-otras-caract">
        <table class="table tabla-otras-caract">
            <tbody>
                <tr>
                    <td colspan="2" class="thead-otras-caract"><b>Otras Características</b></td>
                </tr>
                <tr>
                    <td><b>Fijación Nitrogeno</b></td>
                    <td>{{$cepa->actinomiceto->otrasCaracteristicas->fijacion_nitrogeno}}</td>
                </tr>
                <tr>
                    <td><b>Producción AIA</b></td>
                    <td>{{$cepa->actinomiceto->otrasCaracteristicas->produccion_aia}}</td>
                </tr>
                <tr>
                    <td><b>Giberelinas</b></td>
                    <td>{{$cepa->actinomiceto->otrasCaracteristicas->giberelinas}}</td>
                </tr>
                <tr>
                    <td><b>Producción Sideróforos</b></td>
                    <td>{{$cepa->actinomiceto->otrasCaracteristicas->produccion_sideroforos}}</td>
                </tr> 
                <tr>
                    <td><b>Solubilización de Fósforo</b></td>
                    <td>{{$cepa->actinomiceto->otrasCaracteristicas->solubili_fosforo}}</td>
                </tr>
                <tr>
                    <td><b>Producción PHA</b></td>
                    <td>{{$cepa->actinomiceto->otrasCaracteristicas->produccion_pha}}</td>
                </tr>
                <tr>
                    <td><b>Alta Producción De Antibióticos</b></td>
                    <td>{{$cepa->actinomiceto->otrasCaracteristicas->alta_produc_antibioticos}}</td>
                </tr>
                <tr>
                    <td><b>Actividades Enzimáticas</b></td>
                    <td>{{$cepa->actinomiceto->otrasCaracteristicas->activi_enzimaticas}}</td>
                </tr>
                <tr>
                    <td><b>Antagonismos</b></td>
                    <td>{{$cepa->actinomiceto->otrasCaracteristicas->antagonismos}}</td>
                </tr>
                <tr>
                    <td colspan="2" style="text-align: center">
                        @if ($cepa->actinomiceto->otrasCaracteristicas->imagenPublica1) 
                            <img  id="redondear"width="150px" height="150px" src="{{public_path($cepa->actinomiceto->otrasCaracteristicas->imagenPublica1)}}" 
                            style="padding-top: 25px;padding-right: 60px"/>
                        @endif
                        @if ($cepa->actinomiceto->otrasCaracteristicas->imagenPublica2) 
                            <img id="redondear" width="150px" height="150px" src="{{public_path($cepa->actinomiceto->otrasCaracteristicas->imagenPublica2)}}" 
                            style="padding-top: 25px;padding-right: 60px"/>
                        @endif
                        @if ($cepa->actinomiceto->otrasCaracteristicas->imagenPublica3) 
                            <img id="redondear" width="150px" height="150px" src="{{public_path($cepa->actinomiceto->otrasCaracteristicas->imagenPublica3)}}" 
                                style="padding-top: 25px"/>
                        @endif    
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    @endif
@endif
@endsection