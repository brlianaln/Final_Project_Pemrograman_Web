<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use App\Http\Requests;
use App\Models\Book;
use App\Models\User;
use App\Models\Cart;
use App\Models\Item; // Updated to Item


class CartController extends Controller
{
    public function index(){

    }

    public function getCartContents(Request $request)
    {
        $items = Item::where('user_id', auth()->id())->get();
        $cartContents = [];

        foreach ($items as $item) {
            $book = Book::find($item->book_id);

            if ($book) {
                $cartContents[] = [
                    'book_id' => $item->book_id,
                    'image' => $book->cover_image,
                    'name' => $book->title,
                    'author' => $book->author,
                    'price' => $book->price,
                    'quantity' => $item->quantity,
                ];
            }
        }

        return response()->json($cartContents);
    }

    public function addToCart(Request $request)
    {
        $book = Book::findOrFail($request->book_id);

        // Check if the book is already in the cart
        $item = Item::where('book_id', $book->id)->first();
        if ($item) {
            // Update the quantity if the book is already in the cart
            $item->quantity += 1;
            $item->save();
        } else {
            // Create a new row if the book is not in the table
            Item::create([
                'book_id' => $book->id,
                'image' => $book->image,
                'name' => $book->name,
                'author' => $book->author,
                'price' => $book->price,
                'quantity' => 1,
            ]);
        }

        return response()->json([]);
    }

    public function total_price(Request $request)
    {
        $items = Item::all();
        $totalPrice = 0;
        foreach ($items as $item) {
            $totalPrice += $item->price * $item->quantity;
        }
        return response()->json(['total_price' => $totalPrice]);
    }

    public function store(Request $request)
    {
        $user = auth()->user(); // assuming you have authentication set up
        $cart = Cart::create(['user_id' => $user->id]);
        return response()->json(['message' => 'Cart created successfully']);
    }
}