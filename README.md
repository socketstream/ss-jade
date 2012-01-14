# Jade (HTML) wrapper for SocketStream 0.3

Allows you to use Jade files (.jade) in your SocketStream project.


### Instructions

Add `ss-jade` to your application's `package.json` file and then add this line to app.js:

    ss.client.formatters.add(require('ss-jade'));