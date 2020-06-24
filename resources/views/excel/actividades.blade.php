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
    @foreach($actividades as $actividad)
        <tr>
            <td>{{ $actividad->titulo }}</td>
            <td>{{ $actividad->lugar }}</td>
            <td> @php
                    $fecha=date('d-m-Y', strtotime($actividad->fecha))
                @endphp
                {{$fecha}}
            </td>
        </tr>
    @endforeach
    </tbody>
</table>