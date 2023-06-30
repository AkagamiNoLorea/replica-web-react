

import Parrafo from './components/Parrafo';
import Boton from './components/boton';
import Image from './components/Image';
import List from './components/List';

  
 
function App() {
  return (
    <>
  
      <Image />
      <Boton />
      <div style={{ display: "grid", gridTemplateColumns: "1fr" }}>
      <Parrafo />
      </div>
      
      <List />
      
      
      </>
  );

}

export default App;

