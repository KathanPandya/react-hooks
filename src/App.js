import { Fragment } from 'react';
import { useState,useMemo } from 'react';

function App() {

  const [count, setCount] = useState(1);
  const count1 = 0;

  const heavyComputation = () => {
    for (let i = 0; i < count * 100; i++) {
      console.log("hello kathan");
    }
  };

  const countUpdate =()=>{
    setCount((prev) => prev + 1)
    heavyComputation();
  }

  useMemo(() => {
    heavyComputation();
  }, [count1]);


  return (
    <Fragment>
      <div>{count} </div>
      <button onClick={countUpdate}> Click me</button>
    </Fragment>
  );
}

export default App;
