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
    //--------------------- CEPAS -------------------------------------------------------------------
    //-- crud cepas
    Route::post('/cepas/agregar', 'CepaController@store')->middleware('control_permisos:agregar-cepa');
    Route::delete('/cepas/eliminar/{id}', 'CepaController@destroy')->middleware('control_permisos:eliminar-cepa');
    Route::group(['middleware' => ['control_permisos:editar-cepa']], function () {
        Route::put('/cepas/editar/{id}', 'CepaController@update');
        Route::put('/cepas/publicar/{id}', 'CepaController@publicar');
    });
    //-------------------------------------------------------------------------------------------

    Route::group(['middleware' => ['control_permisos:caract-cepa']], function () {
        //--------------------- BACTERIAS -----------------------------------------------------------
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

        // ----------------------- EXCEl --------------------------------------
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
    });

    //---------------------- EVENTOS -------------------------------------------------------------

    //-- Calendario
    //---crud
    Route::post('/eventos/agregar', 'CalendarioController@store');
    Route::put('/eventos/editar/{id}', 'CalendarioController@update');
    Route::delete('/eventos/eliminar/{id}', 'CalendarioController@destroy');

    //---------------------- USUARIOS ------------------------------------------------------------
    //-- Perfil
    Route::put('/perfil/cambiar-nombre/{id}', 'PerfilController@cambiarNombre');
    Route::put('/perfil/cambiar-imagen/{id}', 'PerfilController@cambiarImagen');
    Route::put('/perfil/cambiar-contraseña/{id}', 'PerfilController@cambiarContraseña');

    //-- Usuarios
    Route::post('/usuario/agregar', 'UsuarioController@store')->middleware('control_permisos:agregar-usuario');
    Route::put('/usuario/editar/{id}', 'UsuarioController@update')->middleware('control_permisos:editar-usuario');
    Route::delete('/usuario/eliminar/{id}', 'UsuarioController@destroy')->middleware('control_permisos:eliminar-usuario');

    Route::post('/rol/agregar', 'RolController@store');
    Route::put('/rol/editar/{id}', 'RolController@update');
    Route::delete('/rol/eliminar/{id}', 'RolController@destroy');
    Route::put('/rol/agregar-permisos/{id}', 'RolController@modificarPermisos');

    //---------------------- EXPORTAR PDF----------------------------------------------------------
    Route::get('/cepa/imprimir/{id}', 'CepaController@imprimirPDF')->middleware('control_permisos:ver-cepa');
    //---------------------- EXPORTAR EXCEL--------------------------------------------------------
    Route::group(['middleware' => ['control_permisos:agregar-cepa,editar-cepa,eliminar-cepa,ver-cepa,caract-cepa']], function () {
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
    });

    Route::group(['middleware' => ['control_permisos:agregar-usuario,editar-usuario,eliminar-usuario']], function () {
        //usuarios
        Route::get('/exportar/usuarios', 'ExportarExcelUsuariosController@usuarios');
        Route::get('/exportar/tabla/usuarios', 'ExportarExcelUsuariosController@usuariosTabla');
    });

    //seguimientos
    Route::get('/exportar/seguimientos', 'ExportarExcelUsuariosController@seguimientos');
    Route::get('/exportar/tabla/seguimientos', 'ExportarExcelUsuariosController@seguimientosTabla');

    Route::group(['middleware' => ['control_permisos:agregar-otra,editar-otra,eliminar-otra']], function () {

        //--------------------- OTRA INFORMACION -----------------------------------------------------
        //-- crud info-cepas
        Route::post('/info-cepas/agregar', 'InfoCepasController@agregarInfo');
        Route::put('/info-cepas/editar/{id}', 'InfoCepasController@editarInfo');
        Route::delete('/info-cepas/eliminar/{id}', 'InfoCepasController@eliminarInfo');

        //-- crud info-bacterias
        Route::post('/info-caract-bacterias/agregar', 'InfoCaracBacteriasController@agregarInfo');
        Route::put('/info-caract-bacterias/editar/{id}', 'InfoCaracBacteriasController@editarInfo');
        Route::delete('/info-caract-bacterias/eliminar/{id}', 'InfoCaracBacteriasController@eliminarInfo');

        //-- crud info-caract-hongos
        Route::post('/info-caract-hongos/agregar', 'InfoCaracHongosController@agregarInfo');
        Route::put('/info-caract-hongos/editar/{id}', 'InfoCaracHongosController@editarInfo');
        Route::delete('/info-caract-hongos/eliminar/{id}', 'InfoCaracHongosController@eliminarInfo');

        //-- crud info-levaduras
        Route::post('/info-caract-levaduras/agregar', 'InfoCaracLevadurasController@agregarInfo');
        Route::put('/info-caract-levaduras/editar/{id}', 'InfoCaracLevadurasController@editarInfo');
        Route::delete('/info-caract-levaduras/eliminar/{id}', 'InfoCaracLevadurasController@eliminarInfo');

        //-- crud info-caract-actinomicetos
        Route::post('/info-caract-actinomicetos/agregar', 'InfoCaracActinomicetosController@agregarInfo');
        Route::put('/info-caract-actinomicetos/editar/{id}', 'InfoCaracActinomicetosController@editarInfo');
        Route::delete('/info-caract-actinomicetos/eliminar/{id}', 'InfoCaracActinomicetosController@eliminarInfo');

        //----------------------------------- EXCEL -------------------------------------------
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
    });

    //sitio-web
    Route::group(['middleware' => ['control_permisos:agregar-investigador,editar-investigador,eliminar-investigador']], function () {
        Route::get('/exportar/investigadores', 'ExportarExcelSitioWebController@investigadores');
        Route::get('/exportar/tabla/investigadores', 'ExportarExcelSitioWebController@investigadoresTabla');
    });
    Route::group(['middleware' => ['control_permisos:agregar-proyecto,editar-proyecto,eliminar-proyecto']], function () {
        Route::get('/exportar/proyectos', 'ExportarExcelSitioWebController@proyectos');
        Route::get('/exportar/tabla/proyectos', 'ExportarExcelSitioWebController@proyectosTabla');
    });
    Route::group(['middleware' => ['control_permisos:agregar-publicacion,editar-publicacion,eliminar-publicacion']], function () {
        Route::get('/exportar/publicaciones', 'ExportarExcelSitioWebController@publicaciones');
        Route::get('/exportar/tabla/publicaciones', 'ExportarExcelSitioWebController@publicacionesTabla');
    });
    Route::group(['middleware' => ['control_permisos:agregar-equipamiento,editar-equipamiento,eliminar-equipamiento']], function () {
        Route::get('/exportar/equipamientos', 'ExportarExcelSitioWebController@equipamientos');
        Route::get('/exportar/tabla/equipamientos', 'ExportarExcelSitioWebController@equipamientosTabla');
    });
    Route::group(['middleware' => ['control_permisos:agregar-noticia,editar-noticia,eliminar-noticia']], function () {
        Route::get('/exportar/noticias', 'ExportarExcelSitioWebController@noticias');
        Route::get('/exportar/tabla/noticias', 'ExportarExcelSitioWebController@noticiasTabla');
    });
    Route::group(['middleware' => ['control_permisos:agregar-actividad,editar-actividad,eliminar-actividad']], function () {
        Route::get('/exportar/actividades', 'ExportarExcelSitioWebController@actividades');
        Route::get('/exportar/tabla/actividades', 'ExportarExcelSitioWebController@actividadesTabla');
    });
    Route::group(['middleware' => ['control_permisos:agregar-novedad,editar-novedad,eliminar-novedad']], function () {
        Route::get('/exportar/novedades', 'ExportarExcelSitioWebController@novedades');
        Route::get('/exportar/tabla/novedades', 'ExportarExcelSitioWebController@novedadesTabla');
    });

    //--------------------- IMAGENES LOGIN -----------------------------------------------------
    Route::put('/login/imagen/{id}', 'ImagenLoginController@update')->middleware('control_permisos:editar-imglogin');

    //--------------------- ADMINISTRAR SITIO WEB -----------------------------------------------
    //quienes somos
    Route::put('/quienes-somos/vision/cambiar', 'QuienesSomosController@cambiarVision')->middleware('control_permisos:editar-vision');
    Route::put('/quienes-somos/mision/cambiar', 'QuienesSomosController@cambiarMision')->middleware('control_permisos:editar-mision');
    Route::put('/quienes-somos/objetivos/cambiar', 'QuienesSomosController@cambiarObjetivos')->middleware('control_permisos:editar-objetivos');
    //investigadores
    Route::post('/investigadores', 'InvestigadoresController@store')->middleware('control_permisos:agregar-investigador');
    Route::delete('/investigadores/{id}', 'InvestigadoresController@destroy')->middleware('control_permisos:eliminar-investigador');
    Route::group(['middleware' => ['control_permisos:editar-investigador']], function () {
        Route::put('/investigadores/{id}', 'InvestigadoresController@update');
        Route::put('/investigadores/publicar/{id}', 'InvestigadoresController@publicar');
    });
    //documentos
    Route::post('/documentos', 'DocumentosController@store')->middleware('control_permisos:agregar-proyecto,agregar-publicacion');
    Route::delete('/documentos/{id}', 'DocumentosController@destroy')->middleware('control_permisos:eliminar-proyecto,eliminar-publicacion');
    Route::group(['middleware' => ['control_permisos:editar-proyecto,editar-publicacion']], function () {
        Route::put('/documentos/{id}', 'DocumentosController@update');
        Route::put('/documentos/publicar/{id}', 'DocumentosController@publicar');
    });
    //equipamiento
    Route::post('/equipamientos', 'EquipamientoController@store')->middleware('control_permisos:agregar-equipamiento');
    Route::delete('/equipamientos/{id}', 'EquipamientoController@destroy')->middleware('control_permisos:eliminar-equipamiento');
    Route::group(['middleware' => ['control_permisos:editar-equipamiento']], function () {
        Route::put('/equipamientos/{id}', 'EquipamientoController@update');
        Route::put('/equipamientos/publicar/{id}', 'EquipamientoController@publicar');
    });
    //publicidad
    Route::post('/publicidad', 'PublicidadController@store')->middleware('control_permisos:agregar-noticia,agregar-novedad,agregar-actividad');
    Route::delete('/publicidad/{id}', 'PublicidadController@destroy')->middleware('control_permisos:eliminar-noticia,eliminar-novedad,eliminar-actividad');
    Route::group(['middleware' => ['control_permisos:editar-noticia,editar-novedad,editar-actividad']], function () {
        Route::put('/publicidad/{id}', 'PublicidadController@update');
        Route::put('/publicidad/publicar/{id}', 'PublicidadController@publicar');
    });

    //editor
    Route::post('/editor/upload', 'ImagenesEditorController@uploadImagen');
    Route::get('/editor/upload', 'ImagenesEditorController@eliminarImagenesDelStorage');

    //--------------------- RUTAS GET DEL PANEL ADMINISTRACION -----------------------------------
    Route::group(['prefix' => 'info-panel'], function () {
        //----------------------- CEPAS  ---------------------------------------------------------
        Route::group(['middleware' => ['control_permisos:agregar-cepa,editar-cepa,eliminar-cepa,ver-cepa,caract-cepa']], function () {
            //----------------------- urls cepas  ---------------------------------------------
            Route::get('cepas', 'InfoPanelCepasController@cepas');
            Route::get('cepas-tabla', 'InfoPanelCepasController@cepasTabla');
            Route::get('bacterias-tabla', 'InfoPanelBacteriasController@bacteriasTabla');
            Route::get('hongos-tabla', 'InfoPanelHongosController@hongosTabla');
            Route::get('levaduras-tabla', 'InfoPanelLevadurasController@levadurasTabla');
            Route::get('actinomicetos-tabla', 'InfoPanelActinomicetosController@actinomicetosTabla');
        });
        Route::group(['middleware' => ['control_permisos:ver-cepa,caract-cepa']], function () {
            //--------------------- obtener caracteristicas cepas ------------------------------------
            Route::get('cepa/agregar-editar-caract/{id}', 'InfoPanelCepasController@obtenerCaracteristicasCepa');
            //----------- urls tablas metodos de conservacion ----------------------------------------
            Route::get('cepa/bacteria/metodos-conser/{id}', 'InfoPanelBacteriasController@metodos');
            Route::get('cepa/levadura/metodos-conser/{id}', 'InfoPanelLevadurasController@metodos');
            Route::get('cepa/hongo/metodos-conser/{id}', 'InfoPanelHongosController@metodos');
        });

        Route::group(['middleware' => ['control_permisos:agregar-otra,editar-otra,eliminar-otra']], function () {
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
        });
        Route::group(['middleware' => ['control_permisos:agregar-cepa,editar-cepa,eliminar-cepa,ver-cepa,caract-cepa,agregar-otra,editar-otra,eliminar-otra']], function () {
            //----------------------- info cepas y caracts  ------------------------------------------
            Route::get('info-tipos-cepas', 'InfoPanelCepasController@infoTipos');
            Route::get('info-caract-bacterias', 'InfoPanelBacteriasController@infoCaract');
            Route::get('info-caract-levaduras', 'InfoPanelLevadurasController@infoCaract');
            Route::get('info-caract-hongos', 'InfoPanelHongosController@infoCaract');
            Route::get('info-caract-actinomicetos', 'InfoPanelActinomicetosController@infoCaract');
        });
        //--------------------------- EVENTOS  ---------------------------------------------------
        //-------------------------url eventos metodos--------------------------------------------
        Route::get('eventos-metodos-bacterias', 'InfoPanelEventosController@eventosBacterias');
        Route::get('eventos-metodos-levaduras', 'InfoPanelEventosController@eventosLevaduras');
        Route::get('eventos-metodos-hongos', 'InfoPanelEventosController@eventosHongos');
        //-------------------------url eventos ---------------------------------------------------
        Route::get('eventos', 'InfoPanelEventosController@eventos');
        //-------------------------url actividades ---------------------------------------------------
        Route::get('eventos-actividades', 'InfoPanelEventosController@eventosActividades');
        //------------------------ USUARIOS ------------------------------------------------------
        //------------------------- url tabla usuarios - roles -----------------------------------
        Route::get('usuarios-tabla', 'InfoPanelUsuariosController@tablaUsuarios');
        Route::get('roles-tabla', 'InfoPanelUsuariosController@tablaRoles');
        //--------------------------- roles - usuairos -----------------------------------------
        Route::get('roles', 'InfoPanelUsuariosController@roles');
        Route::get('permisos', 'InfoPanelUsuariosController@permisos');
        Route::get('users', 'InfoPanelUsuariosController@usuarios');
        //------------------------- url tabla seguimiento -------------------------------------
        Route::get('seguimientos', 'InfoPanelUsuariosController@tablaSeguimientos');
        //--------------------------------------------------------------------------------------------
        //------------------------ IMAGENES LOGIN ------------------------------------------------------
        //------------------------- imagenes -------------------------------------------
        Route::get('login-imagenes', 'ImagenLoginController@imagenes')->middleware('control_permisos:editar-imglogin');
        //------------------------ SITIO WEB ------------------------------------------------------
        //------------------------- quienes somos -------------------------------------------
        Route::get('quienes-somos', 'InfoPanelSitioWebController@quienesSomos')->middleware('control_permisos:editar-mision,editar-vision,editar-objetivos');
        Route::group(['middleware' => ['control_permisos:agregar-investigador,editar-investigador,eliminar-investigador']], function () {
            Route::get('investigadores-tabla', 'InfoPanelSitioWebController@investigadoresTabla');
            Route::get('investigadores', 'InfoPanelSitioWebController@investigadores');
        });
        Route::group(['middleware' => ['control_permisos:agregar-proyecto,editar-proyecto,eliminar-proyecto,agregar-publicacion,editar-publicacion,eliminar-publicacion']], function () {
            Route::get('proyectos-tabla', 'InfoPanelSitioWebController@proyectosTabla');
            Route::get('publicaciones-tabla', 'InfoPanelSitioWebController@publicacionesTabla');
            Route::get('documentos', 'InfoPanelSitioWebController@documentos');
        });
        Route::group(['middleware' => ['control_permisos:agregar-equipamiento,editar-equipamiento,eliminar-equipamiento']], function () {
            Route::get('equipamientos-tabla', 'InfoPanelSitioWebController@equipamientosTabla');
            Route::get('equipamientos', 'InfoPanelSitioWebController@equipamientos');
        });
        Route::group(['middleware' => ['control_permisos:agregar-noticia,editar-noticia,eliminar-noticia,agregar-novedad,editar-novedad,eliminar-novedad,agregar-actividad,editar-actividad,eliminar-actividad']], function () {
            Route::get('noticias-tabla', 'InfoPanelSitioWebController@noticiasTabla');
            Route::get('actividades-tabla', 'InfoPanelSitioWebController@actividadesTabla');
            Route::get('novedades-tabla', 'InfoPanelSitioWebController@novedadesTabla');
            Route::get('publicidad', 'InfoPanelSitioWebController@publicidad');
        });
    });

    // ruta vuejs
    Route::get('{vue_capture?}', 'SpaController@index')->where('vue_capture', '[\/\w\.-]*');
});
