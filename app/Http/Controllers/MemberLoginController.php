<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Auth;
use Illuminate\Http\Request;
use App\Member;
// use Lcobucci\JWT\Parser;

// use Illuminate\Support\Facades\Auth;

class MemberLoginController extends Controller
{

    use AuthenticatesUsers;

    protected $redirectTo = '/';

    protected function guard()
    {
        return Auth::guard('member');
    }

    public function login(Request $request)
    {
        $status = 401;
        $response = ['error' => 'Unauthorised'];

        // $email = request()->email;
        // $password = Hash::make(request()->password);

        // request()->password = bcrypt(request()->password);
        // return Auth::guard('member')->attempt(['email' => $email, 'password' => $password]);
        if (Auth::guard('member')->attempt(['email' => request()->email, 'password' => request()->password])) {
            $status = 200;
            $member = Member::where('email', request()->email)->firstOrFail();
            $response = [
                'akun' => $member,
                'access_token' => $member->createToken('bebeartie')->accessToken,
            ];
        }

        return response()->json($response, $status);
    }

    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'email' => 'required|string|email|unique:customers',
            'password' => 'required|string|min:6|confirmed',
            'gender' => 'required|string',
            'address' => 'required|string',
            'city' => 'required|string',
            'postcode' => 'required|string',
            'phone' => 'required|string',
        ]);
        $member = \App\Member::create($request->all());
        // return redirect()->route('member.signup')->with('success', 'Successfully register!');
        return response()->json([
            'akun' => $member,
            'token' => $member->createToken('bebeartie')->accessToken,
        ]);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function logout(Request $request)
    {
        Member::findOrFail(request()->id)->token->revoke();
        $this->guard()->logout();
        Auth::logout();
        $request->session()->invalidate();
        return redirect('/');
    }
}
