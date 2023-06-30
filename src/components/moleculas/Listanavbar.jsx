import Listaextras from "../atomos/Listaextras"

const Listanavbar = () => {
  return (
    <div>
        <ul>
            <li><a href="#description">DESCRIPTION</a></li>
            <li><a href="">FEATURES</a></li>
            <li><a href="#screens">SCREENS</a></li>
            <li className="ocult"><a href="">EXTRA</a>
                <Listaextras/>
            </li>
            <li><a className="downnav" href="">DOWNLOAD</a></li>
        </ul>
    </div>
  )
}

export default Listanavbar