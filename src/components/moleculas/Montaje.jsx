import Image from '../atomos/Image.jsx';
import Parrafo0 from '../atomos/Parrafo0.jsx';
import Organize from '../atomos/Organize.jsx';
import Image1 from '../atomos/Image1.jsx';
import Imagenes2 from '../atomos/Imagenes2.jsx';
import Parrafo1 from '../atomos/Parrafo1.jsx';
import List from '../atomos/List.jsx';
import Botons from '../atomos/Botons.jsx';
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