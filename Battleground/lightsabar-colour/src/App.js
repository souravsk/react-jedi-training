import Input from "./Input";
import Square from "./Square";
import Header from "./Header";
import {useState} from 'react';

function App() {

  //so we have created a useState here with empty value
  const [colorValue, setColorValue] = useState('');

  //so we have to created a useState to show color hex code
  const [hexValue, setHexValue] = useState('')

  //
  const [isDarkText, setIsDarkTest] = useState('')

  return (
    <div className="App">
      <Header/>
      <Square 
        colorValue={colorValue}
        hexValue={hexValue}
        isDarkText={isDarkText}
      />
      <Input
        colorvalue={colorValue}
        setColorValue={setColorValue}
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        setIsDarkTest={setIsDarkTest}
      />
    </div>
  );
}

export default App;
