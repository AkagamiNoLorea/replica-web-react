import './SeccionMobile.css'

import Circuloamarillo from '../atomos/circuloamarillo.jsx';
import Circuloazul from '../atomos/circuloazul.jsx';
import Rombo from '../atomos/rombo.jsx';
import Titulo from '../atomos/Titulo.jsx';
import Boton from '../atomos/Boton.jsx';
import HeaderIphone from '../atomos/HeaderIphone.jsx';
import Icons from '../atomos/Icons.jsx';

const SeccionMobile = () => {
    return (
        <>
            <div className="SeccionMobile">
            <Circuloamarillo />
            <Circuloazul />
            <Rombo />
            <Titulo />
            <Boton />
            <HeaderIphone />
            </div>
            <div>
                <Icons />
            </div>
        </>
    )
}

export default SeccionMobile