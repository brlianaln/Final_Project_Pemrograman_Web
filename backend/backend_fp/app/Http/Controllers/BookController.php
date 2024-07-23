<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;

class BookController extends Controller
{
    public function book_list ()
    {
        $books = Book::with('category')->get();
        return response()->json([
            'books' => $books
            //kalo mau ngereturn lebih dari 1 entitas
        ]);
    }

    public function book_detail(int $id)
    {
        $books = Book::with('category')->find($id);
        return response()->json([
            'books' => $books
        ]);
        // $books = Book::where('id', $id)->get();
        //kallo pake first itu ngambil row pertama yang ditemui, misal: bukan berdasarkan nama, [intinya nampilinnya cuma 1 meskipun banyak datanya]
        //kalo pake where itu baru bikin querynya doang. harus dapetin ... bisa pake get atau bisa pake fisrt
        //bisa pake find bisa pake where untuk ini
    }

    public function find_book(Request $request)
    {
        $title = $request->query('title');
        $books = Book::where('title', 'like', '%'. $title . '%')->get();
        return response()->json([
            'books' => $books
        ]);
    }

    public function category_filter(Request $request)
    {
        $category_id = $request->query('category_id');
        $books = Book::where('category_id', $category_id)->get();
        return response()->json([
            'books' => $books
        ]);
    }    
}
