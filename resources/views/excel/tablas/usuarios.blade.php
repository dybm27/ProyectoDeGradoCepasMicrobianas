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
        @php
            $datoDecodificado= json_decode($dato);
        @endphp
        <tr>
            <td>{{ $datoDecodificado->name }}</td>
            <td>{{ $datoDecodificado->email }}</td>
            <td>{{ $datoDecodificado->tipo_user }}</td>
            <td><img src="{{public_path($datoDecodificado->avatarPublico)}}" width="100px"  height="100px"></td>
        </tr>
    @endforeach
    </tbody>
</table>