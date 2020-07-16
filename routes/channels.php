<?php

/*
|--------------------------------------------------------------------------
| Broadcast Channels
|--------------------------------------------------------------------------
|
| Here you may register all of the event broadcasting channels that your
| application supports. The given channel authorization callbacks are
| used to check if an authenticated user can listen to the channel.
|
*/
//otra-info
//cepas
Broadcast::channel('CepasInfo', function ($user) {
    return ['user' => $user];
});
Broadcast::channel('bloquearBtnsCepasInfo', function ($user) {
    return true;
});
Broadcast::channel('desbloquearBtnsCepasInfo', function ($user) {
    return true;
});
Broadcast::channel('recibirBtnsCepasInfo', function ($user) {
    return true;
});
//bacterias
Broadcast::channel('BacteriasInfo', function ($user) {
    return ['user' => $user];
});
Broadcast::channel('bloquearBtnsBacteriasInfo', function ($user) {
    return true;
});
Broadcast::channel('desbloquearBtnsBacteriasInfo', function ($user) {
    return true;
});
Broadcast::channel('recibirBtnsBacteriasInfo', function ($user) {
    return true;
});
//hongos
Broadcast::channel('HongosInfo', function ($user) {
    return ['user' => $user];
});
Broadcast::channel('bloquearBtnsHongosInfo', function ($user) {
    return true;
});
Broadcast::channel('desbloquearBtnsHongosInfo', function ($user) {
    return true;
});
Broadcast::channel('recibirBtnsHongosInfo', function ($user) {
    return true;
});
//levaduras
Broadcast::channel('LevadurasInfo', function ($user) {
    return ['user' => $user];
});
Broadcast::channel('bloquearBtnsLevadurasInfo', function ($user) {
    return true;
});
Broadcast::channel('desbloquearBtnsLevadurasInfo', function ($user) {
    return true;
});
Broadcast::channel('recibirBtnsLevadurasInfo', function ($user) {
    return true;
});
//actinomicetos
Broadcast::channel('ActinomicetosInfo', function ($user) {
    return ['user' => $user];
});
Broadcast::channel('bloquearBtnsActinomicetosInfo', function ($user) {
    return true;
});
Broadcast::channel('desbloquearBtnsActinomicetosInfo', function ($user) {
    return true;
});
Broadcast::channel('recibirBtnsActinomicetosInfo', function ($user) {
    return true;
});
//usuarios
Broadcast::channel('usuarios', function ($user) {
    return ['user' => $user];
});
Broadcast::channel('bloquearBtnsUsuario', function ($user) {
    return true;
});
Broadcast::channel('desbloquearBtnsUsuario', function ($user) {
    return true;
});
Broadcast::channel('recibirBtnsUsuario', function ($user) {
    return true;
});
//imagenes login
Broadcast::channel('imagenesLogin', function ($user) {
    return ['user' => $user];
});
Broadcast::channel('bloquearImagenesLogin', function ($user) {
    return true;
});
Broadcast::channel('borrarBloqueoImagenesLogin', function ($user) {
    return true;
});
//noticias
Broadcast::channel('noticias', function ($user) {
    return ['user' => $user];
});
Broadcast::channel('bloquearBtnsNoticia', function ($user) {
    return true;
});
Broadcast::channel('desbloquearBtnsNoticia', function ($user) {
    return true;
});
Broadcast::channel('bloquearCheckNoticia', function ($user) {
    return true;
});
Broadcast::channel('desbloquearCheckNoticia', function ($user) {
    return true;
});
Broadcast::channel('recibirBtnsCheckNoticia', function ($user) {
    return true;
});
//actividades
Broadcast::channel('actividades', function ($user) {
    return ['user' => $user];
});
Broadcast::channel('bloquearBtnsActividad', function ($user) {
    return true;
});
Broadcast::channel('desbloquearBtnsActividad', function ($user) {
    return true;
});
Broadcast::channel('bloquearCheckActividad', function ($user) {
    return true;
});
Broadcast::channel('desbloquearCheckActividad', function ($user) {
    return true;
});
Broadcast::channel('recibirBtnsCheckActividad', function ($user) {
    return true;
});
//novedades
Broadcast::channel('novedades', function ($user) {
    return ['user' => $user];
});
Broadcast::channel('bloquearBtnsNovedad', function ($user) {
    return true;
});
Broadcast::channel('desbloquearBtnsNovedad', function ($user) {
    return true;
});
Broadcast::channel('bloquearCheckNovedad', function ($user) {
    return true;
});
Broadcast::channel('desbloquearCheckNovedad', function ($user) {
    return true;
});
Broadcast::channel('recibirBtnsCheckNovedad', function ($user) {
    return true;
});
//equipamientos
Broadcast::channel('equipamientos', function ($user) {
    return ['user' => $user];
});
Broadcast::channel('bloquearBtnsEquipamiento', function ($user) {
    return true;
});
Broadcast::channel('desbloquearBtnsEquipamiento', function ($user) {
    return true;
});
Broadcast::channel('bloquearCheckEquipamiento', function ($user) {
    return true;
});
Broadcast::channel('desbloquearCheckEquipamiento', function ($user) {
    return true;
});
Broadcast::channel('recibirBtnsCheckEquipamiento', function ($user) {
    return true;
});
//proyectos
Broadcast::channel('proyectos', function ($user) {
    return ['user' => $user];
});
Broadcast::channel('bloquearBtnsProyecto', function ($user) {
    return true;
});
Broadcast::channel('desbloquearBtnsProyecto', function ($user) {
    return true;
});
Broadcast::channel('bloquearCheckProyecto', function ($user) {
    return true;
});
Broadcast::channel('desbloquearCheckProyecto', function ($user) {
    return true;
});
Broadcast::channel('recibirBtnsCheckProyecto', function ($user) {
    return true;
});
//publicaciones
Broadcast::channel('publicaciones', function ($user) {
    return ['user' => $user];
});
Broadcast::channel('bloquearBtnsPublicacion', function ($user) {
    return true;
});
Broadcast::channel('desbloquearBtnsPublicacion', function ($user) {
    return true;
});
Broadcast::channel('bloquearCheckPublicacion', function ($user) {
    return true;
});
Broadcast::channel('desbloquearCheckPublicacion', function ($user) {
    return true;
});
Broadcast::channel('recibirBtnsCheckPublicacion', function ($user) {
    return true;
});
//investigadores
Broadcast::channel('investigadores', function ($user) {
    return ['user' => $user];
});
Broadcast::channel('bloquearBtnsInvestigador', function ($user) {
    return true;
});
Broadcast::channel('desbloquearBtnsInvestigador', function ($user) {
    return true;
});
Broadcast::channel('bloquearCheckInvestigador', function ($user) {
    return true;
});
Broadcast::channel('desbloquearCheckInvestigador', function ($user) {
    return true;
});
Broadcast::channel('recibirBtnsCheckInvestigador', function ($user) {
    return true;
});
//mision
Broadcast::channel('mision', function ($user) {
    return ['user' => $user];
});
Broadcast::channel('bloquearMision', function ($user) {
    return true;
});
Broadcast::channel('borrarBloqueoMision', function ($user) {
    return true;
});
//vision
Broadcast::channel('vision', function ($user) {
    return ['user' => $user];
});
Broadcast::channel('bloquearVision', function ($user) {
    return true;
});
Broadcast::channel('borrarBloqueoVision', function ($user) {
    return true;
});
//bjetivos
Broadcast::channel('objetivos', function ($user) {
    return ['user' => $user];
});
Broadcast::channel('bloquearObjetivos', function ($user) {
    return true;
});
Broadcast::channel('borrarBloqueoObjetivos', function ($user) {
    return true;
});
