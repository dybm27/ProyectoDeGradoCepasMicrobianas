<table>
    <thead>
        <tr>
            <th colspan="10"><b>HONGOS FILAMENTOSOS</b></th>
        </tr>
        <tr>
            <th><b>Codigo</b></th>
            <th><b>Género</b></th>
            <th><b>Especie</b></th>
            <th><b>Clase</b></th>
            <th><b>Orden</b></th>
            <th><b>Familia</b></th>
            <th><b>Phylum</b></th>
            <th><b>Estado</b></th>
            <th><b>Origen</b></th>
            <th><b>Publicar</b></th>
        </tr>
    </thead>
    <tbody>
    @foreach($hongos as $hongo)
        <tr>
            <td>{{ $hongo->cepa->codigo }}</td>
            <td>{{ $hongo->cepa->genero->nombre }}</td>
            <td>{{ $hongo->cepa->especie->nombre }}</td>
            <td>{{ $hongo->clase->nombre }}</td>
            <td>{{ $hongo->orden->nombre }}</td>
            <td>{{ $hongo->familia->nombre }}</td>
            <td>{{ $hongo->phylum->nombre }}</td>
            <td>{{ $hongo->cepa->estado }}</td>
            <td>{{ $hongo->cepa->origen }}</td>
            <td>
                @if ($hongo->cepa->publicar==1)
                    Si
                @else
                    No
                @endif
            </td>
        </tr>
    @endforeach
    </tbody>
</table>