import { useState } from 'react'
import './App.css'
import Authenticate from './components/Authenticate';
import SignUp from './components/SignUpForm';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Authenticate/>
      <SignUp/>
    </>
  );
}

export default App
