<table>
    <thead>
        <tr>
            <th colspan="3"><b>NOVEDADES</b></th>
        </tr>
        <tr>
            <th colspan="3"><b>Titulo</b></th>
        </tr>
    </thead>
    <tbody>
        @foreach($datos as $dato)
        @php
            $datoDecodificado= json_decode($dato);
        @endphp
        <tr>
            <td colspan="3">{{ $datoDecodificado->titulo }}</td>
        </tr>
    @endforeach
    </tbody>
</table>