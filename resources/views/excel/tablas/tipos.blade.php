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
        @php
        $datoDecodificado= json_decode($dato);
        @endphp
        <tr>
            <td  colspan="4">{{ $datoDecodificado->nombre }}</td>
        </tr>
    @endforeach
    </tbody>
</table>