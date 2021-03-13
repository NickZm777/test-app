import React from 'react';
import { BodyBox } from './styled';
import { Button } from './styled';
import { NewsBox } from './styled';

const Body = (props) => {
  const { tester1, setTester1, getNewsFeedData, newsData } = props;

  return (
    <BodyBox>
      <div>
        <h3>News Blocks from BODY</h3>
        <div>{tester1}</div>
        <Button onClick={() => setTester1(tester1 + 100000)}>Click to up</Button>
        <Button onClick={() => setTester1(tester1 - 100000)}>Click to down</Button>
        <Button onClick={() => getNewsFeedData()}>Load news</Button>
      </div>
      <div>
        {newsData.map((item) => {
          return (
            <NewsBox>
              <NewsBox.Image>
                <img src={item.urlToImage}></img>
              </NewsBox.Image>
              <NewsBox.Title>{item.title}</NewsBox.Title>
              <NewsBox.Content>{item.content}</NewsBox.Content>
              <NewsBox.Author>{item.author}</NewsBox.Author>
              <NewsBox.Date>{item.publishedAt}</NewsBox.Date>
            </NewsBox>
          );
        })}
      </div>
    </BodyBox>
  );
};

export default Body;
