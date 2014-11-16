// Jade 'HTML' wrapper for SocketStream 0.3

var fs = require('fs'),
    jade = require('jade'),
    _transferOptions;

exports.init = function(root, config) {

  if (!(config && typeof(config) === 'object')) config = {};

  return {

    name: 'Jade',

    extensions: ['jade'],

    assetType: 'html',

    contentType: 'text/html',

    compile: function(path, options, cb) {

      var i, compileOptions = {filename: path}, locals = {};

      // Merge any locals passed to config.locals
      if (config.locals && typeof(config.locals) === 'object')
        for (var attrname in config.locals) { locals[attrname] = config.locals[attrname]; }

      // If passing optional headers for main view HTML
      if (options && options.headers) locals['SocketStream'] = options.headers;

      if(typeof _transferOptions === 'object') {
        for (var attrname in _transferOptions) { compileOptions[attrname] = _transferOptions[attrname]; }
      }

      var input = fs.readFileSync(path, 'utf8');
      var parser = jade.compile(input, compileOptions);
      var output = parser(locals);

      cb(output);
    }
  };
};

exports.addCompileOptions = function(options) {
  if(typeof options === 'object') {
    _transferOptions = options;
  }
};
