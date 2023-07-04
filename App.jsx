import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Footer from './footer/footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    

      <Footer />
    </>
  )
}

export default App;
