'use strict';

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Welcome to the world of!',
   
    }),
  };
 callBack(null,response);
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.imageResize =  async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Welcome to rahul!',
   
    }),
  };
 callBack(null,response);
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
