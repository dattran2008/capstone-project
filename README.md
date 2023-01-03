# Getting Started

This project is a simple TODO app

# Functionality of the application


## Prerequisites
* <a href="https://nodejs.org/en/download/package-manager/" target="_blank">NodeJS</a> version up to 12.xx 

# How to run the application

## Deloy Backend

To deploy an application run the following commands:

```
cd backend
npm install
* For the first time
serverless

* For the next time deployment
serverless deploy --verbose

or

sls deploy -v
```

## Deloy Frontend

To run a client application first edit the `client/src/config.ts` file to set correct parameters like below:

```
  const apiId = '...' API Gateway id
  export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

  export const authConfig = {
    domain: '...',    // Domain from Auth0
    clientId: '...',  // Client id from an Auth0 application
    callbackUrl: 'http://localhost:3000/callback'
  }
```

And then run the following commands:

```
cd client
npm install
npm run start
```

This should start a development server with the React application that will interact with the serverless TODO application.


