<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    use HasFactory;

    protected $fillable = [
        "book_id",
        "user_id",
        "cart_id",
        "quantity",
        "total_price"
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