import { useCount, useNewsData, useIsLoading, useError } from '../../store/state/reducersToolkit';
import { BodyBox } from './styled';
import { Button } from './styled';
import { NewsBox } from './styled';

const Result = () => {
  const count = useCount();
  const news = useNewsData();
  const error = useError();
  const isLoading = useIsLoading();

  if (isLoading) {
    return <span>Loading news...</span>;
  }

  return (
    <BodyBox>
      <span>{count}</span>
      {error ? (
        <p>{error}</p>
      ) : (
        <div>
          {news.map((item) => {
            return (
              <NewsBox>
                <NewsBox.Image>
                  <img src={item.urlToImage} alt="Lost picture"></img>
                </NewsBox.Image>
                <NewsBox.Title>{item.title}</NewsBox.Title>
                <NewsBox.Content>{item.content}</NewsBox.Content>
                <NewsBox.Author>{item.author}</NewsBox.Author>
                <NewsBox.Date>{item.publishedAt}</NewsBox.Date>
              </NewsBox>
            );
          })}
        </div>
      )}
    </BodyBox>
  );
};

export default Result;
