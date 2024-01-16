<?php

namespace App\Http\Middleware;

use Illuminate\Auth\Middleware\Authenticate as Middleware;
use Illuminate\Http\Request;
use Closure;


class Authenticate extends Middleware
{
    /**
     * Get the path the user should be redirected to when they are not authenticated.
     */
    protected function redirectTo(Request $request): ?string
    {
        return $request->expectsJson() ? null : route('login');
    }

    //setting the cookie token in the every request

    public function handle($request , Closure $next, ...$guards) {
        //$request variable contain all the information of the http requests eg parameters, headers
        //Closure is used to declare the $next variable for proceed to the next middleware in the pipeline
        //...$guards specify the variety of the guards to be considered eg web for session authenitication and api for the token authenitication

        if($token = $request->cookie('token')) { //if the requested cookie name is token
              $request->headers->set('Authorization', 'Bearer'.$token);
        }

        //$this is used to access the methods and the variables of the instance class or method (handle() )
        $this->authenticate($request, $guards);

          //then continue to the next request pipeline of the middleware or next controller
        return $next($request);  //continue the next procedures
    }

}
