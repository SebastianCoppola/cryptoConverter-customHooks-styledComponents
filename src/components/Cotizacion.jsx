import React from 'react'
import styled from '@emotion/styled'

const Contenedor = styled.div`
    color: #fff;
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
`
const Logo = styled.img`
    display: block;
    width: 110px;
`
const Texto = styled.p`
    font-size: 18px;
    span: {
        font-weight: 700;
    }
`
const Precio = styled.p`
    font-size: 24px;
    span: {
        font-weight: 700;
    }
`


const Cotizacion = ({value}) => {
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOURS, IMAGEURL, LASTUPDATE } = value

    return (
        <Contenedor>
            <Logo src={`https://cryptocompare.com/${IMAGEURL}`} alt='imagen criptomoneda'/>
            <div>
                <Precio>El Precio es de: <span>{PRICE}</span></Precio>
                <Texto>El Precio más alto del día: <span>{HIGHDAY}</span></Texto>
                <Texto>El Precio más bajo del día: <span>{LOWDAY}</span></Texto>
                <Texto>Variación últimas 24hs: <span>{CHANGEPCT24HOURS}</span></Texto>
                <Texto>Última actualización: <span>{LASTUPDATE}</span></Texto>
            </div>
        </Contenedor>
    )
}

export default Cotizacion