import DosBotones from '../atomos/DosBotones';
import Mobil from '../atomos/Mobil';
import Texto from '../atomos/Texto';
import Circulitos from '../atomos/circulitos';
import './autopubli.css';

const Autopubli = () => {
  return (
    <div className='autopubli'>
        <Circulitos />
        <Mobil />
        <Texto />
        <DosBotones />
    </div>
  )
}

export default Autopubli