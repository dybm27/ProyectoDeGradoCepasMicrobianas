<table>
    <thead>
        <tr>
            <th colspan="3"><b>{{$titulo}} MAJUMBA</b></th>
        </tr>
        <tr>
            <th><b>Nombre {{$titulo}}</b></th>
            <th><b>Nombre Autor</b></th>
            <th><b>Descripción</b></th>
        </tr>
    </thead>
    <tbody>
    @foreach($documentos as $documento)
        <tr>
            <td>{{ $documento->nombre_documento }}</td>
            <td>{{ $documento->nombre_autor }}</td>
            <td>{{ $documento->descripcion }}</td>
        </tr>
    @endforeach
    </tbody>
</table>