<table>
    <thead>
        <tr>
            <th colspan="7"><b>CEPAS</b></th>
        </tr>
        <tr>
            <th><b>Codigo</b></th>
            <th><b>Grupo Microbiano</b></th>
            <th><b>Género</b></th>
            <th><b>Especie</b></th>
            <th><b>Estado</b></th>
            <th><b>Origen</b></th>
            <th><b>Publicar</b></th>
        </tr>
    </thead>
    <tbody>
    @foreach($datos as $dato)
        @php
        $datoDecodificado= json_decode($dato);
        @endphp
        <tr>
            <td>{{ $datoDecodificado->codigo }}</td>
            <td>{{ $datoDecodificado->nombre_grupo }}</td>
            <td>{{ $datoDecodificado->nombre_genero }}</td>
            <td>{{ $datoDecodificado->nombre_especie }}</td>
            <td>{{ $datoDecodificado->estado }}</td>
            <td>{{ $datoDecodificado->origen }}</td>
            <td>
                @if ($datoDecodificado->publicar==1)
                    Si
                @else
                    No
                @endif
            </td>
        </tr>
    @endforeach
    </tbody>
</table>  