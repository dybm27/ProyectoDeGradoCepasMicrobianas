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
        @php
            $datoDecodificado= json_decode($dato);
        @endphp
        <tr>
            <td>{{ $datoDecodificado->nombre_responsable }}</td>
            <td>{{ $datoDecodificado->email_responsable }}</td>
            <td>{{ $datoDecodificado->tipo_user }}</td>
            <td>{{ $datoDecodificado->accion }}</td>
            <td>
                @php
                    $fecha=date('d-m-Y', strtotime($datoDecodificado->created_at))
                @endphp
                {{$fecha}}
            </td>
        </tr>
    @endforeach
    </tbody>
</table>