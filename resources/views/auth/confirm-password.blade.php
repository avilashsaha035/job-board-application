@extends('layouts.guest')

@section('title', 'Confirm Password')

@section('content')

    <div class="mb-4 text-sm text-gray-600">
        This is a secure area of the application. Please confirm your password
        before continuing.
    </div>

    <form method="POST" action="{{ route('password.confirm') }}">
        @csrf

        <!-- Password -->
        <div>
            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
            <input id="password" type="password" name="password" required autocomplete="current-password" class="block mt-1 w-full border rounded p-2">

            @error('password')
                <p class="text-sm text-red-600 mt-1">{{ $message }}</p>
            @enderror
        </div>

        <div class="flex justify-end mt-4">
            <button class="bg-indigo-600 text-white px-4 py-2 rounded">
                Confirm
            </button>
        </div>
    </form>

@endsection
