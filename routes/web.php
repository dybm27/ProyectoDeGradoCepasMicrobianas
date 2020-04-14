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
    //-- vistas caract
    Route::get('/cepas/{id}', 'CepaController@index');
    Route::get('/cepas/{id}/caract-macro', 'CepaController@index');
    Route::get('/cepas/{id}/caract-micro', 'CepaController@index');
    Route::get('/cepas/{id}/caract-bioqui', 'CepaController@index');
    Route::get('/cepas/{id}/caract-fisio', 'CepaController@index');
    Route::get('/cepas/{id}/identi-molecu', 'CepaController@index');
    Route::get('/cepas/{id}/metodo-conser', 'CepaController@index');
    Route::get('/cepas/{id}/metodo-conser/agregar', 'CepaController@index');
    Route::get('/cepas/{id}/metodo-conser/editar/{id2}', 'CepaController@index');
    //-- vistas cepas-bacterias
    Route::get('/bacterias', 'CepaController@bacterias')->name('cepas_bacterias');
    Route::get('/bacterias/agregar', 'CepaController@bacterias');
    Route::get('/bacterias/editar/{id}', 'CepaController@bacterias');
    //-- vistas caract-bacterias
    Route::get('/bacterias/{id}', 'CepaController@bacterias');
    Route::get('/bacterias/{id}/caract-macro', 'CepaController@bacterias');
    Route::get('/bacterias/{id}/caract-micro', 'CepaController@bacterias');
    Route::get('/bacterias/{id}/caract-bioqui', 'CepaController@bacterias');
    Route::get('/bacterias/{id}/caract-fisio', 'CepaController@bacterias');
    Route::get('/bacterias/{id}/identi-molecu', 'CepaController@bacterias');
    Route::get('/bacterias/{id}/metodo-conser', 'CepaController@bacterias');
    Route::get('/bacterias/{id}/metodo-conser/agregar', 'CepaController@bacterias');
    Route::get('bacterias/{id}/metodo-conser/editar/{id2}', 'CepaController@bacterias');
    //-- vistas cepas-levaduras
    Route::get('/levaduras', 'CepaController@levaduras')->name('cepas_levaduras');
    Route::get('/levaduras/agregar', 'CepaController@levaduras');
    Route::get('/levaduras/editar/{id}', 'CepaController@levaduras');
    //-- vistas caract-levaduras
    Route::get('/levaduras/{id}', 'CepaController@levaduras');
    Route::get('/levaduras/{id}/caract-macro', 'CepaController@levaduras');
    Route::get('/levaduras/{id}/caract-micro', 'CepaController@levaduras');
    Route::get('/levaduras/{id}/caract-bioqui', 'CepaController@levaduras');
    Route::get('/levaduras/{id}/identi-molecu', 'CepaController@levaduras');
    Route::get('/levaduras/{id}/metodo-conser', 'CepaController@levaduras');
    Route::get('/levaduras/{id}/metodo-conser/agregar', 'CepaController@levaduras');
    Route::get('/levaduras/{id}/metodo-conser/editar/{id2}', 'CepaController@levaduras');
    //-- vistas cepas-hongos
    Route::get('/hongos', 'CepaController@hongos')->name('cepas_hongos');
    Route::get('/hongos/agregar', 'CepaController@hongos');
    Route::get('/hongos/editar/{id}', 'CepaController@hongos');
    //-- vistas caract-hongos
    Route::get('/hongos/{id}', 'CepaController@hongos');
    Route::get('/hongos/{id}/caract-macro', 'CepaController@hongos');
    Route::get('/hongos/{id}/caract-micro', 'CepaController@hongos');
    Route::get('/hongos/{id}/caract-bioqui', 'CepaController@hongos');
    Route::get('/hongos/{id}/identi-molecu', 'CepaController@hongos');
    Route::get('/hongos/{id}/metodo-conser', 'CepaController@hongos');
    Route::get('/hongos/{id}/metodo-conser/agregar', 'CepaController@hongos');
    Route::get('/hongos/{id}/metodo-conser/editar/{id2}', 'CepaController@hongos');
    //-- vistas cepas-actinomicetos
    Route::get('/actinomicetos', 'CepaController@actinomicetos')->name('cepas_actinomicetos');
    Route::get('/actinomicetos/agregar', 'CepaController@actinomicetos');
    Route::get('/actinomicetos/editar/{id}', 'CepaController@actinomicetos');

    //-- crud cepas
    Route::post('/cepas/agregar', 'CepaController@store');
    Route::put('/cepas/editar/{id}', 'CepaController@update');
    Route::delete('/cepas/eliminar/{id}', 'CepaController@destroy');

    //-- crud info-cepas
    Route::post('/info-cepas/agregar', 'InfoCepasController@agregarInfo');

    //-----------------------------------------------------------------------------------------------------------

    //-- crud info-bacterias
    Route::post('/info-caract-bacterias/agregar', 'InfoCaracBacteriasController@agregarInfo');

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

    //-- crud info-bacterias
    Route::post('/info-caract-levaduras/agregar', 'InfoCaracLevadurasController@agregarInfo');

    //-- crud caract-levaduras
    //--- macro
    Route::post('/cepas/levadura/caract-macro', 'CaractMacroLevaduraController@store');
    Route::put('/cepas/levadura/caract-macro/{id}', 'CaractMacroLevaduraController@update');
    Route::delete('/cepas/levadura/caract-macro/{id}', 'CaractMacroLevaduraController@destroy');
    //--- micro
    Route::post('/cepas/levadura/caract-micro', 'CaractMicroLevaduraController@store');
    Route::put('/cepas/levadura/caract-micro/{id}', 'CaractMicroLevaduraController@update');
    Route::delete('/cepas/levadura/caract-micro/{id}', 'CaractMicroLevaduraController@destroy');
    Route::put('/cepas/levadura/caract-micro/agregar-imagen/{id}', 'CaractMicroLevaduraController@agregarImagen');
    Route::put('/cepas/levadura/caract-micro/cambiar-imagen/{id}', 'CaractMicroLevaduraController@cambiarImagen');
    Route::put('/cepas/levadura/caract-micro/eliminar-imagen/{id}', 'CaractMicroLevaduraController@elimarImagen');
    //--- bioqui
    Route::post('/cepas/levadura/caract-bioqui', 'CaractBioquiLevaduraController@store');
    Route::put('/cepas/levadura/caract-bioqui/{id}', 'CaractBioquiLevaduraController@update');
    Route::delete('/cepas/levadura/caract-bioqui/{id}', 'CaractBioquiLevaduraController@destroy');
    Route::put('/cepas/levadura/caract-bioqui/agregar-imagen/{id}', 'CaractBioquiLevaduraController@agregarImagen');
    Route::put('/cepas/levadura/caract-bioqui/cambiar-imagen/{id}', 'CaractBioquiLevaduraController@cambiarImagen');
    Route::put('/cepas/levadura/caract-bioqui/eliminar-imagen/{id}', 'CaractBioquiLevaduraController@elimarImagen');
    //--- identi-molecu
    Route::post('/cepas/levadura/identi-molecu', 'IdentiMolecuLevaduraController@store');
    Route::put('/cepas/levadura/identi-molecu/{id}', 'IdentiMolecuLevaduraController@update');
    Route::delete('/cepas/levadura/identi-molecu/{id}', 'IdentiMolecuLevaduraController@destroy');
    //--- metodo-conser
    Route::post('/cepas/levadura/metodo-conser', 'MetodoConserLevaduraController@store');
    Route::put('/cepas/levadura/metodo-conser/{id}', 'MetodoConserLevaduraController@update');
    Route::delete('/cepas/levadura/metodo-conser/{id}', 'MetodoConserLevaduraController@destroy');


    // Ruta para Vue
    Route::get('/{vue_capture?}', function () {
        return view('layouts-admin.app');
    })->where('vue_capture', '[\/\w\.-]*');
});
