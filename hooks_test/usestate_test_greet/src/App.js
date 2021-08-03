import React, {useState} from 'react';
 
const App = () => {
  
  const [greet, setGreet] = useState("Teste")

  const Headline = () => {
    return <h1>{greet}</h1>;
  };

  const greeting = 2;

  const Button = () => {
    return <button onClick = {() => setGreet(greeting)}> clique</button>
  }
  
  return (
  <div>
    <Headline />
    <Button />
  </div>
  );

};
export default App;