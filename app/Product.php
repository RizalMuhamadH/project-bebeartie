<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'name', 'price', 'stock', 'status', 'desc', 'information', 'image_thumb', 'weight', 'category_id', 'promote_id',
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function media()
    {
        return $this->hasMany(Media::class);
    }

    public function promote()
    {
        return $this->belongsTo(Promote::class);
    }

    public function list_item()
    {
        return $this->hasMany(List_item::class);
    }
}
