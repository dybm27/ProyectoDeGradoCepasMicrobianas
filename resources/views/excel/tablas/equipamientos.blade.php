<table>
    <thead>
        <tr>
            <th colspan="3"><b>EQUIPAMIENTOS</b></th>
        </tr>
        <tr>
            <th><b>Nombre</b></th>
            <th><b>Función</b></th>
            <th><b>Características</b></th>
        </tr>
    </thead>
    <tbody>
        @foreach($datos as $dato)
            <tr>
                <td>{{ $dato['nombre'] }}</td>
                <td>{{ $dato['funcion'] }}</td>
                <td>{{ $dato['caracteristicas'] }}</td>
            </tr>
        @endforeach
    </tbody>
</table>