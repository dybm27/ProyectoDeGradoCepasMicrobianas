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
        @foreach($datos as $dato)
            @php
            $datoDecodificado= json_decode($dato);
            @endphp
            <tr>
                <td>{{ $datoDecodificado->nombre_tipo_metodo }}</td>
                <td>
                    @if ($datoDecodificado->nombre_tipo_agar=='No')
                        No Aplica
                    @else
                        {{$datoDecodificado->nombre_tipo_agar}}
                    @endif
                </td>
                <td>{{ $datoDecodificado->numero_replicas }}</td>
                <td>{{ $datoDecodificado->recuento_microgota }}</td>
                <td>{{ $datoDecodificado->fecha }}</td>
                <td><img src="{{public_path($datoDecodificado->imagenPublica)}}" width="100px"  height="100px"></td>
            </tr>
        @endforeach
    </tbody>
</table>