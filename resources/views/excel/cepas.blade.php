<table>
    <thead>
        <tr>
            <th colspan="7"><b>CEPAS</b></th>
        </tr>
        <tr>
            <th><b>Codigo</b></th>
            <th><b>Grupo Microbiano</b></th>
            <th><b>Género</b></th>
            <th><b>Especie</b></th>
            <th><b>Estado</b></th>
            <th><b>Origen</b></th>
            <th><b>Publicar</b></th>
        </tr>
    </thead>
    <tbody>
    @foreach($cepas as $cepa)
        <tr>
            <td>{{ $cepa->codigo }}</td>
            <td>{{ $cepa->grupoMicrobiano->nombre }}</td>
            <td>{{ $cepa->genero->nombre }}</td>
            <td>{{ $cepa->especie->nombre }}</td>
            <td>{{ $cepa->estado }}</td>
            <td>{{ $cepa->origen }}</td>
            <td>
                @if ($cepa->publicar==1)
                    Si
                @else
                    No
                @endif
            </td>
        </tr>
    @endforeach
    </tbody>
</table>