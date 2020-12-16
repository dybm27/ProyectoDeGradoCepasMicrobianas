<table>
    <thead>
        <tr>
            <th colspan="3"><b>USUARIOS</b></th>
        </tr>
        <tr>
            <th><b>Nombre</b></th>
            <th><b>Email</b></th>
            <th><b>Tipo de Usuario</b></th> 
        </tr>
    </thead>
    <tbody>
    @foreach($datos as $dato)
        <tr>
            <td>{{ $dato['name'] }}</td>
            <td>{{ $dato['email'] }}</td>
            <td>{{ $dato['rol'] }}</td>
        </tr>
    @endforeach
    </tbody>
</table>