<table>
    <thead>
        <tr>
            <th colspan="6"><b>METODOS DE CONSERVACIÓN HONGOS</b></th>
        </tr>
        <tr>
            <th><b>Tipo de Método</b></th>
            <th><b>Número de Replicas</b></th>
            <th><b>Recuento Microgota</b></th>
            <th><b>Medio de Cultivo</b></th>
            <th><b>Número de Pases</b></th>
            <th><b>Fecha</b></th>
        </tr>
    </thead>
    <tbody>
    @foreach($datos as $dato)
        @php
            $datoDecodificado= json_decode($dato);
        @endphp
        <tr>
            <td>{{ $datoDecodificado->nombre_tipo_metodo }}</td>
            <td>
                @if ($datoDecodificado->numero_replicas==0)
                    No Aplica
                @else
                    {{$datoDecodificado->numero_replicas}}
                @endif
            </td>
            <td>
                @if (is_null($datoDecodificado->recuento_microgota))
                    No Aplica
                @else
                    {{$datoDecodificado->recuento_microgota}}
                @endif
            </td>
            <td>
                @if (is_null($datoDecodificado->medio_cultivo))
                    No Aplica
                @else
                    {{$datoDecodificado->medio_cultivo}}
                @endif
            </td>
            <td>
                @if ($datoDecodificado->numero_pases==0)
                    No Aplica
                @else
                    {{$datoDecodificado->numero_pases}}
                @endif
            </td>
            <td>
                @php
                    $fecha=date('d-m-Y', strtotime($datoDecodificado->fecha))
                @endphp
                {{$fecha}}
            </td>
        </tr>
    @endforeach
    </tbody>
</table>