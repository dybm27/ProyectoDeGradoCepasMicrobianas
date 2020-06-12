<table>
    <thead>
        <tr>
            <th colspan="2"><b>{{$titulo}} MAJUMBA</b></th>
        </tr>
        <tr>
            <th><b>Nombre</b></th>
            <th><b>Descripcion</b></th>
        </tr>
    </thead>
    <tbody>
        @foreach($datos as $dato)
            @php
            $datoDecodificado= json_decode($dato);
            @endphp
            <tr>
                <td>{{ $datoDecodificado->nombre }}</td>
                <td>{{ $datoDecodificado->descripcion }}</td>
            </tr>
        @endforeach
    </tbody>
</table>