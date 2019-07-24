<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Promote extends Model
{
    protected $fillable = [
        'name','discount','desc'
    ];

    public function product()
    {
        return $this->hasMany(Product::class);
    }
}
