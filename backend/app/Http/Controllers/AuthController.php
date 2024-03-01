<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Http\Requests\RegisterRequest;
use App\Http\Requests\LoginRequest;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use App\Http\Resources\UserResource;



class AuthController extends Controller
{
      public function register(RegisterRequest $request) {
          //taking the validated requests automatically from the RegisterRequest through the $request variable
          $data = $request->validated();

          //creating the user through the validated data
          $user = User::create([
              'username' => $data['username'],
              'phoneNo' => $data['phoneNo'],
              'email' => $data['email'],
              'password' => Hash::make($data['password']),
          ]);

          //creating the token due to the autheniticated user
          $token = $user->createToken('auth_token')->plainTextToken;
          //the plainTextToken separetes the id and the secret part

          //creating the new cookie to the token of the autheniticated user
          $cookie= cookie('token', $token, 60 * 24);


            //convert the returned data to json with the creating the new instance class called user from the UserResource
            //the return json data to include cookie used to store the token in the HTTP requests
              //the new instance user class is used to convert the Json data suitable for the Api responses
          return response()->json([
              'user' => new UserResource($user),
              'message' => 'Successfully Registered',
            ])->withCookie($cookie);
      }

      public function login(LoginRequest $request) {
        //it take the login request automatically from the LoginRequest Class
          $data = $request->validated();

          //return the first matching user whose email column matches the user email entered
          $columnName= 'email';
          $user = User::where($columnName, $data['email'])->first();

            if(!$user || !Hash::check($data['password'], $user->password)) {
                return response()->json([
                    'message' => 'Email or password are incorrect'
                ], 401);
            }

            //then creating the token from the where query of the logged in user
            $token = $user->createToken('auth_token')->plainTextToken;

            //then the token is kept in the cookie through the cookie helper function
            $cookie = cookie('token', $token, 60 * 24);

            $respon= [
              'status' => 'success',
              'msg' => 'Successfully Logged in',
              'content' => [
                'status_code' => 200,
                'access_token' => $cookie,
                'token_type' => 'Bearer',
                'user' => new UserResource($user),
                'token' => $token,
              ]
            ];

            return response()->json($respon, 200)->withCookie($cookie);

      }



      public function logout(Request $request) {
        //apply the current access from the current user the access its token(currentAccessToken() ) then delete it
        //user() is the current method used to access the current user
        $request->user()->currentAccessToken()->delete();

        $cookie = cookie()->forget('token');

        return response()->json([
            'message' => 'Logged Out Successfully',
          ])->withCookie($cookie);

      }

      //for the getting of the autheniticated user
      public function getUser() {
          $user = auth::user(); //getting the autheniticated user

            //it return the new user in context of an Api using the resource
          return new UserResource($user);
      }

}
