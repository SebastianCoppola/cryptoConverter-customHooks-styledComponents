import styled from "@emotion/styled"
import { useState } from "react"

const Label = styled.label`
    color: #fff;
    display: block;
    font-family: 'Lato', sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin: 15px 0;
`

const Select = styled.select`
    width: 100%;
    font-size: 18px;
    padding: 14px;
    border-radius: 10px;
`

const useSelectMoneda = ( label, options ) => {
    
    const [state, setState] = useState('')

    const SelectMoneda = () => (
        <>
            <Label>{label ? label : ''}</Label>
            <Select value={state} onChange={ e => setState(e.target.value) }>
                <option value=''>Seleccione</option>
                {options && options.length &&
                    options.map(it=>(
                        <option key={it.id} value={it.id}>
                            {it.nombre}
                        </option>
                    ))
                }
            </Select>
        </>
    )

    return [ state, SelectMoneda ]

}

export default useSelectMoneda