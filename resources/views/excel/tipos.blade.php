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
    @foreach($tipos as $tipo)
        <tr>
            <td  colspan="4">{{ $tipo->nombre }}</td>
        </tr>
    @endforeach
    </tbody>
</table>