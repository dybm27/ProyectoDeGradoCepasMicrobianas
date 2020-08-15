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

        $this->user = User::first();
        
    }
}
