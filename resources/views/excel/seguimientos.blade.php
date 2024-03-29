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
    @foreach($seguimientos as $seguimiento)
        <tr>
            <td>{{ $seguimiento->nombre_responsable }}</td>
            <td>{{ $seguimiento->email_responsable }}</td>
            <td>{{ $seguimiento->rol }}</td>
            <td>{{ $seguimiento->accion }}</td>
            <td>
                @php
                    $fecha=date('d-m-Y', strtotime($seguimiento->created_at))
                @endphp
                {{$fecha}}
            </td>
        </tr>
    @endforeach
    </tbody>
</table>