import { useContext } from 'react';
import './App.css';
import { UserContext } from './Context';
import { LoginRegister } from './LoginRegister'
import { Info } from './Info';

function App() {
  const { register } = useContext(UserContext); // Use context to access the register state

  // Conditional rendering based on the register state
  if (!register) {
    return (
      <>  
        <LoginRegister />
      </>
    );
  }

  return (
    <>
      <Info />
    </>
  );
}

export default App;
