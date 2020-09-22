import {withState, withStore} from '@js-factory/onejs-react';
import NewsTmpl from './NewsTmpl';
import getTodoAction from './getTodoActions';
import getNewsAction from './getNewsAction';

export default withStore({
  watcher: ['todos', 'articles'],
  actions: {getTodoAction, getNewsAction},
})(
  withState({
    // eslint-disable-next-line no-shadow
    componentDidMount({articles, getNewsAction}) {
      if (!articles.length) {
        getNewsAction();
      }
    },
    template: NewsTmpl,
  })(),
);
