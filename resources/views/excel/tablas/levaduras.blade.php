<table>
    <thead>
        <tr>
            <th colspan="10"><b>LEVADURAS</b></th>
        </tr>
        <tr>
            <th><b>Codigo</b></th>
            <th><b>Género</b></th>
            <th><b>Especie</b></th>
            <th><b>Division</b></th>
            <th><b>Clase</b></th>
            <th><b>Orden</b></th>
            <th><b>Familia</b></th>
            <th><b>Estado</b></th>
            <th><b>Origen</b></th>
            <th><b>Publicar</b></th>
        </tr>
    </thead>
    <tbody>
        @foreach($datos as $dato)
        <tr>
            <td>{{ $dato['codigo'] }}</td>
            <td>{{ $dato['nombre_genero'] }}</td>
            <td>{{ $dato['nombre_especie'] }}</td>
            <td>{{ $dato['nombre_division'] }}</td>
            <td>{{ $dato['nombre_clase'] }}</td>
            <td>{{ $dato['nombre_orden'] }}</td>
            <td>{{ $dato['nombre_familia'] }}</td>
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