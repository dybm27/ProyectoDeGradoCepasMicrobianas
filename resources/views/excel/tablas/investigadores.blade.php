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
        @php
            $datoDecodificado= json_decode($dato);
        @endphp
        <tr>
            <td>{{ $datoDecodificado->nombres }}</td>
            <td>{{ $datoDecodificado->apellidos }}</td>
            <td>{{ $datoDecodificado->email }}</td>
            <td>{{ $datoDecodificado->nivel_estudio }}</td>
            <td>{{ $datoDecodificado->cargo }}</td>
        </tr>
    @endforeach
    </tbody>
</table>