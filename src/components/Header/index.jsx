import React, { useState, useEffect } from 'react';
import Body from '../body/bodyContainer';
import { Button } from '../body/styled';

export default function Header(props) {
  const { newsData, getNewsFeedData, tester, setTester } = props;

  useEffect(() => {
    getNewsFeedData();
  }, []);

  return (
    <div>
      <h1>this is HEADREERRRR</h1>
      <div>
        <Button onClick={() => setTester(tester ? false : true)}>Styled BUTTON</Button>
        <button onClick={() => setTester(tester ? false : true)}></button>
      </div>
      {tester ? <h2>TRUEE</h2> : <h2>FALSEE</h2>}
      <Body />

      <div>
        <h2>NEWS BLOCK DAILY</h2>
      </div>
    </div>
  );
}
