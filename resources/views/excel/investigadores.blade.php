<table>
    <thead>
        <tr>
            <th colspan="5"><b>INVESTIGADORES</b></th>
        </tr>
        <tr>
            <th><b>Nombres</b></th>
            <th><b>Apellidos</b></th>
            <th><b>Email</b></th>
            <th><b>Nivel De Estudio</b></th>
            <th><b>Cargo</b></th>
        </tr>
    </thead>
    <tbody>
    @foreach($investigadores as $investigador)
        <tr>
            <td>{{ $investigador->nombres }}</td>
            <td>{{ $investigador->apellidos }}</td>
            <td>{{ $investigador->email }}</td>
            <td>{{ $investigador->nivel_estudio }}</td>
            <td>{{ $investigador->cargo }}</td>
        </tr>
    @endforeach
    </tbody>
</table>