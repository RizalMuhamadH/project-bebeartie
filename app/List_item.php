<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class List_item extends Model
{
    public function basket()
    {
        return $this->belongsTo(Basket::class);
    }

    public function product()
    {
        return  $this->belongsTo(Product::class);
    }
}
