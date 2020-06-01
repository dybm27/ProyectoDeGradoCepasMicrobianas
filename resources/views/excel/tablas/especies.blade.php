<table>
    <thead>
        <tr>
            <th colspan="4"><b>Especies Cepas</b></th>
        </tr>
        <tr>
            <th  colspan="2"><b>Nombre</b></th>
            <th  colspan="2"><b>Genero</b></th>
        </tr>
    </thead>
    <tbody>
    @foreach($datos as $dato)
        @php
        $datoDecodificado= json_decode($dato);
        @endphp
        <tr>
            <td  colspan="2">{{ $datoDecodificado->nombre }}</td>
            <td  colspan="2">{{ $datoDecodificado->nombre_genero }}</td>
        </tr>
    @endforeach
    </tbody>
</table>