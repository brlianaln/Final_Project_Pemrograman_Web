<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\CheckoutController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);


Route::get('/books', [BookController::class, 'book_list']);
Route::get('/books/search', [BookController::class, 'find_book']);
Route::get('/books/category', [BookController::class, 'category_filter']);
Route::get('/books/{id}', [BookController::class, 'book_detail']);

Route::prefix('cart')->name('cart.')->group(function () {
Route::get('/contents', [CartController::class, 'contents']);
Route::post('/add', [CartController::class, 'add']);
Route::get('/total', [CartController::class, 'total']);
});

Route::post('/checkout', [CheckoutController::class, 'checkout']);
Route::post('/store-checkout-data', [CheckoutController::class, 'storeCheckoutData']);
route::post('/book_list',[BookController::class, 'book_list']);