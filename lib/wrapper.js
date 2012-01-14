// Jade 'HTML' wrapper for SocketStream 0.3

var fs = require('fs')
  , jade = require('jade');

exports.init = function(root, config) {

  return {

    name: 'Jade',

    extensions: ['jade'],

    assetType: 'html',

    contentType: 'text/html',

    compile: function(path, options, cb) {

      var locals = {};

      // If passing optional headers for main view HTML
      if (options && options.headers) locals = {SocketStream: options.headers};

      var input = fs.readFileSync(path, 'utf8');
      var parser = jade.compile(input, {filename: path});
      var output = parser(locals);

      cb(output);
    }
  }
}