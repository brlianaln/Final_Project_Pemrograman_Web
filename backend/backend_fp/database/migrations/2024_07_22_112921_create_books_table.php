<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use League\CommonMark\Reference\Reference;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('books', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->float('price');
            $table->string('author');
            $table->string('image');
            $table->unsignedBigInteger('category_id');
            $table->text('detail');
            $table->text('synopsis');
            $table->text('description');
            $table->string('format');
            $table->string('published');
            $table->string('isbn')->unique();
            $table->string('language');
            $table->string('quantity');
            $table->timestamps();

            $table->foreign('category_id')->references('id')->on('categories'); 
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('books');
    }
};
