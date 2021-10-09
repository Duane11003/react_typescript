import React from 'react';
import './App.css';
import Textfield from './Textfield';

const App: React.FC = () => {
  return (
    <div>
      <p>APP COMPONENT</p>
      <Textfield handleChange={e => e.target.value} fn={() => 'hi'} ok={false} i={3} person={{firstName: 'duane', lastName: 'mcfarlane'}}  />
    </div>
  )
}
export default App;
