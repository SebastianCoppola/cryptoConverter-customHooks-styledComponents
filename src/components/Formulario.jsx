import React from 'react'
import styled from '@emotion/styled'
import useSelectMoneda from '../hooks/useSelectMoneda'
import {monedas as monedasOptions} from '../data/monedas'
import { useState, useEffect } from 'react'
import Error from './Error'

const InputSubmit = styled.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 10px;
    margin-top: 30px;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    &:hover {
        background-color; #7A7DFE;
        cursor: pointer;
    }
`
const Formulario = ({monedas, setMonedas}) => {
    const [criptoOptions, setCriptoOptions] = useState([])
    const [error, setError] = useState(false)
    const [ moneda, SelectMoneda ] = useSelectMoneda('Elige tu Moneda', monedasOptions)
    const [ criptomoneda, SelectCriptomoneda ] = useSelectMoneda('Elige tu Criptomoneda', criptoOptions)

    useEffect(()=>{   
        consultarAPI()
    },[])
    
    const consultarAPI = async () => {
        const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
        const res1 = await fetch(url)
        const res2 = await res1.json()
        const array = res2 && res2.Data && res2.Data.map(it=> {               
            return {
                "id": it.CoinInfo.Name, 
                "nombre": it.CoinInfo.FullName
            }
        })
        setCriptoOptions(array)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if([moneda, criptomoneda].includes('')){
            setError(true)
        }else{
            setError(false)
            setMonedas({moneda, criptomoneda})
        } 
    }

    return (
        <>
            {error && <Error>Todos los cambop son obligatorios.</Error>}
            <form onSubmit={e=>handleSubmit(e)}>
                <SelectMoneda />
                <SelectCriptomoneda />             
                <InputSubmit type='submit' value='Cotizar' />
            </form>
        </>
    )
}

export default Formulario