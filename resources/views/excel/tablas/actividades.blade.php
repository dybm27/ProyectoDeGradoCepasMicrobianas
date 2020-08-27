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
        <tr>
            <td>{{ $dato['titulo'] }}</td>
            <td>{{ $dato['lugar'] }}</td>
            <td> @php
                    $fecha=date('d-m-Y', strtotime($dato['fecha']))
                @endphp
                {{$fecha}}
            </td>
        </tr>
    @endforeach
    </tbody>
</table>