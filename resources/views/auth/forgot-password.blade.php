@extends('layouts.guest')

@section('title', 'Forgot Password')

@section('content')

    <div class="mb-4 text-sm text-gray-600">
        Forgot your password? No problem. Enter your email and we will send you a
        password reset link.
    </div>

    @if (session('status'))
        <div class="mb-4 text-sm text-green-600">
            {{ session('status') }}
        </div>
    @endif

    <form method="POST" action="{{ route('password.email') }}">
        @csrf

        <!-- Email -->
        <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>

            <input id="email" type="email" name="email" value="{{ old('email') }}" required autofocus class="block mt-1 w-full border rounded p-2">

            @error('email')
                <p class="text-sm text-red-600 mt-1">{{ $message }}</p>
            @enderror
        </div>

        <div class="flex justify-end mt-4">
            <button class="bg-indigo-600 text-white px-4 py-2 rounded">
                Email Password Reset Link
            </button>
        </div>
    </form>

@endsection
