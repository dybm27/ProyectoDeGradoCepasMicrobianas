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
