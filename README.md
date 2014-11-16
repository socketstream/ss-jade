# Jade (HTML) wrapper for SocketStream 0.3

Allows you to use [Jade](http://jade-lang.com) files (.jade) in your SocketStream project.

### Instructions

Add `ss-jade` to your application's `package.json` file and then add this line to app.js:

``` javascript
ss.client.formatters.add(require('ss-jade'));
```

To add options to the compile settings in ss-jade, require the file first, call the ```addCompileOptions``` function, and then add the ss-jade object to the SocketStream client formatters, like so:

``` javascript
var ssJade = require('ss-jade');
ssJade.addCompileOptions({ pretty: true });
ss.client.formatters.add(ssJade);
```

### Passing local variables

Some 3rd-party authentication libraries will want to inject HTML into your views.
You may easily pass through local variables as so:

``` javascript
ss.client.formatters.add(require('ss-jade'), {locals: {myvar: 'myvalue'}});
```