<table>
    <thead>
        <tr>
            <th colspan="4"><b>Generos Cepas</b></th>
        </tr>
        <tr>
            <th  colspan="2"><b>Nombre</b></th>
            <th  colspan="2"><b>Grupo Microbiano</b></th>
        </tr>
    </thead>
    <tbody>
    @foreach($tipos as $tipo)
        <tr>
            <td  colspan="2">{{ $tipo->nombre }}</td>
            <td  colspan="2">{{ $tipo->grupo_microbiano->nombre }}</td>
        </tr>
    @endforeach
    </tbody>
</table>