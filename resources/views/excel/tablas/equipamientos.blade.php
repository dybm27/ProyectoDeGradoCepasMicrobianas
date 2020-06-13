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
            @php
                $datoDecodificado= json_decode($dato);
            @endphp
            <tr>
                <td>{{ $datoDecodificado->nombre }}</td>
                <td>{{ $datoDecodificado->funcion }}</td>
                <td>{{ $datoDecodificado->caracteristicas }}</td>
            </tr>
        @endforeach
    </tbody>
</table>