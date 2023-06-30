import React from 'react';
import Parrafo from './components/Parrafo';
import Imagen from './components/Imagen';

/**
 * Renders the App component.
 *
 * @return {JSX.Element} The rendered JSX element.
 */
function App() {
  return (
    <>
      <h1>El chiringuito</h1>
      <Imagen />
      <Parrafo />
    </>
  );
}

export default App;

