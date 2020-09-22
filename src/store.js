import {createStore} from '@js-factory/onejs-react';

function requestMiddleware() {
  return (getState) => (req, next) => (data = {}) => {
    const {
      actionConfig: {type = 'get', url},
    } = req;
    console.log('req', req);

    if (!url) {
      return next(data);
    }

    const finalReqUrl = typeof url === 'function' ? url(data) : url;

    return fetch(finalReqUrl)
      .then((res) => res.json())
      .then((d) => {
        console.log('Todos', d);
        return d;
      })
      .then((json) => next(json))
      .catch((err) => console.log(err));
  };
}

export default (initialState) => {
  const store = createStore(
    {
      ...initialState,
    },
    [requestMiddleware()],
  );
  return store;
};
