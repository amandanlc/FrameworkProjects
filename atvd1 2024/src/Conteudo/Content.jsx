import './Content.css'
import TOP1 from '../assets/tatblib.jpg'
import TOP2 from '../assets/cpuhe10d.jpg'
import TOP3 from '../assets/acpdv.jpg'
import TOP4 from '../assets/ceeadv.jpg'
import TOP5 from '../assets/esposadementirinha.jpg'

function Content(){
    return(
        <>
        <ul>
            <li>
                <h2>TOP 1</h2>
                <div className='div'>
                    <img src={TOP1} alt="" />
                    <p>PARA TODOS OS <br/>
                        GAROTOS QUE JÁ AMEI</p>
                </div>
            </li>
            <li>
                <h2>TOP 2</h2>
                <div className='div'>
                    <img src={TOP2} alt="" />
                    <p>COMO PERDER UM <br/>
                        HOMEM EM 10 DIAS</p>
                </div>
            </li>
            <li>
                <h2>TOP 3</h2>
                <div className='div'>
                    <img src={TOP3} alt="" />
                    <p>A CINCO PASSOS <br />
                        DE VOCÊ</p>
                </div>
            </li>
            <li>
                <h2>TOP 4</h2>
                <div className='div'>
                    <img src={TOP4} alt="" />
                    <p>COMO EU ERA <br />
                        ANTES DE VOCÊ</p>
                </div>
            </li>
            <li>
                <h2>TOP 5</h2>
                <div className='div'>
                    <img src={TOP5} alt="" />
                    <p>ESPOSA DE <br />
                        MENTIRINHA</p>
                </div>
            </li>
        </ul>
        </>
    )
}
export default Content