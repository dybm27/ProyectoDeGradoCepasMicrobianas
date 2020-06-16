<table>
    <thead>
        <tr>
            <th colspan="3"><b>{{$titulo}} MAJUMBA</b></th>
        </tr>
        <tr>
            <th><b>Nombre {{$titulo}}</b></th>
            <th><b>Nombre Autor</b></th>
            <th><b>Descripcion</b></th>
        </tr>
    </thead>
    <tbody>
        @foreach($datos as $dato)
            @php
            $datoDecodificado= json_decode($dato);
            @endphp
            <tr>
                <td>{{ $datoDecodificado->nombre_documento }}</td>
                <td>{{ $datoDecodificado->nombre_autor }}</td>
                <td>{{ $datoDecodificado->descripcion }}</td>
            </tr>
        @endforeach
    </tbody>
</table>