<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();


Route::get('/api/categories', 'CategoryController@index');
Route::post('/api/category', 'CategoryController@store');
Route::put('/api/category/{id}', 'CategoryController@update');
Route::delete('/api/category_delete/{id}', 'CategoryController@destroy');

Route::get('/home', 'HomeController@index')->name('home');

Route::get('{path}', 'HomeController@index')->where('path','([A-z\d\/_.]+)?');


