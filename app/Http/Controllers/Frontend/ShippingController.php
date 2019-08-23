<?php

namespace App\Http\Controllers\Frontend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Ixudra\Curl\Facades\Curl;

class ShippingController extends Controller
{

    public function getProvince()
    {
        $result = Curl::to('https://api.rajaongkir.com/starter/province')
            ->withHeader('key: d04e41ec70378c13df3a9cce3d6080c0')
            ->asJson()
            ->get();
        return response()->json($result);
    }

    public function getCity($province)
    {
        $result = Curl::to('https://api.rajaongkir.com/starter/city?province=' . $province)
            ->withHeader('key: d04e41ec70378c13df3a9cce3d6080c0')
            ->asJson()
            ->get();
        return response()->json($result);
    }

    public function getCost(Request $request)
    {
        $result = Curl::to('https://api.rajaongkir.com/starter/cost')
            ->withHeader('key: d04e41ec70378c13df3a9cce3d6080c0')
            ->withHeader('content-type: application/x-www-form-urlencoded')
            ->withData(array(
                'origin' => request()->origin,
                'destination' => request()->destination,
                'weight' => request()->weight,
                'courier' => request()->courier,
            ))
            // ->withData(array(
            //     'origin' => 501,
            //     'destination' => 10,
            //     'weight' => 20,
            //     'courier' => 'jne',
            // ))
            // ->withOption('POSTFIELDS', 'origin=501&destination=114&weight=1700&courier=jne')
            // ->asJson(true)
            ->post();
        // return response()->json($result);
        return $result;
    }
}
