<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Avilash Saha | Software Engineer</title>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">

        <!-- Tailwind CSS v3.3.3 -->
        {{-- <script src="https://cdn.tailwindcss.com"></script> --}}

        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="{{ asset('assets/frontend/css/style.css') }}">
        @vite(['resources/css/app.css', 'resources/js/app.js'])
    </head>

    <body class="font-sans bg-dark text-light overflow-x-hidden scroll-smooth">

        @include('frontend.includes.header')

        <div class="">
            @yield('content')
        </div>

        @include('frontend.includes.footer')


        <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
        <script src="{{ asset('assets/frontend/js/script.js') }}"></script>

    </body>
</html>
