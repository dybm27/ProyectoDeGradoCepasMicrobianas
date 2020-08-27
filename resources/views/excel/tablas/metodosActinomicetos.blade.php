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
            <tr>
                <td>{{ $dato['codigo'] }}</td>
                <td>{{ $dato['nombre_genero'] }}</td>
                <td>{{ $dato['nombre_especie'] }}</td>
                <td>{{ $dato['nombre_reino'] }}</td>
                <td>{{ $dato['nombre_phylum'] }}</td>
                <td>{{ $dato['nombre_clase'] }}</td>
                <td>{{ $dato['nombre_orden'] }}</td>
                <td>{{ $dato['estado'] }}</td>
            </tr>
        @endforeach
    </tbody>
</table>