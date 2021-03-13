import { createAsyncThunk } from '@reduxjs/toolkit';

export const getNewsData = createAsyncThunk('htp/getNewsData', () =>
  fetch(
    `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=fa4ea7812c9f4440a9f00c7c905e2deb`,
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      const dataArray = [];
      data.articles.forEach((news, index) => {
        const dataObject = {
          id: index,
          author: news.author == null ? news.source.name : news.author,
          title: news.title,
          description: news.description,
          url: news.url,
          urlToImage: news.urlToImage,
          publishedAt: news.publishedAt,
          content: news.content,
        };
        dataArray.push(dataObject);
      });
      return dataArray;
    }),
);
