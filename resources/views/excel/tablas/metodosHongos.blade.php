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
        <tr>
            <td>{{ $dato['nombre_tipo_metodo'] }}</td>
            <td>
                @if ($dato['numero_replicas']==0)
                    No Aplica
                @else
                    {{$dato['numero_replicas']}}
                @endif
            </td>
            <td>
                @if (is_null($dato['recuento_microgota']))
                    No Aplica
                @else
                    {{$dato['recuento_microgota']}}
                @endif
            </td>
            <td>
                @if (is_null($dato['medio_cultivo']))
                    No Aplica
                @else
                    {{$dato['medio_cultivo']}}
                @endif
            </td>
            <td>
                @if ($dato['numero_pases']==0)
                    No Aplica
                @else
                    {{$dato['numero_pases']}}
                @endif
            </td>
            <td>
                @php
                    $fecha=date('d-m-Y', strtotime($dato['fecha']))
                @endphp
                {{$fecha}}
            </td>
        </tr>
    @endforeach
    </tbody>
</table>