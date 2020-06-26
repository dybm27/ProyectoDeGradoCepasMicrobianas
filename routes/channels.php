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
    return ['id' => $user->id];
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
Broadcast::channel('borrarBloqueosNoticia', function ($user) {
    return true;
});
//actividades
Broadcast::channel('actividades', function ($user) {
    return ['id' => $user->id];
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
Broadcast::channel('borrarBloqueosActividad', function ($user) {
    return true;
});
//novedades
Broadcast::channel('novedades', function ($user) {
    return ['id' => $user->id];
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
Broadcast::channel('borrarBloqueosNovedad', function ($user) {
    return true;
});
