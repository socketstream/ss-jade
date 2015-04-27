# Jade (HTML) wrapper for SocketStream

Allows you to use [Jade](http://jade-lang.com) files (.jade) in your SocketStream project.


### Instructions

Add `ss-jade` to your application's `package.json` file and then add this line to app.js:

``` javascript
ss.client.formatters.add(require('ss-jade'));
```

Add [Jade API options](http://jade-lang.com/api/) as the second parameter:

``` javascript
ss.client.formatters.add(require('ss-jade'), {
	pretty: true
});
```


### Passing local variables

Some 3rd-party authentication libraries will want to inject HTML into your views.
You may easily pass through local variables as so:

``` javascript
ss.client.formatters.add(require('ss-jade'), {
	pretty: true,
	locals: {
		myvar: 'myvalue'
	}
});
```

Note that these variables, while local to each file, are actually global to all your template jade files. The Jade API already has a `globals` variable, so `locals` was chosen to avoid name collision. This `locals` variable is not passed on to the compiler, only to each single rendered template.
