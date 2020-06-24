<table>
    <thead>
        <tr>
            <th colspan="3"><b>ACTIVIDADES</b></th>
        </tr>
        <tr>
            <th><b>Titulo</b></th>
            <th><b>Lugar</b></th>
            <th><b>Fecha</b></th>
        </tr>
    </thead>
    <tbody>
        @foreach($datos as $dato)
        @php
            $datoDecodificado= json_decode($dato);
        @endphp
        <tr>
            <td>{{ $datoDecodificado->titulo }}</td>
            <td>{{ $datoDecodificado->lugar }}</td>
            <td> @php
                    $fecha=date('d-m-Y', strtotime($datoDecodificado->fecha))
                @endphp
                {{$fecha}}
            </td>
        </tr>
    @endforeach
    </tbody>
</table>