import Parrafo0 from './components/atomos/Parrafo0';
import Parrafo1 from './components/atomos/Parrafo1';
import Botons from './components/atomos/Botons';
import Image from './components/atomos/Image';
import List from './components/atomos/List';
import Image1 from './components/atomos/Image1';
import Organize from './components/atomos/Organize';
import Imagenes2 from './components/atomos/Imagenes2';
import './Montaje-style.css';

const Montaje = () => {
    return (
        <>
        <div className='Container1'>
        <Image/>
        <Parrafo0/>
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