import styled from '@emotion/styled';

export const BodyBox = styled.div`
  width: 100%;
  background: lightgrey;
  box-sizing: border-box;
  margin: 0 3%;
`;

export const Button = styled.button`
  color: yellow;
  background: blue;
  padding: 3px;
  margin: 2px 10px;
  &:hover {
    transituon: 0.2s;
    color: red;
    background: white;
  }
`;

export const NewsBox = styled.div`
  padding: 10px;
  margin: 20px auto;
`;

NewsBox.Image = styled.div`
  float: left;
  img {
    width: 150px;
    height: 150px;
  }
`;

NewsBox.Title = styled.h3`
  color: red;
`;

NewsBox.Content = styled.span``;

NewsBox.Date = styled.div`
  color: blue;
`;

NewsBox.Author = styled.span`
  color: grey;
  opacity: 0.5;
`;
