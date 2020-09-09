<table>
    <thead>
        <tr>
            <th colspan="3"><b>{{$titulo}} MAJUMBA</b></th>
        </tr>
        <tr>
            <th><b>Nombre {{$titulo}}</b></th>
            <th><b>Nombre Autor</b></th>
            <th><b>Descripcion</b></th>
        </tr>
    </thead>
    <tbody>
        @foreach($datos as $dato)
            <tr>
                <td>{{ $dato['nombre_documento'] }}</td>
                <td>{{ $dato['nombre_autor'] }}</td>
                <td>{{ $dato['descripcion'] }}</td>
            </tr>
        @endforeach
    </tbody>
</table>