<table>
    <thead>
        <tr>
            <th colspan="10"><b>LEVADURAS</b></th>
        </tr>
        <tr>
            <th><b>Codigo</b></th>
            <th><b>Género</b></th>
            <th><b>Especie</b></th>
            <th><b>Division</b></th>
            <th><b>Clase</b></th>
            <th><b>Orden</b></th>
            <th><b>Familia</b></th>
            <th><b>Estado</b></th>
            <th><b>Origen</b></th>
            <th><b>Publicar</b></th>
        </tr>
    </thead>
    <tbody>
    @foreach($levaduras as $levadura)
        <tr>
            <td>{{ $levadura->cepa->codigo }}</td>
            <td>{{ $levadura->cepa->genero->nombre }}</td>
            <td>{{ $levadura->cepa->especie->nombre }}</td>
            <td>{{ $levadura->division->nombre }}</td>
            <td>{{ $levadura->clase->nombre }}</td>
            <td>{{ $levadura->orden->nombre }}</td>
            <td>{{ $levadura->familia->nombre }}</td>
            <td>{{ $levadura->cepa->estado }}</td>
            <td>{{ $levadura->cepa->origen }}</td>
            <td>
                @if ($levadura->cepa->publicar==1)
                    Si
                @else
                    No
                @endif
            </td>
        </tr>
    @endforeach
    </tbody>
</table>