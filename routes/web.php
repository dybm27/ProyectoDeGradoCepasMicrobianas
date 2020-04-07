<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Authentication Routes...
Route::get('/', 'Auth\LoginController@showLoginForm')->name('login_vista');
Route::post('login', 'Auth\LoginController@login')->name('login');
Route::post('logout', 'Auth\LoginController@logout')->name('logout');

// Registration Routes...
Route::get('register', 'Auth\RegisterController@showRegistrationForm')->name('register');
Route::post('register', 'Auth\RegisterController@register');

// Password Reset Routes...
Route::get('password/reset', 'Auth\ForgotPasswordController@showLinkRequestForm')->name('password.request');
Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail')->name('password.email');
Route::get('password/reset/{token}', 'Auth\ResetPasswordController@showResetForm')->name('password.reset');
Route::post('password/reset', 'Auth\ResetPasswordController@reset')->name('password.update');

// Email Verification Routes...
Route::emailVerification();

Route::group(['middleware' => 'auth'], function () {

    //-- Perfil
    Route::get('/perfil', 'PerfilController@index')->name('home');

    //-- vistas cepas
    Route::get('/cepas', 'CepaController@index')->name('cepas');
    Route::get('/cepas/agregar', 'CepaController@index');
    Route::get('/cepas/editar/{id}', 'CepaController@index');

    //-- crud cepas
    Route::post('/cepas/agregar', 'CepaController@store');
    Route::put('/cepas/editar/{id}', 'CepaController@update');
    Route::delete('/cepas/eliminar/{id}', 'CepaController@destroy');

    //-- crud info-cepas
    Route::post('/info-cepas/agregar', 'InfoCepasController@agregarInfo');

    //-- vistas caract-bacterias
    Route::get('/cepas/bacteria/{id}', 'CepaController@index');
    Route::get('/cepas/bacteria/{id}/caract-macro', 'CepaController@index');
    Route::get('/cepas/bacteria/{id}/caract-micro', 'CepaController@index');
    Route::get('/cepas/bacteria/{id}/caract-bioqui', 'CepaController@index');
    Route::get('/cepas/bacteria/{id}/caract-fisio', 'CepaController@index');
    Route::get('/cepas/bacteria/{id}/identi-molecu', 'CepaController@index');
    Route::get('/cepas/bacteria/{id}/metodo-conser', 'CepaController@index');
    Route::get('/cepas/bacteria/{id}/metodo-conser/agregar', 'CepaController@index');
    Route::get('/cepas/bacteria/{id}/metodo-conser/editar/{id2}', 'CepaController@index');

    //-- crud caract-bacterias
    //--- macro
    Route::post('/cepas/bacteria/caract-macro', 'CaractMacroBacteriaController@store');
    Route::put('/cepas/bacteria/caract-macro/{id}', 'CaractMacroBacteriaController@update');
    Route::delete('/cepas/bacteria/caract-macro/{id}', 'CaractMacroBacteriaController@destroy');
    //--- micro
    Route::post('/cepas/bacteria/caract-micro', 'CaractMicroBacteriaController@store');
    Route::put('/cepas/bacteria/caract-micro/{id}', 'CaractMicroBacteriaController@update');
    Route::delete('/cepas/bacteria/caract-micro/{id}', 'CaractMicroBacteriaController@destroy');
    Route::put('/cepas/bacteria/caract-micro/agregar-imagen/{id}', 'CaractMicroBacteriaController@agregarImagen');
    Route::put('/cepas/bacteria/caract-micro/cambiar-imagen/{id}', 'CaractMicroBacteriaController@cambiarImagen');
    Route::put('/cepas/bacteria/caract-micro/eliminar-imagen/{id}', 'CaractMicroBacteriaController@elimarImagen');
    //--- bioqui
    Route::post('/cepas/bacteria/caract-bioqui', 'CaractBioquiBacteriaController@store');
    Route::put('/cepas/bacteria/caract-bioqui/{id}', 'CaractBioquiBacteriaController@update');
    Route::delete('/cepas/bacteria/caract-bioqui/{id}', 'CaractBioquiBacteriaController@destroy');
    Route::put('/cepas/bacteria/caract-bioqui/agregar-imagen/{id}', 'CaractBioquiBacteriaController@agregarImagen');
    Route::put('/cepas/bacteria/caract-bioqui/cambiar-imagen/{id}', 'CaractBioquiBacteriaController@cambiarImagen');
    Route::put('/cepas/bacteria/caract-bioqui/eliminar-imagen/{id}', 'CaractBioquiBacteriaController@elimarImagen');
    //--- fisio
    Route::post('/cepas/bacteria/caract-fisio', 'CaractFisioBacteriaController@store');
    Route::put('/cepas/bacteria/caract-fisio/{id}', 'CaractFisioBacteriaController@update');
    Route::delete('/cepas/bacteria/caract-fisio/{id}', 'CaractFisioBacteriaController@destroy');
    Route::put('/cepas/bacteria/caract-fisio/agregar-imagen/{id}', 'CaractFisioBacteriaController@agregarImagen');
    Route::put('/cepas/bacteria/caract-fisio/cambiar-imagen/{id}', 'CaractFisioBacteriaController@cambiarImagen');
    Route::put('/cepas/bacteria/caract-fisio/eliminar-imagen/{id}', 'CaractFisioBacteriaController@elimarImagen');
    //--- identi-molecu
    Route::post('/cepas/bacteria/identi-molecu', 'IdentiMolecuBacteriaController@store');
    Route::put('/cepas/bacteria/identi-molecu/{id}', 'IdentiMolecuBacteriaController@update');
    Route::delete('/cepas/bacteria/identi-molecu/{id}', 'IdentiMolecuBacteriaController@destroy');
    //--- metodo-conser
    Route::post('/cepas/bacteria/metodo-conser', 'MetodoConserBacteriaController@store');
    Route::put('/cepas/bacteria/metodo-conser/{id}', 'MetodoConserBacteriaController@update');
    Route::delete('/cepas/bacteria/metodo-conser/{id}', 'MetodoConserBacteriaController@destroy');
    


    //-- crud info-caract-bacterias
    Route::post('/info-caract-bacterias/agregar', 'InfoCaracBacteriasController@agregarInfo');


    Route::get('/cepas-bacterias', 'CepaController@bacterias')->name('cepas_bacterias');
    Route::get('/cepas-bacterias/form-agregar', 'CepaController@bacterias');
    Route::get('/cepas-levaduras', 'CepaController@levaduras')->name('cepas_levaduras');
    Route::get('/cepas-levaduras/form-agregar', 'CepaController@levaduras');
    Route::get('/cepas-hongos', 'CepaController@hongos')->name('cepas_hongos');
    Route::get('/cepas-hongos/form-agregar', 'CepaController@hongos');
    Route::get('/cepas-actinomicetos', 'CepaController@actinomicetos')->name('cepas_actinomicetos');
    Route::get('/cepas-actinomicetos/form-agregar', 'CepaController@actinomicetos');


    // Ruta para Vue
    Route::get('/{vue_capture?}', function () {
        return view('layouts-admin.app');
    })->where('vue_capture', '[\/\w\.-]*');
});
