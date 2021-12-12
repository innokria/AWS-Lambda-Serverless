# AWS-Lambda-Serverless
-AWS Lambda Tutorial: Lambda + Serverless
-This AWS Lambda tutorial shows how powerful functions as a 
service are and how easy it is to get up and running with them. 
-The Serverless framework helps you get up and running in production in 3 commands.
(2 if you already have the AWS CLI installed!)

##To start
- install npm install -g serverless
- open serverless.yml and add your method name 
- open handler.js to define the method
- run serverless deploy to deploy the method to aws lambda 



# managing lambda 
https://docs.aws.amazon.com/lambda/latest/dg/configuration-concurrency.html

https://docs.aws.amazon.com/lambda/latest/dg/invocation-scaling.html



**concurent thread** - inc to more than 1000 and test 
**code storage lmit**  75 GB - 



https://iamondemand.com/blog/tips-and-tricks-working-with-aws-lambda-at-large-scale/

However, for those functions whose usage scales along with your application
 traffic, it’s important to note that AWS Lambda functions 
are subject to concurrency limits. When functions reach 1,000 concurrent executions, 
they are subject to AWS throttling rules. 
Future calls will be delayed until your concurrent execution 
averages are back below the threshold. This means that as your
 applications scale, your high-traffic functions are likely to see 
drastic reductions in throughput during the time you need them most.
 To work around this limit, simply request that AWS raise your concurrency
 limits for the functions that you expect to scale.



What can be changed by sending a request to AWS support is the default 1,000 concurrent executions limit, as well as the 75MB function code storage limit.





---------





Concurrency is the number of requests that your function is serving at any given time.
 When your function is invoked, Lambda allocates an instance of it to process the event. When the function code finishes running, it can handle another request. If the function is invoked again while a request is still being processed,
 another instance is allocated, which increases the 
function's concurrency. The total concurrency for
 all of the functions in your account is subject to a per-region quota.

The first time you invoke your function, AWS Lambda creates an instance of the function and runs its handler method to process the event. When the function returns a response, it stays active and waits to process additional events. If you invoke the function again while the first event is being processed, Lambda initializes another instance, and the function processes the two events concurrently. As more events come in, Lambda routes them to available instances and creates new instances as needed. When the number of requests decreases, Lambda stops unused instances to free up scaling capacity for other functions.

The default regional concurrency quota starts at 1,000 instances. For more information, or to request an increase on this quota, see Lambda quotas. To allocate capacity on a per-function basis, you can configure functions with reserved concurrency.



---------
#calculate lambda concurrency

This metric is the average number of requests per second multiplied by the average duration in seconds. For example, if a Lambda function takes an average 500 ms to run with 100 requests per second, the concurrency is 50 (100 * 0.5 seconds).
