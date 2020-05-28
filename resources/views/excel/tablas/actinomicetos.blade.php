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
        @foreach($datos as $dato)
        @php
        $datoDecodificado= json_decode($dato);
        @endphp
        <tr>
            <td>{{ $datoDecodificado->codigo }}</td>
            <td>{{ $datoDecodificado->nombre_genero }}</td>
            <td>{{ $datoDecodificado->nombre_especie }}</td>
            <td>{{ $datoDecodificado->nombre_reino }}</td>
            <td>{{ $datoDecodificado->nombre_phylum }}</td>
            <td>{{ $datoDecodificado->nombre_clase }}</td>
            <td>{{ $datoDecodificado->nombre_orden }}</td>
            <td>{{ $datoDecodificado->estado }}</td>
            <td>{{ $datoDecodificado->origen }}</td>
            <td>
                @if ($datoDecodificado->publicar==1)
                    Si
                @else
                    No
                @endif
            </td>
        </tr>
        @endforeach
    </tbody>
</table>