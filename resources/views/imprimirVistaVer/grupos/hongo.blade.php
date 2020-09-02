@extends('imprimirVistaVer.layout')

@section('contenido-pdf')
@if (in_array('todo',$imprimir)||in_array('cepa',$imprimir))
    <div class="div-cepa">
        <table class="table tabla-cepa">
            <thead>
                <tr>
                    <th colspan="2">Cepa Microbiana</th>
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
                    <td><b>Clase:</b> {{$cepa->hongo->clase->nombre}}</td>
                    <td><b>Orden:</b> {{$cepa->hongo->orden->nombre}}</td>
                </tr>
                <tr>
                    <td><b>Familia:</b> {{$cepa->hongo->familia->nombre}}</td>
                    <td><b>Phylum:</b> {{$cepa->hongo->phylum->nombre}}</td>
                </tr>
                <tr>
                    <td><b>Estado:</b> {{$cepa->estado}}</td>
                    <td><b>Origen:</b> {{$cepa->origen}}</td>
                </tr>
            </tbody>
        </table>
    </div>
@endif
@if(count($cepa->hongo->caractMacroscopicas))
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
                    @foreach ($cepa->hongo->caractMacroscopicas as $caract)
                        <td class="thead-caract-macro"><b>{{$caract->medio}}</b></td>
                    @endforeach       
                </tr>
                <tr>
                    <td><b>Color</b></td>
                    @foreach ($cepa->hongo->caractMacroscopicas as $caract)
                        <td>{{$caract->color->nombre}}</td>
                    @endforeach 
                </tr>
                <tr>
                    <td><b>Textura</b></td>
                    @foreach ($cepa->hongo->caractMacroscopicas as $caract)
                        <td>{{$caract->textura->nombre}}</td>
                    @endforeach 
                </tr>
                <tr>
                    <td><b>Características del reverso</b></td>
                    @foreach ($cepa->hongo->caractMacroscopicas as $caract)
                        <td>{{$caract->caracteristicas_reverso}}</td>
                    @endforeach 
                </tr>
                <tr>
                    <td colspan="{{$cantidad+1}}" style="text-align: center">
                        @foreach ($cepa->hongo->caractMacroscopicas as $caract)
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
@if(!is_null($cepa->hongo->caractMicroscopica))
    @if (in_array('todo',$imprimir)||in_array('caract-micro',$imprimir))
    <div class="div-caract-micro">
        <table class="table tabla-caract-micro">
            <tbody>
                <tr>
                    <td colspan="2" class="thead-caract-micro"><b>Características Microscópicas</b></td>
                </tr>
                <tr>
                    <td><b>Conidióforo</b></td>
                    <td>{{$cepa->hongo->caractMicroscopica->conidioforo->nombre}}</td>
                </tr>
                <tr>
                    <td><b>Fiálides</b></td>
                    <td>{{$cepa->hongo->caractMicroscopica->fialides}}</td>
                </tr>
                @if ($cepa->hongo->caractMicroscopica->fialides=='Presencia')
                    <tr>
                        <td><b>Forma Fiálides</b></td>
                        <td>{{$cepa->hongo->caractMicroscopica->fialides_forma}}</td>
                    </tr>
                    @if($cepa->hongo->caractMicroscopica->fialides_otra_caracteristica)
                        <tr>
                            <td><b>Otras características Fiálides</b></td>
                            <td>{{$cepa->hongo->caractMicroscopica->fialides_otra_caracteristica}}</td>
                        </tr>
                    @endif
                @endif
                <tr>
                    <td><b>Vesícula</b></td>
                    <td>{{$cepa->hongo->caractMicroscopica->vesicula}}</td>
                </tr>
                <tr>
                    <td><b>Espora Asexual</b></td>
                    <td>{{$cepa->hongo->caractMicroscopica->esporaAsexual->nombre}}</td>
                </tr>
                @if ($cepa->hongo->caractMicroscopica->espora_asexual_id==2)
                    <tr>
                        <td><b>Tamaño Conidiosporas</b></td>
                        <td>{{$cepa->hongo->caractMicroscopica->esporas_asexuales_conidios_tamano}}</td>
                    </tr>
                    <tr>
                        <td><b>Color Conidiosporas</b></td>
                        <td>{{$cepa->hongo->caractMicroscopica->esporas_asexuales_conidios_color}}</td>
                    </tr>
                    <tr>
                        <td><b>Forma Conidiosporas</b></td>
                        <td>{{$cepa->hongo->caractMicroscopica->esporas_asexuales_conidios_forma}}</td>
                    </tr>
                    @if ($cepa->hongo->caractMicroscopica->esporas_asexuales_conidios_otras)
                        <tr>
                            <td><b>Otras características Conidiosporas</b></td>
                            <td>{{$cepa->hongo->caractMicroscopica->esporas_asexuales_conidios_otras}}</td>
                        </tr>
                    @endif
                @endif
                <tr>
                    <td><b>Espora Sexual</b></td>
                    <td>{{$cepa->hongo->caractMicroscopica->esporaSexual->nombre}}</td>
                </tr>
                @if ($cepa->hongo->caractMicroscopica->otras_estructuras)
                    <tr>
                        <td><b>Otras estructuras</b></td>
                        <td>{{$cepa->hongo->caractMicroscopica->otras_estructuras}}</td>
                    </tr>
                @endif
                <tr>
                    <td colspan="2" style="text-align: center">
                        @if ($cepa->hongo->caractMicroscopica->imagenPublica1) 
                            <img id="redondear" width="150px" height="150px" src="{{public_path($cepa->hongo->caractMicroscopica->imagenPublica1)}}" 
                            style="padding-top: 25px;padding-right: 60px"/>
                        @endif
                        @if ($cepa->hongo->caractMicroscopica->imagenPublica2) 
                            <img id="redondear" width="150px" height="150px" src="{{public_path($cepa->hongo->caractMicroscopica->imagenPublica2)}}" 
                            style="padding-top: 25px;padding-right: 60px"/>
                        @endif
                        @if ($cepa->hongo->caractMicroscopica->imagenPublica3) 
                            <img id="redondear" width="150px" height="150px" src="{{public_path($cepa->hongo->caractMicroscopica->imagenPublica3)}}" 
                                style="padding-top: 25px"/>
                        @endif    
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    @endif
@endif
@if(!is_null($cepa->hongo->caractBioquimica))
    @if (in_array('todo',$imprimir)||in_array('caract-bioqui',$imprimir))
    <div class="div-caract-bioqui">
        <table class="table tabla-caract-bioqui">
            <tbody>
                <tr>
                    <td colspan="2" class="thead-caract-bioqui"><b>Características Bioquímicas</b></td>
                </tr>
                <tr>
                    <td><b>Enzimas</b></td>
                    <td>{{$cepa->hongo->caractBioquimica->enzimas}}</td>
                </tr>
                <tr>
                    <td><b>Azúcares</b></td>
                    <td>{{$cepa->hongo->caractBioquimica->azucares}}</td>
                </tr>
                @if($cepa->hongo->caractBioquimica->otras_caracteristicas))
                    <tr>
                        <td><b>Otras Características</b></td>
                        <td>{{$cepa->hongo->caractBioquimica->otras_caracteristicas}}</td>
                    </tr>
                @endif
                <tr>
                    <td colspan="2" style="text-align: center">
                        @if ($cepa->hongo->caractBioquimica->imagenPublica1) 
                            <img id="redondear" width="150px" height="150px" src="{{public_path($cepa->hongo->caractBioquimica->imagenPublica1)}}" 
                                style="padding-top: 25px;padding-right: 60px"/>
                        @endif
                        @if ($cepa->hongo->caractBioquimica->imagenPublica2) 
                            <img id="redondear" width="150px" height="150px" src="{{public_path($cepa->hongo->caractBioquimica->imagenPublica2)}}" 
                                style="padding-top: 25px;padding-right: 60px"/>
                        @endif
                        @if ($cepa->hongo->caractBioquimica->imagenPublica3) 
                            <img id="redondear" width="150px" height="150px" src="{{public_path($cepa->hongo->caractBioquimica->imagenPublica3)}}" 
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
@if(!is_null($cepa->hongo->identMolecular))
    @if (in_array('todo',$imprimir)||in_array('identi-molecu',$imprimir))
    <div class="div-identi-molecu">
        <table class="table tabla-identi-molecu">
            <tbody>
                <tr>
                    <td colspan="5" class="thead-identi-molecu"><b>Identificación Molecular</b></td>
                </tr>
                <tr>
                    <td rowspan="3" class="thead-identi-molecu"  style="text-align: center;padding-top: 40px;padding-bottom: -40px"><b>PCR</b></td>
                    <td class="thead-identi-molecu"><b>Nombre</b></td>
                    <td class="thead-identi-molecu"><b>Secuencia</b></td>
                    <td class="thead-identi-molecu"><b>Producto</b></td>
                    <td class="thead-identi-molecu"><b>{{$cepa->grupoMicrobiano->nombre}}</b></td>
                </tr>
                <tr>
                    <td><b>F </b>{{$cepa->hongo->identMolecular->nombre_forward}}</td>
                    <td>{{$cepa->hongo->identMolecular->secuencia_forward}}</td>
                    <td>{{$cepa->hongo->identMolecular->producto_forward}}</td>
                    <td>{{$cepa->genero->nombre.' '.$cepa->especie->nombre}}</td>
                </tr>
                <tr>
                    <td><b>R </b>{{$cepa->hongo->identMolecular->nombre_reversed}}</td>
                    <td>{{$cepa->hongo->identMolecular->secuencia_reversed}}</td>
                    <td>{{$cepa->hongo->identMolecular->producto_reversed}}</td>
                    <td>{{$cepa->genero->nombre.' '.$cepa->especie->nombre}}</td>
                </tr>
                <tr>
                    <td colspan="2">
                        <b>Condiciones PCR</b>
                    </td>
                    <td colspan="3">
                        {{$cepa->hongo->identMolecular->condiciones_pcr}}
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <b>BLAST</b>
                    </td>
                    <td colspan="3">
                        {{$cepa->hongo->identMolecular->blast}}
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <b>Análisis Filogenético</b>
                    </td>
                    <td colspan="3">
                        {{$cepa->hongo->identMolecular->analisis_filogenetico}}
                    </td>
                </tr>
                @if ($cepa->hongo->identMolecular->observaciones)
                    <tr>
                        <td colspan="2">
                            <b>Observaciones</b>
                        </td>
                        <td colspan="3">
                            {{$cepa->hongo->identMolecular->observaciones}}
                        </td>
                    </tr> 
                @endif
                <tr>
                    <td colspan="2" style="text-align: center">
                        <b>Imagen PCR</b>
                        <div>
                            <img id="redondear" width="150px" height="150px" src="{{public_path($cepa->hongo->identMolecular->imagen_pcrPublica)}}" 
                            style="padding-top: 30px"/>
                        </div>
                    </td>
                    <td colspan="3" style="text-align: center">
                        <div>
                            <b>Imagen Blast</b>
                        </div>
                        <div>
                            <img id="redondear" width="250px" height="150px" src="{{public_path($cepa->hongo->identMolecular->imagen_blastPublica)}}" 
                            style="padding-top: 30px"/>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="nueva-pagina"></div>
    @endif
@endif
@if(count($cepa->hongo->metodosConservacion))
    @if (in_array('todo',$imprimir)||in_array('metodo-conser',$imprimir))
    <div class="div-metodos-conser">
        <table class="table tabla-metodos-conser">
            <tbody>
                <tr>
                    <td colspan="5" class="thead-metodos-conser"><b>Métodos De Conservación</b></td>
                </tr>
                @foreach ($cepa->hongo->metodosConservacion as $metodo)
                    <tr>
                        <td rowspan="2" style="text-align: center">
                            <div>
                                <img id="redondear" width="150px" height="150px" src="{{public_path($metodo->imagenPublica)}}" 
                                style="padding-top: 30px"/>
                            </div>
                        </td>        
                        <td><b>Tipo de Método</b></td>
                        <td>{{$metodo->tipoMetodo->nombre}}</td>
                        <td><b>Fecha</b></td>
                        <td>
                            @php
                                $fecha= date('d-M-Y', strtotime($metodo->fecha))
                            @endphp
                            {{$fecha}}
                        </td>        
                    </tr>
                    <tr>
                        @if ($metodo->tipo_id==3)
                            <td><b>Número de Pases</b></td>
                            <td>{{$metodo->numero_pases}}</td> 
                        @else
                            <td><b>Número de Réplicas</b></td>
                            <td>{{$metodo->numero_replicas}}</td>
                        @endif 
                        @if ($metodo->tipo_id==3||$metodo->tipo_id==2)
                            <td><b>Medio de Cultivo</b></td>
                            <td>{{$metodo->medio_cultivo}}</td>
                        @else
                            <td><b>Recuento Microgota</b></td>
                            <td>{{$metodo->recuento_microgota}}</td>
                        @endif 
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>
    @endif
@endif
@endsection