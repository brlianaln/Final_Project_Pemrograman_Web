<?php

namespace App\Models;

use App\Models\Category;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Book extends Model
{
    protected $fillable = [
        'title',
        'price',
        'author',
        'category_id',
        'image',
        'detail',
        'synopsis',
        'description',
        'format',
        'published',
        'isbn',
        'language',
        'quantity'
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
