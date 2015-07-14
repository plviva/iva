README
Tested with nodejs 0.12.5.
The consumer must be started first with: "node consumer/consumer.js" Then the producer can be started with: "node producer/producer.js"
I added a few unit tests for both the consumer and producer in test/ subdirectory.
They can be launched using:
producer>nodeunit test/tests.js
and for the consumer:
consumer>nodeunit test/test.js
