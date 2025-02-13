<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $fillable = [
        "name",
    ];
    public function hasBook()
    {
        return $this->belongsTo(Book::class);
    }

    public function hasUser()
    {
        return $this->belongsTo(User::class);
    }

    // One-to-Many inverse with Cart
    public function hasCart()
    {
        return $this->belongsTo(Cart::class);
    }


}