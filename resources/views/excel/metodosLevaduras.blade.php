<table>
    <thead>
        <tr>
            <th colspan="7"><b>METODOS DE CONSERVACIÓN LEVADURAS</b></th>
        </tr>
        <tr>
            <th><b>Tipo de Método</b></th>
            <th><b>Número de Replicas</b></th>
            <th><b>Recuento Microgota</b></th>
            <th><b>Medio de Cultivo</b></th>
            <th><b>Número de Pases</b></th>
            <th><b>Fecha</b></th>
            <th><b>Imagen</b></th>
        </tr>
    </thead>
    <tbody>
    @foreach($metodosLevaduras as $metodo)
        <tr>
            <td>{{ $metodo->tipoMetodo->nombre }}</td>
            <td>
                @if ($metodo->numero_replicas==0)
                    No Aplica
                @else
                    {{$metodo->numero_replicas}}
                @endif
            </td>
            <td>
                @if (is_null($metodo->recuento_microgota))
                    No Aplica
                @else
                    {{$metodo->recuento_microgota}}
                @endif
            </td>
            <td>
                @if (is_null($metodo->medio_cultivo))
                    No Aplica
                @else
                    {{$metodo->medio_cultivo}}
                @endif
            </td>
            <td>
                @if ($metodo->numero_pases==0)
                    No Aplica
                @else
                    {{$metodo->numero_pases}}
                @endif
            </td>
            <td>{{ $metodo->fecha }}</td>
            <td><img src="{{public_path($metodo->imagenPublica)}}" width="100px"  height="100px"></td>
        </tr>
    @endforeach
    </tbody>
</table>