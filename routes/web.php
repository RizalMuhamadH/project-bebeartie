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

Route::get('/', 'Frontend\IndexController@index');

Auth::routes();

Route::get('/api/other', 'OtherController@index');

Route::get('/frontend/getProductLimit', 'Frontend\IndexController@getProductLimit');

Route::get('/api/categories', 'CategoryController@index');
Route::post('/api/category', 'CategoryController@store');
Route::put('/api/category/{id}', 'CategoryController@update');
Route::delete('/api/category_delete/{id}', 'CategoryController@destroy');

Route::get('/api/promotes', 'PromoteController@index');
Route::post('/api/promote', 'PromoteController@store');
Route::put('/api/promote/{id}', 'PromoteController@update');
Route::delete('/api/promote_delete/{id}', 'PromoteController@destroy');


Route::get('/api/members', 'MemberController@index');
Route::post('/api/member', 'MemberController@store');
Route::put('/api/member/{id}', 'MemberController@update');
Route::delete('/api/member_delete/{id}', 'MemberController@destroy');

Route::get('/api/products', 'ProductController@index');
Route::post('/api/product', 'ProductController@store');
Route::get('/api/product/{id}/edit', 'ProductController@edit');
Route::put('/api/product/{id}', 'ProductController@update');
Route::delete('/api/product_delete/{id}', 'ProductController@destroy');

Route::get('/home', 'HomeController@index')->name('home');
Route::get('{path?}', 'HomeController@index')->where('path','([A-z\d\/_.]+)?');



