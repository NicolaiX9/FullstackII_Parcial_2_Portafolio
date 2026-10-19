import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { SeccionEstudios } from './SeccionEstudios';

describe('Componente SeccionEstudios', () => {
    it('debe renderizar la pantalla de Estudios', () => {
        // ARRANGE & ACT: Renderizar el componente
        render(<SeccionEstudios />);

        // ACT: Buscar el título principal
        const titulo = screen.getByText('Formación Académica');

        // ASSERT: Comprobar que existe en el documento y es visible
        expect(titulo).toBeInTheDocument();
        expect(titulo).toBeVisible();
    });

    it('debe mostrar la información sobre la enseñanza media y la carrera técnica', () => {
        // ARRANGE & ACT
        render(<SeccionEstudios />);

        // ACT: Buscar los textos descriptivos dentro del componente
        const textoLiceo = screen.getByText(/Enseñanza media completa en el liceo Augusto D’halmar/i);
        const textoCarrera = screen.getByText(/Carrera técnica \(aún en curso\) de Analista Programador/i);

        // ASSERT
        expect(textoLiceo).toBeInTheDocument();
        expect(textoCarrera).toBeInTheDocument();
    });
});