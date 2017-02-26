//node program.js, reading a file on directory show file with txt extension, with separated module
var module = require('./module6');
var file = process.argv[2];             //file path
var ext = process.argv[3];              //extension required

module(file, ext, function(err, data) {
    if (err) {
            throw new Error("error, problem occured" + err);
    } else {
            data.forEach(function(item) {
                    console.log(item);
            });
    }
});