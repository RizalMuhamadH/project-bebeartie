<?php

namespace App\Http\Middleware;

use Closure;

class Cors
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        return $next($request)
            ->header('Accept', 'application/json')
            // ->header('Content-type', 'application/json')
            ->header('Access-Control-Allow-Origin', '*')
            // ->header('Access-Control-Allow-Methods', 'GET')
            ->header('key', 'd04e41ec70378c13df3a9cce3d6080c0')
            ->header('Access-Control-Allow-Headers', 'Origin');
    }
}
