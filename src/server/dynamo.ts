import AWS from 'aws-sdk'
import { Todo } from '../models/todoModel'

AWS.config.update({
  region: process.env.AWS_DEFAULT_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
})

const dynamoClient = new AWS.DynamoDB.DocumentClient()
const TABLE_NAME = 'todos-api'

export const getTodos = async () => {
  const params = {
    TableName: TABLE_NAME,
  }
  const data = await dynamoClient.scan(params).promise()
  return data
}

export const createOrUpdateTodo = async (todo: Todo) => {
  const params = {
    TableName: TABLE_NAME,
    Item: todo,
  }
  return await dynamoClient.put(params).promise()
}

export const deleteTodo = async (id: string) => {
  const params = {
    TableName: TABLE_NAME,
    Key: {
      id,
    },
  }
  return await dynamoClient.delete(params).promise()
}
