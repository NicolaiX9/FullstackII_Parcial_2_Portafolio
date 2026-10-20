import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import {SeccionContactosUseState} from "./SeccionContactosUseState.jsx";
describe('Componente Contacto', () => {
    it('debe mostrar la pantalla de Contacto', () => {
        render(<SeccionContactosUseState />)
        const titulo = screen.getByText('Envios')

        expect(titulo).toBeInTheDocument()
    }),

    it('debe mostrar la pantalla de Contacto', () => {
        render(<SeccionContactosUseState/>)
        const titulo = screen.getByText('Envios')

        expect(titulo).toBeInTheDocument()
    })

})