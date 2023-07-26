import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import Cotizacion from './components/Cotizacion'
import Formulario from './components/Formulario'
import Spinner from './components/Spinner'
import ImagenCrypto from './img/imagen-criptos.png'

const Contenedor = styled.div`
	max-width: 900px;
	margin: 0 auto;
	width: 90%;
	@media (min-width: 992px){
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		column-gap: 2rem;
	}
`
const Imagen = styled.img`
	max-width: 400px;
	width: 80%;
	margin: 100px auto 0 auto;
	display: block;
`
const Heading = styled.h1`
	font-family: 'Lato', sans-serif;
	color: #fff;
	text-align: center;
	font-weight:700;
	margin-top: 80px;
	margin-bottom: 50px;
	font-size: 34px;
	&::after {
		content: '';
		width: 100px;
		height: 6px;
		background-color: #66A2FE;
		display: block;
		margin: 10px auto 10px auto;
	}
`
function App() {
	const [monedas, setMonedas] = useState({})
	const [price, setPrice] = useState({})
	const [loading, setLoading] = useState(false)

	useEffect(()=>{
		if(Object.keys(monedas).length){
			cotizarCripto()
		}
	},[monedas])

	const cotizarCripto = async () => {
		setLoading(true)
		const {moneda, criptomoneda} = monedas
		const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
		const res1 = await fetch(url)
		const res2 = await res1.json()
		setPrice(res2.DISPLAY[criptomoneda][moneda])
		setLoading(false)
	}

  	return (
		<Contenedor>
			<Imagen src={ImagenCrypto} alt='crypto' />
			<div>
				<Heading>Cotiza Criptomonedas al Instante</Heading>
				<Formulario monedas={monedas} setMonedas={setMonedas} />
				{loading ? 
					<Spinner />
				: price.PRICE ? 
					<Cotizacion value={price} />
				: null}
			</div>
		</Contenedor>
	)
}

export default App
