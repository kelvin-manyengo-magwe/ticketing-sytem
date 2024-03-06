<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class Cors
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    { //ensure all are set

        session()->start();

        //Log the request headers
        logger()->info('Request Headers:', $request->header());

          $response = $next($request)
            ->header('Access-Control-Allow-Origin', 'http://localhost:3000')
            ->header('Access-Control-Allow-Methods', 'PUT, PATCH, DELETE, POST, GET, OPTIONS')
            ->header('Access-Control-Allow-Headers', 'Origin, Content-Type,Accept, Authorization, X-Request-With')
            ->header('Access-Control-Allow-Credentials', 'true');

          return $response;
    }
}
