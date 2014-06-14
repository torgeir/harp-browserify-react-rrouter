# harp + browserify (+ react + rrouter)

Project template showing how to use browserify for harp apps. Shows how to use a html5 history api router with externally working urls with harp.

## Demo

http://torgeir.github.io/harp-browserify-react-rrouter

## What does this project provide?

- An easy way to use browserify with harp apps

    npm run watch

- Automatic recompilation - as smooth as with every other harp application, but with browserify goodness!

- Support for jsx and (partially) es6 using rectify.

- This specific example uses React and RRouter for routing using the html 5 history api

- An harp "hack" using layouts allows a history api router to hijack urls and render js views, even if the first url you navigate to is a fake one. See below for an explanation.

- A font-awesome mixin that abstracts away what icon font you may use

    .camera {
      .fa-icon(@fa-var-camera-retro);
    }

## Run/Watch/Recompile

    npm run watch

## Compile

    npm run bundle-js
    ./node_modules/.bin/harp compile public target
    cd target
    python -m SimpleHTTPServer

## How does the harp routing hack work?

By adding empty files for your routes, e.g. `another.ejs`, while using a `_layout.ejs` (but without actually utilizing `yield`) and linking to them using the history api `/another.html`, the url is picked up by the router on page load and the correct js view can be rendered instead of actually loading a real file.

Try serving up this site and navigate directly to `http://torgeir.github.io/harp-browserify-react-rrouter/another.html`, then on to `/`.

Nice, isn't it?

## Credits

This is an extension of https://github.com/sklise/harp-browserify
