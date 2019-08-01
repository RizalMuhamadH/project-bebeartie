<?php

namespace App;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;

class Member extends Authenticatable
{
    use  HasApiTokens, Notifiable;

    protected $fillable = [
        'name',
        'email',
        'password',
        'gender',
        'address',
        'city',
        'postcode',
        'phone',
    ];

    protected $hidden = [
        'password', 'remember_token',
    ];

    public function setPasswordAttribute($val)
    {
        return $this->attributes['password'] = bcrypt($val);
    }

    public function cart()
    {
        return $this->belongsTo(Cart::class);
    }
}
