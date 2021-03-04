import axios from 'axios';

function newsFeed() {
  return axios({
    method: 'GET',
    url: `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=API_KEY`,
  });
}

export { newsFeed };
