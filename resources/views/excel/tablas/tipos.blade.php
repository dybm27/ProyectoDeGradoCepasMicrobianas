<table>
    <thead>
        <tr>
            <th colspan="4"><b>{{$titulo}}</b></th>
        </tr>
        <tr>
            <th  colspan="4"><b>Nombre</b></th>
        </tr>
    </thead>
    <tbody>
    @foreach($datos as $dato)
        <tr>
            <td  colspan="4">{{ $dato['nombre'] }}</td>
        </tr>
    @endforeach
    </tbody>
</table>