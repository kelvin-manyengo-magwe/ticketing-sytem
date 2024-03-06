<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Response;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;

class GoogleAuthController extends Controller
{
      public function redirect() {
        //to create the socialite driver instance of google
        return Socialite::driver('google')->redirect();
      //$url= Socialite::driver('google')->stateless()->redirect()->getTargetUrl();

    //  return Response::json(['url' => $url]);
      }

      public function googleCallback() {
        try {

            $googleUser= Socialite::driver('google')->user();

            //checks if the user_id exists in the database
            $user = User::where('google_id',$googleUser->getId())->first();

            if(!$user) {
              //if it doesn't exist then the new user is created
              $newUser = User::create([
                  'username' => $googleUser->getName(),
                  'email'=> $googleUser->getEmail(),
                  'google_id'=> $googleUser->getId(),
                  'password'=> Hash::make(str_random(32)), //generates the random string of the 32 characters
              ]);

              Auth::login($newUser);

              return redirect()->intended('dashboard');

            }  else {
              //if the user already exists within the database
              Auth::login($user); //login the existing user

              return redirect()->intended('dashboard'); //direct it in the database
            }

        } catch(\Throwable $th) {
            Log::error('Google Login Failed '. $th->getMessage());
        }
      }
}
