<nav class="bg-white shadow p-4 flex justify-between">
    <div class="font-bold">
        Club Management
    </div>

    <div>
        @auth
            <span>{{ auth()->user()->name }}</span>
            <form method="POST" action="{{ route('logout') }}" class="inline">
                @csrf
                <button type="submit">Logout</button>
            </form>
        @endauth

        @guest
            <a href="{{ route('login') }}">Login</a>
        @endguest
    </div>
</nav>
