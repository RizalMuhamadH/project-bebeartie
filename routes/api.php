<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
 */

Route::group(['middleware' => 'auth:api-member'], function () {
    Route::post('/cart/add', 'Frontend\CartController@store');
    Route::put('/cart/update/{id}', 'Frontend\CartController@update');
    Route::delete('/cart/{id}', 'Frontend\CartController@destroy');
    Route::get('/cart/show/{id}', 'Frontend\CartController@show');
});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
