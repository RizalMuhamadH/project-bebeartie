<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    protected $fillable = [
        'member_id',
    ];
    public function member()
    {
        return $this->hasOne(Member::class);
    }

    public function list_item()
    {
        return $this->hasMany(List_item::class);
    }
}
