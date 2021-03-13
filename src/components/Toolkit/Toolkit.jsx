import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Result from './Result';
import { decrement, getNewsData, increment, multiple } from '../../store/state/reducersToolkit';
import { Button } from './styled';
const Toolkit = () => {
  const [multiplier, setMultiplier] = useState(2);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleMultiple = () => {
    dispatch(multiple(multiplier));
  };

  const handlegetNewsData = () => {
    dispatch(getNewsData(multiplier));
  };

  const handleChangeMultiplier = (event) => {
    const { target } = event;
    const convertedValue = Number(target.value);
    if (convertedValue > 2 && Number.isInteger(convertedValue)) {
      setMultiplier(convertedValue);
    }
  };

  useEffect(() => {
    handlegetNewsData();
  }, []);

  return (
    <div className="container">
      <h1>Example</h1>
      <div className="buttons-box">
        <Button onClick={handleIncrement}>+</Button>
        <Button onClick={handleDecrement}>-</Button>
        <Button onClick={handleMultiple}>*</Button>
        <Button onClick={handlegetNewsData}>Get News</Button>
      </div>
      <div>
        <label>
          <span>Set multiplier: </span>
          <input
            type="number"
            min={5}
            step={5}
            value={multiplier}
            onChange={handleChangeMultiplier}
          />
        </label>
      </div>
      <Result />
    </div>
  );
};

export default Toolkit;
