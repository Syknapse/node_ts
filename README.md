# node_ts

TypeScript with a Node.js app

## Run

install project with `npm install`

Run project with `npm run start` this will start a development server on localhost:8080

Start TypeScript compiler watch mode `npx tsc -w` or `npm run watch`

Use Postman to make requests

Add new todo : POST `http://localhost:8080/todo` body with text  
View all todos: GET `http://localhost:8080/todo`  
Edit a todo: PATCH `http://localhost:8080/todo/:id` body with new text  
Delete a todo: DELETE `http://localhost:8080/todo/:id`
