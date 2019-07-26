<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet/sass" href="{{ asset('bulma/bulma.sass') }}"/>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
    <title>Bebeartie.id</title>
</head>

<body>
    <div id="app">
        <Home></Home>
    </div>
</body>

<script src="{{ asset('js/app.js') }}"></script>

</html>
