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
    @foreach($equipamientos as $equipamiento)
        <tr>
            <td>{{ $equipamiento->nombre }}</td>
            <td>{{ $equipamiento->funcion }}</td>
            <td>{{ $equipamiento->caracteristicas }}</td>
        </tr>
    @endforeach
    </tbody>
</table>