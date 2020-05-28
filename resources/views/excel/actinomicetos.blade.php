<table>
    <thead>
        <tr>
            <th colspan="10"><b>ACTINOMICETOS</b></th>
        </tr>
        <tr>
            <th><b>Codigo</b></th>
            <th><b>Género</b></th>
            <th><b>Especie</b></th>
            <th><b>Reino</b></th>
            <th><b>Phylum</b></th>
            <th><b>Clase</b></th>
            <th><b>Orden</b></th>
            <th><b>Estado</b></th>
            <th><b>Origen</b></th>
            <th><b>Publicar</b></th>
        </tr>
    </thead>
    <tbody>
    @foreach($actinomicetos as $actinomiceto)
        <tr>
            <td>{{ $actinomiceto->cepa->codigo }}</td>
            <td>{{ $actinomiceto->cepa->genero->nombre }}</td>
            <td>{{ $actinomiceto->cepa->especie->nombre }}</td>
            <td>{{ $actinomiceto->reino->nombre }}</td>
            <td>{{ $actinomiceto->phylum->nombre }}</td>
            <td>{{ $actinomiceto->clase->nombre }}</td>
            <td>{{ $actinomiceto->orden->nombre }}</td>
            <td>{{ $actinomiceto->cepa->estado }}</td>
            <td>{{ $actinomiceto->cepa->origen }}</td>
            <td>
                @if ($actinomiceto->cepa->publicar==1)
                    Si
                @else
                    No
                @endif
            </td>
        </tr>
    @endforeach
    </tbody>
</table>