<table>
    <thead>
        <tr>
            <th colspan="5"><b>SEGUIMIENTOS</b></th>
        </tr>
        <tr>
            <th><b>Nombre Responsable</b></th>
            <th><b>Email Responsable</b></th>
            <th><b>Tipo de Usuario</b></th>
            <th><b>Acción</b></th>
            <th><b>Fecha</b></th>
        </tr>
    </thead>
    <tbody>
    @foreach($datos as $dato)
        <tr>
            <td>{{ $dato['nombre_responsable'] }}</td>
            <td>{{ $dato['email_responsable'] }}</td>
            <td>{{ $dato['rol'] }}</td>
            <td>{{ $dato['accion'] }}</td>
            <td>
                @php
                    $fecha=date('d-m-Y', strtotime($dato['created_at']))
                @endphp
                {{$fecha}}
            </td>
        </tr>
    @endforeach
    </tbody>
</table>