import { newsFeed } from '../../api/newsFeed';

export const GET_NEWS_DATA = 'GET_NEWS_DATA';

export function getNewsFeedData() {
  return (dispatch) => {
    newsFeed().then((data) => {
      const dataArray = [];

      data.data.forEach((candle) => {
        const dataObject = {
          time: candle[0] / 1000,
          open: candle[1],
          high: candle[2],
          low: candle[3],
          close: candle[4],
        };

        dataArray.push(dataObject);
      });
      dispatch({
        type: GET_NEWS_DATA,
        newsData: dataArray,
      });
    });
  };
}
