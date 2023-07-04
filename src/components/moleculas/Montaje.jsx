
import Parrafo from './components/atomos/Parrafo';
import Parrafo1 from './components/atomos/Parrafo1';
import Botons from './components/atomos/Botons';
import Image from './components/atomos/Image';
import List from './components/atomos/List';
import Image1 from './components/atomos/Image1';
import Organize from './components/atomos/Organize';
import Imagenes2 from './components/atomos/Imagenes2';
import './Imagenes2-style.css'
import './Parrafo-style.css'
import './Parrafo1-style.css'

const Montaje = () => {
    return (
        <>
        <div className='Container1'>
            <Image/>
            <Parrafo/>
            <Organize/>
        </div>
        <div className='Container2'>
        <Image1/>
        <Imagenes2/>
        <Parrafo1/>
        <List/>
        <Botons/>

        </div>
        </>
    );
}
export default Montaje;