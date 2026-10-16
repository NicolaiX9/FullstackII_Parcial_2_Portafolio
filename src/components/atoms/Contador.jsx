import { useState } from 'react'

export function Contador() {
    const [contador, setContador] = useState(0)

    return (
        <button onClick={() => setContador(contador + 1)}>
            Veces pulsado: {contador}
        </button>
    )
}