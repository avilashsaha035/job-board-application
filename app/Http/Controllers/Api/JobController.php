<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreJobRequest;
use App\Models\Job;

class JobController extends Controller
{
    public function index()
    {
        $jobs = Job::select(
            'id',
            'title',
            'company',
            'location',
            'category',
            'created_at'
        )
        ->latest()
        ->get();

        return response()->json($jobs);
    }

    public function store(StoreJobRequest $request)
    {
        $job = new Job();
        $job->title        = $request->title;
        $job->company      = $request->company;
        $job->location     = $request->location;
        $job->category     = $request->category;
        $job->description  = $request->description;
        $job->save();

        return response()->json([
            'message' => 'Job created successfully!!',
            'job' => $job
        ], 201);
    }

    public function show($id)
    {
        $job = Job::with('applications')->findOrFail($id);
        return response()->json($job);
    }

    public function destroy($id)
    {
        Job::findOrFail($id)->delete();

        return response()->json([
            'message' => 'Job deleted successfully!!'
        ]);
    }
}
