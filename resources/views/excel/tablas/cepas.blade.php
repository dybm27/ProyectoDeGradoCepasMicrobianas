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
        <tr>
            <td>{{ $dato['codigo'] }}</td>
            <td>{{ $dato['nombre_grupo'] }}</td>
            <td>{{ $dato['nombre_genero'] }}</td>
            <td>{{ $dato['nombre_especie'] }}</td>
            <td>{{ $dato['estado'] }}</td>
            <td>{{ $dato['origen'] }}</td>
            <td>
                @if ($dato['publicar']==1)
                    Si
                @else
                    No
                @endif
            </td>
        </tr>
    @endforeach
    </tbody>
</table>  