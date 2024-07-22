<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Checkout extends Model
{
    use HasFactory;
    protected $fillable = [
        "total_price",
        "address",
        "user_id",
        "payment_method"
    ];

    public function hasUser()
    {
        return $this->belongsTo(User::class);
    }

}