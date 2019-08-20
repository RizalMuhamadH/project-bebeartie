<?php

namespace App\Http\Controllers;

use App\Media;
use App\Product;
use Illuminate\Http\Request;
use Intervention\Image\ImageManagerStatic as Image;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // return Product::latest()->paginate(10);
        return Product::with('promote')->with('category')->latest()->paginate(10);
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
        $data = request()->validate([
            'name' => 'required',
            'price' => 'required|integer',
            'stock' => 'required|integer',
            'status' => 'required',
            'desc' => 'required',
            'information' => 'required',
            'image_thumb' => 'required',
            'photo' => 'required|array',
            'weight' => 'required|numeric',
            'category_id' => 'required',
            'promote_id' => 'required',
        ]);

        $name = time() . '.' . explode('/', explode(':', substr(request()->image_thumb, 0, strpos(request()->image_thumb, ';')))[1])[1];
        Image::make(request()->image_thumb)->resize(640, 480)->save(public_path('storage/thumb/') . $name);

        $result = Product::create([
            'name' => $data['name'],
            'price' => $data['price'],
            'stock' => $data['stock'],
            'status' => $data['status'],
            'desc' => $data['desc'],
            'information' => $data['information'],
            'image_thumb' => 'storage/thumb/' . $name,
            'weight' => $data['weight'],
            'category_id' => $data['category_id'],
            'promote_id' => $data['promote_id'],
        ]);

        for ($i = 0; $i < count(request()->photo); $i++) {
            $name = time() . $result->id . $i . '.' . explode('/', explode(':', substr(request()->photo[$i], 0, strpos(request()->photo[$i], ';')))[1])[1];
            Image::make(request()->photo[$i])->save(public_path('storage/photo/') . $name);
            Media::create([
                'path' => 'storage/photo/' . $name,
                'type' => 'photo',
                'desc' => ' ',
                'product_id' => $result->id,
            ]);
        }
        return ['message' => 'Success'];
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return Product::findOrFail($id);
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
        $product = Product::findOrFail($id)->get();
        $data = request()->validate([
            'name' => 'required',
            'price' => 'required|integer',
            'stock' => 'required|integer',
            'status' => 'required',
            'desc' => 'required',
            'information' => 'required',
            'weight' => 'required|numeric',
            'category_id' => 'required',
            'promote_id' => 'required',
        ]);

        if (request()->photo != null) {
            if ($data['image_thumb'] != $product->image_thumb) {
                $name = time() . '.' . explode('/', explode(':', substr(request()->image_thumb, 0, strpos(request()->image_thumb, ';')))[1])[1];
                Image::make(request()->image_thumb)->save(public_path('storage/thumb/') . $name);
                $data['image_thumb'] = 'storage/thumb/' . $name;
            }
        }

        Product::where('id', $id)->update(array_merge($data));
        // $result = Product::create([
        //     'name' => $data['name'],
        //     'price' => $data['price'],
        //     'stock' => $data['stock'],
        //     'status' => $data['status'],
        //     'desc' => $data['desc'],
        //     'information' => $data['information'],
        //     'image_thumb' => 'storage/thumb/' . $name,
        //     'weight' => $data['weight'],
        //     'category_id' => $data['category_id'],
        //     'promote_id' => $data['promote_id'],
        // ]);

        if (request()->photo != null) {
            $media = Media::where('product_id', $id)->get();
            for ($i = 0; $i < count($media); $i++) {
                Media::where('product_id', $id)->delete();
            }
            for ($i = 0; $i < count(request()->photo); $i++) {
                $name = time() . $id . $i . '.' . explode('/', explode(':', substr(request()->photo[$i], 0, strpos(request()->photo[$i], ';')))[1])[1];
                Image::make(request()->photo[$i])->save(public_path('storage/photo/') . $name);
                Media::create([
                    'path' => 'storage/photo/' . $name,
                    'type' => 'photo',
                    'desc' => ' ',
                    'product_id' => $id,
                ]);
            }
        };

        return ['message' => 'Success'];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Product::findOrFail($id)->delete();
        $media = Media::where('product_id', $id)->get();
        for ($i = 0; $i < count($media); $i++) {
            Media::where('product_id', $id)->delete();
        }

        return ['message' => 'Success'];
    }
}
