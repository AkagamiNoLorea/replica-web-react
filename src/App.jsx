

import Parrafo from './components/Parrafo';
import Boton from './components/boton';
import Image from './components/Image';
import List from './components/List';

  
 
function App() {
  return (
    <>
    <Boton />
    <Image />
    <div style={{ display: "grid", gridTemplateColumns: "1fr" }}>
    <Parrafo />
    <List />
    </div>
    <Boton />
    </>
  );

}

export default App;

