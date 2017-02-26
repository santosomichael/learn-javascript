//old
// module.exports = function (file, ext) {
// 	var extLength = ext.length;		//extention length
// 	var fs = require('fs');

// 	fs.readdir(file, function (err, data) {
// 	    if (err) {
// 	            return console.log(err);
// 	    } else {
// 	        var strings = data.toString().split(',');
	        
// 	        strings = strings.map(function(item) {
// 	                var itemLength = item.length;
// 	                if (item.substr(itemLength - extLength, itemLength) == ext && itemLength > extLength)
// 	                        return item;
// 	                return false;
// 	        });

// 	        //delete all unnecessary item
// 	        strings = strings.filter(function (item) {
// 	                return item != false;
// 	        });
// 	        return strings;
// 	        //console.log(strings);
// 	    }
// 	})	
// }
var fs = require("fs");
var path = require("path");

module.exports = function(dirname,extension,callback){
    var list = [];

    fs.readdir(dirname, function(err,files){
        if(err){
            return callback(err);
        }
        else{
            extension = '.' + extension
            files.forEach(function(fileName){
                if(path.extname(fileName) === extension){
                    list.push(fileName);
                }
            })
        }
        return callback(null,list);
    })
};