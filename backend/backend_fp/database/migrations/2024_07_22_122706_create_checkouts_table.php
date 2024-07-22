<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('checkouts', function (Blueprint $table) {
            $table->id('checkout_id');
            $table->float('total_price');
            $table->string('address');
            $table->unsignedBigInteger('user_id'); // foreign key referencing the users table
            $table->string('payment_method');
            $table->timestamps();
       
            $table->foreign('user_id')->references('id')->on('users');        
         });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('checkouts');
    }
};