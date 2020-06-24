<table>
    <thead>
        <tr>
            <th colspan="3"><b>NOTICIAS</b></th>
        </tr>
        <tr>
            <th colspan="3"><b>Titulo</b></th>
        </tr>
    </thead>
    <tbody>
    @foreach($noticias as $noticia)
        <tr>
            <td colspan="3">{{ $noticia->titulo }}</td>
        </tr>
    @endforeach
    </tbody>
</table>