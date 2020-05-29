<?php

namespace App\Exports;

use Illuminate\Contracts\View\View;
use Illuminate\Support\Facades\Auth;
use Maatwebsite\Excel\Concerns\FromView;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Events\BeforeExport;
use Maatwebsite\Excel\Events\BeforeSheet;

class TablaMetodosHongosExport implements FromView, WithEvents
{
    protected $datos;
    protected $cantidad;

    public function __construct($datos)
    {
        $this->datos = $datos;
        $this->cantidad = count($datos) + 2;
    }

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

        return [

            BeforeExport::class => function (BeforeExport $event) use ($descargo) {
                $event->writer->getProperties()->setCreator('Dumar Basto')
                    ->setLastModifiedBy($descargo)
                    ->setTitle("Excel Metodos de Conservacion - Hongos")
                    ->setDescription(
                        "Documento con los metodos de Conservacion de hongos, generado usando PHP."
                    );
            },

            BeforeSheet::class => function (BeforeSheet $event) use ($styleArray1, $styleArray2) {
                $event->sheet->setTitle('Hoja 1')
                    ->getStyle('A1:F2')
                    ->applyFromArray($styleArray1);
                $event->sheet->getStyle('A3:F' . $this->cantidad)
                    ->applyFromArray($styleArray2);
            }
        ];
    }

    public function view(): View
    {
        return view('excel.tablas.metodosHongos', [
            'datos' => $this->datos
        ]);
    }
}
