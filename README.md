gljsmin
=======

node module for minifier shaders into js for use in HTML5 WebGL from a folder, it will check if a .vert and a .frag file of the same name exist.



INSTALL:

npm install gljsmin

EXAMPLE:


./node_modules/.bin/gljsmin { INPUT FOLDER } { OUTPUT FILE }

The available options are:

    --debug
        Switch on debug mode which has line breaks, otherwise everything is compiled into a single line

