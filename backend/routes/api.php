<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

/*the auth:sanctum is the laravel package for the token verification that to be accessed by the verified users only*/

Route::get('/sanctum/csrf-cookie', function(Request $request) {
  return response()->json(['csrf_token' => csrf_token()]);
  //to not return any HTTP requests, this is so as to preserve the csrf-cookie;
    //if response()->noContent();
});

Route::post('/login', [AuthController::class, 'login'])->name('login');
//the login and the register routes to be accessed by the normal user event without the auth:sanctum
//these routes can be accessed by the unauthorized users
Route::post('/register', [AuthController::class, 'register'])->name('register');

  Route::middleware('auth:sanctum', 'auth:api')->get('/user', function (Request $request) {
      return $request->user();
  });



  //the routes that to be accessed by only the logged in users only
  Route::middleware('auth:sanctum')->group(function() {
    /*the auth:sanctum will check if the request contain the valid API token then the route can be accessed
      if the route does not contain the valid API tokens then the route can not be accessed  */
      Route::post('/logout', [AuthController::class, 'logout']);

      Route::get('/user', [AuthController::class, 'getUser']);
  });
