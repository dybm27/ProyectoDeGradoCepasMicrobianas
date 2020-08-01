<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class ActinomicetosInfoEvent implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $data;
    public $tipoCaract;
    public $tipoAccion;
    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($data, $tipoCaract, $tipoAccion)
    {
        $this->data = $data;
        $this->tipoCaract =  $tipoCaract;
        $this->tipoAccion =  $tipoAccion;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new Channel('actinomicetos-info');
    }
}
