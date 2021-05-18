# Asynchronous Programming

JavaScript is event driven. The `setTimeout` function as an example, a task is scheduled
(wait for a specified amount of milliseconds), when the task completes, (the amount of time has passed), the function passed to `setTimeout` is called. The next line of code after `setTimeout` was already executed.

All asynchronous I/O in node.js work in the same way.
