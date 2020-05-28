<table>
    <thead>
        <tr>
            <th colspan="6"><b>METODOS DE CONSERVACIÓN BACTERIAS</b></th>
        </tr>
        <tr>
            <th><b>Tipo de Método</b></th>
            <th><b>Tipo Agar</b></th>
            <th><b>Número de Replicas</b></th>
            <th><b>Recuento Microgota</b></th>
            <th><b>Fecha</b></th>
            <th><b>Imagen</b></th>
        </tr>
    </thead>
    <tbody>
    @foreach($metodosActinomicetos as $metodo)
        <tr>
            <td>{{ $metodo->tipoMetodo->nombre }}</td>
            <td>
                @if ($metodo->tipoAgar->nombre=='No')
                    No Aplica
                @else
                    {{$metodo->tipoAgar->nombre}}
                @endif
            </td>
            <td>{{ $metodo->numero_replicas }}</td>
            <td>{{ $metodo->recuento_microgota }}</td>
            <td>{{ $metodo->fecha }}</td>
            <td><img src="{{public_path($metodo->imagenPublica)}}" width="100px"  height="100px"></td>
        </tr>
    @endforeach
    </tbody>
</table>