import {describe, expect, it} from "vitest";
import {render, screen} from "@testing-library/react";
import {SeccionProyectos} from "./SeccionProyectos.jsx";



describe('Componente SeccionProyectos', () => {
    it('debe renderizar el título', () => {
        // ARRANGE & ACT: Renderizar el componente
        render(<SeccionProyectos />);

        // ACT: Buscar el título principal
        const titulo = screen.getByText('Proyectos en los que he trabajado:');

        // ASSERT: Comprobar que existe en el documento y es visible
        expect(titulo).toBeInTheDocument();
        expect(titulo).toBeVisible();
    });

    it('debe mostrar el proyecto y su enlace', () => {
        // ARRANGE & ACT
        render(<SeccionProyectos  />);

        // ACT: Buscar los textos descriptivos dentro del componente
        const textoIntroductorio = screen.getByText(/Proyectos en los que he trabajado:/i);
        const textoProyecto = screen.getByText(/Home Catalogue: Proyecto Backend para la asignatura de FullStack I/i);
        const enlaceGithub = screen.getByRole('link', { name: /ver repositorio en github/i });

        // ASSERT
        expect(textoIntroductorio).toBeInTheDocument();
        expect(textoIntroductorio).toBeVisible();
        expect(textoProyecto).toBeInTheDocument();
        expect(textoProyecto).toBeVisible();
        expect(enlaceGithub).toBeInTheDocument();
        expect(enlaceGithub).toBeVisible();
        expect(enlaceGithub).toHaveAttribute(
            'href',
            'https://github.com/NicolaiX9/homecatalogue---moya---sobarzo---011D')
    });
});