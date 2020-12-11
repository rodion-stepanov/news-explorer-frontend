import {API_KEY} from '../config';
const BASE_URL = 'https://newsapi.org/v2/everything?language=ru&q=';


const weekAgo = "" + new Date(Date.now() - (1000 * 60 * 60 * 24 * 7)).toISOString().replace(/^([^T]+)T(.+)$/, '$1');
const dateNow = "" + new Date().toISOString().replace(/^([^T]+)T(.+)$/, '$1');

export const findArticles = (keyword) => {
  return fetch(`${BASE_URL}${keyword}&from=${weekAgo}&to=${dateNow}&sortBy=popularity&pageSize=100`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
    }
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
}