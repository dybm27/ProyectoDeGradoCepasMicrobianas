<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class ImagenesEditorControllerTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function upload_imagen()
    {
        Storage::fake();
        $imagen = UploadedFile::fake()->create('imagen.jpg');
        $response = $this->actingAs($this->user)->post('/editor/upload', ['upload' => $imagen]);
        $response->assertStatus(200);
        $response->assertJsonCount(2);
        $data = explode("http://127.0.0.1/storage", $response->decodeResponseJson()['url']);
        Storage::assertExists('public' . $data[1]);
    }
}
