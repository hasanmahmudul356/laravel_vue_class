<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoinController extends Controller
{
    public function login(){
        return view('auth.login');
    }

    public function doLogin(Request $request){
        $crediantials = $request->except('_token');

        $auth = Auth::attempt($crediantials);

        if ($auth){
            return redirect('/admin/dashboard');
        }
        return redirect('/login')->with('error','Username or Password invalid');

    }
}
