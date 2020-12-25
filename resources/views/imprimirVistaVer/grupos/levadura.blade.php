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
                    <td><b>Clase:</b> {{$cepa->levadura->clase->nombre}}</td>
                    <td><b>Orden:</b> {{$cepa->levadura->orden->nombre}}</td>
                </tr>
                <tr>
                    <td><b>Familia:</b> {{$cepa->levadura->familia->nombre}}</td>
                    <td><b>Division:</b> {{$cepa->levadura->division->nombre}}</td>
                </tr>
                <tr>
                    <td><b>Estado:</b> {{$cepa->estado}}</td>
                    <td><b>Origen:</b> {{$cepa->origen}}</td>
                </tr>
            </tbody>
        </table>
    </div>
@endif
@if(count($cepa->levadura->caractMacroscopicas))
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
                @foreach ($cepa->levadura->caractMacroscopicas as $caract)
                    <td class="thead-caract-macro"><b>{{$caract->medio}}</b></td>
                @endforeach       
                </tr>
                <tr>
                    <td><b>Color</b></td>
                    @foreach ($cepa->levadura->caractMacroscopicas as $caract)
                        <td>{{$caract->color->nombre}}</td>
                    @endforeach 
                </tr>
                <tr>
                    <td><b>Textura</b></td>
                    @foreach ($cepa->levadura->caractMacroscopicas as $caract)
                        <td>{{$caract->textura->nombre}}</td>
                    @endforeach 
                </tr>
                <tr>
                    <td><b>Topografía de la Superficie</b></td>
                    @foreach ($cepa->levadura->caractMacroscopicas as $caract)
                        <td>{{$caract->topografia_superficie}}</td>
                    @endforeach 
                </tr>
                <tr>
                    <td><b>Borde de la Colonia</b></td>
                    @foreach ($cepa->levadura->caractMacroscopicas as $caract)
                        <td>{{$caract->borde_colonia}}</td>
                    @endforeach 
                </tr> 
                <tr>
                    <td colspan="{{$cantidad+1}}" style="text-align: center">
                        @foreach ($cepa->levadura->caractMacroscopicas as $caract)
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
@if(!is_null($cepa->levadura->caractMicroscopica))
    @if (in_array('todo',$imprimir)||in_array('caract-micro',$imprimir))
    <div class="div-caract-micro">
        <table class="table tabla-caract-micro">
            <tbody>
                <tr>
                    <td colspan="4" class="thead-caract-micro"><b>Características Microscópicas</b></td>
                </tr>
                <tr>
                    <td><b>Hifas</b></td>
                    <td>{{$cepa->levadura->caractMicroscopica->hifas}}</td>
                    <td><b>Cápsula</b></td>
                    <td>{{$cepa->levadura->caractMicroscopica->capsula}}</td>
                </tr>
                <tr>
                    <td><b>Balistoconidias</b></td>
                    <td>{{$cepa->levadura->caractMicroscopica->balistoconidias}}</td>
                    <td><b>Artroconidias</b></td>
                    <td>{{$cepa->levadura->caractMicroscopica->artroconidias}}</td>
                </tr>
                <tr>
                    <td><b>Pseudohifas</b></td>
                    <td>{{$cepa->levadura->caractMicroscopica->pseudohifas}}</td>
                    <td><b>Blastoconidias</b></td>
                    <td>{{$cepa->levadura->caractMicroscopica->blastoconidias}}</td>
                </tr>
                <tr>
                    <td><b>Producción de Clamidosporas</b></td>
                    <td>{{$cepa->levadura->caractMicroscopica->produccion_clamidosporas}}</td>
                    <td><b>Inducción de Filamentización</b></td>
                    <td>{{$cepa->levadura->caractMicroscopica->induccion_filamentizacion}}</td>
                </tr>
                <tr>
                    <td><b>Producción de Tubo Germinativo</b></td>
                    <td>{{$cepa->levadura->caractMicroscopica->produccion_tubo_germinativo}}</td>
                    <td><b>Formación de Asco y Ascosporas</b></td>
                    <td>{{$cepa->levadura->caractMicroscopica->formacion_asco_y_ascosporas}}</td>
                </tr>
                <tr>
                    <td colspan="4" style="text-align: center">
                        @if ($cepa->levadura->caractMicroscopica->imagenPublica1) 
                            <img id="redondear" width="150px" height="150px" src="{{public_path($cepa->levadura->caractMicroscopica->imagenPublica1)}}" 
                            style="padding-top: 25px;padding-right: 60px"/>
                        @endif
                        @if ($cepa->levadura->caractMicroscopica->imagenPublica2) 
                            <img id="redondear" width="150px" height="150px" src="{{public_path($cepa->levadura->caractMicroscopica->imagenPublica2)}}" 
                            style="padding-top: 25px;padding-right: 60px"/>
                        @endif
                        @if ($cepa->levadura->caractMicroscopica->imagenPublica3) 
                            <img id="redondear" width="150px" height="150px" src="{{public_path($cepa->levadura->caractMicroscopica->imagenPublica3)}}" 
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
@if(!is_null($cepa->levadura->caractBioquimica))
    @if (in_array('todo',$imprimir)||in_array('caract-bioqui',$imprimir))
        @php
            $rowTermo = 0;
            if($cepa->levadura->caractBioquimica->termotolerancia_37){
                $rowTermo++;
            }
            if($cepa->levadura->caractBioquimica->termotolerancia_42){
                $rowTermo++;
            }
            if($cepa->levadura->caractBioquimica->termotolerancia_45){
                $rowTermo++;
            }
            if($cepa->levadura->caractBioquimica->termotolerancia_otra){
                $rowTermo++;
            }
        @endphp
        <div class="div-caract-bioqui">
            <table class="table tabla-caract-bioqui">
                <tbody>
                    <tr>
                        <td colspan="4" class="thead-caract-bioqui"><b>Características Bioquímicas</b></td>
                    </tr>
                    <tr>
                        <td><b>Ureasa</b></td>
                        <td>{{$cepa->levadura->caractBioquimica->ureasa}}</td>
                        <td><b>Fenol Oxidasa</b></td>
                        <td>{{$cepa->levadura->caractBioquimica->fenol_oxidasa}}</td>
                    </tr>
                    <tr>
                        <td><b>Crecimineto</b></td>
                        <td>{{$cepa->levadura->caractBioquimica->crecimiento}}</td>
                        <td><b>Nitratos</b></td>
                        <td>{{$cepa->levadura->caractBioquimica->nitratos}}</td>
                    </tr>
                    <tr>
                        <td rowspan="{{$rowTermo}}" style="text-align: center"><b>Termotolerancia</b></td>
                        @if($cepa->levadura->caractBioquimica->termotolerancia_37)
                            <td><b>37°C</b></td>
                            <td colspan="2">{{$cepa->levadura->caractBioquimica->termotolerancia_37}}</td>
                        @elseif($cepa->levadura->caractBioquimica->termotolerancia_42)
                            <td><b>42°C</b></td>
                            <td colspan="2">{{$cepa->levadura->caractBioquimica->termotolerancia_42}}</td>
                        @elseif($cepa->levadura->caractBioquimica->termotolerancia_45)
                            <td><b>45°C</b></td>
                            <td colspan="2">{{$cepa->levadura->caractBioquimica->termotolerancia_45}}</td>
                        @else
                            <td><b>otra°</b></td>
                            <td colspan="2">{{$cepa->levadura->caractBioquimica->termotolerancia_otra}}</td>
                        @endif
                    </tr>
                    @if($cepa->levadura->caractBioquimica->termotolerancia_42&&$cepa->levadura->caractBioquimica->termotolerancia_37&&$rowTermo > 1 )
                        <tr>
                            <td><b>42°C</b></td>
                            <td colspan="2">{{$cepa->levadura->caractBioquimica->termotolerancia_42}}</td>
                        </tr>
                    @endif
                    @if($cepa->levadura->caractBioquimica->termotolerancia_45&&$rowTermo > 1 &&
                    ($cepa->levadura->caractBioquimica->termotolerancia_42 ||
                      $cepa->levadura->caractBioquimica->termotolerancia_37))
                        <tr>
                            <td><b>45°C</b></td>
                            <td colspan="2">{{$cepa->levadura->caractBioquimica->termotolerancia_45}}</td>
                        </tr>
                    @endif
                    @if($cepa->levadura->caractBioquimica->termotolerancia_otra&&$rowTermo>1)
                        <tr>
                            <td><b>otra°</b></td>
                            <td colspan="2">{{$cepa->levadura->caractBioquimica->termotolerancia_otra}}</td>
                        </tr>
                    @endif
                    <tr>
                        <td><b>Producción de ácido a partir de algunos azúcares</b></td>
                        <td colspan="3">{{$cepa->levadura->caractBioquimica->produccion_acido}}</td>
                    </tr>
                    <tr>
                        <td colspan="4" style="text-align: center">
                            @if ($cepa->levadura->caractBioquimica->imagenPublica1) 
                                <img id="redondear" width="150px" height="150px" src="{{public_path($cepa->levadura->caractBioquimica->imagenPublica1)}}" 
                                style="padding-top: 25px;padding-right: 60px"/>
                            @endif
                            @if ($cepa->levadura->caractBioquimica->imagenPublica2) 
                                <img id="redondear" width="150px" height="150px" src="{{public_path($cepa->levadura->caractBioquimica->imagenPublica2)}}" 
                                style="padding-top: 25px;padding-right: 60px"/>
                            @endif
                            @if ($cepa->levadura->caractBioquimica->imagenPublica3) 
                                <img id="redondear" width="150px" height="150px" src="{{public_path($cepa->levadura->caractBioquimica->imagenPublica3)}}" 
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
@if(!is_null($cepa->levadura->identMolecular))
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
                    <td><b>F </b>{{$cepa->levadura->identMolecular->nombre_forward}}</td>
                    <td>{{$cepa->levadura->identMolecular->secuencia_forward}}</td>
                    <td>{{$cepa->levadura->identMolecular->producto_forward}}</td>
                    <td>{{$cepa->genero->nombre.' '.$cepa->especie->nombre}}</td>
                </tr>
                <tr>
                    <td><b>R </b>{{$cepa->levadura->identMolecular->nombre_reversed}}</td>
                    <td>{{$cepa->levadura->identMolecular->secuencia_reversed}}</td>
                    <td>{{$cepa->levadura->identMolecular->producto_reversed}}</td>
                    <td>{{$cepa->genero->nombre.' '.$cepa->especie->nombre}}</td>
                </tr>
                <tr>
                    <td colspan="2">
                        <b>Condiciones PCR</b>
                    </td>
                    <td colspan="3">
                        {{$cepa->levadura->identMolecular->condiciones_pcr}}
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <b>BLAST</b>
                    </td>
                    <td colspan="3">
                        {{$cepa->levadura->identMolecular->blast}}
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <b>Análisis Filogenético</b>
                    </td>
                    <td colspan="3">
                        {{$cepa->levadura->identMolecular->analisis_filogenetico}}
                    </td>
                </tr>
                @if ($cepa->levadura->identMolecular->observaciones)
                    <tr>
                        <td colspan="2">
                            <b>Observaciones</b>
                        </td>
                        <td colspan="3">
                            {{$cepa->levadura->identMolecular->observaciones}}
                        </td>
                    </tr> 
                @endif
                <tr>
                    <td colspan="2" style="text-align: center">
                        <b>Imagen PCR</b>
                        <div>
                            <img id="redondear" width="150px" height="150px" src="{{public_path($cepa->levadura->identMolecular->imagen_pcrPublica)}}" 
                            style="padding-top: 30px"/>
                        </div>
                    </td>
                    <td colspan="3" style="text-align: center">
                        <div>
                            <b>Imagen Blast</b>
                        </div>
                        <div>
                            <img id="redondear" width="250px" height="150px" src="{{public_path($cepa->levadura->identMolecular->imagen_blastPublica)}}" 
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
@if(count($cepa->levadura->metodosConservacion))
    @if (in_array('todo',$imprimir)||in_array('metodo-conser',$imprimir))
    <div class="div-metodos-conser">
        <table class="table tabla-metodos-conser">
            <tbody>
                <tr>
                    <td colspan="5" class="thead-metodos-conser"><b>Métodos De Conservación</b></td>
                </tr>
                @foreach ($cepa->levadura->metodosConservacion as $metodo)
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