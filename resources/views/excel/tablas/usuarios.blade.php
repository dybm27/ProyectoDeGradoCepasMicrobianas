<table>
    <thead>
        <tr>
            <th colspan="4"><b>USUARIOS</b></th>
        </tr>
        <tr>
            <th><b>Nombre</b></th>
            <th><b>Email</b></th>
            <th><b>Tipo de Usuario</b></th>
            <th><b>Imagen</b></th>
        </tr>
    </thead>
    <tbody>
    @foreach($datos as $dato)
        <tr>
            <td>{{ $dato['name'] }}</td>
            <td>{{ $dato['email'] }}</td>
            <td>{{ $dato['tipo_user'] }}</td>
        </tr>
    @endforeach
    </tbody>
</table>