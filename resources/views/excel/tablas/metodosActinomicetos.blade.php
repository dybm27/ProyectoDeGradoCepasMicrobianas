<table>
    <thead>
        <tr>
            <th colspan="6"><b>METODOS DE CONSERVACIÓN BACTERIAS</b></th>
        </tr>
        <tr>
            <th><b>Tipo de Método</b></th>
            <th><b>Tipo Agar</b></th>
            <th><b>Número de Replicas</b></th>
            <th><b>Recuento Microgota</b></th>
            <th><b>Fecha</b></th>
            <th><b>Imagen</b></th>
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
            </tr>
        @endforeach
    </tbody>
</table>