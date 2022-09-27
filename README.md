# node_ts

TypeScript with a Node.js app

## Run

install project with `npm install`

Start TypeScript compiler watch mode `npx tsc -w` or `npm run watch` (this will create the /dist if it doesn't exist, which backend needs)

Run backend project with `npm run start:backend` this will start the backend development server on `localhost:8000`

Run frontend project with `npm run start:frontend` this will start the frontend development server on `localhost:8080` and open it in the browser

Run `npm run build` to create a production Webpack bundle

Use Postman to make requests

Add new todo : POST `http://localhost:8000/todo` body with text `{ "text": "example text" }`  
View all todos: GET `http://localhost:8000/todo`  
Edit a todo: PATCH `http://localhost:8000/todo/:id` body with new text `{ "text": "modified text" }`  
Delete a todo: DELETE `http://localhost:8000/todo/:id`

## Documentation

[Build a basic API with Node, Express and TypeScript](https://www.udemy.com/course/understanding-typescript/learn/lecture/16950324#overview)  
[Build an API with Node.js, Express.js, and Dynamo DB](https://youtu.be/JPQPPLQnyB4)  
[Getting started with DynamoDB and AWS SDKs](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GettingStarted.html)  
[Express routing](https://expressjs.com/en/guide/routing.html)  
[How to hide keys on the backend](https://youtu.be/FcwfjMebjTU)
[Handling errors in Express with TypeScript](https://www.codeconcisely.com/posts/how-to-handle-errors-in-express-with-typescript/)
[AWS CLI configuration guide](hhttps://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html)
[Read and Write to DynamoDB](https://youtu.be/SU4dZ-qgR1Y)
[AWS always free products](https://aws.amazon.com/free/?all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=tier%23always-free&awsf.Free%20Tier%20Categories=*all&awsm.page-all-free-tier=1)
[Getting started with DynamoDB and AWS SDKs](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GettingStarted.html)
[Webpack documentation](https://webpack.js.org/guides/)
[Webpack config with TypeScript](https://webpack.js.org/configuration/configuration-languages/#typescript)
