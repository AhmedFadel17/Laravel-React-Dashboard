<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Filestack\FilestackClient;
use Illuminate\Support\Facades\Validator;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //$this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('home');
    }

    public function upload(Request $rq)
    {
        $validator = Validator::make(
            $rq->all(),
            [
                'video'  => ['required', 'mimes:mp4,mov,ogg,qt', 'max:20000']
            ]
        );

        if ($validator->fails()) {
            return response()->json(["status" => false, "msg" => $validator->errors()]);
        }

        $file = $rq->file("video");

        return $file;
        //Display File Extension
        echo 'File Extension: ' . $file->getClientOriginalExtension();
        echo '<br>';

        //Display File Real Path
        echo 'File Real Path: ' . $file->getPathname();
        echo '<br>';

        //Display File Size
        echo 'File Size: ' . $file->getSize();
        echo '<br>';

        //Display File Mime Type
        echo 'File Mime Type: ' . $file->getMimeType();

        return $file->getClientOriginalName();
        // $path = $rq->file->getRealPath();
        // return $path;
        $client = new FilestackClient('AoW3Y0EvlTbu8JMbJ1b30z');
        $filelink = $client->upload($file->getClientOriginalName());
        return "goal";
    }
}
