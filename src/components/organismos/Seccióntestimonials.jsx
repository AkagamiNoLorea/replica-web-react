import Sponsors from "../atomos/Sponsors"
import Usertestimonials from "../atomos/Usertestimonials"
import Grupoiconosinferior from "../moleculas/Grupoiconosinferior"
import Reviewcompleta from "../moleculas/Reviewcompleta"
import './secciontestimonials.css'

const Seccióntestimonials = () => {
    return (
        <>
        <div className="secciontestimonials">
            <Usertestimonials />
            <div className="liniareviews"><Reviewcompleta /><Reviewcompleta /><Reviewcompleta /></div>
            <Sponsors />
            <div className="liniareviews"><Reviewcompleta /><Reviewcompleta /><Reviewcompleta /></div>
        </div>
        <div className="secciongupoiconinf">
            <Grupoiconosinferior />
        </div>
        </>
    )
}

export default Seccióntestimonials