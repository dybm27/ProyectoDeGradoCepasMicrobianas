<table>
    <thead>
        <tr>
            <th colspan="4"><b>Generos Cepas</b></th>
        </tr>
        <tr>
            <th  colspan="2"><b>Nombre</b></th>
            <th  colspan="2"><b>Grupo Microbiano</b></th>
        </tr>
    </thead>
    <tbody>
        @foreach($datos as $dato)
            <tr>
                <td  colspan="2">{{ $dato['nombre'] }}</td>
                <td  colspan="2">{{ $dato['nombre_grupo'] }}</td>
            </tr>
        @endforeach
    </tbody>
</table>