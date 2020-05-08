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

// Password Confirmation Routes...
Route::get('password/confirm', 'Auth\ConfirmPasswordController@showConfirmForm')->name('password.confirm');
Route::post('password/confirm', 'Auth\ConfirmPasswordController@confirm');

// Email Verification Routes...
Route::get('email/verify', 'Auth\VerificationController@show')->name('verification.notice');
Route::get('email/verify/{id}/{hash}', 'Auth\VerificationController@verify')->name('verification.verify');
Route::post('email/resend', 'Auth\VerificationController@resend')->name('verification.resend');
//, 'verified'
Route::group(['middleware' => ['auth']], function () {

    //--------------------- CEPAS ---------------------------
    //-- vistas cepas
    Route::get('/cepas', 'CepaController@index')->name('cepas');
    Route::get('/cepas/agregar', 'CepaController@index');
    Route::get('/cepas/editar/{id}', 'CepaController@index');
    //-- vistas caract - todas
    //bacteria
    Route::get('/cepas/bacteria/{id}', 'CepaController@index');
    Route::get('/cepas/bacteria/{id}/caract-macro', 'CepaController@index');
    Route::get('/cepas/bacteria/{id}/caract-micro', 'CepaController@index');
    Route::get('/cepas/bacteria/{id}/caract-bioqui', 'CepaController@index');
    Route::get('/cepas/bacteria/{id}/caract-fisio', 'CepaController@index');
    Route::get('/cepas/bacteria/{id}/identi-molecu', 'CepaController@index');
    Route::get('/cepas/bacteria/{id}/metodo-conser', 'CepaController@index');
    Route::get('/cepas/bacteria/{id}/metodo-conser/agregar', 'CepaController@index');
    Route::get('/cepas/bacteria/{id}/metodo-conser/editar/{id2}', 'CepaController@index');
    //levadura
    Route::get('/cepas/levadura/{id}', 'CepaController@index');
    Route::get('/cepas/levadura/{id}/caract-macro', 'CepaController@index');
    Route::get('/cepas/levadura/{id}/caract-micro', 'CepaController@index');
    Route::get('/cepas/levadura/{id}/caract-bioqui', 'CepaController@index');
    Route::get('/cepas/levadura/{id}/identi-molecu', 'CepaController@index');
    Route::get('/cepas/levadura/{id}/metodo-conser', 'CepaController@index');
    Route::get('/cepas/levadura/{id}/metodo-conser/agregar', 'CepaController@index');
    Route::get('/cepas/levadura/{id}/metodo-conser/editar/{id2}', 'CepaController@index');
    //hongo
    Route::get('/cepas/hongo/{id}', 'CepaController@index');
    Route::get('/cepas/hongo/{id}/caract-macro', 'CepaController@index');
    Route::get('/cepas/hongo/{id}/caract-micro', 'CepaController@index');
    Route::get('/cepas/hongo/{id}/caract-bioqui', 'CepaController@index');
    Route::get('/cepas/hongo/{id}/identi-molecu', 'CepaController@index');
    Route::get('/cepas/hongo/{id}/metodo-conser', 'CepaController@index');
    Route::get('/cepas/hongo/{id}/metodo-conser/agregar', 'CepaController@index');
    Route::get('/cepas/hongo/{id}/metodo-conser/editar/{id2}', 'CepaController@index');

    //-- crud cepas
    Route::post('/cepas/agregar', 'CepaController@store');
    Route::put('/cepas/editar/{id}', 'CepaController@update');
    Route::delete('/cepas/eliminar/{id}', 'CepaController@destroy');

    //-- crud info-cepas
    Route::post('/info-cepas/agregar', 'InfoCepasController@agregarInfo');

    //-----------------------------------------------------------------------------------------------------------

    //--------------------- BACTERIAS ---------------------------------

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

    //--------------------- LEVADURAS ---------------------------------

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

    //-- crud info-levaduras
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

    //--------------------- HONGOS ---------------------------------

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

    //-- crud info-caract-hongos
    Route::post('/info-caract-hongos/agregar', 'InfoCaracHongosController@agregarInfo');

    //crud caract-hongos
    //---macro
    Route::post('/cepas/hongo/caract-macro', 'CaractMacroHongoController@store');
    Route::put('/cepas/hongo/caract-macro/{id}', 'CaractMacroHongoController@update');
    Route::delete('/cepas/hongo/caract-macro/{id}', 'CaractMacroHongoController@destroy');
    //---micro
    Route::post('/cepas/hongo/caract-micro', 'CaractMicroHongoController@store');
    Route::put('/cepas/hongo/caract-micro/{id}', 'CaractMicroHongoController@update');
    Route::delete('/cepas/hongo/caract-micro/{id}', 'CaractMicroHongoController@destroy');
    Route::put('/cepas/hongo/caract-micro/agregar-imagen/{id}', 'CaractMicroHongoController@agregarImagen');
    Route::put('/cepas/hongo/caract-micro/cambiar-imagen/{id}', 'CaractMicroHongoController@cambiarImagen');
    Route::put('/cepas/hongo/caract-micro/eliminar-imagen/{id}', 'CaractMicroHongoController@elimarImagen');
    //--bioqui
    Route::post('/cepas/hongo/caract-bioqui', 'CaractBioquiHongoController@store');
    Route::put('/cepas/hongo/caract-bioqui/{id}', 'CaractBioquiHongoController@update');
    Route::delete('/cepas/hongo/caract-bioqui/{id}', 'CaractBioquiHongoController@destroy');
    Route::put('/cepas/hongo/caract-bioqui/agregar-imagen/{id}', 'CaractBioquiHongoController@agregarImagen');
    Route::put('/cepas/hongo/caract-bioqui/cambiar-imagen/{id}', 'CaractBioquiHongoController@cambiarImagen');
    Route::put('/cepas/hongo/caract-bioqui/eliminar-imagen/{id}', 'CaractBioquiHongoController@elimarImagen');
    //--identi-molecu
    Route::post('/cepas/hongo/identi-molecu', 'IdentiMolecuHongoController@store');
    Route::put('/cepas/hongo/identi-molecu/{id}', 'IdentiMolecuHongoController@update');
    Route::delete('/cepas/hongo/identi-molecu/{id}', 'IdentiMolecuHongoController@destroy');
    //--- metodo-conser
    Route::post('/cepas/hongo/metodo-conser', 'MetodoConserHongoController@store');
    Route::put('/cepas/hongo/metodo-conser/{id}', 'MetodoConserHongoController@update');
    Route::delete('/cepas/hongo/metodo-conser/{id}', 'MetodoConserHongoController@destroy');

    //--------------------- ACTINOMICETOS ---------------------------------

    //-- vistas cepas-actinomicetos
    Route::get('/actinomicetos', 'CepaController@actinomicetos')->name('cepas_actinomicetos');
    Route::get('/actinomicetos/agregar', 'CepaController@actinomicetos');
    Route::get('/actinomicetos/editar/{id}', 'CepaController@actinomicetos');
    //-- vistas caract-actinomicetos
    Route::get('/actinomicetos/{id}', 'CepaController@actinomicetos');
    Route::get('/actinomicetos/{id}/caract-macro', 'CepaController@actinomicetos');
    Route::get('/actinomicetos/{id}/caract-micro', 'CepaController@actinomicetos');
    Route::get('/actinomicetos/{id}/identi-bioqui', 'CepaController@actinomicetos');
    Route::get('/actinomicetos/{id}/otras-caract', 'CepaController@actinomicetos');
    Route::get('/actinomicetos/{id}/caract-molecu', 'CepaController@actinomicetos');
    Route::get('/actinomicetos/{id}/metodo-conser', 'CepaController@actinomicetos');

    //-- crud info-caract-actinomicetos
    Route::post('/info-caract-actinomicetos/agregar', 'InfoCaracActinomicetoController@agregarInfo');

    //crud caract-actinomicetos
    //---macro
    Route::post('/cepas/actinomiceto/caract-macro', 'CaractMacroActinomicetoController@store');
    Route::put('/cepas/actinomiceto/caract-macro/{id}', 'CaractMacroActinomicetoController@update');
    Route::delete('/cepas/actinomiceto/caract-macro/{id}', 'CaractMacroActinomicetoController@destroy');
    //---micro
    Route::post('/cepas/actinomiceto/caract-micro', 'CaractMicroActinomicetoController@store');
    Route::put('/cepas/actinomiceto/caract-micro/{id}', 'CaractMicroActinomicetoController@update');
    Route::delete('/cepas/actinomiceto/caract-micro/{id}', 'CaractMicroActinomicetoController@destroy');
    Route::put('/cepas/actinomiceto/caract-micro/agregar-imagen/{id}', 'CaractMicroActinomicetoController@agregarImagen');
    Route::put('/cepas/actinomiceto/caract-micro/cambiar-imagen/{id}', 'CaractMicroActinomicetoController@cambiarImagen');
    Route::put('/cepas/actinomiceto/caract-micro/eliminar-imagen/{id}', 'CaractMicroActinomicetoController@elimarImagen');
    //--bioqui
    Route::post('/cepas/actinomiceto/identi-bioqui', 'IdentiBioquiActinomicetoController@store');
    Route::put('/cepas/actinomiceto/identi-bioqui/{id}', 'IdentiBioquiActinomicetoController@update');
    Route::delete('/cepas/actinomiceto/identi-bioqui/{id}', 'IdentiBioquiActinomicetoController@destroy');
    Route::put('/cepas/actinomiceto/identi-bioqui/agregar-imagen/{id}', 'IdentiBioquiActinomicetoController@agregarImagen');
    Route::put('/cepas/actinomiceto/identi-bioqui/cambiar-imagen/{id}', 'IdentiBioquiActinomicetoController@cambiarImagen');
    Route::put('/cepas/actinomiceto/identi-bioqui/eliminar-imagen/{id}', 'IdentiBioquiActinomicetoController@elimarImagen');
    //--otras
    Route::post('/cepas/actinomiceto/otras-caract', 'OtrasCaractActinomicetoController@store');
    Route::put('/cepas/actinomiceto/otras-caract/{id}', 'OtrasCaractActinomicetoController@update');
    Route::delete('/cepas/actinomiceto/otras-caract/{id}', 'OtrasCaractActinomicetoController@destroy');
    Route::put('/cepas/actinomiceto/otras-caract/agregar-imagen/{id}', 'OtrasCaractActinomicetoController@agregarImagen');
    Route::put('/cepas/actinomiceto/otras-caract/cambiar-imagen/{id}', 'OtrasCaractActinomicetoController@cambiarImagen');
    Route::put('/cepas/actinomiceto/otras-caract/eliminar-imagen/{id}', 'OtrasCaractActinomicetoController@elimarImagen');

    //---------------------- EVENTOS -----------------------------------------

    //-- Calendario
    Route::get('/calendario', 'CalendarioController@index')->name('calendario');
    //---crud
    Route::post('/eventos/agregar', 'CalendarioController@store');
    Route::put('/eventos/editar/{id}', 'CalendarioController@update');
    Route::delete('/eventos/eliminar/{id}', 'CalendarioController@destroy');

    //---------------------- USUARIOS ------------------------------------------
    //-- Perfil
    Route::get('/perfil', 'PerfilController@index')->name('home');
    Route::put('/perfil/cambiar-nombre/{id}', 'PerfilController@cambiarNombre');
    Route::put('/perfil/cambiar-imagen/{id}', 'PerfilController@cambiarImagen');
    Route::put('/perfil/cambiar-contraseña/{id}', 'PerfilController@cambiarContraseña');
    //-- Usuarios
    Route::get('/usuarios', 'UsuarioController@index')->name('usuarios');
    Route::get('/usuarios/agregar', 'UsuarioController@index');
    Route::get('/usuarios/editar/{id}', 'UsuarioController@index');
    Route::get('/usuarios/tabla-seguimiento', 'UsuarioController@index');

    Route::post('/usuario/agregar', 'UsuarioController@store');
    Route::put('/usuario/editar/{id}', 'UsuarioController@update');
    Route::delete('/usuario/eliminar/{id}', 'UsuarioController@destroy');

    Route::post('/tipo-user/agregar', 'TipoUsuarioController@store');
    Route::put('/tipo-user/editar/{id}', 'UsuariosController@update');
    Route::delete('/tipo-user/eliminar/{id}', 'UsuariosController@destroy');

    // Ruta para Vue
    Route::get('/{vue_capture?}', function () {
        return view('app');
    })->where('vue_capture', '[\/\w\.-]*');
});
