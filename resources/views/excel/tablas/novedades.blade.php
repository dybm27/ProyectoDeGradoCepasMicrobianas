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
        <tr>
            <td colspan="3">{{ $dato['titulo'] }}</td>
        </tr>
    @endforeach
    </tbody>
</table>