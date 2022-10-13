import { faker } from '@faker-js/faker'
const { Factory } = require('rosie')

Factory.define('todo')
  .sequence('id')
  .attrs({
    completed: false,
    text: () => faker.lorem.sentence(3),
  })

export const mockedTodo: TTodoItem = Factory.build('todo')

export const mockedTodos: TTodoList = Factory.buildList('todo', Math.floor(Math.random() * 10) + 1)
