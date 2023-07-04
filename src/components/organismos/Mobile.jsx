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
                <div className="Titulo"></div>
                <div className="Rombo"></div>
                <div className="CirculoAmarillo"></div>
                <div className="CirculoAzul"></div>
                <div className="HeaderIphone"></div>
                <div className="Boton"></div>
            </div>
            <div className="Icons">
                <Icons />
            </div>
        </>
    )
}

export default SecciónMobile