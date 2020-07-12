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
    @foreach($objetivos as $objetivo)
        <tr>
            <td  colspan="4">{{ $objetivo->texto }}</td>
        </tr>
    @endforeach
    </tbody>
</table>