# marcopolo_game

Pre-required : Nodejs, npm

How to run marcopolo_game server

1. git clone  https://github.com/sidd98/marcopolo_game.git
2. go to marcopolo directory
3. CMD -  npm install
4. CMD -  npm run start
5. provide input in params like localhost:4000/play?numbers=1000000

#for test
1. CMD - npm run test-dev


When is it a good idea to not use NodeJs? Why?

1. Heavy server side processing
   NodeJs is not good for cpu bound task. Node.js is a runtime environment that executes JavaScript on the server side. Being a frontend programming language, JavaScript uses a single thread to process tasks quickly. more thread is not required for it to work, because tasks in JavaScript are lightweight and take little CPU.
   The problem occur when nodejs use for cpu intensive task, Whenever a heavy request comes to the event loop, Node.js would set all the CPU available to process it first, and then answer other requests queued.
   However,
   A new feature called worker threads module can be used to leverage additional threads from a thread pool, to carry CPU bound tasks.

2. Not mature
   Node provides the developers with the access to a bunch of third-party modules already developed by the community. Many bug and also security issue.

3. Lack of Library Support
   Compare to other languages, javascript lacks a library system that is robust when it is contrasted with the other programming languages out there.

4. Asynchronous Model
   Its time consuming to get know about the non blocking model of nodejs.

