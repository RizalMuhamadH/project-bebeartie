<?php

namespace App\Http\Controllers\Frontend;

use App\Cart;
use App\Http\Controllers\Controller;
use App\List_item;
use Illuminate\Http\Request;

class CartController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // return Auth::guard('member')->user();
        // $member = Member::findOrFail(request()->member_id);
        // if ($member != null) {
        $cart = Cart::where('member_id', request()->member_id)->first();
        if ($cart == null) {
            $cart = Cart::create([
                'member_id' => request()->member_id,
            ]);

            List_item::create([
                'cart_id' => $cart->id,
                'product_id' => request()->product_id,
                'quality' => request()->quality,
            ]);
        } else {
            List_item::create([
                'cart_id' => $cart->id,
                'product_id' => request()->product_id,
                'quality' => request()->quality,
            ]);
        }
        // }

        return response()->json(['message' => 'success']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $cart = Cart::where('member_id', $id)->first();

        $response = ['message' => 'not found'];
        if($cart != null){
            $response = List_item::with('product')->where('cart_id', $cart->id)->get();
        }
        return response()->json($response);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
