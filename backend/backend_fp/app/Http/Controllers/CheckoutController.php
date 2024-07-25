<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Book;
use App\Models\User;
use App\Models\Cart;
use App\Models\Item;
use App\Models\Checkout;

class CheckoutController extends Controller
{
    public function checkout(Request $request)
    {
        $selectedBookIds = $this->getSelectedBookIds($request);
        if (empty($selectedBookIds)) {
            return response()->json(['error' => 'No books selected'], 400);
        }

        $user = auth()->user();
        $cart = $user->cart;
        $totalPrice = $this->calculateTotalPrice($selectedBookIds);
        // $checkout = $this->createCheckoutRecord($user, $totalPrice);
        $this->removeSelectedBooksFromCart($cart, $selectedBookIds);

        return response()->json(['message' => 'Checkout successful']);
    }

    private function getSelectedBookIds(Request $request)
    {
        return $request->input('selected_books');
    }

    private function calculateTotalPrice(array $selectedBookIds)
    {
        $totalPrice = 0;
        foreach ($selectedBookIds as $bookId) {
            $book = Book::find($bookId);
            $totalPrice += $book->price;
        }
        return $totalPrice;
    }

    private function createCheckoutRecord(User $user, float $totalPrice)
    {
        $checkout = new Checkout();
        $checkout->user_id = $user->id;
        $checkout->total_price = $totalPrice;
        $checkout->save();
        return $checkout;
    }

    private function removeSelectedBooksFromCart(Cart $cart, array $selectedBookIds)
    {
        Item::where('cart_id', $cart->id)
            ->whereIn('book_id', $selectedBookIds)
            ->delete();
    }

    private function storeCheckoutData(Request $request, User $user, float $totalPrice)
{
    $delivery_address = $request->input('delivery_address');
    $postal_code = $request->input('postal_code');
    $payment_method = $request->input('payment_method');

    $checkout = new Checkout();
    $checkout->user_id = $user->id;
    $checkout->total_price = $totalPrice;
    $checkout->address = $delivery_address;
    $checkout->postal_code = $postal_code;
    $checkout->payment_method = $payment_method;
    $checkout->save();
}

}