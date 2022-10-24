# Todo app (full stack)

A full stack todo app with AWS Dynamo database, TypeScript, Node.js backend, and React + Webpack + TypeScript for the frontend.

## Features

- Create todos and save them to Dynamo database permanently.
- Toggle completeness state
- Edit todo text
- Delete todo
- Undo last delete within a short time limit
- Snackbar notifications inform user of success
- Fully responsive

## Run

Install project with `npm install`

IMPORTANT: project will not work without the environment variables installed locally

Start TypeScript compiler watch mode `npx tsc -w` or `npm run watch` (this will create the /dist if it doesn't exist, which backend needs)

Run backend project with `npm run start:backend` this will start the backend development server on `localhost:8000`

Run frontend project with `npm run start:frontend` this will start the frontend development server on `localhost:8080` and open it in the browser

Run `npm run build` to create a production Webpack bundle (frontend only)

## Postman requests

Add new todo : POST `http://localhost:8000/todos` body with text `{ "text": "example text" }`  
View all todos: GET `http://localhost:8000/todos`  
Edit a todo: PATCH `http://localhost:8000/todos/:id` body with all todo properties `{ "text": "modified text", "dateCreated": 1664352859365, "completed": true }`  
Delete a todo: DELETE `http://localhost:8000/todos/:id` body with all todo properties `{ "text": "this will be deleted", "dateCreated": 1664352859365, "completed": true }`

## Project to-dos

- Sorting: Sort by date added. Drop completed to end of list
- Manual sorting: Allow user to sort manually (drag and drop, create custom sorting)
- Add loading states
- Error modal to give feedback to user. Or use snackbar with a different color to display error messages
- Add animations

## Documentation

[Build a basic API with Node, Express and TypeScript](https://www.udemy.com/course/understanding-typescript/learn/lecture/16950324#overview)  
[Build an API with Node.js, Express.js, and Dynamo DB](https://youtu.be/JPQPPLQnyB4)  
[Harry Potter API with Dynamo DB, Nodejs, and Expressjs](https://github.com/jamesqquick/harry-potter-api-with-dynamo-db-node-express)  
[Getting started with DynamoDB and AWS SDKs](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GettingStarted.html)  
[Express routing](https://expressjs.com/en/guide/routing.html)  
[How to hide keys on the backend](https://youtu.be/FcwfjMebjTU)
[Handling errors in Express with TypeScript](https://www.codeconcisely.com/posts/how-to-handle-errors-in-express-with-typescript/)
[AWS CLI configuration guide](hhttps://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html)
[Read and Write to DynamoDB](https://youtu.be/SU4dZ-qgR1Y)
[AWS always free products](https://aws.amazon.com/free/?all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=tier%23always-free&awsf.Free%20Tier%20Categories=*all&awsm.page-all-free-tier=1)
[Create a React App WITHOUT Create React App](https://youtu.be/h3LpsM42s5o)
[Create React App without Create React App](https://blog.bitsrc.io/create-react-app-without-create-react-app-b0a5806a92)
[Webpack documentation](https://webpack.js.org/guides/)
[Webpack config with TypeScript](https://webpack.js.org/configuration/configuration-languages/#typescript)
[Using CSS in react + TypeScript + Webpack](https://www.carlrippon.com/using-css-react-typescript-with-webpack5/)
[CSS Loader](https://github.com/webpack-contrib/css-loader)

More detailed notes about the development in the [Development Notes file](./dev-notes.md)

2022
