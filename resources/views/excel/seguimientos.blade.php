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
            <td>{{ $seguimiento->tipo_user }}</td>
            <td>{{ $seguimiento->accion }}</td>
            <td>{{ $seguimiento->created_at }}</td>
        </tr>
    @endforeach
    </tbody>
</table>