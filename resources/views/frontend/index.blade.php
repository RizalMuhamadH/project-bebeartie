<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no"">
    <meta http-equiv=" X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!-- <link rel="stylesheet/sass" href="{{ asset('bulma/bulma.sass') }}" /> -->
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">

    <!-- Google Webfont -->
    <link href='http://fonts.googleapis.com/css?family=Raleway:400,200,100,300,500,600,700,800,900' rel='stylesheet'
        type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Lato:400,100,300,300italic,700,900' rel='stylesheet'
        type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>

    <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
    <link rel="stylesheet" href="{{ asset('design/css/style.css') }}">

    <!-- CSS -->
    <link rel="stylesheet" href="{{ asset('design/css/font-awesome/css/font-awesome.css') }}">
    {{-- <link rel="stylesheet" href="{{ asset('design/css/bootstrap.min.css') }}"> --}}
    <link rel="stylesheet" href="{{ asset('design/js/vendors/isotope/isotope.css') }}">
    <link rel="stylesheet" href="{{ asset('design/js/vendors/slick/slick.css') }}">
    <link rel="stylesheet" href="{{ asset('design/js/vendors/rs-plugin/css/settings.css') }}">
    <link rel="stylesheet" href="{{ asset('design/js/vendors/select/jquery.selectBoxIt.css') }}">
    <link rel="stylesheet" href="{{ asset('design/css/subscribe-better.css') }}">
    <link rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/themes/ui-lightness/jquery-ui.css">
    <link rel="stylesheet" href="{{ asset('design/plugin/owl-carousel/owl.carousel.css') }}">
    <link rel="stylesheet" href="{{ asset('design/plugin/owl-carousel/owl.theme.css') }}">

    <title>Bebeartie.id</title>
</head>

<body>
    <div id="app">
        <Home></Home>
    </div>
</body>

<script src="{{ asset('js/app.js') }}"></script>

<!-- Javascript -->
{{-- <script src="{{ asset('design/js/jquery.js') }}"></script> --}}
{{-- <script src="{{ asset('design/js/bootstrap.min.js') }}"></script> --}}
<script type="text/javascript" src="{{ asset('design/plugin/owl-carousel/owl.carousel.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('design/js/bs-navbar.js') }}"></script>
<script type="text/javascript" src="{{ asset('design/js/vendors/isotope/isotope.pkgd.js') }}"></script>
<script type="text/javascript" src="{{ asset('design/js/vendors/slick/slick.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('design/js/vendors/tweets/tweecool.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('design/js/vendors/rs-plugin/js/jquery.themepunch.revolution.min.js') }}">
</script>
<script type="text/javascript" src="{{ asset('design/js/vendors/rs-plugin/js/jquery.themepunch.tools.min.js') }}">
</script>
<script type="text/javascript" src="{{ asset('design/js/jquery.sticky.js') }}"></script>
<script type="text/javascript" src="{{ asset('design/js/jquery.subscribe-better.js') }}"></script>
<script type="text/javascript" src="http://code.jquery.com/ui/1.11.4/jquery-ui.min.js"></script>
<script type="text/javascript" src="{{ asset('design/js/vendors/select/jquery.selectBoxIt.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('design/js/main.js') }}"></script>

</html>
