<?php
namespace App\Http\Requests;
use Illuminate\Foundation\Http\FormRequest;
//use Illuminate\


class RegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
     // is used to make the validations of th HTTP request for the register of the user
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'username' => 'required|string|max:255',
            'phoneNo' => ['required','regex: /^0\d{0,9}$/'],
            'password' => ['required','min:6'],
            'email' => 'required|unique:users|max:255'
        ];
    }
}
