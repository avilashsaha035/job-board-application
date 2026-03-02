<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Application;
use Illuminate\Http\Request;

class ApplicationController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'job_id'      => 'required|exists:jobs,id',
            'name'        => 'required|string',
            'email'       => 'required|email',
            'resume_link' => 'required|url',
            'cover_note'  => 'nullable|string',
        ]);

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
