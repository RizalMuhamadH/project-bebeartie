<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $fillable = [
        'name','desc'
    ];

    public function product()
    {
        return $this->hasMany(Product::class);
    }
}
