import 'source-map-support/register'

import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import * as middy from 'middy'
import { cors } from 'middy/middlewares'
import { searchToDoItem } from '../../helpers/todos'
import { getUserId } from '../utils'
import { SearchTodoRequest } from '../../requests/SearchTodoRequest'

export const handler = middy(
  async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    const { name }: SearchTodoRequest = JSON.parse(event.body)
    const userId = getUserId(event)
    const todos = await searchToDoItem(userId, name)

    return {
      statusCode: 200,
      body: JSON.stringify({
        items: todos
      })
    }
  }
)

handler.use(
  cors({
    credentials: true
  })
)
