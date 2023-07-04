import './SeccionMobile.css'

import Circuloamarillo from './components/Circuloamarillo';
import Circuloazul from './components/Circuloazul';
import Rombo from './components/Rombo';
import Titulo from './components/Titulo';
import Boton from './components/Boton';
import HeaderIphone from './components/HeaderIphone';
import Icons from './components/Icons';

const SecciónMobile = () => {
    return (
        <>
            <div className="seccionMobile">
            <Circuloamarillo />
            <Circuloazul />
            <Rombo />
            <Titulo />
            <Boton />
            <HeaderIphone />
            </div>
            <div className="seccionIcons">
                <Icons />
            </div>
        </>
    )
}

export default SecciónMobile