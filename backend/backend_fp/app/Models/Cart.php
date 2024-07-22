<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    use HasFactory;
    protected $fillable = [
        "user_id",
        "total_price",
        "quantity"
    ];

    public function hasUsers()
    {
        return $this->belongsTo(User::class);
    }

    // One-to-Many with Item
    public function hasItems()
    {
        return $this->hasMany(Item::class);
    }

}