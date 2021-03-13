import { useSelector } from 'react-redux';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getNewsData } from '../../api/getNewsFeed';

// async actions

// const loadUser = (id) => (dispatch) => {
//   fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//     .then((res) => res.json())
//     .then((data) => dispatch(setUser(data.name)))
//     .catch((e) => console.log(e));
// };

// const getNewsData = createAsyncThunk('counter/loadUserName', () =>
//   fetch(
//     `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=fa4ea7812c9f4440a9f00c7c905e2deb`,
//   )
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//       const dataArray = [];
//       data.articles.forEach((news, index) => {
//         const dataObject = {
//           id: index,
//           author: news.author == null ? news.source.name : news.author,
//           title: news.title,
//           description: news.description,
//           url: news.url,
//           urlToImage: news.urlToImage,
//           publishedAt: news.publishedAt,
//           content: news.content,
//         };
//         dataArray.push(dataObject);
//       });
//       return dataArray;
//     }),
// );

const initialState = {
  count: 0,
  newsData: [],
  isLoading: false,
  error: null,
};

// reducer
const countReducer = createSlice({
  name: 'jason',
  initialState,
  reducers: {
    increment(state) {
      // "counter/increment";
      state.count = state.count + 1;
    },
    decrement(state) {
      state.count = state.count - 1;
    },
    multiple(state, action) {
      console.log(action);
      state.count = state.count * action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNewsData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getNewsData.fulfilled, (state, action) => {
        console.log(action);
        state.isLoading = false;
        state.newsData = action.payload;
      })
      .addCase(getNewsData.rejected, (state, action) => {
        console.log(action);
        state.isLoading = false;
        state.error = 'Something went wrong!!!';
      });
  },
});

// selectors
const useCount = () => useSelector((state) => state.htp.count);
const useNewsData = () => useSelector((state) => state.htp.newsData);
const useIsLoading = () => useSelector((state) => state.htp.isLoading);
const useError = () => useSelector((state) => state.htp.error);

export default countReducer.reducer;

export const { increment, decrement, multiple } = countReducer.actions;

export { useCount, useNewsData, getNewsData, useIsLoading, useError };
