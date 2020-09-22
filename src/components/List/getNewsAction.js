import {actionCreator} from '@js-factory/onejs-react';

export default actionCreator('GET_NEWS', {
  key: 'articles',
  url:
    'https://newsapi.org/v2/top-headlines?country=in&apiKey=05bbf6ddb763471d967af9372905c920',
  reducer(prevNews, currentNews) {
    return [...prevNews, ...currentNews.articles];
  },
});
