<table>
    <thead>
        <tr>
            <th colspan="6"><b>BACTERIAS</b></th>
        </tr>
        <tr>
            <th><b>Codigo</b></th>
            <th><b>Género</b></th>
            <th><b>Especie</b></th>
            <th><b>Estado</b></th>
            <th><b>Origen</b></th>
            <th><b>Publicar</b></th>
        </tr>
    </thead>
    <tbody>
    @foreach($bacterias as $bacteria)
        <tr>
            <td>{{ $bacteria->cepa->codigo }}</td>
            <td>{{ $bacteria->cepa->genero->nombre }}</td>
            <td>{{ $bacteria->cepa->especie->nombre }}</td>
            <td>{{ $bacteria->cepa->estado }}</td>
            <td>{{ $bacteria->cepa->origen }}</td>
            <td>
                @if ($bacteria->cepa->publicar==1)
                    Si
                @else
                    No
                @endif
            </td>
        </tr>
    @endforeach
    </tbody>
</table>