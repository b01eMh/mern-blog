import { useState } from 'react';
import { Button } from 'react-bootstrap';

const App = () => {
  const [clickCount, setClickCount] = useState(0);

  return (
    <>
      <div className="container py-4 px-3 mx-auto">
        <h1>Hello, Bootstrap and Vite!</h1>
        <Button onClick={() => setClickCount(clickCount + 1)}>
          Clicked {clickCount} times
        </Button>
      </div>
    </>
  );
};

export default App;
