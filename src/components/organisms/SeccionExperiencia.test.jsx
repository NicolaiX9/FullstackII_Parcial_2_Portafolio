import {describe, expect, it} from "vitest";
import {render, screen} from "@testing-library/react";
import {SeccionExperiencia} from "./SeccionExperiencia.jsx";


describe('Componente SeccionExperiencia', () => {
    it('debe renderizar la pantalla de Experiencia', () => {
        // ARRANGE & ACT: Renderizar el componente
        render(<SeccionExperiencia />);

        // ACT: Buscar el título principal
        const titulo = screen.getByText('Experiencia laboral');

        // ASSERT: Comprobar que existe en el documento y es visible
        expect(titulo).toBeInTheDocument();
        expect(titulo).toBeVisible();
    });

    it('debe mostrar el historial de trabajos', () => {
        // ARRANGE & ACT
        render(<SeccionExperiencia />);

        // ACT: Buscar los textos descriptivos dentro del componente
        const textoTrabajo = screen.getByText(/Reponedor de supermercado - RetailTrust/i);
        const textoFecha = screen.getByText(/Diciembre - Febrero 2021/i);

        // ASSERT
        expect(textoTrabajo).toBeInTheDocument();
        expect(textoFecha).toBeInTheDocument();
        expect(textoTrabajo).toBeVisible();
        expect(textoFecha).toBeVisible();
    });
});