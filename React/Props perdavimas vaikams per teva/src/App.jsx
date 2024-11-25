import { useState } from 'react';
import InputComponent from './InputComponent';
import DisplayComponent from './DisplayComponent';
 
const App = () => {
  const [sharedText, setSharedText] = useState('');
 
  const handleTextChange = (newText) => {
    setSharedText(newText);
  };
 
  return (
<div>
<h1>React State Lifting Example</h1>
<InputComponent onTextChange={handleTextChange} />
<DisplayComponent text={sharedText} />
</div>
  );
};
 
export default App;
