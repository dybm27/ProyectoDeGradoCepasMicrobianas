<table>
    <thead>
        <tr>
            <th colspan="5"><b>INVESTIGADORES</b></th>
        </tr>
        <tr>
            <th><b>Nombres</b></th>
            <th><b>Apellidos</b></th>
            <th><b>Email</b></th>
            <th><b>Nivel De Estudio</b></th>
            <th><b>Cargo</b></th>
        </tr>
    </thead>
    <tbody>
    @foreach($datos as $dato)
        <tr>
            <td>{{ $dato['nombres'] }}</td>
            <td>{{ $dato['apellidos'] }}</td>
            <td>{{ $dato['email'] }}</td>
            <td>{{ $dato['nivel_estudio'] }}</td>
            <td>{{ $dato['cargo'] }}</td>
        </tr>
    @endforeach
    </tbody>
</table>