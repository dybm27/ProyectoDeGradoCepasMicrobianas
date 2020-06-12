<table>
    <thead>
        <tr>
            <th colspan="2"><b>{{$titulo}} MAJUMBA</b></th>
        </tr>
        <tr>
            <th><b>Nombre</b></th>
            <th><b>Descripcion</b></th>
        </tr>
    </thead>
    <tbody>
    @foreach($documentos as $documento)
        <tr>
            <td>{{ $documento->nombre }}</td>
            <td>{{ $documento->descripcion }}</td>
        </tr>
    @endforeach
    </tbody>
</table>