<table>
    <thead>
        <tr>
            <th colspan="4"><b>MAJUMBA</b></th>
        </tr>
        <tr>
            <th  colspan="4"><b>Objetivos</b></th>
        </tr>
    </thead>
    <tbody>
    @foreach($datos as $dato)
        <tr>
            <td  colspan="4">{{ $dato['texto'] }}</td>
        </tr>
    @endforeach
    </tbody>
</table>