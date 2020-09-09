<?php

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('bacterias', 'Api\SitioWebController@getBacterias')->name('obtener.cepas.bacterias');
Route::get('bacteria', 'Api\SitioWebController@getCaractBacteria')->name('obtener.info.cepa.bacteria');

Route::get('hongos', 'Api\SitioWebController@getHongos')->name('obtener.cepas.hongos');
Route::get('hongo', 'Api\SitioWebController@getCaractHongo')->name('obtener.info.cepa.hongo');

Route::get('levaduras', 'Api\SitioWebController@getLevaduras')->name('obtener.cepas.levaduras');
Route::get('levadura', 'Api\SitioWebController@getCaractLevadura')->name('obtener.info.cepa.levadura');

Route::get('actinomicetos', 'Api\SitioWebController@getActinomicetos')->name('obtener.cepas.actinomicetos');
Route::get('actinomiceto', 'Api\SitioWebController@getCaractActinomiceto')->name('obtener.info.cepa.actinomiceto');

Route::get('mision', 'Api\SitioWebController@getMision')->name('obtener.mision');
Route::get('vision', 'Api\SitioWebController@getVision')->name('obtener.vision');
Route::get('objetivos', 'Api\SitioWebController@getObjetivos')->name('obtener.objetivos');

Route::get('investigadores', 'Api\SitioWebController@getInvestigadores')->name('obtener.investigadores');

Route::get('equipamientos', 'Api\SitioWebController@getEquipamientos')->name('obtener.equipamientos');

Route::get('proyectos', 'Api\SitioWebController@getProyectos')->name('obtener.proyectos');
Route::get('publicaciones', 'Api\SitioWebController@getPublicaciones')->name('obtener.publicaciones');

Route::get('actividades', 'Api\SitioWebController@getActividades')->name('obtener.actividades');
Route::get('actividad', 'Api\SitioWebController@getActividad')->name('obtener.actividad');
Route::get('noticias', 'Api\SitioWebController@getNoticias')->name('obtener.noticias');
Route::get('noticia', 'Api\SitioWebController@getNoticia')->name('obtener.noticia');
Route::get('novedades', 'Api\SitioWebController@getNovedades')->name('obtener.novedades');
Route::get('novedad', 'Api\SitioWebController@getNovedad')->name('obtener.novedad');
