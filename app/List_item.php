<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class List_item extends Model
{
    public function cart()
    {
        return $this->belongsTo(Cart::class);
    }

    public function product()
    {
        return  $this->belongsTo(Product::class);
    }
}
