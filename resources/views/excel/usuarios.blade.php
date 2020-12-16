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
    @foreach($usuarios as $usuario)
        <tr>
            <td>{{ $usuario->name }}</td>
            <td>{{ $usuario->email }}</td>
            <td>{{ $usuario->rol->nombre }}</td>
        </tr>
    @endforeach
    </tbody>
</table>