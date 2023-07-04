import Parrafo0 from '../atomos/Parrafo0.jsx';
import Parrafo1 from '../atomos/Parrafo1';
import Botons from '../atomos/Botons';
import Image from '../atomos/Image';
import List from '../atomos/List';
import Image1 from '../atomos/Image1';
import Organize from '../atomos/Organize';
import Imagenes2 from '../atomos/Imagenes2';
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