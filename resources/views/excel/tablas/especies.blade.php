<table>
    <thead>
        <tr>
            <th colspan="4"><b>Especies Cepas</b></th>
        </tr>
        <tr>
            <th  colspan="2"><b>Nombre</b></th>
            <th  colspan="2"><b>Genero</b></th>
        </tr>
    </thead>
    <tbody>
        @foreach($datos as $dato)
            <tr>
                <td  colspan="2">{{ $dato['nombre'] }}</td>
                <td  colspan="2">{{ $dato['nombre_genero'] }}</td>
            </tr>
        @endforeach
    </tbody>
</table>