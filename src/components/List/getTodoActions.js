import {actionCreator} from '@js-factory/onejs-react';

export default actionCreator('GET_TODO', {
  key: 'todos',
  url: 'https://jsonplaceholder.typicode.com/todos',
  reducer(prevTodos, currentTodos) {
    return [...prevTodos, ...currentTodos];
  },
});
