<?php

namespace App;

use Illuminate\Foundation\Auth\User as Authenticatable;

class Member extends Authenticatable
{
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

    public function basket()
    {
        return $this->belongsTo(Basket::class);
    }
}
