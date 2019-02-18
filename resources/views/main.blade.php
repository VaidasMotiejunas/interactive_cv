<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <link rel="stylesheet" type="text/css" href="css/app.css">
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>Interactive CV</title>

    </head>
    <body>

    <div id="app">
        <main-component></main-component>
    </div>

    <script src="js/app.js">
    </script>
    </body>
</html>
