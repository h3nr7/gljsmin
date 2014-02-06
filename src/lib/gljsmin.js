"use strict"
var fs = require('fs');

function convertMe() {
    if(process.argv.length > 2) {
        // Read the first additional argument passed to the program
        var myfile = process.argv[2]; 

        if(fs.existsSync(myfile)) {
            var content = fs.readFileSync(myfile, 'utf8');
            fs.writeFileSync(myfile, content.toUpperCase());
            console.log("Done");
        } else {
            console.log("File does not exist - " + myfile);
        }
    } else {
        console.log("ERROR: Pass on a file name/path");
    }
}

exports.convert = convertMe;