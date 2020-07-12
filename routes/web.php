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

Route::group(['middleware' => ['auth', 'control_sesion']], function () {

    //--------------------- CEPAS --------------------------------------------------------------------
    //-- vistas cepas
    Route::get('/cepas/tabla', 'CepaController@index')->name('cepas');
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
    //actinomiceto
    Route::get('/cepas/actinomiceto/{id}', 'CepaController@index');
    Route::get('/cepas/actinomiceto/{id}/caract-macro', 'CepaController@index');
    Route::get('/cepas/actinomiceto/{id}/caract-micro', 'CepaController@index');
    Route::get('/cepas/actinomiceto/{id}/identi-bioqui', 'CepaController@index');
    Route::get('/cepas/actinomiceto/{id}/otras-caract', 'CepaController@index');
    Route::get('/cepas/actinomiceto/{id}/caract-molecu', 'CepaController@index');
    Route::get('/cepas/actinomiceto/{id}/metodo-conser', 'CepaController@index');
    //-- vista ver 
    Route::get('/cepas/bacteria/ver/{id}', 'CepaController@index');
    Route::get('/cepas/hongo/ver/{id}', 'CepaController@index');
    Route::get('/cepas/levadura/ver/{id}', 'CepaController@index');
    Route::get('/cepas/actinomiceto/ver/{id}', 'CepaController@index');

    //-- crud cepas
    Route::post('/cepas/agregar', 'CepaController@store');
    Route::put('/cepas/editar/{id}', 'CepaController@update');
    Route::delete('/cepas/eliminar/{id}', 'CepaController@destroy');
    Route::put('/cepas/publicar/{id}', 'CepaController@publicar');

    //-- crud info-cepas
    Route::post('/info-cepas/agregar', 'InfoCepasController@agregarInfo');
    Route::put('/info-cepas/editar/{id}', 'InfoCepasController@editarInfo');
    Route::delete('/info-cepas/eliminar/{id}', 'InfoCepasController@eliminarInfo');

    //-------------------------------------------------------------------------------------------

    //--------------------- BACTERIAS -----------------------------------------------------------

    //-- vistas cepas-bacterias
    Route::get('/bacterias/tabla', 'CepaController@bacterias')->name('cepas_bacterias');
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
    //-- vista ver 
    Route::get('/bacterias/ver/{id}', 'CepaController@bacterias');

    //-- crud info-bacterias
    Route::post('/info-caract-bacterias/agregar', 'InfoCaracBacteriasController@agregarInfo');
    Route::put('/info-caract-bacterias/editar/{id}', 'InfoCaracBacteriasController@editarInfo');
    Route::delete('/info-caract-bacterias/eliminar/{id}', 'InfoCaracBacteriasController@eliminarInfo');

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

    //--------------------- LEVADURAS ----------------------------------------------------------

    //-- vistas cepas-levaduras
    Route::get('/levaduras/tabla', 'CepaController@levaduras')->name('cepas_levaduras');
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
    //-- vista ver 
    Route::get('/levaduras/ver/{id}', 'CepaController@levaduras');

    //-- crud info-levaduras
    Route::post('/info-caract-levaduras/agregar', 'InfoCaracLevadurasController@agregarInfo');
    Route::put('/info-caract-levaduras/editar/{id}', 'InfoCaracLevadurasController@editarInfo');
    Route::delete('/info-caract-levaduras/eliminar/{id}', 'InfoCaracLevadurasController@eliminarInfo');

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

    //--------------------- HONGOS -------------------------------------------------------------

    //-- vistas cepas-hongos
    Route::get('/hongos/tabla', 'CepaController@hongos')->name('cepas_hongos');
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
    //-- vista ver 
    Route::get('/hongos/ver/{id}', 'CepaController@hongos');

    //-- crud info-caract-hongos
    Route::post('/info-caract-hongos/agregar', 'InfoCaracHongosController@agregarInfo');
    Route::put('/info-caract-hongos/editar/{id}', 'InfoCaracHongosController@editarInfo');
    Route::delete('/info-caract-hongos/eliminar/{id}', 'InfoCaracHongosController@eliminarInfo');

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

    //--------------------- ACTINOMICETOS -----------------------------------------------------

    //-- vistas cepas-actinomicetos
    Route::get('/actinomicetos/tabla', 'CepaController@actinomicetos')->name('cepas_actinomicetos');
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
    //-- vista ver 
    Route::get('/actinomicetos/ver/{id}', 'CepaController@actinomicetos');

    //-- crud info-caract-actinomicetos
    Route::post('/info-caract-actinomicetos/agregar', 'InfoCaracActinomicetoController@agregarInfo');
    Route::put('/info-caract-actinomicetos/editar/{id}', 'InfoCaracActinomicetoController@editarInfo');
    Route::delete('/info-caract-actinomicetos/eliminar/{id}', 'InfoCaracActinomicetoController@eliminarInfo');

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

    //---------------------- EVENTOS -------------------------------------------------------------

    //-- Calendario
    Route::get('/calendario', 'CalendarioController@index')->name('calendario');
    //---crud
    Route::post('/eventos/agregar', 'CalendarioController@store');
    Route::put('/eventos/editar/{id}', 'CalendarioController@update');
    Route::delete('/eventos/eliminar/{id}', 'CalendarioController@destroy');

    //---------------------- USUARIOS ------------------------------------------------------------
    //-- Perfil
    Route::get('/perfil', 'PerfilController@index')->name('home');
    Route::put('/perfil/cambiar-nombre/{id}', 'PerfilController@cambiarNombre');
    Route::put('/perfil/cambiar-imagen/{id}', 'PerfilController@cambiarImagen');
    Route::put('/perfil/cambiar-contraseña/{id}', 'PerfilController@cambiarContraseña');
    
    //-- Usuarios
    Route::get('/usuarios/tabla-usuarios', 'UsuarioController@index')->name('usuarios');
    Route::get('/usuarios/tabla-usuarios/agregar', 'UsuarioController@index');
    Route::get('/usuarios/tabla-usuarios/editar/{id}', 'UsuarioController@index');
    Route::get('/usuarios/tabla-seguimiento', 'UsuarioController@index');

    Route::post('/usuario/agregar', 'UsuarioController@store');
    Route::put('/usuario/editar/{id}', 'UsuarioController@update');
    Route::delete('/usuario/eliminar/{id}', 'UsuarioController@destroy');
   // Route::put('/usuario/borrarSessionId', 'UsuarioController@borrarSessionId');

    Route::post('/tipo-user/agregar', 'TipoUsuarioController@store');
    Route::put('/tipo-user/editar/{id}', 'TipoUsuarioController@update');
    Route::delete('/tipo-user/eliminar/{id}', 'TipoUsuarioController@destroy');

    //---------------------- EXPORTAR PDF----------------------------------------------------------
    Route::get('/cepa/imprimir/{id}', 'CepaController@imprimirPDF');
    //---------------------- EXPORTAR EXCEL--------------------------------------------------------
    //cepas
    Route::get('/exportar/cepas', 'ExportarExcelCepasController@cepas');
    Route::get('/exportar/tabla/cepas', 'ExportarExcelCepasController@cepasTabla');
    //bacterias
    Route::get('/exportar/bacterias', 'ExportarExcelBacteriasController@bacterias');
    Route::get('/exportar/tabla/bacterias', 'ExportarExcelBacteriasController@bacteriasTabla');
    //hongos
    Route::get('/exportar/hongos', 'ExportarExcelHongosController@hongos');
    Route::get('/exportar/tabla/hongos', 'ExportarExcelHongosController@hongosTabla');
    //levaduras
    Route::get('/exportar/levaduras', 'ExportarExcelLevadurasController@levaduras');
    Route::get('/exportar/tabla/levaduras', 'ExportarExcelLevadurasController@levadurasTabla');
    //actinomicetos
    Route::get('/exportar/actinomicetos', 'ExportarExcelActinomicetosController@actinomicetos');
    Route::get('/exportar/tabla/actinomicetos', 'ExportarExcelActinomicetosController@actinomicetosTabla');

    //metodos-bacterias
    Route::get('/exportar/metodos-bacterias', 'ExportarExcelBacteriasController@metodosBacterias');
    Route::get('/exportar/tabla/metodos-bacterias', 'ExportarExcelBacteriasController@metodosBacteriasTabla');
    //metodos-hongos
    Route::get('/exportar/metodos-hongos', 'ExportarExcelHongosController@metodosHongos');
    Route::get('/exportar/tabla/metodos-hongos', 'ExportarExcelHongosController@metodosHongosTabla');
    //metodos-levaduras
    Route::get('/exportar/metodos-levaduras', 'ExportarExcelLevadurasController@metodosLevaduras');
    Route::get('/exportar/tabla/metodos-levaduras', 'ExportarExcelLevadurasController@metodosLevadurasTabla');
    //actinomicetos
    Route::get('/exportar/metodos-actinomicetos', 'ExportarExcelActinomicetosController@metodosActinomicetos');
    Route::get('/exportar/tabla/metodos-actinomicetos', 'ExportarExcelActinomicetosController@metodosActinomicetosTabla');

    //usuarios
    Route::get('/exportar/usuarios', 'ExportarExcelUsuariosController@usuarios');
    Route::get('/exportar/tabla/usuarios', 'ExportarExcelUsuariosController@usuariosTabla');
    //seguimientos
    Route::get('/exportar/seguimientos', 'ExportarExcelUsuariosController@seguimientos');
    Route::get('/exportar/tabla/seguimientos', 'ExportarExcelUsuariosController@seguimientosTabla');

    // otra-info-cepas
    Route::get('/exportar/generos', 'ExportarExcelCepasController@generos');
    Route::get('/exportar/especies', 'ExportarExcelCepasController@especies');
    Route::get('/exportar/familias', 'ExportarExcelCepasController@familias');
    Route::get('/exportar/divisions', 'ExportarExcelCepasController@divisions');
    Route::get('/exportar/reinos', 'ExportarExcelCepasController@reinos');
    Route::get('/exportar/clases', 'ExportarExcelCepasController@clases');
    Route::get('/exportar/phylums', 'ExportarExcelCepasController@phylums');
    Route::get('/exportar/ordens', 'ExportarExcelCepasController@ordens');
    Route::get('/exportar/tabla/generos', 'ExportarExcelCepasController@generosTabla');
    Route::get('/exportar/tabla/especies', 'ExportarExcelCepasController@especiesTabla');
    Route::get('/exportar/tabla/familias', 'ExportarExcelCepasController@familiasTabla');
    Route::get('/exportar/tabla/divisions', 'ExportarExcelCepasController@divisionsTabla');
    Route::get('/exportar/tabla/reinos', 'ExportarExcelCepasController@reinosTabla');
    Route::get('/exportar/tabla/clases', 'ExportarExcelCepasController@clasesTabla');
    Route::get('/exportar/tabla/phylums', 'ExportarExcelCepasController@phylumsTabla');
    Route::get('/exportar/tabla/ordens', 'ExportarExcelCepasController@ordensTabla');
    // otra-info-bacterias
    Route::get('/exportar/formas-macro-bacteria', 'ExportarExcelBacteriasController@formasMacro');
    Route::get('/exportar/formas-micro-bacteria', 'ExportarExcelBacteriasController@formasMicro');
    Route::get('/exportar/bordes-bacteria', 'ExportarExcelBacteriasController@bordes');
    Route::get('/exportar/detalles-bacteria', 'ExportarExcelBacteriasController@detalles');
    Route::get('/exportar/elevacions-bacteria', 'ExportarExcelBacteriasController@elevacions');
    Route::get('/exportar/superficies-bacteria', 'ExportarExcelBacteriasController@superficies');
    Route::get('/exportar/colors-bacteria', 'ExportarExcelBacteriasController@colors');
    Route::get('/exportar/tipos-metodos-bacteria', 'ExportarExcelBacteriasController@tiposMetodos');
    Route::get('/exportar/tipos-agars-bacteria', 'ExportarExcelBacteriasController@tiposAgars');
    Route::get('/exportar/tabla/formas-macro-bacteria', 'ExportarExcelBacteriasController@formasMacroTabla');
    Route::get('/exportar/tabla/formas-micro-bacteria', 'ExportarExcelBacteriasController@formasMicroTabla');
    Route::get('/exportar/tabla/bordes-bacteria', 'ExportarExcelBacteriasController@bordesTabla');
    Route::get('/exportar/tabla/detalles-bacteria', 'ExportarExcelBacteriasController@detallesTabla');
    Route::get('/exportar/tabla/elevacions-bacteria', 'ExportarExcelBacteriasController@elevacionsTabla');
    Route::get('/exportar/tabla/superficies-bacteria', 'ExportarExcelBacteriasController@superficiesTabla');
    Route::get('/exportar/tabla/colors-bacteria', 'ExportarExcelBacteriasController@colorsTabla');
    Route::get('/exportar/tabla/tipos-metodos-bacteria', 'ExportarExcelBacteriasController@tiposMetodosTabla');
    Route::get('/exportar/tabla/tipos-agars-bacteria', 'ExportarExcelBacteriasController@tiposAgarsTabla');
    //otra-info-hongos
    Route::get('/exportar/colors-hongo', 'ExportarExcelHongosController@colors');
    Route::get('/exportar/texturas-hongo', 'ExportarExcelHongosController@texturas');
    Route::get('/exportar/conidioforos-hongo', 'ExportarExcelHongosController@conidioforos');
    Route::get('/exportar/esporasA-hongo', 'ExportarExcelHongosController@esporasAsexual');
    Route::get('/exportar/esporasS-hongo', 'ExportarExcelHongosController@esporasSexual');
    Route::get('/exportar/tipos-metodos-hongo', 'ExportarExcelHongosController@tiposMetodos');
    Route::get('/exportar/tabla/colors-hongo', 'ExportarExcelHongosController@colorsTabla');
    Route::get('/exportar/tabla/texturas-hongo', 'ExportarExcelHongosController@texturasTabla');
    Route::get('/exportar/tabla/conidioforos-hongo', 'ExportarExcelHongosController@conidioforosTabla');
    Route::get('/exportar/tabla/esporasA-hongo', 'ExportarExcelHongosController@esporasAsexualTabla');
    Route::get('/exportar/tabla/esporasS-hongo', 'ExportarExcelHongosController@esporasSexualTabla');
    Route::get('/exportar/tabla/tipos-metodos-hongo', 'ExportarExcelHongosController@tiposMetodosTabla');
    //otra-info-levaduras
    Route::get('/exportar/colors-levadura', 'ExportarExcelLevadurasController@colors');
    Route::get('/exportar/texturas-levadura', 'ExportarExcelLevadurasController@texturas');
    Route::get('/exportar/tipos-metodos-levadura', 'ExportarExcelLevadurasController@tiposMetodos');
    Route::get('/exportar/tabla/colors-levadura', 'ExportarExcelLevadurasController@colorsTabla');
    Route::get('/exportar/tabla/texturas-levadura', 'ExportarExcelLevadurasController@texturasTabla');
    Route::get('/exportar/tabla/tipos-metodos-levadura', 'ExportarExcelLevadurasController@tiposMetodosTabla');
    //otra-info-actinomicetos
    Route::get('/exportar/colors-actinomiceto', 'ExportarExcelActinomicetosController@colors');
    Route::get('/exportar/texturas-actinomiceto', 'ExportarExcelActinomicetosController@texturas');
    Route::get('/exportar/formas-macro-actinomiceto', 'ExportarExcelActinomicetosController@formasMacro');
    Route::get('/exportar/formas-micro-actinomiceto', 'ExportarExcelActinomicetosController@formasMicro');
    Route::get('/exportar/bordes-actinomiceto', 'ExportarExcelActinomicetosController@bordes');
    Route::get('/exportar/pigmentos-actinomiceto', 'ExportarExcelActinomicetosController@pigmentos');
    Route::get('/exportar/tincions-actinomiceto', 'ExportarExcelActinomicetosController@tincions');
    Route::get('/exportar/superficies-actinomiceto', 'ExportarExcelActinomicetosController@superficies');
    Route::get('/exportar/micelios-actinomiceto', 'ExportarExcelActinomicetosController@micelios');
    Route::get('/exportar/conidioforos-actinomiceto', 'ExportarExcelActinomicetosController@conidioforos');
    Route::get('/exportar/tabla/colors-actinomiceto', 'ExportarExcelActinomicetosController@colorsTabla');
    Route::get('/exportar/tabla/texturas-actinomiceto', 'ExportarExcelActinomicetosController@texturasTabla');
    Route::get('/exportar/tabla/formas-macro-actinomiceto', 'ExportarExcelActinomicetosController@formasMacroTabla');
    Route::get('/exportar/tabla/formas-micro-actinomiceto', 'ExportarExcelActinomicetosController@formasMicroTabla');
    Route::get('/exportar/tabla/bordes-actinomiceto', 'ExportarExcelActinomicetosController@bordesTabla');
    Route::get('/exportar/tabla/pigmentos-actinomiceto', 'ExportarExcelActinomicetosController@pigmentosTabla');
    Route::get('/exportar/tabla/tincions-actinomiceto', 'ExportarExcelActinomicetosController@tincionsTabla');
    Route::get('/exportar/tabla/superficies-actinomiceto', 'ExportarExcelActinomicetosController@superficiesTabla');
    Route::get('/exportar/tabla/micelios-actinomiceto', 'ExportarExcelActinomicetosController@miceliosTabla');
    Route::get('/exportar/tabla/conidioforos-actinomiceto', 'ExportarExcelActinomicetosController@conidioforosTabla');

    //sitio-web
    Route::get('/exportar/investigadores', 'ExportarExcelSitioWebController@investigadores');
    Route::get('/exportar/tabla/investigadores', 'ExportarExcelSitioWebController@investigadoresTabla');
    Route::get('/exportar/proyectos', 'ExportarExcelSitioWebController@proyectos');
    Route::get('/exportar/tabla/proyectos', 'ExportarExcelSitioWebController@proyectosTabla');
    Route::get('/exportar/publicaciones', 'ExportarExcelSitioWebController@publicaciones');
    Route::get('/exportar/tabla/publicaciones', 'ExportarExcelSitioWebController@publicacionesTabla');
    Route::get('/exportar/equipamientos', 'ExportarExcelSitioWebController@equipamientos');
    Route::get('/exportar/tabla/equipamientos', 'ExportarExcelSitioWebController@equipamientosTabla');
    Route::get('/exportar/noticias', 'ExportarExcelSitioWebController@noticias');
    Route::get('/exportar/tabla/noticias', 'ExportarExcelSitioWebController@noticiasTabla');
    Route::get('/exportar/actividades', 'ExportarExcelSitioWebController@actividades');
    Route::get('/exportar/tabla/actividades', 'ExportarExcelSitioWebController@actividadesTabla');
    Route::get('/exportar/novedades', 'ExportarExcelSitioWebController@novedades');
    Route::get('/exportar/tabla/novedades', 'ExportarExcelSitioWebController@novedadesTabla');

    //--------------------- OTRA INFORMACION -----------------------------------------------------
    Route::get('/otra-info/cepas', 'OtraInfoController@index')->name('otra_info');
    Route::get('/otra-info/bacterias', 'OtraInfoController@index');
    Route::get('/otra-info/hongos', 'OtraInfoController@index');
    Route::get('/otra-info/levaduras', 'OtraInfoController@index');
    Route::get('/otra-info/actinomicetos', 'OtraInfoController@index');

    //--------------------- IMAGENES LOGIN -----------------------------------------------------
    Route::get('/imagenes-login/ver', 'ImagenLoginController@index')->name('imagenes');
    Route::get('/imagenes-login/agregar', 'ImagenLoginController@index');
    Route::get('/imagenes-login/editar/{id}', 'ImagenLoginController@index');
    Route::put('/login/imagen/{id}', 'ImagenLoginController@update');


    //--------------------- ADMINISTRAR SITIO WEB -----------------------------------------------
    //quienes somos
    Route::get('/quienes-somos/mision', 'QuienesSomosController@index')->name('quienes-somos');
    Route::get('/quienes-somos/vision', 'QuienesSomosController@index');
    Route::get('/quienes-somos/objetivos', 'QuienesSomosController@index');
    Route::put('/quienes-somos/vision/cambiar', 'QuienesSomosController@cambiarVision');
    Route::put('/quienes-somos/mision/cambiar', 'QuienesSomosController@cambiarMision');
    Route::put('/quienes-somos/objetivos/cambiar', 'QuienesSomosController@cambiarObjetivos');
    //investigadores
    Route::get('/investigadores', 'InvestigadoresController@index')->name('investigadores');
    Route::post('/investigadores', 'InvestigadoresController@store');
    Route::put('/investigadores/{id}', 'InvestigadoresController@update');
    Route::delete('/investigadores/{id}', 'InvestigadoresController@destroy');
    Route::put('/investigadores/publicar/{id}', 'InvestigadoresController@publicar');
    //documentos
    Route::get('/documentos/proyectos', 'DocumentosController@index')->name('proyectos');
    Route::get('/documentos/publicaciones', 'DocumentosController@index');
    Route::post('/documentos', 'DocumentosController@store');
    Route::put('/documentos/{id}', 'DocumentosController@update');
    Route::delete('/documentos/{id}', 'DocumentosController@destroy');
    Route::put('/documentos/publicar/{id}', 'DocumentosController@publicar');
    //equipamiento
    Route::get('/equipamientos', 'EquipamientoController@index')->name('equipamiento');
    Route::post('/equipamientos', 'EquipamientoController@store');
    Route::put('/equipamientos/{id}', 'EquipamientoController@update');
    Route::delete('/equipamientos/{id}', 'EquipamientoController@destroy');
    Route::put('/equipamientos/publicar/{id}', 'EquipamientoController@publicar');
    //publicidad
    Route::get('/publicidad/noticias', 'PublicidadController@index')->name('noticias');
    Route::get('/publicidad/actividades', 'PublicidadController@index');
    Route::get('/publicidad/novedades', 'PublicidadController@index');
    Route::post('/publicidad', 'PublicidadController@store');
    Route::put('/publicidad/{id}', 'PublicidadController@update');
    Route::delete('/publicidad/{id}', 'PublicidadController@destroy');
    Route::put('/publicidad/publicar/{id}', 'PublicidadController@publicar');

    //editor
    Route::post('/editor/upload', 'ImagenesEditorController@uploadImagen');
    Route::get('/editor/upload', 'ImagenesEditorController@eliminarImagenesDelStorage');

    //--------------------- RUTAS GET DEL PANEL ADMINISTRACION -----------------------------------
    Route::group(['prefix' => 'info-panel'], function () {
        //----------------------- CEPAS  ---------------------------------------------------------
        //----------------------- urls tablas cepas  ---------------------------------------------
        Route::get('cepas', 'InfoPanelCepasController@cepas');
        Route::get('cepas-bacterias', 'InfoPanelBacteriasController@bacterias');
        Route::get('cepas-hongos', 'InfoPanelHongosController@hongos');
        Route::get('cepas-levaduras', 'InfoPanelLevadurasController@levaduras');
        Route::get('cepas-actinomicetos', 'InfoPanelActinomicetosController@actinomicetos');
        //----------------------- obtener cepa ---------------------------------------------------
        Route::get('cepa/{id}', 'InfoPanelCepasController@obtenerCepa');
        //--------------------- obtener caracteristicas cepas ------------------------------------
        Route::get('cepa/agregar-editar-caract/{id}', 'InfoPanelCepasController@obtenerCaracteristicasCepa');
        //----------- urls tablas metodos de conservacion ----------------------------------------
        Route::get('cepa/bacteria/metodos-conser/{id}', 'InfoPanelBacteriasController@metodos');
        Route::get('cepa/levadura/metodos-conser/{id}', 'InfoPanelLevadurasController@metodos');
        Route::get('cepa/hongo/metodos-conser/{id}', 'InfoPanelHongosController@metodos');
        //----------- urls tablas info cepas ----------------------------------------
        Route::get('generos', 'InfoPanelCepasController@generos');
        Route::get('especies', 'InfoPanelCepasController@especies');
        Route::get('familias', 'InfoPanelCepasController@familias');
        Route::get('divisions', 'InfoPanelCepasController@divisions');
        Route::get('reinos', 'InfoPanelCepasController@reinos');
        Route::get('clases', 'InfoPanelCepasController@clases');
        Route::get('phylums', 'InfoPanelCepasController@phylums');
        Route::get('ordens', 'InfoPanelCepasController@ordens');
        //----------- urls tablas info bacterias ----------------------------------------
        Route::get('formas-macro-bacteria', 'InfoPanelBacteriasController@formasMacro');
        Route::get('formas-micro-bacteria', 'InfoPanelBacteriasController@formasMicro');
        Route::get('bordes-bacteria', 'InfoPanelBacteriasController@bordes');
        Route::get('detalles-bacteria', 'InfoPanelBacteriasController@detalles');
        Route::get('elevacions-bacteria', 'InfoPanelBacteriasController@elevacions');
        Route::get('superficies-bacteria', 'InfoPanelBacteriasController@superficies');
        Route::get('colors-bacteria', 'InfoPanelBacteriasController@colors');
        Route::get('tipos-metodos-bacteria', 'InfoPanelBacteriasController@tiposMetodos');
        Route::get('tipos-agars-bacteria', 'InfoPanelBacteriasController@tiposAgars');
        //----------- urls tablas info hongos ----------------------------------------
        Route::get('colors-hongo', 'InfoPanelHongosController@colors');
        Route::get('texturas-hongo', 'InfoPanelHongosController@texturas');
        Route::get('conidioforos-hongo', 'InfoPanelHongosController@conidioforos');
        Route::get('esporasA-hongo', 'InfoPanelHongosController@esporasAsexual');
        Route::get('esporasS-hongo', 'InfoPanelHongosController@esporasSexual');
        Route::get('tipos-metodos-hongo', 'InfoPanelHongosController@tiposMetodos');
        //----------- urls tablas info levaduras ----------------------------------------
        Route::get('colors-levadura', 'InfoPanelLevadurasController@colors');
        Route::get('texturas-levadura', 'InfoPanelLevadurasController@texturas');
        Route::get('tipos-metodos-levadura', 'InfoPanelLevadurasController@tiposMetodos');
        //----------- urls tablas info actinomicetos ----------------------------------------
        Route::get('colors-actinomiceto', 'InfoPanelActinomicetosController@colors');
        Route::get('texturas-actinomiceto', 'InfoPanelActinomicetosController@texturas');
        Route::get('formas-macro-actinomiceto', 'InfoPanelActinomicetosController@formasMacro');
        Route::get('formas-micro-actinomiceto', 'InfoPanelActinomicetosController@formasMicro');
        Route::get('bordes-actinomiceto', 'InfoPanelActinomicetosController@bordes');
        Route::get('pigmentos-actinomiceto', 'InfoPanelActinomicetosController@pigmentos');
        Route::get('tincions-actinomiceto', 'InfoPanelActinomicetosController@tincions');
        Route::get('superficies-actinomiceto', 'InfoPanelActinomicetosController@superficies');
        Route::get('micelios-actinomiceto', 'InfoPanelActinomicetosController@micelios');
        Route::get('conidioforos-actinomiceto', 'InfoPanelActinomicetosController@conidioforos');
        //----------------------- info cepas y caracts  ------------------------------------------
        Route::get('info-tipos-cepas', 'InfoPanelCepasController@infoTipos');
        Route::get('info-caract-bacterias', 'InfoPanelBacteriasController@infoCaract');
        Route::get('info-caract-levaduras', 'InfoPanelLevadurasController@infoCaract');
        Route::get('info-caract-hongos', 'InfoPanelHongosController@infoCaract');
        Route::get('info-caract-actinomicetos', 'InfoPanelActinomicetosController@infoCaract');
        //--------------------------- EVENTOS  ---------------------------------------------------
        //-------------------------url eventos metodos--------------------------------------------
        Route::get('eventos-metodos-bacterias', 'InfoPanelEventosController@eventosBacterias');
        Route::get('eventos-metodos-levaduras', 'InfoPanelEventosController@eventosLevaduras');
        Route::get('eventos-metodos-hongos', 'InfoPanelEventosController@eventosHongos');
        //-------------------------url eventos ---------------------------------------------------
        Route::get('eventos', 'InfoPanelEventosController@eventos');
        //------------------------ USUARIOS ------------------------------------------------------
        //------------------------- url tabla usuarios -------------------------------------------
        Route::get('usuarios', 'InfoPanelUsuariosController@tablaUsuarios');
        //--------------------------- tiposUsuarios - usuairos -----------------------------------------
        Route::get('tipos-users', 'InfoPanelUsuariosController@tipoUsuarios');
        Route::get('users', 'InfoPanelUsuariosController@usuarios');
        //------------------------- url tabla seguimiento -------------------------------------
        Route::get('seguimientos', 'InfoPanelUsuariosController@tablaSeguimientos');
        //--------------------------------------------------------------------------------------------
        //------------------------ IMAGENES LOGIN ------------------------------------------------------
        //------------------------- imagenes -------------------------------------------
        Route::get('login-imagenes', 'ImagenLoginController@imagenes');
        //------------------------ SITIO WEB ------------------------------------------------------
        //------------------------- quienes somos -------------------------------------------
        Route::get('quienes-somos', 'InfoPanelSitioWebController@quienesSomos');
        Route::get('investigadores-tabla', 'InfoPanelSitioWebController@investigadoresTabla');
        Route::get('investigadores', 'InfoPanelSitioWebController@investigadores');
        Route::get('proyectos-tabla', 'InfoPanelSitioWebController@proyectosTabla');
        Route::get('publicaciones-tabla', 'InfoPanelSitioWebController@publicacionesTabla');
        Route::get('documentos', 'InfoPanelSitioWebController@documentos');
        Route::get('equipamientos-tabla', 'InfoPanelSitioWebController@equipamientosTabla');
        Route::get('equipamientos', 'InfoPanelSitioWebController@equipamientos');
        Route::get('noticias-tabla', 'InfoPanelSitioWebController@noticiasTabla');
        Route::get('actividades-tabla', 'InfoPanelSitioWebController@actividadesTabla');
        Route::get('novedades-tabla', 'InfoPanelSitioWebController@novedadesTabla');
        Route::get('publicidad', 'InfoPanelSitioWebController@publicidad');
    });


    // 404 admin
    Route::get('{vue_capture?}', 'ErroresController@error_404')->where('vue_capture', '[\/\w\.-]*');
});

// 404 admin
