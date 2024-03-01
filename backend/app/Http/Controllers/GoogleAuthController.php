<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;

class GoogleAuthController extends Controller
{
      public function redirect() {
        Socialite::driver('google');
      }

      public function googleCallback() {
        try {

            $googleUser= Socialite::driver('google')->user();

            $user = User::where('google_id',$googleUser->getId())->first();

            if(!$user) {
              $newUser = User::create([
                  'username' => $googleUser->getName(),
                  'email'=> $googleUser->getEmail(),
                  'google_id'=> $googleUser->getId(),
                  'password'=> Hash::make(str_random(32)), //generates the random string of the 32 characters
              ]);

              Auth::login($newUser);

              return redirect()->intended('dashboard');

            }  else {
              Auth::login($user);

              return redirect()->intended('dashboard');
            }

        } catch(\Throwable $th) {
            Log::error('Google Login Failed '. $th->getMessage());
        }
      }
}
