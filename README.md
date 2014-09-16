angular-socketio-chatroom-example
=================================

A working chatroom example built with AngularJS and Socket.io.

I fixed the data-binding issue in the Ref.1 which separate the server and client in Ref.4.

References: 

1. The main one: http://morlay.tla42.org/coding/2013/03/01/AngularJS-Socket.IO/

2. Help to understand and debug: http://code.tutsplus.com/tutorials/more-responsive-single-page-applications-with-angularjs-socketio-creating-the-library--cms-21738

3. Also very helpful example: https://github.com/meso/angularjs-socketio-node-sample

4. A very popular post, also the source used by Ref. 1: http://www.html5rocks.com/en/tutorials/frameworks/angular-websockets/#disqus_thread

Step 0:
    Go to chatroom folder.
    First: npm install -g bower
           or
           npm install -g
    Then: bower install

Step 1: 

    Install the dependencies in myapp folder: npm install socket.io express

Step 2: 

    Start the server side in myapp folder: node app.js

    Then it will be run on http://127.0.0.1:3000

Step 3: 

    Start the client side in chatroom folder: npm start

    It will be run on http://127.0.0.1:8000/app/index.html
