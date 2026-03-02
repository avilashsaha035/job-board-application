@extends('layouts.guest')

@section('title', 'Verify Email')

@section('content')

    <div class="mb-4 text-sm text-gray-600">
        Thanks for signing up! Before getting started, please verify your email
        address by clicking on the link we just emailed to you.
    </div>

    @if (session('status') == 'verification-link-sent')
        <div class="mb-4 text-sm text-green-600 font-medium">
            A new verification link has been sent to your email address.
        </div>
    @endif

    <div class="mt-4 flex items-center justify-between">
        <form method="POST" action="{{ route('verification.send') }}">
            @csrf

            <button class="bg-indigo-600 text-white px-4 py-2 rounded">
                Resend Verification Email
            </button>
        </form>

        <form method="POST" action="{{ route('logout') }}">
            @csrf

            <button class="text-sm text-gray-600 underline hover:text-gray-900">
                Log Out
            </button>
        </form>
    </div>

@endsection
