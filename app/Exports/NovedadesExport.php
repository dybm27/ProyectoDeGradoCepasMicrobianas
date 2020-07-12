<?php

namespace App\Exports;

use App\Novedad;
use Illuminate\Support\Facades\Auth;
use Maatwebsite\Excel\Concerns\FromView;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Events\BeforeExport;
use Maatwebsite\Excel\Events\BeforeSheet;
use Illuminate\Contracts\View\View;

class NovedadesExport implements FromView, WithEvents
{
    public function registerEvents(): array
    {
        $styleArray1 = [
            'borders' => [
                'allBorders' => [
                    'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_DOUBLE,
                    'color' => ['argb' => '000000'],
                ],
            ],
            'alignment' => [
                'vertical' => \PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER,
                'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER
            ],
            'fill' => [
                'fillType' => \PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID,
                'startColor' => [
                    'argb' => '52FA03',
                ],
            ],
        ];
        $styleArray2 = [
            'borders' => [
                'allBorders' => [
                    'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_DOUBLE,
                    'color' => ['argb' => '000000'],
                ],
            ]
        ];

        $descargo = Auth::user()->name;

        $cantidad = Novedad::count() + 2;

        return [

            BeforeExport::class => function (BeforeExport $event) use ($descargo) {
                $event->writer->getProperties()->setCreator('Dumar Basto')
                    ->setLastModifiedBy($descargo)
                    ->setTitle("Excel Novedades MAJUMBA")
                    ->setDescription(
                        "Documento con las Novedades del Grupo de investigacion MAJUMBA
                        , generado usando PHP."
                    );
            },

            BeforeSheet::class => function (BeforeSheet $event) use ($styleArray1, $cantidad, $styleArray2) {
                $event->sheet->setTitle('Hoja 1')
                    ->getStyle('A1:C2')
                    ->applyFromArray($styleArray1);
                $event->sheet->getStyle('A3:C' . $cantidad)
                    ->applyFromArray($styleArray2);
            }
        ];
    }

    public function view(): View
    {
        return view('excel.novedades', [
            'novedades' => Novedad::all()
        ]);
    }
}
