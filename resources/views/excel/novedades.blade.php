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
    @foreach($novedades as $novedad)
        <tr>
            <td colspan="3">{{ $novedad->titulo }}</td>
        </tr>
    @endforeach
    </tbody>
</table>