import React, { useState, useEffect } from 'react'
import './styles.css' 


import { Logo, LandingImg, Study, Give, Heart } from '../../assets/index'
import { Link } from 'react-router-dom'
import api from '../../services/api'

function Landing() {

    const[totalConnections, setTotalConnections] = useState(0)

    useEffect(() => {
        api.get('connections').then(resp => {
            const { total } = resp.data
            setTotalConnections(total)
        })
    },[])

    return (
    <div id="page-landing">
        <div id="page-landing-content" className="container">
            <div className="logo-container">
                <img src={Logo} alt="Proffy" />
                <h2>Sua plataforma de estudos online</h2>
            </div>

                <img 
                    src={LandingImg}
                    alt="Plataforma de Estudos" 
                    className="hero-image"
                />
            
            <div className="buttons-container">
                <Link to="/study" className="study">
                    <img src={Study} alt="Estudar"/>
                    Estudar
                </Link>

                <Link to="/give-classes" className="give-classes">
                    <img src={Give} alt="Dar aulas"/>
                    Dar aulas
                </Link>
            </div>

            <span className="total-connections">
                Total de {totalConnections} conexões já realizadas <img src={Heart} alt="Coração roxo"/>
            </span>
        </div>
    </div>
    )
}

export default Landing