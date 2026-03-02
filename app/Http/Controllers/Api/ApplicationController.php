<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreApplicationRequest;
use App\Models\Application;

class ApplicationController extends Controller
{
    public function store(StoreApplicationRequest $request)
    {
        $application              = new Application();
        $application->job_id      = $request->job_id;
        $application->name        = $request->name;
        $application->email       = $request->email;
        $application->resume_link = $request->resume_link;
        $application->cover_note  = $request-> cover_note ?? null;
        $application->save();

        return response()->json([
            'message' => 'Application submitted successfully!!',
            'application' => $application
        ], 201);
    }
}
