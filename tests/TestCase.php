<?php

namespace Tests;

use AdminSeeder;
use App\User;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;
use PermisosSeeder;
use RolesSeeder;

abstract class TestCase extends BaseTestCase
{
    use CreatesApplication;

    protected  function setUp(): void
    {
        parent::setUp();

        $this->seed(PermisosSeeder::class);
        $this->seed(RolesSeeder::class);
        $this->seed(AdminSeeder::class);

        $this->user = User::where('id', 2)->first();
        $this->imagen = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAA5UlEQVQ4jcXSPU5CQRSG4UeD2lxotVA6F0HQBeg+lLAP4wIICSsAWQExlq5DxQSptLSASoqZm1zHuVgZ3+Yk5+ebM/MNf8A5plhijTfcofvbYAMjPOMKx9iL8RovGMa+LCPMUNTUC9xHkezaT1uGS5qYy1xnGteucotP3CT5HiapwFK4a5U1TrFK8m3hYX807ye5rySWHFRFd2P8wGGqmhmGI7ynAo+4yDTvZHKXsf8bZ4L/zcxAlRZe0ckVh4LPdSItPGBQp96IInPBqhPhYdvox5MHtvzEkq7g80JwZ4Fx3dr/zwb6EyxHQUhZMwAAAABJRU5ErkJggg==";
    }
}
