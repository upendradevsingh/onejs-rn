import {withState, withStore} from '@js-factory/onejs-react';
import HeaderTmpl from './HeaderTmpl';

export default withStore({
  watcher: ['navText'],
})(
  withState({
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
    },
    template: HeaderTmpl,
  })(),
);
